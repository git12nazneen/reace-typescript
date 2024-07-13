import './App.css';
import {Greet} from './components/Greet'
import { Person } from './components/Person';
import { Personlilst } from './components/Personlilst';
import { Status } from './components/Status';
function App() {
  const personName ={
    first : 'Sultana',
    last: 'Lipi'
  }
  const personList =[
    {
      first : 'Sumu',
      last: 'dipu'
    }, {
      first : 'Rumu',
      last: 'Nipu'
    }, {
      first : 'Lumu',
      last: 'Kipu'
    },
    
  ]
  return (
    <div className="App">
      <Greet name="Nazneen" number={2} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
      <Personlilst names ={personList}></Personlilst>
      <h2>Status check</h2>
      <Status status='loading'></Status>
    </div>
  );
}

export default App;
