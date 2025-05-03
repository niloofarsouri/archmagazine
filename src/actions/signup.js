'use server';

import path from 'path';
import fs from 'fs/promises';
import * as yup from 'yup';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers';
import { json } from 'stream/consumers';

const schema = yup.object().shape({
    username: yup.string().required("should fill username"),
    password: yup.string().required("should fill password"),
    number: yup.number().required("should fill password"),
})

const FILE_PATH = path.join(process.cwd(), 'public/users.json')

export async function SignupAction(initialValue, formData) {

    console.log({ formData })
    const cookieStore = await cookies()
    const authToken = cookieStore.get('accessToken')

    const username = formData.get('username')
    const password = formData.get('password')
    const number = formData.get('number')
    const user = { username, password, number, authToken }
    console.log({ user })

    try {
        const validData = await schema.validate(user)
        Object.assign(validData, { userId: (Math.floor(Math.random() * 1000000)) })
        const userData = await readUsers()
        userData.push(validData)
        await writeUser(userData)

    } catch (error) {
        return error.message
    }
}


export const readUsers = async () => {
    const dataUser = await fs.readFile(FILE_PATH)
    const data = await JSON.parse(dataUser)
    return data
}

export const writeUser = async (data) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(data))
}