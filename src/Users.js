import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <h2 style={{ marginTop: "20px" }}>Users List</h2>

      <ul style={{ paddingLeft: "20px" }}>
        {users.map((value, index) => {
          return (
            <li
              key={index}
              style={{
                background: "#fff",
                padding: "8px",
                marginBottom: "6px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
