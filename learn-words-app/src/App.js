import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import MainPage from './component/MainPage';
import Content from './component/Content';
import Card from './component/Card';
import Dictionary from './component/Dictionary';
import Practice from './component/Practice';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <MainPage/>
      <Content/>

      <Footer/>
    </div>
  );
}

export default App;
