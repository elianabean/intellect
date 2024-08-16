import supabase from '../../lib/supabaseClient';

export default async function handler(req, res) {
    
  if (req.method === 'POST') {
    const { userId, day, date, fileName, fileContent } = req.body;

    try {
      // Convert base64 to buffer
      const fileBuffer = Buffer.from(fileContent, 'base64');

      // Create a unique file name
      const storageFileName = `${userId}_${day}_${date}_${fileName}`;

      // Upload the file to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('screenshots')
        .upload(storageFileName, fileBuffer, {
          contentType: 'image/png', // Assuming png, adjust if needed
        });

      if (uploadError) throw uploadError;

      // Get the public URL of the uploaded file
      const { publicURL, error: urlError } = supabase.storage
        .from('screenshots')
        .getPublicUrl(storageFileName);

      if (urlError) throw urlError;

      // Insert the file URL into the database
      const { data: insertData, error: insertError } = await supabase
        .from('user_files')
        .insert([{
          user_id: userId,
          day_of_week: day,
          file_url: publicURL,
          upload_date: new Date(date),
        }]);

      if (insertError) throw insertError;

      res.status(200).json({ message: 'File uploaded successfully', url: publicURL });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
