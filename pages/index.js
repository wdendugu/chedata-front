import { mongooseConnect } from '@/lib/mongoose';
import { Course } from '@/models/Course';
import Link from 'next/link';

export default function Home({ courses }) {
    return (
        <div>
            <h1>Cursos</h1>
            {courses.map((course) => (
                <div key={course._id}>
                    <Link href={`/course/${course._id}`}>
                        <h1>{course.title}</h1>
                        <h1>{course.description}</h1>
                        <h1>{course.duration}</h1>
                        <h1>{course.priceAr}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();
    const courses = await Course.find();

    return {
        props: {
            courses: JSON.parse(JSON.stringify(courses)),
        },
    };
}
