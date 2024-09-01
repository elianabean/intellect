import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userId = "f46ad135-f439-418e-b383-459a1ea78edb"; 

      const { data, error } = await supabase
        .from('debt_limit')
        .select('monthly_expenses, daily_expenses, willingness, daily_purchase_limit, monthly_extrapolation, daily_surplus, monthly_days_saved, weekly_days_saved, consistency')
        .eq('user_id', userId)
        .single();

      if (error) throw error;

      res.status(200).json({ message: 'Data retrieved successfully', data });
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Error retrieving data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}