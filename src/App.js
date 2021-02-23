import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
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
    </div>
  );
  }


}
 


export default App;
