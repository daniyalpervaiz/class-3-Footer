import Link from "next/link"

export default function NavBar(){
    return ( <header>
        <ol  style={{display:"flex",justifyContent:"space-around",fontSize:"20px",color:"black",backgroundColor:"purple"}}>
      <li> <Link href="/">Home</Link></li>
     <li>  <Link href="/about">About</Link></li>
     <li> <Link href="/products">Products</Link></li> 
       <li><Link href="/contactus">Contact US</Link></li>


       </ol>
    </header>
    )}