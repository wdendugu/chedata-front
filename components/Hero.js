import Link from 'next/link';

export default function Hero() {
    return (
        <div className=" max-w-[100%] mx-auto ">
            <div className="max-w-[50%] px-3">
                <h1 className="text-6xl font-bold w-[70%] py-10 text-[#33245e] ">
                    Estamos comprometidos con la excelencia
                </h1>
                <p className="text-2xl py-5 font-semibold">
                    En CheData, desbloqueamos el poder de los datos para que tu
                    negocio brille con inteligencia y precisión.
                </p>
                <div className="mt-4">
                    <Link className="base-btn filled-btn" href={'/contact'}>
                        Contactanos
                    </Link>
                    <Link className="base-btn empty-btn" href={'/'}>
                        Nuestros Servicios
                    </Link>
                </div>
            </div>
            <div className="max-w-[50%] px-3">
                <h1 className="text-6xl font-bold w-[70%] py-10 text-[#33245e] ">
                    Estamos comprometidos con la excelencia
                </h1>
                <p className="text-2xl py-5 font-semibold">
                    En CheData, desbloqueamos el poder de los datos para que tu
                    negocio brille con inteligencia y precisión.
                </p>
                <div className="mt-4">
                    <Link className="base-btn filled-btn" href={'/contact'}>
                        Contactanos
                    </Link>
                    <Link className="base-btn empty-btn" href={'/'}>
                        Nuestros Servicios
                    </Link>
                </div>
            </div>
            <div className="max-w-[50%] px-3">
                <h1 className="text-6xl font-bold w-[70%] py-10 text-[#33245e] ">
                    Estamos comprometidos con la excelencia
                </h1>
                <p className="text-2xl py-5 font-semibold">
                    En CheData, desbloqueamos el poder de los datos para que tu
                    negocio brille con inteligencia y precisión.
                </p>
                <div className="mt-4">
                    <Link className="base-btn filled-btn" href={'/contact'}>
                        Contactanos
                    </Link>
                    <Link className="base-btn empty-btn" href={'/'}>
                        Nuestros Servicios
                    </Link>
                </div>
            </div>
        </div>
    );
}
