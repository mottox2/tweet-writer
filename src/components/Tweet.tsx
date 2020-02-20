/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

const Tweet: React.FC<{
  tweet: string
  onUpdate: (tweet: string) => void
}> = ({ tweet, onUpdate }) => <textarea onChange={(e) => {
  onUpdate(e.target.value)
}} css={css`font-size: 12px;`} value={tweet}></textarea>

export default Tweet