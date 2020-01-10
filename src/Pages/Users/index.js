import React, { Component } from 'react';
import './style.css';

export default class Users extends Component {
    constructor(props){
        super(props)
        this.state={user: this.props.user};
    }
    
    

    render(){
      return ( 
        <div>
            <h1>Página do Usuário</h1>
        </div>
      )}
}  