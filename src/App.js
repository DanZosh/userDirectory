import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Card from "./components/Card";
import employeesJSON from "./components/employees.json";
import API from "../src/utils/API"

const employees = employeesJSON.results
// console.log(employees)

class App extends React.Component{

  state={
    // employees:employees
    employees:[]
  }

  componentDidMount(){
    this.populateEmployees()
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
          <Header />
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
