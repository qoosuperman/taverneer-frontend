import { FC, Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { apiCurrentUser } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { clean, setCurrentUser } from "../../../store/currentUserSlice";
import Loading from "../../Loading";
import { BackStageGuardianProps } from "./BackStageGuardian.type";

const BackStageGuardian: FC<BackStageGuardianProps> = ({ children }) => {
  const isAdmin = useAppSelector((state) => state.auth.isAdmin);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAdmin === null) {
      apiCurrentUser()
        .then((res) => {
          if (!!res.data.user) {
            dispatch(setCurrentUser(res.data.user));
          }
        })
        .catch((_error) => dispatch(clean()))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [isAdmin, dispatch]);

  if (isLoading) return <Loading />;
  if (!isAdmin) return <Navigate to="/404" />;

  return <>{children}</>;
};

export default BackStageGuardian;
