import axios from 'axios';

const apiToken = process.env.NEXT_PUBLIC_BEEHIIV_API_KEY;

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://api.beehiiv.com/v2/publications/pub_1f3c50eb-659b-4ec3-b6cc-3b03f584b96d/subscriptions',
        req.body,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;
