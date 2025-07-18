import { useEffect, useState } from 'react';

function HealthCheck() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
      <strong>API Health:</strong> {status}
    </div>
  );
}

export default HealthCheck; 