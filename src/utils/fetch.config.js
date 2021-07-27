const url = 'http://localhost:2900';

const fetch_ = async (type, path = '') => {
    try {
        return await fetch(`${url}${path}`, type)
            .then(errorHandler)
            .then(response => { return response; })
            .catch(error => { return { error }; });
    } catch (error) {
        return { error };
    }
};

export default fetch_;

const errorHandler = (response) => {
    if (!response.ok) {
        return { error: response.statusText, errorCode: response.status };
    }
    return response.json();
};

export const http = {
    get: () => Object.assign(options, { method: 'GET', body: undefined }),
    post: (body) => Object.assign(options, { method: 'POST', body: JSON.stringify(body) })
};

const options = {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
};