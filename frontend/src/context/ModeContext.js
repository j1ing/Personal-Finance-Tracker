import React, { createContext, useState, useContext, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Load from localStorage on first render
    return localStorage.getItem('mode') || 'demo';
  });

  useEffect(() => {
    // Update localStorage whenever mode changes
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'real' ? 'demo' : 'real'));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);