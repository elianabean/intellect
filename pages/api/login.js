import supabase from '../../lib/supabaseClient';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Email, Password } = req.body;

    try {
      const user = await supabase.from('users').select('*').eq('email', Email).single();
      console.log(user.error)
      if (user.error) {
        console.log(user.error)
        throw new Error();
      }

      if (user.data.password !== Password) res.status(401).json({message: "Incorrect Email/Password"});
      else {
        let data = {
          email: user.data.email
        }
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
      
        const token = jwt.sign(data, jwtSecretKey)
        res.status(200).json({token});
      }
    } catch (error) {
      console.error('Error fetching data');
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
