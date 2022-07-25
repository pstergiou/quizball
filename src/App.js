import logo from './logo.svg';
import StartForm from './components/StartForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './routes/Categories';
import Question from './components/Question';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <StartForm />
       
      </header>
    </div>
  );
}

export default App;
