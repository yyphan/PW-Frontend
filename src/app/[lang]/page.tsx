import { redirect } from 'next/navigation';

export default async function LangHome({ params } : { params: Promise<{ lang : string }>}) {
  const { lang } = await params;

  // home page is techie by default
  redirect(`/${lang}/techie`);
}
