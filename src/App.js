import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Card from "./components/Card";
import employeesJSON from "./components/employees.json";
import API from "../src/utils/API"
import Search from "./components/Search";
import Button from "./components/Button";
let textInput = React.createRef()

const employees = employeesJSON.results
// console.log(employees)

class App extends React.Component{

  state={
    // employees:employees
    searchedName: "",
    employees:[]
  }

  componentDidMount(){
    this.populateEmployees()
  }

  handleInputChange = event =>{
    // const name = event.target.name
    //   console.log("name: ",name)
    //USE THE LINE BELOW FOR EVENTS ASSOCIATED WITH INPUT CHANGE
    const value = event.target.value
    //USE THE LINE BELOW TO GET VALUE OF INPUT FIELD WITH BUTTON
    // const value = textInput.current.value
      console.log("value: ",value)
    this.setState({
      searchedName:value
    })
}


  populateEmployees = () => {
    API.search()
      .then(res => {
        console.log("Results:", res.data.results);
        this.setState({employees:res.data.results})
      }
      )
      .catch(err => console.log(err))
  }


  render(){
      return (
        <div className="container">
          <Header/>
          <Button/>
          <Search
            handleInputChangeProp = {this.handleInputChange}
          />
          <Body>
          {this.state.employees.map((employee, index) => {
            return(
              <Card
                key = {employee.login.uuid}
                id = {employee.login.uuid}
                {...employee}
              />
            )
          })}
          </Body>
        </div>
      );
    }

}


export default App;
