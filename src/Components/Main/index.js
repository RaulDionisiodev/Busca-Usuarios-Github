import React from "react";
import './style.css';
import Users from "../Users";
import apiUsers from '../../Services/Api-Users';

class Search extends React.Component{

    constructor (props){
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        user: [],
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    loadUsers = async () => {
        const response = await apiUsers.get(`/${this.state.value}`);
         //console.log(response)

        this.setState({user: response.data});

        console.log(this.state.user)
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
                    <Users name={this.state.user} />
                </form>
            </div>
        );
    }
}



/*const Search = () => (
    <div className="search">
        
        <input placeholder="Insira seu usuario do Gitihub" ></input>
        <button>Enviar</button>
    </div>
);*/

export default Search;