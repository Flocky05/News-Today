const $ = id => document.getElementById(id)
const loadCategories = () => {
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
                span.addEventListener('click', function () {

                    loadNews(data.category_id)
                })

            })
        })
}
loadCategories();



const loadNews = (category_id) => {

    document.getElementById('news-container').innerHTML = ` `
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.data.forEach(data => {
                console.log(data)
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="${data.thumbnail_url
                    }" alt="Movie"></figure>
                <div class="card-body">
                    <h2 class="card-title">${data.title}</h2>
                    <p>${data.details.slice(0, 150)}</p>
                    <div class="card-actions justify-between items-center">
                        <div class="flex justify-between">
                            <img src="${data.author.img}"
                                class="w-12 rounded-full h-12 ring-2 ring-pink-500" alt="">
                            <div class="ml-4">
                                <p class="font-medium">${data.author.name}</p>
                                <p>${data.author.published_date.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center space-x-2">
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
<label for="modal${data._id}" class="text-violet-700 modal-button cursor-pointer text-xl"><i class="fa-solid fa-arrow-right"></i></label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="modal${data._id}" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl p-0">
    <figure><img src="${data.image_url}" alt="Movie"></figure>
    <div class="p-4">
    <h3 class="font-bold text-lg">${data.title}</h3>
    <p class="py-4">${data.details}</p>
    </div>
    <div class="modal-action">
      <label for="modal${data._id}" class="btn m-10 px-6 py-2">Yay!</label>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
                `;
                document.getElementById('news-container').appendChild(div);
            })
        })
}

