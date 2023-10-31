import type { FC } from "react";

import styles from "./AdminRecipeCard.module.css";

const AdminRecipeCard: FC<{ children: string }> = ({ children }) => {
  return (
    <div className={styles.card}>
      <svg
        className={styles.edit_button}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39 39"
        fill="none">
        <rect width="39" height="39" fill="url(#pattern0)" fillOpacity="0.5" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use xlinkHref="#image0_326_172" transform="scale(0.0104167)" />
          </pattern>
          <image
            id="image0_326_172"
            width="96"
            height="96"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACoUlEQVR4nO3cvWoUURyG8ScqoqgYMJUgdgpqY6ug3oGNphBvwCuwTBrBWkuxSOEdWFioiJg7cPUSVAjGiKBdLMbFJZnZnTlzZv6Z3ecHh0DITM6+73ycHTYBSZIkSdKkVWAT2AFGwCPgWOiMFsgasFsy3gMnA+e1ENYpD388NoFTYbObc7PCt4QO1Q3fEjrQNHxLyCg1fEvIoG34rUo41Hr6w/c7036uAa/wTEjykDxngZejFizhAMh1Pxi/Y5752OJw7lcwcO+AJeBWhn2dp8j3TYZ9LZxcl6NR3xM/qNb/jabbtC1gJ8PcB28yyL5L+NB++sNWFmCfJdxp/QoGbFpwfZSw1voVDFidwB433GeTG7Ph1xxdlGD4DUfOEgw/ceQowfBbjjYlGH6mkbI6arrNXMkZfuqZsLC6CN8SauoyfEuYoY/wLaFCn+Fbwh4R4XdewlA+FbFO7Fo71ycnBinyyN/FN1mGH8XwAxl+IMMPZPiBDD+Q4Qcy/ECGH8jwAxl+IMMPZPiBDD+Q4Qcy/ECGH8jwAxl+IMMPdhS4ANwFNoBt+gt/oT8oW2UZeIbhh+uyBMOvYRn4geGHeoE33FD38cgPdRWP/FArwB888rO4B1xP3PYccBt4DnzH8JM8AX6SXsLYaeotUQ1/j9cUweQoAaaXYPglvvA/oBwlLFP+2MLwS5xhf1C/aP+/1jb27NPVToUblF8q2p4Jq3jk1/KA6ut1mzPhIh75tTxl+ool9Uw4jkd+LW+ZvWzMcU9QhW/Ue+NkCR1YodmjA0vI7CbNn99YQoWUv5S/nLDNCeAllrDPkYRtLjX8+a8U/0P5E3A24ffNtZQCrlR8f5si5NHE148UBajCUsI2I4pV0GeKgMdhb2WclyRJkiRJkjR3/gIgWuNzZ6rvqwAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
      <div className={styles.image_frame}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZXxlbnwwfHwwfHx8MA%3D%3D"
          alt={children}
        />
      </div>
      <div>
        <h3>{children}</h3>
        <div>
          descripion descripion descripion descripion descripion descripion
          descripion
        </div>
        <div>材料：材料A/B/C/D</div>
      </div>
    </div>
  );
};

export default AdminRecipeCard;
