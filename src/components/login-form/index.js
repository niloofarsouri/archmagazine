'use client'

import { LoginAction } from "@/actions/login"
import Link from "next/link"
import { useActionState } from "react"



function LoginForm() {

    const [data, formAction, isPending] = useActionState(LoginAction, "حساب کاربری ندارید؟")

    return (
        <>
            <div className="flex flex-col items-center p-9 m-auto border-2 rounded-sm">

                <h1>Login </h1>

                <form className="w-fit p-2 flex flex-col items-center" action={formAction} >
                    <input
                        type="text"
                        name="username"
                        placeholder="نام کاربری"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    <input
                        type="text"
                        name="password"
                        placeholder="رمز عبور"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    <input
                        type="submit"
                        value="Log in"
                        className="w-full bg-black text-white p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    {isPending ? 'Loading...' : ''}

                </form>

                {data}
                
                <Link 
                href={'/signup'}
                className="text-blue-700 dark:text-white"
                >"ثبت نام"</Link>

            </div>
        </>
    )
}


export default LoginForm