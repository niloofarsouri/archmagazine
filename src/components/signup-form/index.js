'use client'

import { SignupAction } from "@/actions/signup"
import { useActionState, useRef, useState } from "react"



function SignupForm() {

    const [data, formAction, isPending] = useActionState(SignupAction, "ثبت نام کاربر")
    const inputRefs = useRef({})
    const [error, setError] = useState(null)

    const handleSubmit = () => {

        const { username, password, number } = inputRefs.current

        fetch('/api/auth', {
            method: 'POST',
            body: ({ username: username.value, password: password.value, number: number.value })
        })
            .then((res) => { })
            .catch((error) => error)
    }

    return (
        <>
            <div className="flex flex-col items-center p-9 m-auto border-2 rounded-sm">

                {error && <div className="text-red-600 text-2xl">{error}</div>}

                <h1>Signup</h1>

                <form
                    className="w-fit p-2 flex flex-col items-center"
                    action={formAction}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="نام کاربری"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        ref={(element) => inputRefs.current.username = element}
                    />

                    <input
                        type="text"
                        name="password"
                        placeholder="رمزعبور"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        ref={(element) => inputRefs.current.password = element}
                    />

                    <input
                        type="number"
                        name="number"
                        placeholder="شماره موبایل"
                        className="p-2 my-2 border-slate-300 border-2 rounded"
                        ref={(element) => inputRefs.current.number = element}
                    />

                    <input
                        type="submit"
                        value="Sign up"
                        className="w-full bg-black text-white p-2 my-2 border-slate-300 border-2 rounded"
                    />

                    {isPending ? 'Loading...' : ''}

                </form>

                {data}

            </div>
        </>
    )
}


export default SignupForm