import { showMessage } from "./android-functions";

class UserRequestError extends Error {
    constructor(...params) {
        super(...params)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UserRequestError)
        }
    }
}

const apiUrl = "http://192.168.1.35:8080/api";

export async function get(route = '', headers = {}) {
    let reqHeaders = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(apiUrl + route, reqHeaders);

    const contentType = response.headers.get("content-type");

    if (response.status >= 400 && response.status < 500) {
        if (contentType && contentType.indexOf("application/json") !== -1) {
            response.json()
                .then(data => {
                    if (Array.isArray(data))
                        throw new UserRequestError(data[0].split(':')[1]);
                    else {
                        if (data.message == 'Bad credentials') throw new UserRequestError('Email sau parola greşită.');
                        else throw new UserRequestError(data.message);
                    }
                })
                .catch(err => showMessage(err.message));
        }
        else {
            response.text()
                .then(data => {
                    throw new UserRequestError(data);
                })
                .catch(err => showMessage(err.message));
        }
    }
    else if (response.status >= 500) {
        showMessage('Serverul a crapat! :(');
        throw new UserRequestError('Serverul nu este disponibil...');
    }
    else {
        if (contentType && contentType.indexOf("application/json") !== -1) return response.json();
        else return response.text();
    }

}
export async function post(route = '', data, headers = {}) {
    let reqHeaders = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(apiUrl + route, reqHeaders);

    const contentType = response.headers.get("content-type");

    if (response.status >= 400 && response.status < 500) {
        if (contentType && contentType.indexOf("application/json") !== -1) {
            response.json()
                .then(data => {
                    if (Array.isArray(data))
                        throw new UserRequestError(data[0].split(':')[1]);
                    else {
                        if (data.message == 'Bad credentials') throw new UserRequestError('Email sau parola greşită.');
                        else throw new UserRequestError(data.message);
                    }
                })
                .catch(err => showMessage(err.message));
        }
        else {
            response.text()
                .then(data => {
                    throw new UserRequestError(data);
                })
                .catch(err => showMessage(err.message));
        }
    }
    else if (response.status >= 500) {
        showMessage('Serverul a crapat! :(');
        throw new UserRequestError('Serverul nu este disponibil...');
    }
    else {
        if (contentType && contentType.indexOf("application/json") !== -1) return response.json();
        else return response.text();
    }

}
export async function patch(route = '', data, headers = {}) {
    let reqHeaders = {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(apiUrl + route, reqHeaders);
    const contentType = response.headers.get("content-type");


    if (response.status >= 400 && response.status < 500) {
        if (contentType && contentType.indexOf("application/json") !== -1) {
            response.json()
                .then(data => {
                    if (Array.isArray(data))
                        throw new UserRequestError(data[0].split(':')[1]);
                    else {
                        if (data.message == 'Bad credentials') throw new UserRequestError('Email sau parola greşită.');
                        else throw new UserRequestError(data.message);
                    }
                })
                .catch(err => showMessage(err.message));
        }
        else {
            response.text()
                .then(data => {
                    throw new UserRequestError(data);
                })
                .catch(err => showMessage(err.message));
        }
    }
    else if (response.status >= 500) {
        showMessage('Serverul a crapat! :(');
        throw new UserRequestError('Serverul nu este disponibil...');
    }
    else {
        if (contentType && contentType.indexOf("application/json") !== -1) return response.json();
        else return response.text();
    }
}