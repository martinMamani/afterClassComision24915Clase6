
import './App.css';
import ItemListContainer from './components/ItemListContaner/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <ItemListContainer greeting="AfterClass Promises-asincronia-map"></ItemListContainer>
    </div>
  );
}

export default App;
