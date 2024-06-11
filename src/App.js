import logo from './logo.svg';
import myImg from './img/unnamed.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header my-class">
        <img src={myImg} className="App-logo" alt="logo" />
        <p>
        Troian Dmytro
        </p>
      </header>
      {/* <div className="my-class">
        <img src={myImg}/>
        <p className="p-style">
          Troian Dmytro
        </p>
      </div> */}
    </div>
  );
}

export default App;
