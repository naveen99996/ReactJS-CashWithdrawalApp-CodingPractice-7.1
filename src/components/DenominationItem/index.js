// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawAmount} = props
  const {value} = denominationItem
  const withdrawBalance = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button
        className="denomination-button"
        onClick={withdrawBalance}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
