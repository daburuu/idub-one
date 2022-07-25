import './App.scss';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Mobilemenu from './components/Mobilemenu';
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <input type="checkbox" id="light" />
      <div className="App">
        <Sidebar />
        <Header />
        {/* <Mobilemenu /> */}
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
