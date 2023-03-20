import useAsync from '../useAsync';
import useToken from '../useToken';

import { inscription } from '../../services/inscritionApi';

export default function useInscription() {
  const token = useToken();

  const {
    loading: inscriptionLoading,
    error: inscriptionError,
    act: saveInscription,
  } = useAsync((data) => inscription(data, token), false);

  return {
    inscriptionLoading,
    inscriptionError,
    saveInscription,
  };
}
