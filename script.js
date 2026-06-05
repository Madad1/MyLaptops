let cart = 0;

const laptops = [

{
name:"Dell XPS 13",
price:1299,
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},
{
name:"Dell XPS 15",
price:1499,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},
{
name:"HP Spectre x360",
price:1399,
image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600"
},
{
name:"HP Envy 15",
price:1099,
image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600"
},
{
name:"Lenovo ThinkPad X1",
price:1299,
image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},
{
name:"Lenovo Legion 5",
price:1199,
image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600"
},
{
name:"MacBook Air M3",
price:1399,
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},
{
name:"MacBook Pro M4",
price:2299,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},
{
name:"Asus ROG Zephyrus",
price:1699,
image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
{
name:"Asus VivoBook",
price:899,
image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600"
},
{
name:"Acer Predator",
price:1499,
image:"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600"
},
{
name:"Acer Aspire 7",
price:799,
image:"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600"
},
{
name:"MSI Raider",
price:1999,
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600"
},
{
name:"MSI Katana",
price:1199,
image:"https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600"
},
{
name:"Razer Blade 15",
price:2499,
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
},
{
name:"Samsung Galaxy Book",
price:999,
image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
},
{
name:"Microsoft Surface",
price:1399,
image:"https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=600"
},
{
name:"Alienware M18",
price:2899,
image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600"
},
{
name:"Gigabyte Aero",
price:1799,
image:"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=600"
},
{
name:"Huawei MateBook",
price:1099,
image:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600"
},
{
name:"Toshiba Dynabook",
price:799,
image:"https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600"
},
{
name:"LG Gram",
price:1299,
image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600"
},
{
name:"Dell Inspiron",
price:699,
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
},
{
name:"HP Pavilion",
price:749,
image:"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600"
},
{
name:"Lenovo IdeaPad",
price:699,
image:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
},
{
name:"Asus TUF Gaming",
price:999,
image:"https://images.unsplash.com/photo-1593640495397-57a30d6ebf37?w=600"
},
{
name:"MSI Thin",
price:899,
image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600"
},
{
name:"Acer Nitro 5",
price:949,
image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600"
},
{
name:"Framework Laptop",
price:1499,
image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
},
{
name:"Dell Latitude",
price:1099,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
}

];

const products = document.getElementById("products");

function showProducts(data){

products.innerHTML="";

data.forEach(item=>{

products.innerHTML += `
<div class="card">
<img src="${item.image}">
<h3>${item.name}</h3>
<p class="price">$${item.price}</p>
<button onclick="addCart()">Add To Cart</button>
</div>
`;

});

}

showProducts(laptops);

function addCart(){

cart++;

document.getElementById("cartCount").innerText = cart;

alert("Product Added To Cart");

}

document.getElementById("searchInput")
.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

const filtered = laptops.filter(laptop =>
laptop.name.toLowerCase().includes(value)
);

showProducts(filtered);

});