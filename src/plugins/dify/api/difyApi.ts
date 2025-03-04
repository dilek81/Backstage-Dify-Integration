import axios from 'axios';

export const fetchDifyData = async (endpoint: string) => {
  try {
    const response = await axios.get(\`https://api.dify.com/v1/\${endpoint}\`, {
      headers: {
        Authorization: \`Bearer \${process.env.DIFY_API_KEY}\`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching from Dify:', error);
    throw error;
  }
};
