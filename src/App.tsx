import "./App.css";

import type { FC } from "react";

import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.search_container}>
        <div>
          <div className={styles.search_text}>Find a Recipe</div>
          <div className={styles.search_box}>
            <input type="text" placeholder="搜尋酒名，原料或調製方法" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 58 58"
              fill="none">
              <path
                d="M37.4583 33.8333H35.5492L34.8725 33.1808C37.2408 30.4258 38.6667 26.8492 38.6667 22.9583C38.6667 14.2825 31.6342 7.25 22.9583 7.25C14.2825 7.25 7.25 14.2825 7.25 22.9583C7.25 31.6342 14.2825 38.6667 22.9583 38.6667C26.8492 38.6667 30.4258 37.2408 33.1808 34.8725L33.8333 35.5492V37.4583L45.9167 49.5175L49.5175 45.9167L37.4583 33.8333ZM22.9583 33.8333C16.9408 33.8333 12.0833 28.9758 12.0833 22.9583C12.0833 16.9408 16.9408 12.0833 22.9583 12.0833C28.9758 12.0833 33.8333 16.9408 33.8333 22.9583C33.8333 28.9758 28.9758 33.8333 22.9583 33.8333Z"
                fill="#333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.favorite_container}>
        <div>
          <div className={styles.favorite_text}>搜尋您喜愛的雞尾酒</div>
          <div className={styles.grid_cards}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
          <div className={styles.more_text}>more</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
