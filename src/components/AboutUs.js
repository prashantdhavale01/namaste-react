import { Component } from "react";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import UserContext from "../utils/UserContext";

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
      <div className="mx-5 mt-5">
        <div className="text-xl font-bold">About Us Page</div>
        <div className="text-xl font-bold"><UserContext.Consumer>{({loggedUser}) => loggedUser}</UserContext.Consumer></div>
        <div>This is details About Us Page</div>
        <UserFunction name={"Prashant Dhavale"} email={"prashantdhavale01@gmail.com"} />
        <UserClass name={"Prashant Dhavale"} email={"prashantdhavale01@gmail.com"} />
      </div>
    );
  }
}

export default AboutUs;