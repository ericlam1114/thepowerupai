import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Header from '../component/Header'
import Footer from '../component/Footer'



export default function Home() {
  return (
   <div className='bg-gradient-to-r from-yellow-300 to-yellow-50'>
    <Header></Header>
<Hero/>
{/* <Footer/> */}
   </div>
  )
}
