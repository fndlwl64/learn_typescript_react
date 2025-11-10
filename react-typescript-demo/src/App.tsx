import './App.css';
import { Text } from './components/polymorphic/Test';


function App() {
  return (
    <div className="App">
      <Text size='lg' color='primary' as='h1'>
        This is a heading
      </Text>
      <Text size='md' color='secondary' as='p'>
        This is a paragraph
      </Text>
      <Text size='sm' color='danger'>
        This is a div with small text and danger color
      </Text>
    </div>
  );
}

export default App;
