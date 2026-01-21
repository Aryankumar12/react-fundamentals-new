import Users from "./Users";
import React from "react";
import { useState, useEffect } from "react";


const App = () => {
  

const[users, setUsers] = useState(()=>{
  const storedUsers = localStorage.getItem("users");

  return storedUsers ? JSON.parse(storedUsers): [];
})

  const [name, setName] = useState("");

  useEffect(()=>{

    const storedUsers = localStorage.getItem("users");
    if(storedUsers){
      setUsers(JSON.parse(storedUsers))
    }

  },[])

useEffect(()=>{
localStorage.setItem("users", JSON.stringify(users))
},[users])

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Enter Names</h1>

        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <div>
          <button
            onClick={() => {
              setUsers((prev) => [...prev, name]);
              setName("");
            }}
            style={styles.button}
          >
            Add User
          </button>
        </div>

        <Users users={users} />
      </div>
    </>
  );
};

export default App;

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
