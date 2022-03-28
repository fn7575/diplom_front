import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import MatchList from "./components/MatchList/MatchList";
import {HashRouter, Routes, Route} from 'react-router-dom'
import StartPage from './pages/StartPage'

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route exact path={'/'} element={<StartPage/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
