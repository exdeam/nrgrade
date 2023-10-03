import Head from 'next/head'
import { geologica } from './fonts'
import './style.css'
import Header from './component/header'
import Menu from './component/menu'
import Footer from './component/footer'


export default function RootLayout({  
  children
}) {
  return (
    <html lang="ru" className={geologica.className}>
      <Head>
      
      </Head>
      <body>
        <section>
          <div className='header'>
          <Header />
        </div>
        </section>
        <main className='main'>
          <div className='container'>
            <Menu />            
          </div>
          {children}
          <Footer />          
        </main>
      </body>
    </html>
  )
}
