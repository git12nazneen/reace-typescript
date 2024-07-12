import './App.css';
import {Greet} from './components/Greet'
import { Person } from './components/Person';
function App() {
  const personName ={
    first : 'Sultana',
    last: 'Lipi'
  }
  return (
    <div className="App">
      <Greet name="Nazneen" number={2} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
    </div>
  );
}

export default App;
