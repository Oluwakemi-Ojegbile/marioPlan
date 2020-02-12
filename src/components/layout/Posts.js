import React from 'react'

const Posts = ({ posts }) => {
    console.log(posts)
  return (
    <div>
      <center><h1>Post List</h1></center>
      {posts.length <= 0 ? <h1>Loading...</h1>:  posts.map(( post ) => (
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Posts