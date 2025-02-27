import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard.jsx';
import SignUp from './component/SignUp.jsx';
import LogIn from './component/LogIn.jsx';
import ProtectedRoute from './component/ProtectedRoute.jsx';
import "./index.css";

const App = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  
  const [curUser, setCurUser] = useState(() => {
    return JSON.parse(localStorage.getItem("curUser")) || null;
  });

  useEffect(() => {
    if (curUser) {
      localStorage.setItem("curUser", JSON.stringify(curUser));
      setUsers(prevUsers => {
        const updatedUsers = prevUsers.filter(user => user.email !== curUser.email);
        const newUsersList = [...updatedUsers, curUser];
        localStorage.setItem("users", JSON.stringify(newUsersList));
        return newUsersList;
      });
    }
  }, [curUser]);

  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute curUser={curUser}>
          <Dashboard curUser={curUser} setCurUser={setCurUser} />
        </ProtectedRoute>
      } />
      <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
      <Route path="/login" element={<LogIn users={users} setCurUser={setCurUser} />} />
    </Routes>
  );
}

export default App;