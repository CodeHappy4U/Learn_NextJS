'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";


const Login=()=>{
    const router = useRouter();
    const navigate = (page)=>{
        router.push("/login/" + page)
    }
    return(
        <div>
            <h1>Login Page</h1>
            <Link  href= "/" >Go To Home Page</Link> 
            <br/>
            <br/>
            <button  onClick={() => navigate('loginstudent')}> Go to Login Student Page </button>
            &nbsp;
            &nbsp;
            <button  onClick={() => navigate('loginteacher')}> Go to Login Teacher Page </button>
            
        </div>
    )
}
export default Login;