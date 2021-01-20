import React from 'react';

const Search = (props) => {
    return (
    
    <div className="navbar_holder">
        <div className="navbar">

          <div>
              Logo
          </div>

          <div>
                <input type="text" onChange={event => props.keywords(event)}/>
          </div>

        </div>
    </div>
    
    )
}

export default Search;