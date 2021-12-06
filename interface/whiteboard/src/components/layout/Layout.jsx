import React from 'react';
import Whiteboard from '../whiteboard/Whiteboard';
import './style.css';

class Layout extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color: "#000000",
            size: "5",
            username:"",
            users:[{}]
        }
       
    }
    
         
    render(){
        return(
            
            <div className="layout"> 
                <div class="whiteboard-layout">
                    <Whiteboard color={this.state.color} size={this.state.size}></Whiteboard>
                </div>
                
            </div>
            
        )
    }
}
export default Layout