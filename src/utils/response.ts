function checkResponse(resp: Response)  {
  if (resp.ok) {
    return resp.json();
  }
  return Promise.reject(`Ошибка ${resp.status}`);
}
export default checkResponse;
