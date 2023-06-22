let products = [
    
    {
        productName :"slim laptop",
        category:"laptop",
        price:"300",
        image:"images.jpg"
        
    },
    {
        
    productName :"smart watch",
    category:"watch",
    price:"80",
    image:"images (3).jpg"

},
{
    productName :"smart mobile",
    category:"mobile",
    price:"200",
    image:"images (5).jpg"
    
},
{
    productName :"smart mobile vivo",
    category:"mobile",
    price:"210",
    image:"images (4).jpg"
    
},
{
    productName :"windows",
    category:"laptop",
    price:"210",
    image:"download (1).jpg"
    
},

{
    productName :"digital camera",
    category:"camera",
    price:"180",
    image:"camera2.jpg"
},
{
    productName :"nothing one",
    category:"mobile",
    price:"180",
    image:"images (6).jpg"
},

{
    productName :"red camera",
    category:"camera",
    price:"180",
    image:"camera1.jpg"
},

{
        
    productName :"smart watch",
    category:"watch",
    price:"80",
    image:"images (2).jpg"

},


]

 
function displayProducts(products) {
    document.getElementById("products").innerHTML = null
    console.log(document.getElementById("products").innerHTML)
    for(let i of products){
        
    // creating card
    
    
    let card = document.createElement("div")
    // document.body.appendChild(card);
    
    // card should have a category
    card.classList.add("card","i.category")
    
    // image div
    
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")
    
    // image tag
    
    let image = document.createElement("img")
    image.setAttribute("src",i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    
    
    document.getElementById("products").appendChild(card)
    }
}



     // Function to filter and display product items by category
  function filterProduct(category) {
    var filteredProducts = products;
  
    if (category !== "all") {
      filteredProducts = products.filter(function (x) {
        return x.category === category;
      });
    }
  
    displayProducts(filteredProducts);
}
  


 // Get the category buttons and add click event listeners
var categoryButtons = document.querySelectorAll(".button-value");
categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var selectedCategory = button.dataset.category;
    filterProduct(selectedCategory);
  });
});
