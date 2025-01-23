const config = {
  development: {
    baseUrl: 'http://localhost:5173',
    apiUrl: 'http://localhost:5173/api'
  },
  production: {
    baseUrl: 'https://your-production-domain.com',
    apiUrl: 'https://your-production-domain.com/api'
  }
};

export const getBaseUrl = () => {
  const env = process.env.NODE_ENV || 'development';
  return config[env].baseUrl;
};

export const getApiUrl = () => {
  const env = process.env.NODE_ENV || 'development';
  return config[env].apiUrl;
};

export const getAssetUrl = (path) => {
  return `${getBaseUrl()}/assets${path}`;
}; 