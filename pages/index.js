import Head from 'next/head'
import Price from '../components/Price'
import prisma from '../lib/prisma'
const { PrismaClient } = require('@prisma/client')

export async function getStaticProps() {
  const posts = await prisma.priceETH.findMany()
  console.log({posts})

 return {
   props : {posts: JSON.parse(JSON.stringify(posts)) }
	  }
	}
  console.log('{post}');
  export default ({posts}) =>
<ul> 
  bonjour
  {posts.map(post => (
  <li key={post.Time}>{post.Time}{post.ETHBTC}{post.ETHUSD}</li>
   ))}
 </ul>
	;
