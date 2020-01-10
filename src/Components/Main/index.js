import React from "react";
import './style.css';
import Users from "../../Pages/Users";
import apiUsers from '../../Services/Api-Users';
//import { Link } from "react-router-dom";

class Search extends React.Component{

    constructor (props){
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name:'',
        bio: '',
        img:'',
        html_url: '',
        repos:'',
        followers:'',
        following:''

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    loadUsers = async () => {
        const response = await apiUsers.get(`/${this.state.value}`);

         this.setState({name:response.data.name,
                        bio:response.data.bio,
                        img:response.data.avatar_url,
                        repos:response.data.repos_url,
                        followers:response.data.followers,
                        following:response.data.following     
                        })   
         console.log(this.state);

    }

    render(){
        return(
            <div>
                <h1>Busca Usuários</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} 
                        placeholder="Insira seu usuario do Gitihub"  >
                    </input>
                    <button onClick={() =>this.loadUsers()}>Buscar</button>
                    <Users name={this.state} />
                </form>
            </div>
        );
    }
}

export default Search;