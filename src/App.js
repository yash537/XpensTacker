import Header from "./Components/header";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AddExpense from "./Pages/add-expense";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/add-expense' element={<AddExpense/>}/>
        </Routes>
        <div>Footer</div>
    </Router>
  );
}

export default App;
