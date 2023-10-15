import { notFound } from 'next/navigation';

import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store', // SSR
    // next: {revalidate: 10} // ISR 定期的にサーバーからデータを取得する
    // cache: 'no-store' // SSG ビルド時、一度だけデータ取得
  });

  if (!res.ok) throw new Error('エラーが発生しました');

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();

  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
    // cache: 'no-store', // SSR
    // next: {revalidate: 10} // ISR 定期的にサーバーからデータを取得する
    // cache: 'no-store' // SSG ビルド時、一度だけデータ取得
  });

  if (res.status === 404) notFound();

  if (!res.ok) throw new Error('エラーが発生しました');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();

  return articles;
};
