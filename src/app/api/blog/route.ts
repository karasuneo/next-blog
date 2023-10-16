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
