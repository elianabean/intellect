import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userId = "f46ad135-f439-418e-b383-459a1ea78edb";

      const [wants_details, financial_details, expenses_details] = await Promise.all([
        supabase.from('wants_details').select('*').eq('user_id', userId).single(),
        supabase.from('financial_details').select('*').eq('user_id', userId).single(),
        supabase.from('expenses_details').select('*').eq('user_id', userId).single()
      ]);

      if (wants_details.error || financial_details.error || expenses_details.error) throw new Error();

      res.status(200).json({"wants_details": wants_details.data, "financial_details": financial_details.data, "expenses_details": expenses_details.data});
    } catch (error) {
      console.error('Error fetching data');
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
