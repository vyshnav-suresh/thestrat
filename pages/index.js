import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Home1 from '@/components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <Home1/>
    </Layout>
  )
}
