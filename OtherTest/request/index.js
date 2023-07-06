const { net } = require('electron');
const fs = require('fs');

const request = net.request({
  method: 'GET',
  url: 'http://127.0.0.1:33175/api/protocol_test/test/exportTestData?testId=6',
});

request.on('response', (response) => {
  const chunks = [];

  response.on('data', (chunk) => {
    chunks.push(chunk);
  });

  response.on('end', () => {
    const binaryData = Buffer.concat(chunks);
    fs.writeFile('response.bin', binaryData, (error) => {
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Binary data saved to response.bin');
      }
    });
  });
});

request.on('error', (error) => {
  console.error('Error:', error);
});

request.end();