// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {listDetails: [], userInput: ''}

  componentDidMount = () => {
    const {suggestionsList} = this.props
    this.setState({listDetails: suggestionsList})
  }

  changeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  filteredList = () => {
    const {listDetails, userInput} = this.state
    const updateList = listDetails.filter(eachOne => {
      if (eachOne.suggestion.toLowerCase().includes(userInput.toLowerCase())) {
        return eachOne
      }
      return null
    })
    return updateList
  }

  itemClicked = id => {
    const {listDetails} = this.state
    const getList = listDetails.filter(eachOne => eachOne.id === id)
    console.log(getList[0].suggestion)
    this.setState({userInput: getList[0].suggestion})
  }

  render() {
    const updateList = this.filteredList()
    const {userInput} = this.state

    return (
      <div className="app-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image-sizing"
          />
        </div>
        <div className="input-container">
          <div className="input-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo-sizing"
            />
            <input
              type="search"
              className="user-input"
              placeholder="search google"
              onChange={this.changeUserInput}
              value={userInput}
            />
          </div>
          <ul className="unOrdered-list">
            {updateList.map(eachItem => (
              <SuggestionItem
                itemDetails={eachItem}
                key={eachItem.id}
                clickListItem={this.itemClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
