/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'
import TextareaAutosize from 'react-autosize-textarea';

const Tweet: React.FC<{
  tweet: string
  onUpdate: (tweet: string) => void
}> = ({ tweet, onUpdate }) => <TextareaAutosize onChange={(e) => {
  console.log((e.target as any).value)
  onUpdate((e.target as any).value)
}} css={css`
  display: block;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }
`} value={tweet}/>

export default Tweet