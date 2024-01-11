import { User } from "lucide-react";

export function SignIn() {
    return (
        <a
            //url de login oauth do github passando para ela o id docliente que seria a variavel ambiente
            // apos o user fazer a autorização de login com a conto do github 
            // o codigo desse user que sera tranformado em um access token já é retornado 
            // na url de call back 
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
            className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                <User className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-sm leading-snug max-w-[140px]">
                <span className="underline">Crie sua conta</span>
                e salve suas memórias</p>
        </a>
    )
}