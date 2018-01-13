import React from 'react'
import friends from './friends.json'
import Card from './Card/Card.js'
// console.log(friends)

export default class Game extends React.Component {
	state = {
		images: friends,
		score: 0,
		title: 'Click an image to begin!',
		topScore: 0,
		clickedImgs: {}
	}

	onClicked = (imgId) => {
		if (this.state.clickedImgs[imgId]) {
			this.restartGame()
		} else {

			var clickedImgs = this.state.clickedImgs
			clickedImgs[imgId] = true

			this.setState({
				title: "You guessed correctly!",
				score: this.state.score + 1,
				clickedImgs: clickedImgs,
				images: this.shuffleImgs()
			})
		}
	}

	shuffleImgs = () => {
		var images = this.state.images
		let counter = images.length

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        let index = Math.floor(Math.random() * counter)

	        // Decrease counter by 1
	        counter--

	        // And swap the last element with it
	        let temp = images[counter]
	        images[counter] = images[index]
	        images[index] = temp;
	    }

	    return images
	}

	restartGame = () => {
		var topScore = this.state.topScore

		if (this.state.topScore < this.state.score) {
			topScore = this.state.score
		}

		this.setState ({
			score: 0,
			title: 'You guessed incorrectly!',
			topScore: topScore,
			clickedImgs: {}
		})
	}

	render() {
		console.log('state: ', this.state)
		return (
			<div>
			<h3>Score: {this.state.score}</h3>
			<h3>{this.state.title}</h3>
			<h3>Top Score: {this.state.topScore}</h3>
			{this.state.images.map(friend => (
				<Card onClick={this.onClicked} friend={friend} key={friend.id}/>
			))}
			</div>
		)
	}
}