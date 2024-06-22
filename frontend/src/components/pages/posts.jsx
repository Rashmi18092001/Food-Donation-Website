import React, { useState, useEffect } from "react";
import "../css/posts.css";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToBookings, delItem } from "../../redux/action.js";

function Post() {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/donate");
      const initialData = response.data.map(data => ({ ...data, availability: "Available" }));
      setDatas(initialData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetFood = (index) => {
    const updatedDatas = [...datas];

    if (datas[index].availability === "Available") {
      dispatch(addToBookings(datas[index]));
      updatedDatas[index].availability = "Not Available";
    } else {
      dispatch(delItem(datas[index]));
      updatedDatas[index].availability = "Available";
    }

    setDatas(updatedDatas);
  };

  return (
    <>
      <Navbar />
      <div className="donar-content">
        <h2 className="donar">Food Donated by Donars</h2>
        <p className="donar-tag">Choose the food that is compatible for you</p>
      </div>
      <div className="container">
        {datas.map((data, index) => (
          <div className="post">
          <div key={data._id} className="post-card">
            <div className="user-detail">
              <p className="user-name">{data.name}</p>
              <p className={`status ${data.availability === "Available" ? "available" : "not-available"}`}>
                {data.availability}
              </p>
            </div>
            
            <p>Location : {data.address}</p>
            <p>Food Items : {data.foodDesc}</p>
            <p>Quantity : {data.quantity}</p>
            <p>Prepared Food Time : {data.foodTime} </p>
            
            <button onClick={() => handleGetFood(index)}>
              {data.availability === "Available" ? "Get Food" : "Cancel Order"}
            </button>
          </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Post;
