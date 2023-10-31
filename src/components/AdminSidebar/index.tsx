import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./AdminSidebar.module.css";

export const AdminSidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.item}>
          <Link className={styles.link} to="#">
            酒譜管理
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="#">
            杯子
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/admin/ingredients">
            食材清單
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
