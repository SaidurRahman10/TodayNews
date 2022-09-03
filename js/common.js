const loadCategorie = async () => {
    toggleLoader(true);
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    fetch(url)
    .then(res => res.json())
    .then(data =>  displayCategorie(data.data.news_category))
    .catch(error => console.log(error))
   

}
const displayCategorie = categorie => {
    const catagories = document.getElementById("catagories");
    catagories.innerHTML=``;
    categorie.forEach(catagori => {
        const catagoriLi = document.createElement('li');
        catagoriLi.classList.add('nav-item');
        catagoriLi.innerHTML = `
        <a class="nav-link bg-dark text-white rounded rounded-pill" href="#" onclick="displayId(${catagori.category_id})">${catagori.category_name}</a>
        `
        catagories.appendChild(catagoriLi);
    })
}

const displayId = async (id) => {
    toggleLoader(true);
   
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    try{
        catagoriItem(data.data);
       
    }catch(err){
        console.log(error)
    }
    
    
    const h = document.getElementById('hf');
if(data.data.length !== 0){
h.innerText = data.data.length +  '  found on This Catagories';
}else{
    h.innerText = 'No News Data Available No'
}

}


const catagoriItem = item => {
    const items = document.getElementById('card');
    items.innerHTML = '';
    const arr = [];
    const result = item.sort((a, b) => (b.total_view - a.total_view));

    result.forEach(itemCard => {
        // let array = itemCard.total_view === null ? '0' : itemCard.total_view;
        let array = arr.push(itemCard.total_view);


        const catagoriCard = document.createElement('div');
        catagoriCard.classList.add('row')
        catagoriCard.innerHTML = `
        <div class="col-md-4 my-5">
                        <img src="${itemCard.image_url}"
                            class="img-fluid rounded-start" style="max-width: 100%;" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${itemCard.title}</h5>
                            <p class="card-text">${itemCard.details.slice(0, 350)},...<small class='bg-dark text-white rounded-pill px-2 '>Read More</small> </p>
                        </div>
                        <div class="px-3">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <div class="d-flex align-self-center">
                                        <img src="${itemCard.author.img}"
                                            class="rounded-circle" style="height: 50px; width: 50px;" alt="">
                                        <div>
                                        <h5 class="card-text px-2">${itemCard.author.name === null ? "No active data" : itemCard.author.name}</h5>
                                        <p class="card-text"><span class="card-text ms-4"></span>${itemCard.author.published_date}</p></div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <h5 class="card-text text-bold"><i class="fa-regular fa-eye fs-5 me-2"></i>${itemCard.total_view === null ? "No View" : itemCard.total_view
            }</h5>
                                </li>
                                <li class="nav-item">

                                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal_${itemCard._id}"><i
                                            class="fa-sharp fa-solid fa-arrow-right fs-3"></i></a>
                                </li>
                            </ul>
                            <!-- Button trigger modal -->
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal_${itemCard._id}" tabindex="-1" aria-labelledby="exampleModalLabel_${itemCard._id}"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel_${itemCard._id}">Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="card" style="width: 18rem;">
                                        <img src="${itemCard.author.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                          <h2 class="card-text fs-4">Name: ${itemCard.author.name === null ? "No active data" : itemCard.author.name}</h2>
                                          <p class="card-text"><span class="card-text text-bolder">Publishe Date: </span>${itemCard.author.published_date}</p>
                                          <p class="card-text"><span class="card-text text-bolder fs-5">Rating's: </span>${itemCard.rating.number}</p>
                                          <h5 class="card-text text-bold"><i class="fa-regular fa-eye fs-5 me-2"></i>${itemCard.total_view === null ? "No View" : itemCard.total_view
            }</h5>
                                        </div>
                                      </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal Close  -->


                        </div>
                    </div>`
        items.appendChild(catagoriCard);


    })


    //stop loader
    toggleLoader(false);

}



const toggleLoader = load => {
    const loadSection = document.getElementById('loader');
    if (load) {
        loadSection.classList.remove('d-none');
    } else {
        loadSection.classList.add('d-none');
    }
}


document.getElementById('btn-blog').addEventListener('click',function(){


    const dadDiv= document.getElementById('card')
    dadDiv.innerHTML=``;
    
    const div =  document.createElement('div')
    div.innerHTML=`
    
    <div class="accordion mt-5" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                What is difference between const let and var types?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <span class="text-xl  mt-2">(i) Var</span>
            <p class="w-1/2 text-gray-500 mb-10">Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand var more before we discuss those issues.</p>
            <span class="text-xl  mt-2">(ii) Let</span>
            <p class="w-1/2 text-gray-500 mb-10">let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.</p>
            <span class="text-xl  mt-2">(iii) Const</span>
            <p class="w-1/2 text-gray-500 mb-10">This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is the difference between arrow function and regular function?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <span class="text-xl  mt-2">(i) Regular function</span>
            <p class="w-1/2 text-gray-500 mb-10">Inside of a regular JavaScript function, this value (aka the execution context) is dynamic.
         
              The dynamic context means that the value of this depends on how the function is invoked. In JavaScript, there are 4 ways you can invoke a regular function.
              
              During a simple invocation the value of this equals to the global object (or undefined if the function runs in strict mode.</p>
            <span class="text-xl  mt-2">(ii) Arrow function</span>
            <p class="w-1/2 text-gray-500 mb-10">The behavior of this inside of an arrow function differs considerably from the regular function's this behavior. The arrow function doesn't define its own execution context.
         
              No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Difference between map,foreach,filter and find?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <span class="text-xl  mt-2">(i) .forEach()</span>
            <p class="w-1/2 text-gray-500 mb-10">.forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.</p>
            <span class="text-xl  mt-2">(ii) .map()</span>
            <p class="w-1/2 text-gray-500 mb-10">.map() executes the same code on every element in an array and returns a new array with the updated elements.</p>
            <span class="text-xl  mt-2">(iii).filter()</span>
            <p class="w-1/2 text-gray-500 mb-10">The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.</p>
            <span class="text-xl  mt-2">(iv) .Find()</span>
            <p class="w-1/2 text-gray-500 mb-10">The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.</p>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Why i use template string in javascript?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <p class="w-1/2 text-gray-500 mb-10">Template literals provide an easy way to interpolate variables and expressions into strings.It can dynamic website.

            The method is called string interpolation.</p>
            </div>
        </div>
    </div>
    </div>
    
    `
    dadDiv.appendChild(div)
})




loadCategorie();
displayId(8);
