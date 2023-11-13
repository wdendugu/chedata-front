import Layout from '@/components/Layout';
import { mongooseConnect } from '@/lib/mongoose';
import { Course } from '@/models/Course';
import CourseBox from '@/components/Course';
import Link from 'next/link';

export default function Courses({ courses }) {
    const activeCourses = courses.filter((course) => course.active);
    console.log(activeCourses);
    return (
        <Layout>
            <div>
                <h1>Cursos</h1>
                <div className="product-grid">
                    {activeCourses.map((course) => (
                        <CourseBox course={course} />
                    ))}
                </div>
            </div>
        </Layout>
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
