import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useDays() {
  const token = useToken();

  const {
    data: days,
    loading: daysLoading,
    error: daysError,
    act: getdays,
  } = useAsync(() => activitiesApi.getDays(token));

  return {
    days,
    daysLoading,
    daysError,
    getdays,
  };
}
