import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Card from "./components/Card";
import employeesJSON from "./components/employees.json"

const employees = employeesJSON.results
console.log(employees)

class App extends React.Component{

  state={
    employees:employees
  }

  render(){
      return (
        <div className="container">
          <Header />
          <Body/>
          {this.state.employees.map((employee, index) => {
            return(
              <Card
                key = {employee.login.uuid}
                id = {employee.login.uuid}
                {...employee}
              />
            )
          })}
        </div>
      );
    }

}


export default App;
