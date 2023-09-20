import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Front from './pages/FrontPage/Front.tsx';
import Login from './pages/LoginPage/Login.tsx';
import Signup from './pages/SignupPage/Signup.tsx';
import Home from './pages/HomePage/Home.tsx';
import Workspace from './pages/WorkspacePage/Workspace.tsx';
import Boards from './pages/BoardsPage/Boards.tsx';
import InternalBoard from './pages/InternalBoardPage/InternalBoard.tsx';
import Account from './pages/AccountPage/Account.tsx';
import Profile from './pages/ProfilePage/Profile.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Front} />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={Signup} />
        <Route path='/u/home' Component={Home} />
        <Route path='/u/profile' Component={Profile} />
        <Route path='/u/account' Component={Account} />
        {/* TODO: below routes should depend on user specific stuff, to be implemented later
        <Route path='/u/username/boards' Component={Boards} />
        <Route path='/w/workspaceName' Component={Workspace} />
        <Route path='/b/boardIdString/boardName' Component={InternalBoard} />
        
        */}
        <Route path='/u/boards' Component={Boards} />
        <Route path='/u/workspace' Component={Workspace} />
        <Route path='/u/board' Component={InternalBoard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
