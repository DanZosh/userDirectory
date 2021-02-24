import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Card from "./components/Card";



class App extends React.Component{

  state={
    users:[

    ]


  }

render(){
  return (
    <div className="container">
      <Header />
      <Body/>
      <Card/>


    </div>
  );
  }


}



export default App;
