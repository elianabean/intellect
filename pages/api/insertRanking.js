import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ExpenseRankings, SecondExpenseRankings, Lifestyle} = req.body;

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

      console.log(JSON.stringify(ExpenseRankings));
      console.log(JSON.stringify(SecondExpenseRankings));
      console.log(Lifestyle);

    //   const { data, error } = await supabase
    //     .from('rankings')
    //     .upsert([{
    //       user_id: userId, 
    //       ec_expenses: ECExpenses,
    //       clothing_expenses: ClothingExpenses,
    //       clothing_type: ClothingType,
    //       subscription_expenses: SubscriptionExpenses,
    //       subscription_type: SubscriptionType,
    //       entertainment_expenses: EntertainmentExpenses,
    //       entertainment_type: EntertainmentType
          
    //     }]);

    //   if (error) throw error;

    //   res.status(200).json({ message: 'Data saved successfully', data });
    res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
