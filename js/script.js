const dataOnLoad = (id) =>{

    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url) 
   .then(res => res.json())
   .then(data => showNewsDataOnDisplay(data.data.news_category))
   .catch(err => console.log(err))
}

const showNewsDataOnDisplay = (NewsCatagories) =>{

    const dadUlDiv = document.getElementById('ulDiv')

    NewsCatagories.forEach( catagories => {
        // console.log(catagories);

        const li = document.createElement('li')
        li.innerHTML =`
        <a onclick="loadNewsCatagories('${catagories.category_id}')"     
        class="text-lg    py-2 lg:inline-flex flex text-gray-400 hover:bg-purple-200 rounded-lg px-1 hover:text-white"
      >
      ${catagories.category_name}
      </a>
        `
        dadUlDiv.appendChild(li)
       
        
    });


}

const loadNewsCatagories = (category_id) =>{
  
    

    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => newsCatagoriesDetails(data.data))

}

const newsCatagoriesDetails = (data) =>{
   const dataLength = data.length;
   
   const blogNumber = document.getElementById('howManyBlogShow')

//    blogNumber.innerText= dataLength + ' items found on this category'
   if(dataLength !== 0){
    blogNumber.innerText= dataLength + ' items found on this category'
   }else{
    blogNumber.innerText= 'No News found on this category'
   }

    const newsCard = document.getElementById('news-card')
    newsCard.innerHTML=``

    data.forEach( element => {
        // console.log(element);

        const div = document.createElement('div')
        div.classList.add("container","p-5","bg-white","shadow-lg")
        div.innerHTML =`

        <a
  href="#"
  class="flex flex-col bg-white rounded-lg   md:flex-row hover:bg-gray-100 "
>
  <img
    class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="${element.thumbnail_url}"
    alt=""
  />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
     ${element.title}
    </h5>
    <p class="mb-3 font-normal text-slate-500">
     ${element.details.slice(0,400)}...
    </p>

    <div class="mt-3 flex justify-between">
      <div class="flex">
        <img class="w-12 h-12 rounded-full" src="${element.author.img}" alt="" />
        <div class="ml-4">
          <h5 class="font-bold">${element.author ? element.author.name : 'Author Name data not available'}</h5>
          <p class="text-slate-500">${element.author ? element.author.published_date : 'No published date available'}</p>
        </div>
      </div>

      <div class="flex mt-3">
        <i class="fa-solid fa-street-view text-xl"></i>
        <h3 class="text-base ml-3  font-bold">${element.total_view}</h3>
      </div>

      <div class="text-base mt-3 flex">
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>

      </div>

      <div>
        <button class="modal-open bg-fav text-white px-2 py-1 rounded-lg ">
        
          More <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</a>
        
        `
        newsCard.appendChild(div)
        
    });

}

dataOnLoad();

