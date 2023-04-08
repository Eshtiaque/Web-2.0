// import logo from './logo.svg';
import './App.css';

// const number = 333;

function App() {
  return (
    <div className="App">
    <Person name="Eshtiaque Ahmed"></Person>
    <Person name="Eshtiaque Ahmed"></Person>
    <Friend Name="lokko Lokko" job="Don"></Friend>

    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Hacker</p>
      </div>
  )
}
function Friend(props){
  return (
    <div className='person'>
    <h1>{props.Name}</h1>
    <p>{props.job}</p>
          </div>
  )
}
export default App;
