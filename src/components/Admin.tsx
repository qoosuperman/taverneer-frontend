import type { FC } from "react";
import { Link } from "react-router-dom";

import BackStageGuardian from "./Admin/BackStageGuardian";

const Admin: FC = () => {
  return(
    <BackStageGuardian>
      <p>Admin</p>
      <p><Link to="/admin/ingredients">ingedients list</Link></p>
    </BackStageGuardian>
  )
}

export default Admin;
