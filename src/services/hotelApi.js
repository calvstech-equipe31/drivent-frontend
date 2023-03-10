import api from './api';

export async function getHotelWithRooms(token) {
  const response = await api.get('/hotels/1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotels(token) {
  const response = await api.get('/hotels/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}