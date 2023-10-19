import { FC } from "react";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className={styles.container}>© {currentYear} Taverneer</div>
    </div>
  );
};

export default Footer;
