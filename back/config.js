
module.exports = {
    emailConfig: {
      service: process.env.EMAIL_SERVICE || 'Gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ketata.15.selim@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'leda wusr vlgk lefn',
      },
    },
    fromEmail: process.env.FROM_EMAIL || 'ketata.15.selim@gmail.com',
    port: process.env.PORT || 8000,
  };
  