import * as baseService from './base';

function sendEmail(name, email, subject, message) {
    return baseService.post('/api/email', {
        name,
        email, 
        subject,
        message
    });
}

export { sendEmail };