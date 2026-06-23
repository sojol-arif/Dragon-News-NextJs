export async function getCategores() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
}

export async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    console.log(data, 'data from category Id');
    return data.data;
}

export async function getNewsDetailsById(news_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await res.json();
    return data.data[0];
}