import axios from '../../utils/axios';

export const login = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/login`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const registerSeller = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/register-seller`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const registerBuyer = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`auth/register-buyer`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const forgot = data => {
  return new Promise((resolve, reject) => {
    axios
      .put('auth/forgot', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const reset = (data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`auth/reset/token=${token}`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
