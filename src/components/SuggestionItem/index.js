// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemDetails, clickListItem} = props
  const {id, suggestion} = itemDetails

  const buttonCliceked = () => {
    clickListItem(id)
  }
  return (
    <li className="list-item-style">
      <p className="para-name">{suggestion}</p>
      <button type="button" className="button-styling" onClick={buttonCliceked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-sizing"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
