import './App.css';
import logo from "./img/завантаження1.jpg";
import asses from "./img/png-transparent-amazon-stars-star-ratings-review-stars-review-rating-icon-star-icons-stars-thumbnail.png"

function App() {
  return (
    <div className="App">
      <div className="shveps-card">
        <div className="container-logo">
          <img className="logo" src={logo} alt="dsdgsa" />
        </div>
        <p className="title-card">Напій Швепс Мохіто / Schweppes Classic Mojito, ж/б, 0.25л</p>
        <div className="assessment-and-conent">
          <div className='assessment'>
            <img src={asses}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
