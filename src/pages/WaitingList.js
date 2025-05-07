import React from 'react';

const WaitingList = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ color: 'purple', marginBottom: '1rem' }}>Clinic Management Dashboard</h2>
      <iframe
        src="https://clinic-management-system-27d11.web.app/dashboard?publicToken=a7a429c9-e69c-46a0-a269-8a1e9634b882&sessionToken=fd92b5f1-a84f-466f-b72f-984819d9e458"
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
