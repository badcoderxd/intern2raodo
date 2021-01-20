import React, { Component } from 'react';
import { wordList } from '../action/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class WordContainer extends Component {
    componentWillMount() {
        this.props.wordList(this.props.match.params.id)
    }

    render(){
        console.log(this.props.words)
        return(
            <div className="singlewordholder">
             <Link to='/Home'>back to home</Link>

             <div className="inside">
            <div className="main">Word :{this.props.words.wordsList[0].id}</div>
            <div className="def">Defination</div>
            <div style={{color:'black'}}>{ this.props.words.wordsList[0].lexicalEntries[0].entries[0].senses[0].definitions[0] }</div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        words: state.words
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({wordList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WordContainer);