import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store', // SSR
    // next: {revalidate: 10} // ISR 定期的にサーバーからデータを取得する
    // cache: 'no-store' // SSG ビルド時、一度だけデータ取得
  });
  const articles = await res.json();

  return articles;
};
