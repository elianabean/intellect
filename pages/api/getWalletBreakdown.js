import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jwtSecretKey = process.env.JWT_SECRET_KEY
    const token = req.headers['jwt-token']
    try {
      const userId = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'jwt-token': req.headers['jwt-token']
        }
      })
      .then(response => response.json())
      .then(data => data.data.id)

      console.log(userId);

      const [personal_details, wants_details, financial_details, expenses_details] = await Promise.all([
        supabase.from('personal_details').select('*').eq('user_id', userId).single(),
        supabase.from('wants_details').select('*').eq('user_id', userId).single(),
        supabase.from('financial_details').select('*').eq('user_id', userId).single(),
        supabase.from('expenses_details').select('*').eq('user_id', userId).single()
      ]);

      if (personal_details.error || wants_details.error || financial_details.error || expenses_details.error) throw new Error();

      return res.status(200).json({"personal_details": personal_details.data, "wants_details": wants_details.data, "financial_details": financial_details.data, "expenses_details": expenses_details.data});
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
