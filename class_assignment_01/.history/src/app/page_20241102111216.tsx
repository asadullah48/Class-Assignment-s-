import Image from "next/image";
import Link from "next/link"
import styles from "./"

export default function Home() {
const inlineStyle = {
  color:"blue",
  // fontSize:"2rem",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  margin:"4rem",
}

  return (
 <>
 <div className={styles.home}>
 <div className={styles.nav} >
   <Link href="/"  >home</Link>
   <Link href="/about" >about</Link>
   <Link href="/contact" >contact</Link>
   <Link href="/services"  >services</Link>
   </div>
   <div style={inlineStyle}>
    <p>Assalam Alikum, Sir ✋🏻. Hope you will be fine by the grace of Almighty ALLAH, & doing good allaround.  </p>
    </div>
  
   </div>
 
 </>
  );
}