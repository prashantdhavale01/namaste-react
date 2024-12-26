import { useEffect, useState } from "react";

const UserFunction = (props) => {
  
  const {name, email} = props;
  let [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchData();

    const timer = setInterval(() => {
      console.log("Function Component UseEffect setInterval");
    }, 1000);

    // Component will Un Mount
    return(() => {
      clearInterval(timer);
    });
    
  }, []);

  const fetchData = async () => { 
    const data = await fetch("https://api.github.com/users/prashant01");
    const userData = await data.json();
    console.log(userData);
    setUserInfo(userData);
  }


  return(
    <div className="p-3 mt-5 border border-s border-[#ddd]">
      <div><strong>Function Component</strong></div>
      <div><strong>Name - {name} - {userInfo?.login}</strong></div>
      <div>Address - Pune</div>
      <div>Mobile - 8446668648</div>
      <div>Email - {email}</div>
      <div>
        {count} - 
        <button className="px-4 py-1 m-2 bg-slate-400" type="button" onClick={()=>{
          setCount(++count);
        }}>Click</button>
      </div>
    </div>
  );
}
export default UserFunction;