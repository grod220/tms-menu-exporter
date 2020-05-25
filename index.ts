const contentful =  require('contentful');

const client = contentful.createClient({
  space: '8fhpgddd51q7', // Menu space
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const main = async () => {
  const entry = await client.getEntry('4gUwc20r867a4aHOwfGscN');
  console.log(entry);
};

main();
