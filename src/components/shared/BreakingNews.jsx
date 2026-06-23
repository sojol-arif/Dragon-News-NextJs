import React from 'react';
import Marquee from "react-fast-marquee";

const news = [
    {
        _id:"1",
        title: "Breaking News: Major Event Unfolds in the city",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship"
    }
]

const BreakingNews = () => {
    return (
        <div className='max-w-[1150px] w-full px-5 mx-auto'>
            <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 p-4'>
                <button className='btn bg-pink-500 text-white'>Latest News</button>
                <Marquee pauseOnHover>
                    {news.map(n  => 
                        <span key={n._id}>{n.title}</span>
                    )}
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;