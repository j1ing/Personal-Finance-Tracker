import { useState } from 'react';

const useSendData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const sendData = async (endpoint, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponse(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { sendData, loading, error, response };
};

export default useSendData;