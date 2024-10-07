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
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
