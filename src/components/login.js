import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index";
import { postDetails } from "../api";
import { getDetails } from "../api";
import Home from "./home";
import { useHistory } from "react-router-dom";

const orgData = [
  { name: "Navin", likes: "Chicken", age: "21" },
  { name: "Saran", likes: "Mutton", age: "22" },
  { name: "Vasu", likes: "fish", age: "23" },
  { name: "Aravindh", likes: "Chicken", age: "18" },
  { name: "Karthi", likes: "fish", age: "20" },
  { name: "Vivek", likes: "fish", age: "24" },
  { name: "Prasana", likes: "Mutton", age: "22" },
  { name: "SriRam", likes: "fish", age: "21" },
  { name: "Partha", likes: "prawn", age: "29" },
];

function Login() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, successCode, magaze } =
    bindActionCreators(actionCreators, dispatch);
  const [name, setname] = useState("");
  const [password, setpass] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const [magazine, setMagazine] = useState(orgData);

  // function calling(name,password){
  //   console.log(name)
  //   console.log(password)
  //   var payload ={
  //     "email":name,
  //     "password":password
  //   }
  //   postDetails(payload).then(function(response){
  //     console.log(response)
  //     setStatus(response.status)
  //     console.log('status...',status);
  //     successCode(status)
  //   }
  //   )
  // }
  function calling(e) {
    e.preventDefault();
    getDetails("0").then(function (response) {
      console.log(response.data.hits);
      setMagazine(response.data.hits);
      console.log(magazine);
      setStatus(response.status);
      successCode(status);
    });
  }

  useEffect(() => {
    console.log("inside use effect", status);
    if (status == 200) {
      magaze(magazine);
      history.push("/home");
    }
  }, [status]);

  function setting1(name) {
    setname(name);
  }
  function setting2(password) {
    setpass(password);
  }
  return (
    <div className="App">
      {/* <h1>{account}</h1> */}
      {/* <button onClick={() => depositMoney(500)}>
        Deposit
      </button>
      <button onClick={() => withdrawMoney(500)}>
        Withdraw
      </button> */}
      <br />

      <h1>This is Login Page ,Welcome</h1>
      <form>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={(e) => setting1(e.target.value)}
        />
        <br />
        <label for="pwd">Password:</label>
        <br />
        <input
          type="password"
          id="pwd"
          name="pwd"
          value={password}
          onChange={(e) => setting2(e.target.value)}
        />
        <br />
        {/* <button type="submit" onClick={(e)=>calling(name,password)}> submit </button> */}
        <button type="submit" onClick={(e) => calling(e)}>
          {" "}
          submit{" "}
        </button>

        <h1>{account}</h1>
      </form>
    </div>
  );
}

export default Login;
