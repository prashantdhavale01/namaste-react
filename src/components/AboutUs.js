import { Component } from "react";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

class AboutUs extends Component{
  constructor(props){
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount(){
    console.log("Parent - componentDidMount");
  }

  render(){
    console.log("Parent - render");
    return(
      <div>
          <h1>About Us Page</h1>
          <div>This is details About Us Page</div>
          <UserFunction name={"Prashant Dhavale"} email={"prashantdhavale01@gmail.com"} />
          <UserClass name={"Prashant Dhavale"} email={"prashantdhavale01@gmail.com"} />
      </div>
    );
  }
}

export default AboutUs;