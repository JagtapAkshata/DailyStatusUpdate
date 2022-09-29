import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
      <h1>React Redux Shopping Card</h1>
      <hr/>
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
