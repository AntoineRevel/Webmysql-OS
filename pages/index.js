import prisma from '../lib/prisma'
import { useRouter } from 'next/router';

const { PrismaClient } = require('@prisma/client')




function SomePage(props) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
}

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
