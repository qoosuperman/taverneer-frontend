import { FC } from "react";

import styles from "./Loading.module.css";

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
