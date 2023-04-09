// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Happy Coding</h1>
      <LoadPost></LoadPost>

      <District name="Australia" special="Rocks" ></District>
      <District name="Bangladesh" special="Good"></District>
      <District name="Dhaka" special="Nice"></District>

    </div>
  );
}
function LoadPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post
          title={post.title}
          Body={post.body}
        ></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div style={{
      background: 'lightsalmon',
      margin: '10px',
      padding: '3px',
      borderRadius: '10px',
      border: '2px solid Black'
    }}>
      <h2>Title: {props.title}</h2>
      <p>Body:{props.body}</p>
    </div>
  )
}

const DistrictStyle = {
  background: 'pink',
  margin: '10px',
  padding: '3px',
  borderRadius: '10px',
  border: '2px solid Black'
}
function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={DistrictStyle}>
      <h2>Name : {props.name} </h2>
      <h3>Especially : {props.special}</h3>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost</button>
    </div>
  )
}
export default App;
