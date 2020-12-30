import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Peg from './Components/Peg/Peg.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup vertical>
          <Peg/>
          <Peg/>
          <Peg/>
        </ButtonGroup>

        <ButtonGroup vertical>
          <Peg/>
          <Peg/>
          <Peg/>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
