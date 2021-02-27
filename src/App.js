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
    const value = event.target.value
      console.log("value: ",value)
    this.setState({
      searchedName:value
    })
    console.log(this.state.searchedName)
}

handleSearchClick = event => {
  event.preventDefault();
  this.searchEmployees(this.state.searchedName);
};

searchEmployees = (boop)=>{
  //search through the current list of employees for those with the first name boop
  console.log("boop: ", boop)
  const employeeList = this.state.employees
    console.log("employeeList", employeeList)
  const filteredList = employeeList.filter(employee => employee.name.first === boop)
    console.log("filteredList", filteredList)
  this.setState({
    employees:filteredList
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
            handleSearchClickProp = {this.handleSearchClick}
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
