import Link from 'next/link';

export default function CourseBox({ course }) {
    return (
        <div key={course._id}>
            <Link href={`/course/${course._id}`} className="flex">
                <h1>{course.title}</h1>
                <h1>{course.description}</h1>
                <h1>{course.duration}</h1>
                <h1>{course.priceAr}</h1>
            </Link>
        </div>
    );
}
