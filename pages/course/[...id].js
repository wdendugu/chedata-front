import StudentForm from '@/components/StudentForm';
import { mongooseConnect } from '@/lib/mongoose';
import { Course } from '@/models/Course';
import { Student } from '@/models/Student';

export default function CoursePage({ course }) {
    return (
        <div>
            <h1>{course.title}</h1>
            <StudentForm course={course} />
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
