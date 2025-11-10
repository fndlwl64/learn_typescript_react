import './App.css';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomCoponent';
import { CustomInput } from './components/html/Input';

function App() {
  return (
    <div className="App">
      <CustomInput placeholder="Type here..." onChange={(e) => console.log(e.target.value)}/>
      <CustomButton variant="primary" onClick={() => console.log('Clicked')}  >
        Primay Button
      </CustomButton>
      <CustomComponent name="jjs" isLoggedIn/>
    </div>
  );
}

export default App;
