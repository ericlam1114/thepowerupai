import Head from 'next/head'
import Image from 'next/image'
import Hero from '../component/Hero'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Link from 'next/link';



export default function Home() {
  return (
   <div className='bg-gradient-to-r from-black to-black'>
   <Link href="/"> <Header></Header></Link>
   <Navbar></Navbar>
    <GoogleAnalytics trackPageViews gaMeasurementId="G-M6XCYMEDCL" />
<Hero/>
{/* <Footer/> */}
   </div>
  )
}