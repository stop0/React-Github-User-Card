import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React from "react"


class App extends React.Component {
  state = {
    user : [],
    userText : ""

  };


  componentDidMount(){
    axios
    .get("https://api.github.com/users/stop0")
    .then((res) => {
      this.setState({
        user:res.data
      })
    })
  }



  handleChange = (e) => {
    this.setState ({
      userText:e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.userText}`)
    .then((res) => {
        this.setState({
            user:res.data
        })


    })
    .catch((err) => console.log(err))





  }





  render(){
  return (
    <div className="App">
      <h1> Github User Finder</h1>

      <form  onSubmit = {this.handleSubmit}>
        <input value ={this.state.userText} onChange = {this.handleChange}/>
        {console.log(this.state.user)}
        
        <input type="submit"/>
      </form>
      <h1>{this.state.user.name}</h1>
      <img width="300" height="300" src = {this.state.user.avatar_url}/>
      <h4>Followers: {this.state.user.followers}</h4>
      <h4>Following: {this.state.user.following}</h4>
    </div>
  );
  }
}

export default App;
