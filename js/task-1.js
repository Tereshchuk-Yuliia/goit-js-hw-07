
// const categories = document.querySelectorAll('#categories .item');

// console.log(`Number of categories: ${categories.length}`);

// categories.forEach((category) => {
// const categoryName = category.querySelector('h2').textContent;
// const elementsCount = category.querySelectorAll('ul li').length;
// console.log(`Category: ${categoryName}`);
// console.log(`Elements: ${elementsCount}`);
// });


const category = document.querySelector("#categories");
const quantityItem = document.querySelectorAll(".item");
console.log("Number of categories:", quantityItem.length);
quantityItem.forEach(elem => {
    const h2 = elem.querySelector("h2").textContent;
    const elements = elem.lastElementChild.children.length;
    console.log(`Category: ${h2}`);
    console.log(`Elements: ${elements}`);
});