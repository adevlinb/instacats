import sendRequest from './send-request';

const BASE_URL = '/api/comments/';

export async function postComment(commentData) {
    return sendRequest(BASE_URL, 'POST', commentData);
}
