import 'isomorphic-fetch';

function makeFetch(url, info) {
    return fetch(url, info);
}

function json(url, method = 'GET', payload = {}) {
    let data = {
        method,
        body: JSON.stringify(payload),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic',
        })
    };
    if (method === 'GET') {
        delete data.body;
    }
    return makeFetch(url, data)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw response;
        }
    });
}

function get(url) {
    return json(url);
}

function post(url, payload) {
    return json(url, 'POST', payload);
}

function put(url, payload) {
    return json(url, 'PUT', payload);
}

function destroy(url, payload) {
    return json(url, 'DELETE', payload);
}

export {
    get,
    post,
    put,
    destroy,
    makeFetch
};