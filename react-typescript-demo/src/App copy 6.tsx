import './App.css';
import { Greet } from './components/Greet';
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
      <PersonList names={names} />
    </div>
  );
}

export default App;
