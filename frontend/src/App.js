import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Store } from './Store';
import { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <a href="/">Node App</a>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
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
