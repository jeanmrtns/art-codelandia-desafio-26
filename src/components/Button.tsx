import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    children: any;
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className="bg-blue-600 rounded px-12 py-2 text-zinc-50 font-bold hover:bg-blue-500 transition-colors outline-none md:w-auto"
        >
            { children }
        </button>
    );
}