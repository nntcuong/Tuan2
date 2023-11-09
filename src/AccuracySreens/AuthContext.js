//Nguyễn Ngô Thế Cường : 21521905
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    if (email === '21521905@gm.uit.edu.vn' && password === 'nguyenngothecuong') {
      setUser({ email: email });
    } else {
      alert('Incorrect email or password');
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
