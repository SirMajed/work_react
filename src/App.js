import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Routes/Home/Home';
// import FunctionDetail from './FunctionDetail';
import Test from './Routes/TestRoute/Test';
function App() {
  return (

    <Router >
      <div className="App bg-gray-50">
      <Header/>


      <div className="max-w-5xl mx-auto mt-5 bg-gray-50">
        <Switch>
          {/* Only one route shows at one time */}
          <Route exact path="/">
          <Home/>
          </Route>

          <Route exact path="/test">
          <Test/>
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
