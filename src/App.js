import React, { useEffect, useState } from "react";
import "./App.css";

import User from "./components/User";
// import "./components/user.css"
import Header from "./components/Header";
import "./components/Header.css"


const App = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

 

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="App">
      <Header />

      <br />
      
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
            street={user.address.street}
            suite={user.address.suite}
            zipcode={user.address.zipcode}
            onDelete={onDelete}
          />
          
        ))}
        
      </div>
      <div>
      </div>
    </div>
  
  );
};

export default App;
