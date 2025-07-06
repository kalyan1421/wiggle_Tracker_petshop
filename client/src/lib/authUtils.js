export const getAuthUrl = () => {
  return '/api/login';
};
 
export const isUnauthorizedError = (error) => {
  return error?.response?.status === 401;
}; 