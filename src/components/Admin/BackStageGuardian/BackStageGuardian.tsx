import { FC, Fragment, useEffect, useState } from "react";

import { apiCurrentUser } from "../../../api";
import NotFound from "../../NotFound";
import { BackStageGuardianProps } from "./BackStageGuardian.type";

const BackStageGuardian: FC<BackStageGuardianProps> = ({children}) => {
  const [canEnterBackStage, setCanEnterBackStage] = useState(false);

  useEffect(() => {
    apiCurrentUser()
      .then((res) => {
        if (!!res.data.user) {
          setCanEnterBackStage(res.data.user.is_admin);
        }
      })
      .catch((_error) => setCanEnterBackStage(false));
  }, []);
  if(!canEnterBackStage) return(<NotFound />)
  return (<>{children}</>)
}

export default BackStageGuardian;
