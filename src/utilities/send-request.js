import getCSRF from './csrftoken';

export default async function sendRequest(url, method = 'GET', payload = null, payloadIsFormData = false) {
    const options = { method };
    if (payload) {
        options.credentials = 'include';
        options.headers = payloadIsFormData ? { 'x-csrftoken': getCSRF('csrftoken') } :
            {
                'Content-Type': 'application/json',
                'x-csrftoken': getCSRF('csrftoken'),
            };
        options.body = payloadIsFormData ? payload : JSON.stringify(payload);
    }
    const res = await fetch(url, options);
    if (url === "/api/users/login/") {
        try {
            const result = await fetch("/api/users/profile/")
            const profile = await result.json();
            return profile;
        } catch (err) {
            return err;
        }
    }
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}
