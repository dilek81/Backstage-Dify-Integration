import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DifyComponent = () => {
  const [aiData, setAiData] = useState<any>(null);

  useEffect(() => {
    const fetchAiData = async () => {
      try {
        const response = await axios.get('https://api.dify.com/v1/ai-content', {
          headers: {
            'Authorization': \`Bearer \${process.env.DIFY_API_KEY}\`,
          },
        });
        setAiData(response.data);
      } catch (error) {
        console.error('Error fetching AI data:', error);
      }
    };

    fetchAiData();
  }, []);

  return (
    <div>
      <h1>Dify AI Data</h1>
      <pre>{JSON.stringify(aiData, null, 2)}</pre>
    </div>
  );
};
