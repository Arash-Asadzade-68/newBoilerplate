import Head from 'next/head'

type Props = {
  pageTitle: string
}

const Meta = ({ pageTitle }: Props) => <Head>
  <title>{pageTitle}</title>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link rel="icon" href="/images/favicon_32x32.png" sizes="32x32"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.0/antd.css" />
  <link rel="stylesheet" type="text/css" href="/css/global.css" />
        
</Head>


export default  Meta;
