import React,{Component} from 'react';
import './Movie.css'
class Movie extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.value !== this.props.value;
    }

    render() {

    return (
        <div>
            <input
                onChange={this.props.onchange}
                defaultValue={this.props.value}
                className="movie" type="text"
            />
            <button className={'btn'} onClick={this.props.remove}>X</button>

        </div>
    );

}




};

export default Movie;