import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { HousingExpenses, HousingType, FoodExpenses, Groceries, TransportationExpenses, InsuranceExpenses, InsuranceType} = req.body;

    try {
      // // Insert a dummy user into the users table
      // const { data: userData, error: userError } = await supabase
      //   .from('users')
      //   .insert([{
      //     username: Email, 
      //     password: 'dummyPassword', 
      //     email: Email,
      //     phone: '123-456-7890' 
      //   }])
      //   .select('id')
      //   .single();

      // if (userError) throw userError;

      const userId = "f46ad135-f439-418e-b383-459a1ea78edb";

      const { data, error } = await supabase
        .from('expenses_details')
        .insert([{
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
