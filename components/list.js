import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class list extends Component {
      
    constructor(){
        super();
        
        this.state={
            oword:"",
            listBook:[
                {oword: "Tree", mean: "a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground."},
                {oword: "Forest", mean: "a large area covered chiefly with trees and undergrowth"}
                ],
              showForm:false
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                oword:event.target.value
            })
        }

        this.toggleShowForm=()=>{ 
          this.setState(
              { showForm: !this.state.showForm}
          )
      }  
        
        
        this.addword=()=>{

            const headers = {
                'app_id':'b265fa05',
                'app_key':'07b0a7f3468a105d9fd9ae9a09e322a1'
            }
            
            axios.get(`/api/v2/entries/en-us/${this.state.oword}`,{headers})
                     .then(response => this.setState( (prevState)=>({
                        listBook:prevState.listBook.concat(
                            {oword:response.data.results[0].id,
                            mean:response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0] 
                             } ),
                         oword:""
                    })) )

                    this.setState(
                      { showForm: !this.state.showForm}
                  )
                          
        }
                                  
    }


  render() {
      
    let form=null;
    if(this.state.showForm)
    {
        form=
           (  
            <div className="container">
            <form className="form">
            <div class="form-group">
              <input type="text" className="form-control" onChange={this.handleInputChange1} value={this.state.name} placeHolder="Word" />
            </div>
            <div className="butn-holder">
            <button style={{margin:'10px 20px',padding:'4px 8px'}} className="cancel" type="button" onClick={this.toggleShowForm}>close</button>
            <button style={{margin:'10px 20px',padding:'4px 10px'}} className="add" type="button"  onClick={this.addword}>Add</button>
            </div>
           
          </form>
            </div>
        )
    }
           
    return (<>
       
        <div className="list_holder">
        {this.state.listBook.map(contact =>
          <div className="list" key={contact.oword}>
        <Link to={`/words/${contact.oword}`}>           
        
           <h5 className="list_header">{contact.oword}</h5>
           <span className="list_content">{contact.mean}</span>
           </Link>
          </div>
         

        )} 
        </div>
         {form}
        
        <Link onClick={this.toggleShowForm}>
                 <span className="plus">
                 +
                 </span>
                 </Link>
       <div className="col-md-4"></div>
     
     
     </>
    );
  }
}

export default list;
