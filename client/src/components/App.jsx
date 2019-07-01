import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies : [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
              ],
            toDisplay : []
        };
    }

componentDidMount(){
    console.log('MOUNTED');
    this.setState({toDisplay : this.state.movies});
}
searchHandle(){
    let term = document.getElementById('term').value;
    console.log(term);
    let matching = [];
    this.state.movies.forEach((movie) => term.toLowerCase() === movie.title.toLowerCase() ? matching.push(movie) : console.log('not a match'))
    if(matching.length === 0){
        matching.push({title : 'No matching results found'});
    }
    console.log('Matching' + matching);
    this.setState({toDisplay: matching});
}

addHandle(){
    let add = document.getElementById('add').value;
    console.log(add);
    var curr = this.state.movies;
    curr.push({title : add});
    this.setState({movies : curr, toDisplay : curr});
}

toggleWatched(){

}
render(){
    return(
        <div>
            <div>
                <AddMovie addHandle={this.addHandle.bind(this)}/>
            </div>
        <div>
        <SearchBar searchHandle={this.searchHandle.bind(this)} />
        </div>
        <div>
            {/* {this.state.movies.map((movie) => (<MovieList movie={movie} />))} */}
            {this.state.toDisplay.map((movie) => (<MovieList movie={movie} />))}
         </div>
        </div>
    )
}
}

export default App;