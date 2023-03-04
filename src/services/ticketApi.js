import api from './api';

export async function save(body, token) {
  const response = await api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getTicketTypes() {
  const response = await api.get('/auth/types');
  return response.data;
}
//
