import { getNewsDetailsById } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";

 
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params
 
  // fetch data
  const news = await getNewsDetailsById(id);
 
  return {
    title: news.title,
    descripiton: news.details
  }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, 'id from news details');

    const news = await getNewsDetailsById(id);
    const { category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = news;
    console.log(news);

    return (
        <div className='max-w-[1150px] mx-auto px-5 py-10 my-8'>
            <div className='grid grid-cols-12'>
                <div className='card border col-span-9'>
                    <div className='card-body'>
                        <div>
                            <figure>
                                <Image
                                    src={image_url}
                                    width={700}
                                    height={400}
                                    alt="author img"
                                    className='flex-1'
                                />
                            </figure>
                            <h2 className="card-title font-bold text-[20px] my-3 mt-4">{title}</h2>
                            <div>
                                <p className=''>{details}</p>
                            </div>
                            <Link href={`/category/${category_id}`} className='bg-red-500 text-white font-medium text-[20px] px-4 py-2 inline-flex mt-4 cursor-pointer'>
                                <button className='flex gap-2 items-center cursor-pointer'> <FaArrowLeftLong/> All news in the category</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'></div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;