import axios from '../../utils/axios';

export const chat = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('chat', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
