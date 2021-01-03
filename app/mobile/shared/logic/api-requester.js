const apiUrl = "http://192.168.1.35:8080/api";

export async function post(route = '', data = {}) {
    const response = await fetch(apiUrl + route, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function get(route = '') {
    const response = await fetch(apiUrl + route, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}