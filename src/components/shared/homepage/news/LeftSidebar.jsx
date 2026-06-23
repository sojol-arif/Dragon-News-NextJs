import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <>
            <h3 className="font-bold mb-3 text-[20px]">All Categores</h3>
            <ul className="flex flex-col gap-3">
                {categories.news_category.map(n =>
                    <li key={n.category_id} className={`${activeId == n.category_id && 'bg-slate-100'} rounded-md font-bold text-center p-2 font-medium text-[20px]`}>
                        <Link href={`/category/${n.category_id}`}>{n.category_name}</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default LeftSidebar;