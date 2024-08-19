import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { MonthlyExpenses, DailyExpenses, Willingness, DailyPurchaseLimit, MonthlyExtrapolation, DailySurplus, MonthlyDaysSaved, WeeklyDaysSaved, Consistency} = req.body;

    try {
      const userId = "f46ad135-f439-418e-b383-459a1ea78edb";

      const { data, error } = await supabase
        .from('debt_limit')
        .upsert([{
          user_id: userId, 
          monthly_expenses: MonthlyExpenses,
          daily_expenses: DailyExpenses,
          willingness: Willingness,
          daily_purchase_limit: DailyPurchaseLimit,
          monthly_extrapolation: MonthlyExtrapolation,
          daily_surplus: DailySurplus,
          monthly_days_saved: MonthlyDaysSaved,
          weekly_days_saved: WeeklyDaysSaved,
          consistency: Consistency
          
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
