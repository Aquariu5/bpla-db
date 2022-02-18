import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, ToggleButton, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './router/routes';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Left } from './components/ui-components/Left';
import { History } from './components/History';
import { Menu } from './components/Menu';

import { Footer } from './components/Footer';
import cl from './styles/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/pages/Auth';
function App() {

  let [state, setState] = useState(1);
  //let [show, setShow] = useState(false);
  const show = useSelector(state => state.displayReducer.display);
  const auth = useSelector(state => state.authReducer.auth);
  const dispatch = useDispatch();
  const handleShow = () => {
    //setShow(prev => !prev);
    dispatch({type: "SET_DISPLAY", payload: !show});
  }
  console.log('auth', auth);

  useEffect(() => {
      const item = localStorage.getItem('auth');
      if (item == 'true') {
        dispatch({type: "SET_AUTH", payload: true});
      }
  });

  return (
    <BrowserRouter>
        <div className={cl.App}>
          <div>
            <Navbar bg="light">
            <Container>
            <Button onClick={handleShow} variant="warning">Left menu</Button>
            </Container>
            <Menu/>

            </Navbar>
            <Left show={show} handleShow={handleShow}/>

             {
               auth ?
              <Switch>
                {
                routes.map(route =>
                    <Route
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                      key={route.path}
                    />
                )
                }
              <Redirect to='/base'/>
              </Switch>
              :
              <Switch>
                <Route
                  path='/auth'
                  exact={true}
                  component={Auth}
                />
              </Switch>
            }
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App;
