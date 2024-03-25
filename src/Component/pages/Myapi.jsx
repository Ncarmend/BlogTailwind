import axios from "axios";
import React, { useEffect, useState } from "react";  
const myUrl =  "https://jsonplaceholder.typicode.com/posts";   

const Myapi = () =>{
    
    const [post, setPost] = useState(null);
    useEffect(() =>{
        axios.get( `${ myUrl}/1` ).then((response) => {
            setPost(response.data);
        });
    }, []);
    const createPost =() =>{
        axios
        .post(myUrl, {
            title:"Hello post", 
        body: "i'm a content"
        })
        .then ((response) =>{
            setPost(response.data);
        });
    }
    function updatePost() {
        axios
          .put(`${baseURL}/1`, {
            title: "Hello World!",
            body: "This is an updated post."
          })
          .then((response) => {
            setPost(response.data);
          });
      }

      function deletePost() {
        axios
          .delete(`${baseURL}/1`)
          .then(() => {
            alert("Post deleted!");
            setPost(null)
          });
      }

    
    
if(!post)return "pas des posts!"



    return(
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={createPost}>Create Post</button>
        <button onClick={updatePost}>Update Post</button>
        <button onClick={deletePost}>Delete Post</button>
        
      </div>

    )
};
export default Myapi;