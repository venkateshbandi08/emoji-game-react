/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      emojisList,
      clickedEmojiIds: [],
      isGameCompleted: false,
      isWon: false,
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.state
    return emojisList.sort(() => Math.random() - 0.5)
  }

  setTopScore = (score, topScore) => {
    if (score >= topScore) {
      return score
    }
    return topScore
  }

  onIncreaseScore = id => {
    const {clickedEmojiIds, isGameCompleted} = this.state
    const result = clickedEmojiIds.includes(id)
    if (!result) {
      return 1
    }
    this.setState(prevState => ({
      topScore: this.setTopScore(prevState.score, prevState.topScore),
      isGameCompleted: !isGameCompleted,
      clickedEmojiIds: [],
    }))
    return 0
  }

  checkIsGameCompleted = () => {
    const {score, emojisList, isGameCompleted} = this.state
    if (score === emojisList.length) {
      this.setState(prevState => ({
        isWon: !prevState.isWon,
        topScore: this.setTopScore(prevState.score, prevState.topScore),
        isGameCompleted: !isGameCompleted,
      }))
    }
  }

  onClickedOnEmoji = id => {
    this.setState(
      prevState => ({
        emojisList: this.shuffledEmojisList(),
        clickedEmojiIds: [...prevState.clickedEmojiIds, id],
        score: prevState.score + this.onIncreaseScore(id),
      }),
      this.checkIsGameCompleted,
    )
  }

  onPlayAgainGame = () => {
    this.setState({
      isGameCompleted: false,
      score: 0,
    })
  }

  render() {
    const {score, topScore, emojisList, isWon, isGameCompleted} = this.state
    const scoreDetailsProps = {
      score,
      topScore,
      isGameCompleted,
    }
    const winOrLoseCardDetails = {
      isWon,
      isGameCompleted,
      score,
      outOfScore: emojisList.length,
    }

    return (
      <div className="emoji-game-bg-container">
        <NavBar scoreDetails={scoreDetailsProps} />
        {isGameCompleted ? (
          <div className="win-or-lose-card-container">
            <WinOrLoseCard
              winOrLoseCardDetails={winOrLoseCardDetails}
              onPlayAgainGame={this.onPlayAgainGame}
            />
          </div>
        ) : (
          <ul className="all-emojis-container">
            {emojisList.map(eachEmojiCard => (
              <EmojiCard
                eachEmojiCardDetails={eachEmojiCard}
                key={eachEmojiCard.id}
                onClickedOnEmoji={this.onClickedOnEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
