import logo from './logo.svg';
import './App.css';
import Header from './component/heaader';

import Footer from './component/footer';
import Desertitem from './desertitem';
import Body from './body';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      
      <Footer/>
    </div>
  );
}

export default App;
