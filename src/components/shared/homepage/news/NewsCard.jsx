import React from 'react';
import Image from 'next/image';
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

const NewsCard = ({ news }) => {
    console.log(news, 'news card from');
    const { _id, title, details, author, total_view, category_id, image_url, thumbnail_url,rating } = news;

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className='bg-[#F3F3F3] flex justify-between items-center p-4'>
                <div className='flex flex-wrap gap-2 flex-row items-center'>
                    <Image
                        src={author?.img}
                        width={40}
                        height={40}
                        alt="author img"
                        className='flex-1 w-full rounded-full'
                    />
                    <div>
                        <h2 className='font-bold'> {author.name}</h2>
                        <p> {author.published_date} </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-[20px]">{title}</h2>
                <figure className='py-2'>
                    <Image
                        src={image_url}
                        width={300}
                        height={240}
                        alt="Shoes"
                        className='w-full' />
                </figure>
                <p className='line-clamp-3'>{details}</p>
                <div className="card-actions justify-between flex-wrap items-center">
                    <div className='flex gap-2 flex-1 w-full items-center'>                        
                        <div className='flex gap-1 items-center'><FaStar className='text-yellow-500'/> {rating.number}</div>
                        <h2 className='flex gap-1 items-center'><FaEye /> {total_view}</h2>
                    </div>
                    <Link href={`/news/${_id}`}>
                        <button className="btn">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;