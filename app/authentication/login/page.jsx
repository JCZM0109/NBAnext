'use client'
import { Button, Heading, Flex, Box, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { signIn } from "next-auth/react";
import './login.css'
import LoadingBar from "@/app/components/misc/LoadingBar";



export default function logInPage() {

    const toast = useToast();

    const router = useRouter(); //defino el router para redirección

    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: "",
    });


    //el loggeo se hace con signIn de next-auth
    const loginUser = async (e) => {
        
        e.preventDefault();

        setIsLoading(true);

        const { error } = await signIn('credentials', { ...data, redirect: false });

        

        if (error) {
            console.log(error);
            toast({
                title: `${error}`,
                status: 'error',
                duration: 2500,
                isClosable: true,
            });
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <>
            
            <Box className="outer-box"
            >
                <Heading className="heading-login" variant="clear">Login</Heading>
            </Box>
            <FormControl className="div-forml">
                <form onSubmit={loginUser}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                    />
                    <FormLabel className="label-passl">Password</FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={data.password}
                        onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                    />
                    <Box className="box-buttonl">
                        <Button type="submit" className="button-login">Log in!</Button>
                    </Box>
                </form>
            </FormControl>
            {isLoading && <LoadingBar/>}

        </>
    )
};