import { Html, Head, Main, NextScript } from "next/document";

export default function Home() {
  return (        
      <Html lang="pt-br">       
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>    
  );
} 
