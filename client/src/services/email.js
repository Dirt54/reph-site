import * as baseService from './base';

function sendEmail(data) {
    return baseService.post('/api/email', data);
}

export { all, one, insert, update, destroy };