// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winOrLoseCardDetails, onPlayAgainGame} = props
  const {isWon, score, outOfScore} = winOrLoseCardDetails
  let gameResultText
  let scoreBestScoreHeading
  let winLoseImageUrl
  if (isWon) {
    gameResultText = 'You Won'
    scoreBestScoreHeading = 'Best Score'
    winLoseImageUrl =
      'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    gameResultText = 'You Lose'
    scoreBestScoreHeading = 'Score'
    winLoseImageUrl =
      'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  const onClickPlayAgain = () => {
    onPlayAgainGame()
  }
  return (
    <div className="win-lose-card">
      <div className="win-lose-card-details-container">
        <h1 className="game-result-text"> {gameResultText} </h1>
        <p className="score-heading"> {scoreBestScoreHeading} </p>
        <p className="score">
          {score}/{outOfScore}
        </p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={winLoseImageUrl} alt="win or lose" className="win-lost-image" />
    </div>
  )
}

export default WinOrLoseCard
