import configuration from './configuration';

async function convertNumbers(number) {
  const rawResponse = await fetch(configuration.api + 'convert', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: number })
  });

  const content = await rawResponse.json();

  return content.data ? content.data : null;
}

export default convertNumbers;
