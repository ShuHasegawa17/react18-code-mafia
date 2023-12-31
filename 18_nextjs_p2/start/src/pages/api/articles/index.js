import axios from 'axios';

const JSON_SERVER_URL = `${process.env.JSON_SERVER_URL}/articles`;

export default async function handler(req, res) {
  console.log(JSON_SERVER_URL, 'URL!!');
  try {
    if (req.method === 'GET') {
      const result = await axios.get(JSON_SERVER_URL).then((res) => res.data);
      return res.status(200).json(result);
    }
  } catch {}

  return res.status(500).json({
    error: {
      status: 500,
      code: 'bad request',
      message: '不正なリクエストです',
    },
  });
}
