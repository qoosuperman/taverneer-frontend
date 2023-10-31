import type { FC } from "react";

// import { Link } from "react-router-dom";
import BackStageGuardian from "./Admin/BackStageGuardian";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";

const Admin: FC = () => {
  return (
    <BackStageGuardian>
      <Header />
      <AdminSidebar />
    </BackStageGuardian>
  );
};

export default Admin;
