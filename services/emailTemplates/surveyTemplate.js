const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style= "text-align: center;">
        <h3>We'd love to hear your feedback!</h3>
        <p>Please take a moment to complete our survey and let us know how we can improve our services.</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes/-recipientEmail-" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no/-recipientEmail-" style="display: inline-block; padding: 10px 20px; background-color: #f44336; color: white; text-decoration: none; border-radius: 5px;">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
