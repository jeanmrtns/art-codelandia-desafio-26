export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between md:mt-16 mt-8">
            <h1 className="font-bold text-2xl">Art.</h1>

            <nav className="mt-4 md:mt-0">
                <ul className="flex items-center gap-8">
                    <li>
                        <a className="font-semibold uppercase" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="font-semibold uppercase" href="#">Buscar</a>
                    </li>
                    <li>
                        <a className="font-semibold uppercase" href="#">Explorar</a>
                    </li>
                    <li>
                        <a className="font-semibold uppercase" href="#">Sobre nós</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}