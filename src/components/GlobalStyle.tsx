/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import css from "@emotion/css/macro";

const GlobalStyle: React.FC = () => (
  <Global
    styles={css`
      body {
        background-color: rgb(21, 32, 43);
        color: white;
        font-size: 15px;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "游ゴシック体",
          YuGothic, "Yu Gothic Medium", sans-serif;
        font-size: 15px;
      }
    `}
  />
);

export default GlobalStyle;
