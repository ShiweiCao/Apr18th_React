import axios from 'axios';

import * as actionTypes from '../actions/authActions/authActionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess =(token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};


export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if(expirationDate > new Date()) {
        dispatch(authSuccess(token, localStorage.getItem('userId')));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      } else {
        dispatch(logout());
      }

    }
  };
};


// async actions

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
      setTimeout(() => {
        dispatch(logout());
      }, expirationTime * 1000);
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());

    // sending request
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    // url for sign up
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA4ysxSeFaBxoYb7ayUjl9bCaE13fyhsxg';
    if(!isSignup) {
      // url for sign in
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA4ysxSeFaBxoYb7ayUjl9bCaE13fyhsxg';
    }

    axios.post(url, authData)
      .then(response => {
        // console.log(response.data);
        localStorage.setItem('token', response.data.idToken);  //(key, value)
        localStorage.setItem('expirationDate', new Date(response.data.expiresIn * 1000 + new Date().getTime()));
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
};

// auth does not have a corresponding reducer
