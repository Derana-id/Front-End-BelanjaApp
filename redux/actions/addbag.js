import axios from 'axios';

export const addCart = data => {
  const token = localStorage.setItem('token');
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/cart`, data, {
        headers: {
          token
        }
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
