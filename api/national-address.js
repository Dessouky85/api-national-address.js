// api/national-address.js

export default async function handler(req, res) {
  const { shortaddress } = req.query;

  if (!shortaddress) {
    return res.status(400).json({ error: 'Short address is required' });
  }

  const url = `http://apina.address.gov.sa/NationalAddress/NationalAddressByShortAddress/NationalAddressByShortAddress?format=json&shortaddress=${shortaddress}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch address' });
  }
}
