import Layout from '@/components/Layout';
import StudentForm from '@/components/StudentForm';
import { mongooseConnect } from '@/lib/mongoose';
import { Course } from '@/models/Course';
import { Student } from '@/models/Student';

export default function CoursePage({ course }) {
    return (
        <div className="bg-gray-300 h-[500px]">
            <Layout>
                <div className="grid-12-8 mt-10">
                    <div>
                        <h1 className="text-[3.2rem] font-bold mb-3">
                            {course.title}
                        </h1>
                        <p className="text-[1.9rem] mb-6">
                            {course.description}
                        </p>
                        <h1 className="text-lg">
                            {' '}
                            Duracion : {course.duration} semanas
                        </h1>
                        <h1>{course.title}</h1>
                    </div>
                    <div className="">
                        <StudentForm course={course} />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const course = await Course.findById(context.query.id);
    return {
        props: {
            course: JSON.parse(JSON.stringify(course)),
        },
    };
}
