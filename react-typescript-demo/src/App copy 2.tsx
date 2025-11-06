import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Status status='loading' />
      <Oscar>
        <Heading>children node : hello world</Heading>
      </Oscar>
      <Greet name='Bruce' isLoggedIn={true} />
    </div>
  );
}

export default App;
