// Tutorial : https://www.youtube.com/watch?v=Gl-vOU7ZU9A&t=325s
// https://www.thapatechnical.com/2022/08/complete-axios-in-15minutes.html

import React, { useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { useState } from "react";
import axios from "./axios"; //from axios.jsx

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const API = "https://jsonplaceholder.typicode.com";

  // // Note: using promises........................................
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  // // Note: using Async Await.......................................
  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getApiData();
  // }, []);

  // // Note: Best way to fetch api using Async Await.......................................
  // const getApiData = async (url) => {
  //   try {
  //     const res = await axios.get(url);
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getApiData(`${API}/posts`);
  // }, []);

  // Note: Excellent way to fetch api using Async Await.......................................
  // here we need create axios.jsx file in src folder
  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>Axios Tutorial</h1>
      {isError && <h2>Error:{isError}</h2>}

      <div className='grid'>
        {myData.slice(0, 24).map((post) => {
          const { id, title, body } = post;
          return (
            <div className='card' key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
