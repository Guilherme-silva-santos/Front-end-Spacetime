import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    // recuperando os parametros que nesse caso seria o código/token do github
    const {searchParams} = new URL(request.url)
    const code = searchParams.get('code')

    const registerResponse = await api.post('/register',{
        code,
    })

    const { token } = registerResponse.data

    // redireciona o user para a url base da aplicação
    const redirectURL = new URL('/', request.url)
    
    const cookiesExpiresInSeconds = 60 * 60 * 24 * 30

    return NextResponse.redirect(redirectURL, {
        // guardadno o token do user nos cookies
        headers:{
            'Set-Cookie': `token=${token}; Path=/; max-age=${cookiesExpiresInSeconds}`
        }
    })
}