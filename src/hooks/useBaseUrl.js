import { useMemo } from 'react';
import { getBaseUrl, getApiUrl, getAssetUrl } from '../config/config';

export const useBaseUrl = () => {
  const baseUrl = useMemo(() => getBaseUrl(), []);
  const apiUrl = useMemo(() => getApiUrl(), []);
  
  const getImageUrl = (path) => {
    if (path.startsWith('http')) return path;
    return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
    console.log(path);
  };

  return {
    baseUrl,
    apiUrl,
    getImageUrl,
    getAssetUrl
  };
}; 