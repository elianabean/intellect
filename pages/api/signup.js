import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { FullName, Email, Password } = req.body;

    try {
      const { data, error } = await supabase
        .from('users')
        .insert([{
          email: Email,
          username: FullName,
          password: Password,
        }])
        .select();

      const [personal_details, wants_details, financial_details, expenses_details, debt_limit] = await Promise.all([
        supabase.from('personal_details').insert([{user_id: data[0].id}]).select(),
        supabase.from('wants_details').insert([{user_id: data[0].id}]).select(),
        supabase.from('financial_details').insert([{user_id: data[0].id}]).select(),
        supabase.from('expenses_details').insert([{user_id: data[0].id}]).select(),
        supabase.from('debt_limit').insert([{user_id: data[0].id}]).select()
      ]);

      if (personal_details.error || wants_details.error || financial_details.error || expenses_details.error || debt_limit.error) throw new Error();

      if (error) {
        if (error.code == '23505') {
          return res.status(409).json({ message: 'Email already exists' });
        }
        else {
          throw(error)
        }
      }

      res.status(200).json({ message: 'Data saved successfully', data });
    } catch (error) {
      // console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
