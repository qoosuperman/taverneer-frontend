import { FC, Fragment, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { apiCurrentUser } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsAdmin } from "../../../store/authSlice";
import Loading from "../../Loading";
import { BackStageGuardianProps } from "./BackStageGuardian.type";

const BackStageGuardian: FC<BackStageGuardianProps> = ({ children }) => {
  const isAdmin = useAppSelector((state) => state.auth.isAdmin);
  const dispatch = useAppDispatch();

  const isLoading = !isAdmin;
  console.log(isAdmin, !isAdmin);

  useEffect(() => {
    if (isAdmin === null) {
      apiCurrentUser()
        .then((res) => {
          if (!!res.data.user) {
            dispatch(setIsAdmin(res.data.user.is_admin));
          }
        })
        .catch((_error) => dispatch(setIsAdmin(null)));
    }
  }, [isAdmin, dispatch]);

  if (!isAdmin) return <Navigate to="/404" />;
  if (isLoading) return <Loading />;

  return <>{children}</>;
};

export default BackStageGuardian;
