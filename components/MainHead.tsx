import Head from 'next/head';
type Props = {
  // children: React.ReactNode;
  title: string;
};
const MainHead = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="search like spotlight" />
      <link rel="icon" href="/main-favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/main-favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/main-favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/main-favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/main-favicon/site.webmanifest" />
    </Head>
  );
};

export default MainHead;
