import Head from 'next/head'
import Price from '../components/Price'
import prisma from '../lib/prisma'
const { PrismaClient } = require('@prisma/client')

export async function getServerSideProps() {
  const posts = await prisma.priceETH.findMany()
 return {
   props : {posts: JSON.parse(JSON.stringify(posts)) }
	  }
	}
  export default ({posts}) =>
<ul> 
  bonjour
  {posts.map(post => (
  <p> {post.ETHBTC} {post.ETHUSD}</p>
   ))}
 </ul>
	;
