import axios from 'axios';

const apiToken = process.env.NEXT_PUBLIC_BEEHIIV_API_KEY;

const handler = async (req, res) => {
    console.log("API Key: ", apiToken); // Add this line to log the API token
  
    if (req.method === 'POST') {
      try {
        const response = await axios.post(
          'https://api.beehiiv.com/v2/publications/pub_42da6bd2-3c4a-46cc-906d-960b21fa8f3d/subscriptions',
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
