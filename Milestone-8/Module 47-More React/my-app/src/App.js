// import logo from './logo.svg';
import './App.css';

// const number = 333;

function App() {
const nayoks=['Eshtiaque Ahmed','Shakrukh',
'Salman','Allu Arjun','Iron man']
  return (
    <div className="App">
      {
      // nayoks.map(nayok=><li>Name:{nayok}</li>)
      nayoks.map(nayok=><Person name={nayok}></Person>)
      }


    {/* <Person name={nayoks[0]}></Person>
    <Person name={nayoks[1]}></Person> */}
    <Friend Name="Lokko Lokko" job="Don"></Friend>

    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p></p>
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
