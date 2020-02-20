/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

const Button: React.FC<any> = props => (
  <button
    css={css`
      background-color: rgb(29, 161, 242);
      color: white;
      padding: 0 12px;
      line-height: 40px;
      border-radius: 20px;
      font-weight: bold;
    `}
    {...props}
  />
);

export default Button;
