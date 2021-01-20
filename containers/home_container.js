import React, { Component } from 'react';
import WordList from '../components/wordlist';
import { wordList , wordListAll,wordadd } from '../action';
import { connect } from 'react-redux';
import List from '../components/list';

import Search from '../components/search';
import { Link } from 'react-router-dom';

class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(wordListAll())
      }

    getKeywords = (event) => {
        let key = event.target.value;
        this.props.dispatch(wordList(key))
    }

    Add =()=>{
        this.props.dispatch(wordadd())
    }
    render(){
       console.log(this.props.words)
        return(
            
            <div>
                 <Search keywords={this.getKeywords}/>
                 <WordList words={this.props.words.wordsList}/>
                 <List/>
                 
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return {
        words:state.words
    }
}


export default connect(mapStateToProps)(HomeContainer);