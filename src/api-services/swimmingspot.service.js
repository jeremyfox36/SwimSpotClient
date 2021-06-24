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
  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  },
  methods: {
  },
};
