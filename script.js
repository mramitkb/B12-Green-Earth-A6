// Categories Container--------------------------------------------------------
const loadCategoriesTree = async() => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    const res = await fetch(url);
    const json = await res.json();
    displayCategoriesTree(json.categories);
}
loadCategoriesTree();
    // Show Categories
const displayCategoriesTree = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach((category) => {
        const div = document.createElement('div');
        div.classList.add('text-center')
        div.innerHTML = `
        <button onclick="loadSelectedPlants(${category.id})" class="hover:bg-[#15803D] hover:text-white px-3 py-2 w-full md:text-left cursor-pointer rounded-xl text-center">
        ${category.category_name}
        </button>
    `
    categoriesContainer.appendChild(div);
    })
}



// All Plants Data in Middle Containers----------------------------------------
const loadAllPlantsDefault = async() => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    const res = await fetch(url);
    const json = await res.json();
    showAllPlantsDefault(json.plants);
}
loadAllPlantsDefault();
    // Show All Plants
const showAllPlantsDefault = (plants) => {
    const allPlantsContainer = document.getElementById('all-plants-container');
    plants.map(plant => {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="p-4 bg-white rounded-lg space-y-3 flex items-center justify-between flex-col w-full">
                            <img class="bg-cover rounded-lg w-full h-52 object-cover" src="${plant.image}" alt="">
                            <h2 class="font-semibold text-left w-full">${plant.name}</h2>
                            <p class="text-[#4C545F] text-sm text-justify">${plant.description}</p>
                            <div class="flex items-center justify-between w-full text-sm md:text-base">
                                <button class="text-[#15803D] bg-[#DCFCE7] rounded-3xl px-4 py-1 font-medium cursor-pointer">${plant.category}</button>
                                <p class="font-semibold">৳<span>${plant.price}</span></p>
                            </div>
                            <button class="bg-[#15803D] text-white rounded-3xl w-full px-3 py-2 lg:px-5 lg:py-3 cursor-pointer font-medium">Add to Cart</button>
                        </div>
        `
        allPlantsContainer.appendChild(div);
    })
}



// Plants show by Categories--------------------------------------------------------
const loadSelectedPlants = async(id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    showSelectedPlantsByCategory(json.plants);
}
    // Show Plants by categories
const showSelectedPlantsByCategory = (plants) => {
    
}