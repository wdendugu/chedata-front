import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp,faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bottom-0 w-full bg-[#673eba] shadow-2xl text-white p-4 flex justify-between px-[3rem] items-center">
            <div>
                <h2>Chedata image</h2>
            </div>
            <div className="space-x-4">
                <Link href="https://www.linkedin.com/company/chedata/about/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="h-7"/>
                </Link>
                <Link href="https://wa.me/5491124891612?text=I'm%20interested%20in%20your%20car%20for%20sale" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-7"/>
                </Link>
                <Link href="https://www.instagram.com/chedata.ar/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="h-7"/>
                </Link>
            
            </div>
        </footer>
    );
}
