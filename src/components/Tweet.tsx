/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import TextareaAutosize from "react-autosize-textarea";
import { useEffect } from "react";
import { createRef } from "react";

const name = css`
  font-weight: bold;
  margin-right: 8px;
`;

const caption = css`
  color: rgb(136, 153, 166);
`;

const Tweet: React.FC<{
  tweet: Tweet;
  onUpdate: (tweet: Tweet) => void;
}> = ({ tweet, onUpdate }) => {
  const ref: any = createRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      css={css`
        display: flex;
        padding: 16px;
        border-bottom: 1px solid rgb(56, 68, 77);
      `}
    >
      <div
        css={css`
          width: 48px;
          height: 48px;
          border-radius: 24px;
          background-color: #ddd;
          margin-right: 12px;
        `}
      />
      <div
        css={css`
          flex: 1;
        `}
      >
        <span css={name}>mottox2</span>
        <span css={caption}>{tweet.createdAt}</span>
        <TextareaAutosize
          ref={ref}
          onChange={e => {
            console.log((e.target as any).value);
            onUpdate({
              ...tweet,
              text: (e.target as any).value
            });
          }}
          css={css`
            display: block;
            width: 100%;
            color: white;
            padding: 4px 0;

            &:hover {
              background-color: rgba(255, 255, 255, 0.04);
            }
            &:focus {
              background-color: rgba(255, 255, 255, 0.04);
            }
          `}
          value={tweet.text}
        />
      </div>
    </div>
  );
};

export default Tweet;
