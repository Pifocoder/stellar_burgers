import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../utils/cookies";

export const useProvideAuth = () => {
  
  return {
    isAuthenticated : user.isAuthenticated,
    setAuth : dispatch(getCookie)
  }
};