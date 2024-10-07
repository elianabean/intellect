import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jwtSecretKey = process.env.JWT_SECRET_KEY
    const token = req.headers['jwt-token']
    try {
      // const verified = jwt.verify(token, jwtSecretKey)
      // if (verified) {
      //   console.log(verified.email);
      //   const user = await supabase.from('users').select('*').eq('email', verified.email).single();
      //   if (user.error) throw new Error();

        const userId = "f46ad135-f439-418e-b383-459a1ea78edb"; // TEMPORARY: Need to upload form data to user using cookies & test

        const [personal_details, wants_details, financial_details, expenses_details] = await Promise.all([
          supabase.from('personal_details').select('*').eq('user_id', userId).single(),
          supabase.from('wants_details').select('*').eq('user_id', userId).single(),
          supabase.from('financial_details').select('*').eq('user_id', userId).single(),
          supabase.from('expenses_details').select('*').eq('user_id', userId).single()
        ]);

        if (personal_details.error || wants_details.error || financial_details.error || expenses_details.error) throw new Error();

        return res.status(200).json({"personal_details": personal_details.data, "wants_details": wants_details.data, "financial_details": financial_details.data, "expenses_details": expenses_details.data});
      // } else {
      //   // Access Denied
      //   return res.status(401).json({ message:  'error' })
      // }
    } catch (error) {
      console.error('Error fetching data');
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
