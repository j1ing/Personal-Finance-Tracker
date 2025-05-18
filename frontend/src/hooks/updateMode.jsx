import { useState, useCallback  } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useMode } from '../context/ModeContext';

const useSetMode = () => {
  const { toggleMode } = useMode();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  // Optional: loading state
  const [error, setError] = useState(null);      // Optional: error handling

  const switchMode = useCallback(async (mode) => {
    console.log(mode);
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.post('/api/set-mode', { mode });
      // On success, update the context mode (trigger re-render in components)
      toggleMode(mode);

      setData(res.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { switchMode, data, loading, error };
};

export default useSetMode;