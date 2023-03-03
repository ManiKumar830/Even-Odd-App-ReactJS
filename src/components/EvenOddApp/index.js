// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementFunction = () => {
    const randomNum = Math.ceil(Math.random(0, 100) * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    const EvenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          <p className="type-para">Count is {EvenOrOdd}</p>
          <button
            type="button"
            onClick={this.incrementFunction}
            className="buttonEl"
          >
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 To 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
