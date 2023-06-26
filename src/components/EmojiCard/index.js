// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiCardDetails, onClickedOnEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmojiCardDetails
  const onClickEmoji = () => {
    onClickedOnEmoji(id)
  }
  return (
    <li>
      <button className="each-emoji-card" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-style" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
