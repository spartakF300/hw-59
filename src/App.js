import React, {Component, Fragment} from 'react';
import nanoid from 'nanoid';
import './App.css';
import Form from "./components/task1/Form/Form";
import Movie from "./components/task1/Movie/Movie";
import Joke from "./components/task2/Joke";

class App extends Component {
    state = {
        text: '',
        movie: [],
    };
    onchangeMovie = (e) => {
        this.setState({text: e.target.value})
    };
    addMovie = () => {
        const text = this.state.text;
        const movie = [...this.state.movie];
        movie.push({text: text, id: nanoid()});
        this.setState({movie})

    };
    movieOnchange = (event, index) => {
        const movie = [...this.state.movie];
        movie[index].text = event.target.value;
        this.setState({movie})
    };
    remove = (id) => {
        let movie = [...this.state.movie];
        const index = movie.findIndex(item => item.id === id);
        const elem = [...movie];
        elem.splice(index, 1);
        movie = elem;
        this.setState({movie})
    };

    render() {
        return (
            <Fragment>
                <div className="App">
                    <Form onclick={this.addMovie} onChange={this.onchangeMovie}/>
                    <div className="movieWrap">
                        {this.state.movie.map((item, index) => {
                            return <Movie
                                key={item.id}
                                value={item.text}
                                onchange={(e) => this.movieOnchange(e, index)}
                                remove={() => this.remove(item.id)}
                            />
                        })}
                    </div>


                </div>
                <div>
                    <Joke/>
                </div>
            </Fragment>
        );
    }


}

export default App;
