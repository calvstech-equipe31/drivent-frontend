import api from './api';

export async function inscription(number, token) {
  const response = await api.post('/inscription', { activityId: number }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}
