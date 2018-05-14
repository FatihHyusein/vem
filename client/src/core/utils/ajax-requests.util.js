const baseUrl = "http://localhost:9000/api/";

export const ajax = {
    getXml: ({ url }) => {
        return fetch(`${url}`, {
            cache: 'no-cache',
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.text())
            .then(responseAsText => {
                const parser = new DOMParser();
                return parser.parseFromString(responseAsText, "text/xml");
            })
        // parses response to JSON

    },
    get: ({ url, getData }) => {
        return fetch(`${baseUrl}${url}${getData ? '?data=' + encodeURIComponent(JSON.stringify(getData)) : ''}`, {
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json()) // parses response to JSON
    },
    post: ({ url, postData }) => {
        return fetch(`${baseUrl}${url}`, {
            body: JSON.stringify(postData), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *omit
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *same-origin
            redirect: 'follow', // *manual, error
            referrer: 'no-referrer', // *client
        })
            .then(response => response.json()) // parses response to JSON
    },
    put: ({ url, data }) => {
        return fetch(`${baseUrl}${url}`, {
            body: JSON.stringify(data),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT',
            mode: 'cors',
        })
            .then(response => response.json()) // parses response to JSON
    },
    delete: ({ url }) => {
        return fetch(`${baseUrl}${url}`, {
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'DELETE',
            mode: 'cors',
        })
            .then(response => response.json()) // parses response to JSON
    }
};
