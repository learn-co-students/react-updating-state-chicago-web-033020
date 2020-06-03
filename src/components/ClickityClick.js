// Code ClickityClick Component Here
import React, { Component } from 'react'

export class ClickityClick extends Component {

    constructor() {
        super()

        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
            }
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            addressInfo: {
                ...this.state.addressInfo,
                city: 'New York City'
            }
        }, () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default ClickityClick
