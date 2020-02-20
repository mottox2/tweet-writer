/** @jsx jsx */
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import TextareaAutosize from "react-autosize-textarea";
import { useEffect } from "react";
import { createRef } from "react";
import { useMemo } from "react";

const countlength = (str: string) => {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    var chr = str.charCodeAt(i);
    if (
      (chr >= 0x00 && chr < 0x81) ||
      chr === 0xf8f0 ||
      (chr >= 0xff61 && chr < 0xffa0) ||
      (chr >= 0xf8f1 && chr < 0xf8f4)
    ) {
      result += 1;
    } else {
      result += 2;
    }
  }
  return result;
};

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

  const length = useMemo(() => countlength(tweet.text), [tweet.text]);
  let countColor = "";
  if (length === 0) countColor = "transparent";
  else if (length > 139) countColor = "red";
  else if (length > 120) countColor = "yellow";

  return (
    <div
      css={css`
        display: flex;
        padding: 16px;
        border-bottom: 1px solid rgb(56, 68, 77);
        position: relative;
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
        <span
          css={css`
            font-size: 12px;
            position: absolute;
            right: 8px;
            top: 8px;
            font-weight: bold;
          `}
          style={{
            color: countColor
          }}
        >
          {length}
        </span>
      </div>
    </div>
  );
};

export default Tweet;
