// import { NextApiRequest, NextApiResponse } from 'next';
// import { notFound } from 'next/navigation';

// import { supabase } from '@/utils/supabaseClient';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { id } = req.query;

//   switch (req.method) {
//     case 'GET':
//       const { data, error } = await supabase
//         .from('posts')
//         .select('*')
//         .eq('id', id)
//         .single();

//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }

//       if (!data) {
//         notFound();
//       }
//       return res.status(200).json(data);

//     case 'DELETE':
//       const { error: deleteError } = await supabase
//         .from('posts')
//         .delete()
//         .eq('id', id);

//       if (deleteError) {
//         return res.status(500).json({ error: deleteError.message });
//       }
//       return res.status(200).json({ message: '削除しました' });
//   }
// }
