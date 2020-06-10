const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.MANAGEMENT_TOKEN,
  });

  return contentfulClient.getSpace('8fhpgddd51q7').then((space) => space.getEnvironment('master'));
};
