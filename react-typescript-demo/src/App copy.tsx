import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

const names = [
  {
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Princess',
    last: 'Diana'
  }
];  

function App() {
  return (
    <div className="App">
      <Greet name="jjs" messageCount={20} isLoggedIn={false}/>
      <Person name={{ first: 'jo', last: 'soo' }} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
