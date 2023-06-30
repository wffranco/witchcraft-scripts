async function solainSellCoins(from, to) {
  const response = await fetch(`https://www.solain.im/api/v1/balance/get2?currency=${from}%2C${to}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "es",
      "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://www.solain.im/",
    "referrerPolicy": "same-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return response.json();
}
