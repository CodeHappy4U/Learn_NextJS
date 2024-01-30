'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";

const About=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <button  onClick={() => router.push('/')}> Go to Home Page </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link  href= "/about/aboutcollege" >Go To About College Page</Link> <br/>
            <br/>
            <Link  href= "/about/aboutstudent" >Go To About Student Page</Link> <br/>

        </div>
    )
}
export default About;