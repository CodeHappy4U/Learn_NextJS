'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";

const About=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <Link  href= "/" >Go To Home Page</Link> <br/>
            <br/>
            <button  onClick={() => router.push('/')}> Go to Home Page </button>
        </div>
    )
}
export default About;