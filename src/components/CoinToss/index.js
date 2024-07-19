import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headImgUrl, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    let tossImage = ''
    let updateHeadsCount = headsCount
    let updateTailsCount = tailsCount
    if (toss === 0) {
      updateHeadsCount += 1
      tossImage = headImgUrl
    } else {
      updateTailsCount += 1
      tossImage = tailImgUrl
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="cointoss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-img" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
