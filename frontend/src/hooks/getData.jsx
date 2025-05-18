import { useEffect, useState, useCallback } from 'react';
import axiosInstance from '../api/axiosInstance'; 
import { useMode } from '../context/ModeContext';

const useGetData = (endpoint, reqBody = null) => {
  const { mode } = useMode();  // ← Watch mode changes
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  // Optional: loading state
  const [error, setError] = useState(null);      // Optional: error handling
  const [refreshTrigger, setRefreshTrigger] = useState(0); // New state to trigger refetch

  // Refetch function that can be called externally
  const refetch = useCallback(() => {
    setRefreshTrigger(prev => prev + 1); // Increase the trigger value to re-trigger useEffect
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = reqBody
          ? await axiosInstance.post(endpoint, reqBody)
          : await axiosInstance.get(endpoint);

        setData(res.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(reqBody), mode, refreshTrigger]); // track reqBody changes and trigger refetch when mode changes

  return { data, loading, error, refetch };
};





export default useGetData;