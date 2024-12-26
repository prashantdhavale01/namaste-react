import react from "react";

class UserClass extends react.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      userInfo : {
        login: "Dummy Data"
      }
    }
    console.log("Children - Constructor");
  }

  // API call
  async componentDidMount(){
    console.log("Children - componentDidMount");
    const data = await fetch("https://api.github.com/users/prashant01");
    const userData = await data.json();
    this.setState({
      userInfo: userData
    });

    this.timer = setInterval(()=>{
      console.log("Class Component UseEffect setInterval");
    },1000)
  }

  componentDidUpdate(prevProps,prevState){
    console.log("Children - componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("Children - componentWillUnmount");
    clearInterval(this.timer);
  }

  render(){
    console.log("Children - Render");
    const {name, email} = this.props;
    const {login} = this.state.userInfo;
    return(
      <div className="p-3 mt-5 border border-s border-[#ddd]">
        <div><strong>Class Component</strong></div>
        <div><strong>Name - {name} - {login}</strong></div>
        <div>Address - Pune</div>
        <div>Mobile - 8446668648</div>
        <div>Email - {email}</div>
        <div>
        {this.state.count} - 
        <button className="px-4 py-1 m-2 bg-slate-400" type="button" onClick={()=>{
          this.setState({
            count: ++this.state.count
          })
        }}>Click</button>
      </div>
      </div>
    );
  }
}
export default UserClass;