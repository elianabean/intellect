import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { HousingExpenses, HousingType, FoodExpenses, Groceries, TransportationExpenses, InsuranceExpenses, InsuranceType} = req.body;

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

      const { data, error } = await supabase
        .from('expenses_details')
        .upsert([{
          user_id: userId, 
          housing_expenses: HousingExpenses,
          food_expenses: FoodExpenses,
          groceries: Groceries,
          transportation_expenses: TransportationExpenses,
          insurance_expenses: InsuranceExpenses,
          insurance_type: InsuranceType,
          housing_type: HousingType
          
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
