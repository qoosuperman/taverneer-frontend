import { FC } from "react";

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <div>
      <div className={styles.container}>
        Taverneer
      </div>
    </div>
  );
};

export default Header;
