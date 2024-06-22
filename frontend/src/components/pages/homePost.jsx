import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/posts.css';
import '../css/homepost.css';
import { useDispatch } from "react-redux";
import { addToBookings, delItem } from "../../redux/action.js";

const HomePost = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/donate');
        setPosts(response.data.slice(-3)); // Only get the latest two posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  // show the posts
  return (
    <div className='homepost'>
      <h2 className='latest'>Latest Posts</h2>
      <div className='container'>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

const PostCard = ({ post, dispatch }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = () => {
    if (isAdded) {
      dispatch(delItem(post));
    } else {
      dispatch(addToBookings(post));
    }
    setIsAdded(!isAdded);
  };


  // show post details
  return (
    <div className="post-card">
      <p className="user-name">{post.name}</p>            
      <p>Location : {post.address}</p>
      <p>Food Items : {post.foodDesc}</p>
      <p>Quantity : {post.quantity}</p>
      <p>Prepared Food Time : {post.foodDate} Hrs</p>
      <button onClick={handleButtonClick}>
        {isAdded ? "Cancel Order" : "Get Food"}
      </button>
    </div>
  );
};

export default HomePost;
