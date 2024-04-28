import './App.css';
import HeaderArea from './components/HeaderArea';
import MainArea from './components/MainArea';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <header className="App-header">
        <MainArea/>
      </header>
    </div>
  );
}

export default App;
