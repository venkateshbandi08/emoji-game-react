// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreDetails} = props
  const {score, topScore, isGameCompleted} = scoreDetails
  const scoreStyle = () => {
    if (!isGameCompleted) {
      return (
        <div className="score-top-score-container">
          <p className="score-style"> Score: {score}</p>
          <p className="score-style"> Top Score: {topScore}</p>
        </div>
      )
    }
    return null
  }
  return (
    <nav className="emoji-game-nav-bar-container">
      <div className="nav-logo-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading"> Emoji Game </h1>
      </div>
      {scoreStyle()}
    </nav>
  )
}

export default NavBar
