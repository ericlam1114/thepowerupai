import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Link from 'next/link';



export default function Home() {
  return (
   <div className='bg-gradient-to-r from-yellow-300 to-yellow-50'>
   <Link href="/"> <Header></Header></Link>
    <GoogleAnalytics trackPageViews gaMeasurementId="G-LJ6YRN6FD6" />
<Hero/>
{/* <Footer/> */}
   </div>
  )
}
