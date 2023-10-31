import type { FC } from "react";

import styles from "./Admin.module.css";
// import { Link } from "react-router-dom";
import BackStageGuardian from "./Admin/BackStageGuardian";
import AdminRecipeCard from "./AdminRecipeCard";
import AdminSidebar from "./AdminSidebar";
import Button from "./Button";
import Header from "./Header";

const Admin: FC = () => {
  return (
    <BackStageGuardian>
      <Header />
      <AdminSidebar />
      <div className={styles.recipes_container}>
        <div className={styles.recipes}>
          <div className={styles.buttons_container}>
            <Button>已發布</Button>
            <Button>未發布</Button>
            <Button>+新增酒譜</Button>
          </div>
          <div className={styles.cards_container}>
            <AdminRecipeCard>酒譜A</AdminRecipeCard>
            <AdminRecipeCard>酒譜B</AdminRecipeCard>
            <AdminRecipeCard>酒譜C</AdminRecipeCard>
          </div>
        </div>
      </div>
    </BackStageGuardian>
  );
};

export default Admin;
