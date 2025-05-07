import React from 'react';

const WaitingList = () => {
  return (
    <div style={{ padding: '1rem' }}>
      
      <iframe
        src="https://clinic-management-system-27d11.web.app/dashboard?publicToken=606b62fc-12d4-4b04-9053-c276c32879ac&sessionToken=669bab8e-fd1a-439b-85f7-2eab6d2bd3cb"
        title="Clinic Dashboard"
        width="100%"
        height="800px"
        style={{
          border: '2px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WaitingList;
