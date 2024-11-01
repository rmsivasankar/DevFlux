import { FormatDate } from '@/lib/utils'
import React from 'react'
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const ProjectCard = ( {post}: {post: ProjectTypeCard }) => {
  const { _createdAt, views, author: { _id: authorId, name }, title, category, id, images, description } = post;
  return (
    <li className='border-2 border-blue-950 flex flex-col py-3 px-3'>
        <div className="flex-between flex justify-between">
            <p className='m-2 px-2 bg-slate-700 text-white text-sm rounded-full'>
                {FormatDate(_createdAt)}
            </p>
            <div className="m-2 flex gap-1.5">
              <FaEye className='size-6 text-primary' />
              <span>{views}</span>
            </div>
        </div>
        <div className="flex-between flex mt-1 gap-3">
          <div className="flex-1 flex justify-between">
            <div>
              <Link href={`/user/${authorId}`}>
                <p className="text-xs line-clamp-1">
                  Developer: {name}
                </p>
              </Link>
              <Link href={`/projects/${id}`}>
                <h3 className='font-bold line-clamp-1 mt-1'>
                  Project: {title}
                </h3>
              </Link>
            </div>
            <Link className='' href={`/user/${authorId}`}>
              <Image src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt='avatar' width={40} height={40} className='rounded-full' />
            </Link>
          </div>
        </div>
        <Link href={`/projects/${id}`}>
          <p className='text-xs'>
            {description}
          </p>
          <img src={images} alt='project_image' className='rounded-md mt-1' />
        </Link>
        <div className="flex-between gap-3 mt-2">
          <Link href={`/query=${category.toLowerCase()}`}>
            <p className="text-sm font-bold">#{category}</p>
          </Link>
          <Button>
            <Link href={`/projects/${id}`}>
              Details
            </Link>
          </Button>
        </div>
    </li>
  )
}

export default ProjectCard
