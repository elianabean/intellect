import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ECExpenses, ClothingExpenses, ClothingType, SubscriptionExpenses, SubscriptionType, EntertainmentExpenses, EntertainmentType} = req.body;

    try {
      const userId = "f46ad135-f439-418e-b383-459a1ea78edb";

      const { data, error } = await supabase
        .from('wants_details')
        .upsert([{
          user_id: userId, 
          ec_expenses: ECExpenses,
          clothing_expenses: ClothingExpenses,
          clothing_type: ClothingType,
          subscription_expenses: SubscriptionExpenses,
          subscription_type: SubscriptionType,
          entertainment_expenses: EntertainmentExpenses,
          entertainment_type: EntertainmentType
          
        }]);

      if (error) throw error;

      res.status(200).json({ message: 'Data saved successfully', data });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
