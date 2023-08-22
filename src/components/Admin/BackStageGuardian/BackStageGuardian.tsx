import { FC, Fragment, useEffect, useState } from "react";

import { apiCurrentUser } from "../../../api";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setIsAdmin } from "../../../store/authSlice";
import Loading from "../../Loading";
import NotFound from "../../NotFound";
import { BackStageGuardianProps } from "./BackStageGuardian.type";

const BackStageGuardian: FC<BackStageGuardianProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isAdmin = useAppSelector((state) => state.auth.isAdmin)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAdmin !== true) {
      setIsLoading(false);
      return;
    }
    if (isAdmin === null) {
      apiCurrentUser()
        .then((res) => {
          if (!!res.data.user) {
            dispatch(setIsAdmin(res.data.user.is_admin))
          }
        })
        .catch((_error) => dispatch(setIsAdmin(false)))
        .finally(() => setIsLoading(false));
    }
  }, [isAdmin, dispatch]);
  if(isAdmin === false) return <NotFound />
  if (isLoading) return <Loading />;
  return <>{children}</>;
};

export default BackStageGuardian;
