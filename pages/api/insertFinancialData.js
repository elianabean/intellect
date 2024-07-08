import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      user_id,
      annual_salary,
      monthly_debt,
      non_debt_expenses,
      monthly_savings_goal,
      credit_score,
      location,
      current_rent,
    } = req.body;

    const { data, error } = await supabase
      .from('financial_data')
      .insert([
        {
          user_id,
          annual_salary,
          monthly_debt,
          non_debt_expenses,
          monthly_savings_goal,
          credit_score,
          location,
          current_rent,
        },
      ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
