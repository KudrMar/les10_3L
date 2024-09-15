
import './App.css';
import Listing from './components/listing';
import items from './components/etsy.json';


function App() {
  return (
    <div className="container">
       <Listing items={items} />
    </div>
);
}

export default App;
