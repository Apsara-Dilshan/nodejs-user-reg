import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Node App</a>
        </header>
        <Routes>
          <Route path="/signin" element={<SigninScreen />} />
        </Routes>
        <main></main>
      </div>
    </BrowserRouter>
  );
}

export default App;
