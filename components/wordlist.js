import React from 'react';
import { Link } from 'react-router-dom';

const WordList = (props) => {
     
    return(
      
   <div className="list_holder">
    {props.words && props.words.length > 0 ?
         props.words.map(item =>(
          <div className="list">
          <Link to={`/words/${item.id}`}>
           <h5 className="list_header">{item.id}</h5>
           <span className="list_content"> {item.lexicalEntries[0].entries[0].senses[0].definitions[0]} </span>
           </Link>
           </div>
       ))
       :(null)
         }
     </div>    
)
}

export default WordList;