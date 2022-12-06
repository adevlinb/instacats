
export default function getCSRF(name) {
    let cookie = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let item = cookies[i].trim();
            let idx = item.indexOf("=");
            cookie = item.slice(idx+1)
            }
        }
    return cookie;
}
