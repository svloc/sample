import React, { useState, useEffect } from "react";
export default function home() {
  const api_url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch_data();
  },[]);
  async function fetch_data() {
    fetch(api_url)
      .then((res) => {
        if (res.status == 401) {
          console.log("401");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(data);
  return <div></div>;
}
