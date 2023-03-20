import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useActivity() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getactivity,
  } = useAsync(() => activitiesApi.getActivity(token));

  return {
    activity,
    activityLoading,
    activityError,
    getactivity,
  };
}
