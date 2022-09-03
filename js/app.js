const $ = id => document.getElementById(id)
const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            data.data.news_category.forEach(data => {
                const span = document.createElement('span');
                span.className = 'btn btn-ghost'
                span.innerText = data.category_name;
                document.getElementById('category-container').appendChild(span);

            })
        })
}
loadNews();


const loadCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.data.forEach(data => {
                // console.log(data)
                const span = document.createElement('span');
                span.innerHTML = `
                <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="${data.thumbnail_url
                    }" alt="Movie"></figure>
                <div class="card-body">
                    <h2 class="card-title">${data.title}</h2>
                    <p>${data.details.slice(0, 150)}</p>
                    <div class="card-actions justify-between">
                        <div class="flex justify-between">
                            <img src="${data.author.img}"
                                class="w-12 rounded-full h-12 ring-2 ring-pink-500" alt="">
                            <div class="ml-4">
                                <p class="font-medium">${data.author.name}</p>
                                <p>${data.author.published_date.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <i class="fa-regular fa-eye"></i>
                            <div>
                                <p>${data.total_view}</p>
                            </div>
                        </div>
                        <div class="text-xl">
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <button class="text-violet-700"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
                `;
                document.getElementById('news-container').appendChild(span);
            })
        })
}

loadCategory();