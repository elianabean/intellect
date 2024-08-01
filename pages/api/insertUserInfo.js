import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { FullName, Email, Gender, UniversityName, DegreeProgram, YearOfGraduation, Birthday } = req.body;

    try {
      const userId = "f46ad135-f439-418e-b383-459a1ea78edb";

      const { data, error } = await supabase
        .from('personal_details')
        .upsert([{
          user_id: userId, 
          first_name: FullName,
          last_name: FullName,
          birthday: Birthday,
          gender: Gender,
          college: UniversityName,
          graduation_year: YearOfGraduation,
          
        }])
        .select();

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
