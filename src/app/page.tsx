import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*esquerda*/}
      <div className="flex flex-col items-start left-5 justify-between px-38 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* -translate-y-1/2 translate-x-1/2  hack para ficar centralizado na tela indpendente do tamanho  blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-e-full bg-purple-700 opacity-50 blur-full"/>
        { /*Stripes*/}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
        <SignIn />

        <Hero />

        <Copyright />
      </div>

      {/* direita */}
      <div className=" flex flex-col p-16 bg-[url(../assets/bg-stars.svg) bg-cover]">
        <EmptyMemories />
      </div>
    </main>
  );
}
