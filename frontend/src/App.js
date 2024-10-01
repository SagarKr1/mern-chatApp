import './App.css';
import AppLayout from './Components/AppLayout';
import Login from './auth/Login';
import { Routes, Route } from "react-router-dom";
import WelcomePage from './Components/WelcomePage';
import ChatArea from './Components/ChatArea';
import UserAndGroups from './Components/Group/userAndGroups';
import CreateGroup from './Components/Group/CreateGroup';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<AppLayout/>}>
            <Route path='welcome' element={<WelcomePage/>}/>
            <Route path='chat' element={<ChatArea/>}/>
            <Route path='groups' element={<UserAndGroups/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='createGroup' element={<CreateGroup/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
