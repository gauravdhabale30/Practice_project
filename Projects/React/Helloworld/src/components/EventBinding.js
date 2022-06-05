import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //3rd approch this is in react doc binding happen in class costroctor bettern than render method
    //this.eventHandler = this.eventHandler.bind(this);
  }
  // eventHandler() {
  //   this.setState({
  //     message: "Bye",
  //   });
  // }

  //4th approch using inline funtion
  eventHandler = () => {
    this.setState({
      message: "Bye",
    });
  };
  render() {
    // const [name, setName] = useState("");
    // const show = () => {
    //   setName("Gaurav");
    // };
    //  return (
    //    <>
    //      <p>Hello,{name}</p>
    //      <button onClick={show}>click</button></>
    return (
      <div>
        {this.state.message}
        {/* 
         first approch cant use in big application 
         <button onClick={this.eventHandler.bind(this)}>click</button> */}
        {/* 2nd approch this also have performance issue
           <button onClick={() => this.eventHandler()}>click</button> */}

        {/*3rd approch in react doc <button onClick={this.eventHandler}>click</button> */}

        {/* 4th approch using inline function  */}
        <button onClick={this.eventHandler}>click</button>
      </div>
    );
  }
}

export default EventBinding;
