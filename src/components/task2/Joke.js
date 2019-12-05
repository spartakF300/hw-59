import React, {Component} from 'react';
import Button from "./Button";
import './Joke.css'

class Joke extends Component {
    state = {
        jokes: []
    };

    async getJoke(count) {
        for (let i = 0; i < count; i++) {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (response.ok) {
                const joke = await response.json();
                const jokes = [...this.state.jokes];
                jokes.push(joke);
                this.setState({jokes})
            }
        }
    };

    async componentDidMount() {
        this.getJoke(5)

    }

    render() {

        return (
            <div className={'jokesWrap'}>
                <Button
                    onclick={() => this.getJoke(5)}
                />
                {this.state.jokes.map((item, index) => {
                    return <div className="jokes" key={index}>{item.value}</div>
                })}
            </div>
        );
    }
}

export default Joke;