import { useContext, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function CourseItem({ course }) {
    const url = '/course/' + course._id;
    const router = useRouter();

    return (
        <div>
            <div
                className={
                    'bg-white p-5 flex justify-center relative items-center rounded-md mt-3 shadow-lg'
                }
            >
                <Link href={url}>
                    <img
                        src={course.images?.[0]}
                        className="max-w-full h-[150px]"
                    ></img>
                </Link>
            </div>
            <div className="mt-2">
                <Link href={url} className="text-base m-0">
                    {course.title}
                </Link>
            </div>
        </div>
    );
}
