import api from './api';

export async function getDays(token) {
  const response = await api.get('/activities/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getLocations(token) {
  const response = await api.get('/activities/locations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivity(token) {
  const response = await api.get('/activities/activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
