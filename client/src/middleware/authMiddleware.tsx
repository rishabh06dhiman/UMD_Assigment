import { Middleware } from "@reduxjs/toolkit";

import { RootState } from "../store/rootReducer";
import { useNavigate } from "react-router-dom";

export const authMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const isAuthenticated = store.getState().auth.isAuthenticated;

    const navigate = useNavigate();

    if ((action as { type: string }).type === "dashboard/protectedRoute") {
      if (!isAuthenticated) {
        navigate("/");
      }
    }

    return next(action);
  };
