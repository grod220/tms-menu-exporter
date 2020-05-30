const contentful = require('contentful');

const client = contentful.createClient({
  space: '8fhpgddd51q7', // Menu space
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const main = async () => {
  try {
    const categories = await client.getEntries({
      content_type: 'category',
    });
    const test = 1;
  } catch (e) {
    console.log(e);
  }
};

main();
