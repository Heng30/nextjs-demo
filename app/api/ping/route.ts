import { cookies, headers } from 'next/headers';
import type { NextRequest } from 'next/server';

export const revalidate = 60;

export async function GET(request: NextRequest) {
  const res = await fetch('https://heng30.xyz/ping', {
    headers: [
      ['Content-Type', 'application/json'],
      ['Api-Key', 'foo'],
    ],
    // next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.text();

  const cookieStore = cookies();
  const token = cookieStore.get('token');
  console.log(token);

  const headersList = headers();
  const referer = headersList.get('referer');

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  return Response.json(
    { data },
    {
      status: 200,
      headers: {
        'Set-Cookie': `token=${token ? token.value : 'foo'}`,
        referer: referer ? referer : '',
        query: query ? query : '',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

export async function POST() {
  // const res = await fetch('https://heng30.xyz/ping', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': 'bar',
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // });
  // const data = await res.json();

  await new Promise((r) => setTimeout(r, 1000));
  return Response.json({ data: 'pong' });
}
