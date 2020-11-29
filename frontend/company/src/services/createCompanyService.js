import { API_BASE_URL } from '../constants';

const createCompanyService = async (requestData) => {
  const response = await fetch(`${API_BASE_URL}/company`, {
    method: 'POST',
    requestData,
  });

  return await response.json();
};

export default createCompanyService;
