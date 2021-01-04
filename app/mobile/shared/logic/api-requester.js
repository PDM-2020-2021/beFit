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
    return response.json();
}
export async function post(route = '', data = {}, headers = {}) {
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
    return response.json();
}
export async function patch(route = '', data = {}, headers = {}) {
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
    console.log(apiUrl + route);
    const response = await fetch(apiUrl + route, reqHeaders);
    return response.json();
}
