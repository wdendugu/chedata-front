import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, addclass }) {
    return (
        <>
            <Header />
            <div className={`centered-box mb-6 ${addclass} mt-20`}>
                {children}
            </div>
            <Footer />
        </>
    );
}
