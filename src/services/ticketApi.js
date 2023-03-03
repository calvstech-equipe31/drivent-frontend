import api from './api';

export async function getTicketTypes() {
  const response = await api.get('/auth/types');
  return response.data;
}
//