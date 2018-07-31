import configuration from './configuration';

async function convertNumbers(number) {
  if (!number)
    return null;

  try {
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
  } catch (error) {
    return null;
  }
}

export default convertNumbers;
