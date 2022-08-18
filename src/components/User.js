import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const User = (props) => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setUser(data);
          setIsLoaded(true);
          setUserAddress(data.address);
          setUserCompany(data.company);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Company: {userCompany.name}</div>
        <div>
          Address: {userAddress.suite}, {userAddress.street}, {userAddress.city}
          , {userAddress.zipcode}
        </div>
      </>
    );
  }
};

export default User;
