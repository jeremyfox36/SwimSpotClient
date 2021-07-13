import Axios from 'axios';

const RESOURCE_NAME = '/swimmingspot';

export default {
  getAll(token) {
    return Axios.get(RESOURCE_NAME, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  get(id, token) {
    return Axios.get(`${RESOURCE_NAME}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  create(data, token) {
    return Axios.post(RESOURCE_NAME, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, data, token) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  delete(id, token) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  methods: {
  },
};
