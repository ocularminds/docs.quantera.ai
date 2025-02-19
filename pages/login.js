"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { pageMap } from "../components/Constants";
import StyledLayout from "../components/StyledLayout";
import { styles } from "../components/Constants";

export async function getStaticProps() {  
  //const pageMap = await getPageMap('./pages') // Path to your pages directory

  return {
    props: {
      pageMap, // Pass the pageMap to the component
    },
  }
}

export function Access(){
  return(
    <>
    <h1 style={styles.title}>Login</h1>
    <button style={styles.button} onClick={() => signIn()}>
      Sign In
    </button>
    <button
      style={styles.button}
      onClick={() => window.location.href = "/subscribe"}
    >
      Subscribe
    </button>
    </>
  )
}

export function Profile(){
  return(<>
        Signed in as {session.user.email} <br />
        <button style={styles.button} onClick={() => signOut()}>Sign out</button>
      </>)
}

export default function Login() {
  const { data: session } = useSession();
  
  return (
    <StyledLayout>
    <div style={styles.container}>
      <div style={styles.card}>
      {session && <Profile/>}
      {!session && <Access/>}
      </div>
      </div>
    </StyledLayout>
  )
}