import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
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
  
  const [value, setValue] = useState("Hello, TypeScript!");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setValue(event.target.value);
  };

  return (
    <div className="App">
      <Input value={value} handleChange={handleInputChange} />
      <PersonList names={names}/>
    </div>
  );
}

export default App;
