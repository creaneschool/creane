import axios from 'axios'
import React, { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
function App() {
  const [user, setUser] = useState(undefined);
  const handleAuth = (user) => {
    setUser(user);
  };
  return (
    <>
      {!user ? (
        <AuthPage onAuth={handleAuth} />
      ) : (
        <ChatsPage user={user} />
      )}
    </>
  );
}
export default App;
