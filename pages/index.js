import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <div className="bg-gray-100 h-[100vh] ">
            <Layout>
                <Hero />
            </Layout>
        </div>
    );
}
