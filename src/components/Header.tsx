import { MagnifyingGlass } from 'phosphor-react';
import {Button} from "./Button";

export function Header() {
    return <header className="flex items-center justify-between gap-2">
        <h1 className="font-bold text-2xl" >Art.</h1>

        <div className="lg:flex hidden items-center justify-between bg-zinc-200 text-zinc-700 rounded-md group md:w-[644px] w-full relative ">
            <input
                type="text"
                className="outline-none bg-transparent h-full  group-hover:bg-zinc-100 group-hover:focus:bg-zinc-100 w-full px-1 py-2 rounded-md transition-colors"
                placeholder="Buscar"
            />
            <MagnifyingGlass className="mx-2 absolute right-2" size={16} />
        </div>
        <Button type="button" className="right-12">
            Entrar
        </Button>
    </header>
}