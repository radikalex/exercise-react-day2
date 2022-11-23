import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
        <Counter initialValue={0} incValue={3}/>
    </div>
  );
}

export default App;
