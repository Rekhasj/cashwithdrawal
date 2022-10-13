import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  deductBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  getFirstCharacter = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.getFirstCharacter(name)

    return (
      <div className="cashwithdrawal-container">
        <div className="denomination-container">
          <div className="name-container">
            <p className="initial">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <p>
              {balance}
              <br />
              <span className="rupee">in Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw"> Withdraw</p>
            <p className="details">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-container">
              {denominationsList.map(eachrupee => (
                <DenominationItem
                  denomination={eachrupee}
                  key={eachrupee.id}
                  deductBalance={this.deductBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
