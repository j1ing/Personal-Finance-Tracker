import React, { useState } from 'react';
import useSetMode from '../../hooks/updateMode';
import './ToggleMode.css';

const ToggleMode = () => {
  const { switchMode, data, loading, error } = useSetMode();
  const [mode, setMode] = useState('demo'); // Default mode

  const updateMode = async () => {
    const newMode = mode === 'real' ? 'demo' : 'real';
    setMode(newMode);
    switchMode(newMode);
  };

  const isDemo = mode === 'demo';

  return (
    <div className='togglemode'>
      <span className="togglemode-label">
        Demo Mode: <strong>{isDemo ? 'Enabled' : 'Disabled'}</strong>
      </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={mode === 'demo'}
          onChange={updateMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
    
  );
};

export default ToggleMode;