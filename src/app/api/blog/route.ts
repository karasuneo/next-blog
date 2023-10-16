import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { supabase } from '@/utils/supabaseClient';

export async function GET(req: Request, res: NextApiResponse) {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content } = await req.json();
  const { data, error } = await supabase
    .from('posts')
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json(data, { status: 201 });
}
