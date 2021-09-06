import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import FunctionDetail from './FunctionDetail';
import Home from './Home';
function App() {
  return (

    <Router >
      <div className="App">
      <Header/>


      <div className="max-w-5xl mx-auto mt-10">
        <Switch>
          {/* Only one route shows at one time */}
          <Route exact path="/">
          <Home/>
          </Route>
{/* 
          <Route exact path="/functions/:id">
            <FunctionDetail/>
          </Route> */}

          {/* <Route path="*">
            <NotFound/>
          </Route> */}

        </Switch>
      </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
