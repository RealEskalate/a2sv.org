/* eslint-disable no-undef */
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

exports.sendEmailToUser= async (userInfo) =>{
    var client = new SocketLabsClient(parseInt(process.env.APP_EMAIL_SERVER_ID), process.env.APP_EMAIL_API_KEY);

    let basicMessage = new BulkMessage();

    basicMessage.apiTemplate = 3;
    basicMessage.subject = "Thank you for your support!";
    basicMessage.setFrom(process.env.APP_CONTACT_EMAIL_ADDRESS);
    
    
    let user = new BulkRecipient(userInfo.email);
    user.addMergeData("FirstName", userInfo.name);
    user.addMergeData("SenderAddress",process.env.APP_CONTACT_EMAIL_ADDRESS);
    basicMessage.to.push(user);

    return client.send(basicMessage);
}