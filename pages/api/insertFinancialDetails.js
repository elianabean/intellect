import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Income , Aid, Scholarships, JobType, ParentalSupport, Tuition } = req.body;

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
        .from('financial_details')
        .upsert([{
          user_id: userId,
          tuition: Tuition,
          financial_aid: Aid,
          scholarship: Scholarships,
          parent_support: ParentalSupport,
          income: Income,
          job_type: JobType,
          
        }])
        .select();

      if (error) throw error;

      res.status(200).json({ message: 'Data saved successfully', data });
      console.log(data);
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
