import { useContext, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function CourseItem({ course }) {
    const url = '/course/' + course._id;
    const router = useRouter();

    return (
        <div className="grid-12-8 shadow-lg p-4 h-[300px] rounded-tl-[10px] rounded-tr-[60px]  bg-gray-200"  >
            <div className='pl-4 flex flex-col justify-between'>
                <div>
                    <h2 className='text-3xl my-2 '>{course.title}</h2>
                    <p  className='text-xl my-2 '>{course.description}</p>
                    <h2>Duracion del curso {course.duration} semanas</h2>
                </div>
                <div className='mb-4' >
                    <Link href={url} className='base-btn filled-btn'> Mas info</Link>   
                </div>
            </div>
            <div>
            <img
        src={course.images?.[0]}
        className="max-w-full max-h-[90%]"
   ></img>
            </div>
        </div>
    );
}


// <div
// className={
//     'bg-white p-5 flex justify-center relative items-center rounded-md mt-3 shadow-lg'
// }
// >
// <Link href={url}>
//     <img
//         src={course.images?.[0]}
//         className="max-w-full h-[150px]"
//     ></img>
// </Link>
// </div>
// <div className="mt-2">
// <Link href={url} className="text-base m-0">
//     {course.title}
// </Link>
// </div>