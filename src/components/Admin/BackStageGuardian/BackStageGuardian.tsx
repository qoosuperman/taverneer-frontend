import { FC, Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { apiCurrentUser } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsAdmin } from "../../../store/authSlice";
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
            dispatch(setIsAdmin(res.data.user.is_admin));
          }
        })
        .catch((_error) => dispatch(setIsAdmin(null)))
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
