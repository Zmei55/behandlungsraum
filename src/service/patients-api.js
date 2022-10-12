const BASE_URL = 'http://localhost:4040';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPatients() {
  return fetchWithErrorHandling(`${BASE_URL}/patients`);
}
