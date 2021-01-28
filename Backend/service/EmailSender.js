const {SocketLabsClient, BulkMessage, BulkRecipient } = require('@socketlabs/email');

exports.sendContactUsInfo= async (userMessage) =>{
    var client = new SocketLabsClient(parseInt(process.env.APP_EMAIL_SERVER_ID), process.env.APP_EMAIL_API_KEY);

    const message = {
        to: process.env.APP_FORWARD_EMAIL_ADDRESS,
        from: process.env.APP_CONTACT_EMAIL_ADDRESS,
        subject: userMessage.subject,
        textBody: userMessage.body,
        messageType: 'basic'
    }

    return client.send(message);
}