import Swal from "sweetalert2";

import { app, googleAuthProvider, auth } from "../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { noteLogeout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => Swal.fire("Error", e.message, "error"));
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
    dispatch(noteLogeout());
  };
};

export const logout = () => ({
  type: types.logout,
});
