
import { getCategores, getNewsByCategoryId } from '@/lib/data';
import LeftSidebar from '@/components/shared/homepage/news/LeftSidebar';
import NewsCard from '@/components/shared/homepage/news/NewsCard';
import RightSidebar from '@/components/shared/homepage/news/RightSidebar';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategores();
    console.log(categories, 'categories');

    const news = await getNewsByCategoryId(id);
    console.log(news, 'news only');

    return (
        <main>
            <div className="max-w-[1150px] px-5 mx-auto my-[60px]">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-3">
                        <LeftSidebar categories={categories} activeId={id} />
                    </div>
                    <div className="col-span-6">
                        <div className='flex flex-col gap-3'>
                            {news.length>0? (news.map(n =>
                                <NewsCard key={n._id} news={n}/>
                            )) : (
                                <div> No news found!</div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewsCategoryPage;