import { cookies } from "next/headers"
import { SignJWT } from "jose"
import { NextResponse } from "next/server"


export async function POST(req) {

    const payload = await req.json()
    console.log({ payload })

    const cookieStore = await cookies()
    const token = await generateJWT(payload)
    const expire = new Date(Date.now() + 10 * 1000000)
    cookieStore.set('accessToken', token, { httpOnly: true, expire })

    return NextResponse.redirect(new URL('/'),request)
}




const generateJWT = async (payload) => {
    const header = {
        alg: "HS256",
        typ: "JWT"
    }

    const secretKey = new TextEncoder().encode('niloo')

    const token = await new SignJWT(payload)
        .setProtectedHeader(header)
        .setIssuedAt()
        .setExpirationTime('2 minute')
        .sign(secretKey)

    return token;
}