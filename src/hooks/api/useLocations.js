import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useLocations() {
  const token = useToken();

  const {
    data: locations,
    loading: locationsLoading,
    error: locationsError,
    act: getlocations,
  } = useAsync(() => activitiesApi.getLocations(token));

  return {
    locations,
    locationsLoading,
    locationsError,
    getlocations,
  };
}
