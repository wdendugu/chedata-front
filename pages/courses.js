import Layout from '@/components/Layout';
import { mongooseConnect } from '@/lib/mongoose';
import { Course } from '@/models/Course';
import CourseBox from '@/components/Course';
import Link from 'next/link';
import CourseItem from '@/components/CourseItem';

export default function Courses({ courses }) {
    const activeCourses = courses.filter((course) => course.active);

    return (
        <Layout>
            <h2 className="font-bold">Cursos</h2>
            <div className="product-grid">
                {courses?.length &&
                    courses.map((course) => (
                        <CourseItem course={course} key={course._id} />
                    ))}
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
