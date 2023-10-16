import { NextApiResponse } from 'next';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

import { supabase } from '@/utils/supabaseClient';

export async function GET(req: Request, res: NextApiResponse) {
  const id = req.url.split('/blog/')[1];

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!data) {
    notFound();
  }

  if (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const id = req.url.split('/blog/')[1];

  const { error: deleteError } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }
  return res.status(200).json({ status: 200 });
}
