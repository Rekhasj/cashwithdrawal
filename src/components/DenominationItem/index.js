// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, deductBalance} = props
  const {value} = denomination

  const onClickDenominationValue = () => {
    deductBalance(value)
  }
  return (
    <li className="denominator-container">
      <button
        className="button-value"
        type="button"
        onClick={onClickDenominationValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
