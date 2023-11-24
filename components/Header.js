import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-[#673eba] shadow-2xl flex justify-between px-[3rem] h-[90px] items-center">
            <div>
                <Link href={'/'} className="text-white no-underline">
                    <Image
                        src="/LogoBlanco.png"
                        width={180}
                        height={180}
                        alt="Picture of the author"
                        className="ml-5"
                    ></Image>
                </Link>
            </div>
            <div className="justify-center">
                <Link className="header-links" href={'/'}>
                    Asesorias
                </Link>
                <Link className="header-links" href={'/courses'}>
                    Capacitaciones
                </Link>
                <Link className="header-links" href={'/contact'}>
                    Contactanos
                </Link>
            </div>
        </header>
    );
}
