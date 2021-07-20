import { BrowserRouter as Router, Route } from 'react-router-dom'



//Pages goes here
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Homepage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />

      </Router>
    </>
  );
}

export default App;
