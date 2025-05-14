//import logo from './logo.svg';
import './App.css';
import Balance from './Balance';
//import Accelerate from './Accelerate';
import Changemode from './Changemode';
import Login from './Login';

import Welcome from './Welcome';
import PhonePayWithdraw from './PhonePayWithdraw';
import Simpletodo from './Simpletodo';
import TodoList from './TodoList';
function App() {
  return (
    <div>
      {/* <Accelerate/> */}
      <Changemode/>
      <Welcome/>
      <Login/>
      <Balance/>
      <PhonePayWithdraw/>
      <Simpletodo/>
      <TodoList/>
    </div>
  );
}

export default App;
