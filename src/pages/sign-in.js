import {signIn, useSession, signOut} from 'next-auth/react';


function SignIn() {

    const {data: session} = useSession();

    const handleSignIn = () => {
        signIn("credentials", {username: "test", password: "12345"});
    }

    if (session) {

        return (
            <>
            Signed in as {session.user.username} <br/>
            {/* <button onClick={() => signOut}>Sign out</button> */}
            </>
        )
    }

    return (
        <>
        Not signed in <br/>
        <button onClick={() => handleSignIn()}>Sign in</button>
        </>
    )

}


export default SignIn;