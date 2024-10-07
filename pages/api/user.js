import supabase from '../../lib/supabaseClient';
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jwtSecretKey = process.env.JWT_SECRET_KEY
    const token = req.headers['jwt-token']
    try {
      const verified = jwt.verify(token, jwtSecretKey)
      if (verified) {
        console.log(verified.email);
        const user = await supabase.from('users').select('*').eq('email', verified.email).single();
        if (user.error) throw new Error();

        return res.status(200).json({ data: user.data })
      } else {
        // Access Denied
        return res.status(401).json({ message:  'error' })
      }
    } catch (error) {
      // Access Denied
      return res.status(401).json({ message: 'error' })
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} not allowed`);
  }
}