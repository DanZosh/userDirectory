import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Card from "./components/Card";
import employeesJSON from "./components/employees.json";
import API from "../src/utils/API"
import Search from "./components/Search";
import Button from "./components/Button";


// const employees = employeesJSON.results
// console.log(employees)
let employeePlaceholderList 

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
    this.searchEmployeesFirstLast(this.state.searchedName);
  };
  handleClearClick = event => {
    event.preventDefault();
    console.log("clear")
    this.setState({
      employees:employeePlaceholderList
    })
  };

  
  searchEmployeesFirstLast = (boop)=>{
    const employeeList = this.state.employees
    const filteredListFirstName = employeeList.filter(employee => employee.name.first === boop)
      console.log("filteredListFirstName", filteredListFirstName)
    const filteredListLastName = employeeList.filter(employee => employee.name.last === boop)
      console.log("filteredListLastName", filteredListLastName)
    
    if(filteredListFirstName.length >0){
      this.setState({
        employees:filteredListFirstName
      })
    } 
    else if(filteredListLastName.length >0){
      this.setState({
        employees:filteredListLastName
      })
    }
    else return
  }

  sortEmployeesFirstName = () =>{
    const employeeList = this.state.employees
    const sortedList = employeeList.sort((a,b) =>{
      if (a.name.first  < b.name.first) { return -1}
      if (a.name.first  > b.name.first) { return 1}
      return 0
    })
    this.setState({
      employees:sortedList
    })
    
  }
  sortEmployeesLastName = () =>{
    // console.log("Sorting")
    const employeeList = this.state.employees
    const sortedList = employeeList.sort((a,b) =>{
      if (a.name.last  < b.name.last) { return -1}
      if (a.name.last  > b.name.last) { return 1}
      return 0
    })
      // console.log(sortedList)
    this.setState({
      employees:sortedList
    })
    
  }

  populateEmployees = () => {
      API.search()
        .then(res => {
          console.log("Results:", res.data.results);
          this.setState({employees:res.data.results})
          employeePlaceholderList = res.data.results
            console.log("employeePlaceholderList: ", employeePlaceholderList)
        }
        )
        .catch(err => console.log(err))
  }



  render(){
      return (
        <div className="container">
          <Header/>
          <Button
            sortEmployeesFirstNameProp = {this.sortEmployeesFirstName}
            sortEmployeesLastNameProp = {this.sortEmployeesLastName}
          />
          <Search
            handleInputChangeProp = {this.handleInputChange}
            handleSearchClickProp = {this.handleSearchClick}
            handleClearClickProp = {this.handleClearClick}
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
