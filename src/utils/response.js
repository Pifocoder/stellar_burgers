function checkResponse(resp) {
    if (resp.ok) {
        return resp.json();
    }
    return Promise.reject(`Ошибка ${resp.status}`);
}
export default checkResponse