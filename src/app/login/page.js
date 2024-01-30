'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";


const Login=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>Login Page</h1>
            <Link  href= "/" >Go To Home Page</Link> 
            <br/>
            <br/>
            <button  onClick={() => router.push('/login/loginstudent')}> Go to Login Student Page </button>
            &nbsp;
            &nbsp;
            <button  onClick={() => router.push('/login/loginteacher')}> Go to Login Teacher Page </button>
            
        </div>
    )
}
export default Login;