import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatPanel from './components/ChatPanel';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<LoginPage />} />
            <Route path='/chat' Component={ChatPanel} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
