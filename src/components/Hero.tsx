import Image from "next/image";
import NlwLogo from "../assets/nlw-spacetime-log.svg"

export function Hero() {
    return (
        <div className="space-y-5">
            <Image src={NlwLogo} alt="Logo nlw" />

            <div className="max-w-[420px] space-y-1">
                <h1 className="text-5xl font-bold leading-tight text-gray-50 ">Sua cápsula do tempo</h1>
                <p className="text-lg leading-relaxed">
                    Colecione moemntos marcantes da sua jornada e compartilhe(se quiser) com o mundo!
                </p>
            </div>

            <a
                href=""
                className="uppercase inline-block rounded-full bg-green-500 
                    px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600"
            >
                Cadastrar lembrança
            </a>
        </div>
    )
}