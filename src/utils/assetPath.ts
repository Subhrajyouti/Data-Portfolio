
/**
 * Helper function to get the correct asset path considering the base URL
 * Works for both development and production (GitHub Pages)
 */
export const getAssetPath = (path: string): string => {
  // If the path already starts with http/https, return it as is
  if (path.startsWith('http')) return path;
  
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use root-relative paths
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base path from Vite config
  // The repository name is now Data-Portfolio
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
