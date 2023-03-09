import api from './api';

export async function getHotelWithRooms(token) {
  const response = await api.get('/hotels/1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
