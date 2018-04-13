var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN_KEY });



exports.sendEmail = function (fromName, fromAddress, fromSubject, fromContent) {
    var data = {
        to: 'lukerobinsona@gmail.com',     
        from: fromAddress,
        subject: fromSubject,
        html: "(Client's name is " + fromName + ".)" + "<br>" + "<br>" + fromContent
      };
       
      return mailgun.messages().send(data);
}