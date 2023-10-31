import type { FC } from "react";

import styles from "./Button.module.css";

const Button: FC<{ children: string }> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
