import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
// import SearchBox from "./SearchBox";
import "./Movie.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            input: "interstellar"
        }
    }
    
    clicked() {
        this.setState({input: this.refs.searchBox.value});
        this.refs.searchBox.value = '';
    }
    
    componentWillUpdate() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b99c241766327cb2935458f26027398d&query=${this.state.input}`)
        .then(response => response.json())
        .then(results => this.setState({movies: results.results}));
    }
    
    render() {
        const { movies, onClickEvent } = this.state;
        const filteredMovies = movies.filter(movie => {
            return movie.backdrop_path !== null;
        });
        console.log(filteredMovies)
        return (
            <div className="tc">
                <h1 className="header tc f1">Movie Database</h1>
                <input className="search-box" onKeyPress={ (e) => {
                    if (e.which === 13) {
                        this.clicked();
                    }
                } } 
                    ref="searchBox" 
                    autoFocus={true}
                    type="text"/>
                <button className="search-btn" onClick={ (e) => { this.clicked(); } }>Go!</button>
                <MovieList movies={filteredMovies} />
            </div>
        );
    }
}

export default App;
