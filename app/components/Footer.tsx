import Link from "next/link"

export default function Footer(){
    return ( <footer style={{backgroundColor:"lightblue",fontSize:"20px",marginTop:"26%",color:"black"}}><ol>
      <li> <Link href="/">Home</Link></li>
     <li>  <Link href="/about">About</Link></li>
     <li> <Link href="/products">Products</Link></li> 
       <li><Link href="/contactus">Contact US</Link></li>
<p style={{textAlign:"center"}}>Daniyal Pervaiz | @copyright2024</p>


       </ol>
    </footer>



    )
}