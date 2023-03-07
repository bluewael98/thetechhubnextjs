import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav>
      <ul>
        
        <li>
          <Link href="/stockmarketdata">
       
              Stock Market Data
         
          </Link>
        </li>
        <li>
          <Link href="/stockmarketnews">
            
              Stock Market News
            
          </Link>
        </li>
      </ul>
    </nav>
  )
}



export default Navbar