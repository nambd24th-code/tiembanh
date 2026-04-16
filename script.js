const defaultProducts = [
["Chocolate",120000,"https://images.unsplash.com/photo-1578985545062-69928b1d9587",5],
["Dâu",110000,"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",4],
["Matcha",130000,"https://images.unsplash.com/photo-1606313564200-e75d5e30476f",6],
["Phô Mai",140000,"https://images.unsplash.com/photo-1551024506-0bccd828d307",3],
["Tiramisu",150000,"https://images.unsplash.com/photo-1571115177098-24ec42ed204d",5],
["Caramel",100000,"https://images.unsplash.com/photo-1600891964599-f61ba0e24092",2],
["Chuối",90000,"https://images.unsplash.com/photo-1605475128023-8c0b6d3c2c3b",7],
["Red Velvet",160000,"https://images.unsplash.com/photo-1599785209707-28c9c7c4a8d9",4],
["Bắp",95000,"https://images.unsplash.com/photo-1603532648955-039310d9ed75",6],
["Sầu riêng",170000,"https://images.unsplash.com/photo-1621303837174-89787a7d4729",2],
["Oreo",120000,"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",5],
["Trái cây",140000,"https://images.unsplash.com/photo-1505253216365-1860a6f26e6b",3],
["Sữa",110000,"https://images.unsplash.com/photo-1559620192-032c4bc4674e",6],
["Hạnh nhân",150000,"https://images.unsplash.com/photo-1519864600265-abb23847ef2c",4],
["Trà sữa",130000,"https://images.unsplash.com/photo-1587248720327-8eb72564be1e",5],
["Bánh Cam",90000,"https://images.unsplash.com/photo-1604908176997-4317c61e95c1",3],
["Bánh Chanh",95000,"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",4],
["Bánh Dừa",100000,"https://images.unsplash.com/photo-1605478900021-5f1c59c3b62f",6],
["Bánh Socola Chip",120000,"https://images.unsplash.com/photo-1599785209707-28c9c7c4a8d9",2],
["Bánh Bơ",105000,"https://images.unsplash.com/photo-1559620192-032c4bc4674e",5]
];

localStorage.setItem("products", JSON.stringify(defaultProducts));

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("products");

products.forEach((p,i)=>{
container.innerHTML+=`
<div class="product-card">
<img src="${p[2]}">
<h3>${p[0]}</h3>
<p>${p[1].toLocaleString()}₫</p>
<p style="color:${p[3]==0?'red':'green'}">
${p[3]==0?'Hết hàng':'Còn: '+p[3]}
</p>
<button onclick="addCart(${i})">Thêm giỏ</button>
<button onclick="buyNow(${i})">Mua ngay</button>
</div>`;
});

function addCart(i){
if(products[i][3]<=0){alert("Hết hàng");return;}
let f=cart.find(x=>x.id==i);
if(f){f.qty++}else{cart.push({id:i,qty:1})}
localStorage.setItem("cart",JSON.stringify(cart));
updateCount();
}

function buyNow(i){
localStorage.setItem("buyNow",i);
location.href="product.html";
}

function updateCount(){
let t=cart.reduce((a,b)=>a+b.qty,0);
document.getElementById("count").innerText=t;
}

function goCart(){location.href="cart.html";}
function goHome(){location.href="index.html";}

updateCount();