// //  alert(    "مرحبا في مطعم طيف"
// // );

// // console.log("تم تحميل الموقع");

// // prompt("كم عمرك")

// // console.error("هناك خطا في رفع الصورة")


// // let user_name="";
// // // var date="1/12/12002"
// // // console.log(user_name)
// // user_name="محمد"

// // console.log(user_name)

// // const  birthYear=1997;

// // let gestName=prompt("ما هو اسمك");

// // alert("أهلا بك يا "+gestName+"في مطعم طيف");

// // console.log("اسم الزائر"+gestName);


// // let myString="20";
// // // let myb='';

// // let myNumber=20;
// // let  isbool=true;

// // console.log(typeof myString );
// // console.log(typeof isbool );

// // console.log("5"+5);


// // let co_code=prompt("ادخل كود الخصم");

// // if(co_code ==="Tav20883"){
// //     alert("مبرووك لقد حصلت ع العرض");
// //     console.log("تم تفعيل");
// // }else{
// //     alert("الكود خاطئ");
// //     console.log("محاولة فاشلة")
// // }



// // let gusets=prompt("ادخل عدد الافراد");

// // gusets=Number(gusets);

// // if(gusets === 1 || gusets ===2){
// //     alert('تم حجزها لشخصين');
// // }else if(gusets >= 3 || gusets <=6){

// //     alert('تم حجزها  لعائلة');

// // }
// // else if(gusets >6 ){

// //     alert('تم حجزها  لمجموعات');

// // }else{
// //     alert("محاولة خاطئ");
// // }




// // let gusets=prompt("ادخل عدد الافراد لنجحز الك طاولة المميزة");

// // gusets=Number(gusets);

// // if(gusets >=3 && gusets <=6){
// //     alert('تم حجزها المميزة');
// // }
// // else{
// //     alert("من 3 الى 6 الطاولة المميزة");
// // }


// // let menu=["بيتزا","ستيك","معجنات"];

// // console.log("قائمة الطعام ");

// // for(let i = 0; i < 3; i++){
// //  console.log("الطبق رقم" + (i + 1 )+  "هو : " + menu[i]);
// // }


// // let pass="";
// // while(pass !== "1234"){
// //     pass=prompt("ادخل كلمة المرور للموظفين");
// // }
// // alert("تم تسجيل دخول");



// let reating =prompt("ادخل  تقييم من 1 الى 5");


//  reating=Number(reating);

//  while(reating  < 1 || reating > 5){
// rating = prompt("عذراً، التقييم غير صحيح. الرجاء إدخال رقم من 1 إلى 5 فقط:"); 
// }
//  alert("شكرا لتقييمك لنا ب  "+ reating +"نجوم ");




// function  welcomeGuest()
// {
// // let name_m ="mostaf";
//     console.log("اهلا بك في المطعم تفضل قائمة الطعام");

// }


// console.log(name_m)



// welcomeGuest();





// function Order(naem_a, order_name){

// console.log("تفضل يا " + naem_a+ "'طبق " + order_name + "الخاص بك جاهز")
// }

// Order("أحمد" , "بيتزا");




// function calculateTax(price){
// let finalPrice= price + (price * 0.15);

// return finalPrice;
// }
// let bill1=calculateTax(500);
// let bill2=calculateTax(50);

// let totalSales= bill1 + bill2;

// console.log("اجمالي المبيعات مع الضريبة " + totalSales  )



//  let restaurantName="مطعم طيف"; 
//  console.log(`اسم  ${restaurantName}`)

//  console.log("اسم " + restaurantName);



// function makeBurger(){
//     let secretSauce= "صوص  العسل ";

//     // console.log("نحضر  البرجر في " + restaurantName);
//         console.log("   نضيف اليه  " + secretSauce);


// }
// makeBurger();
//         console.log( restaurantName);

//     console.log( secretSauce);




// function Dis(price , discount){
//     let newPrice=price - discount ;

//     return  newPrice ;

// }

// let myDis=Dis(500 , 80);
// console.log("السعر بعد الخصم" +myDis);




// let menu_Item=["شاورما " , "بيتزا " ,  "برجر"];

// console.log("الطبق الاول هو " + menu_Item[0]);
// console.log("الطبق الثاني  هو  " + menu_Item[1]);
// menu_Item.push("دجاج");

// console.log("عدد الاطباق  الموجودة " + menu_Item.length);


// console.log(menu_Item);




// let burger={

//     name:"برجر طيف ",
//     price:15,
//     isval:true,
    
// }


// let shorma={

//     name:"شاورما طيف ",
//     price:20,
//     isval:false,
    
// }


// shorma.price=25;
// console.log(" اسم الطبق " + burger.name + "\n سعر الطبق " + shorma.price) ;


// let fullMenu=[
//     {
//         name:"برجر ",price:13
//     }
//     ,

//      {
//         name:"شاورما ",price:15
//     },

//  {
//         name:"سلطة  ",price:5
//     },

// ];

// console.log("سعر   " +  fullMenu[0].name+ "هو" +
//      fullMenu[0].price);















/*

// ==========================================
// 1. إنشاء قائمة الطعام (مصفوفة كائنات)
// ==========================================
const menu = [
    { id: 1, name: "ستيك توماهوك", price: 120 },
    { id: 2, name: "سالمون الترياكي", price: 85 },
    { id: 3, name: "بيتزا الكمأة", price: 60 }
];


// ==========================================
// 2. دالة عرض المنيو في الكونسول
// ==========================================
function displayMenu() {
    console.log("--- 🍽️ قائمة طعام مطعم طيف 🍽️ ---");
    for (let i = 0; i < menu.length; i++) {
        console.log(`${menu[i].id}. ${menu[i].name} - السعر: ${menu[i].price} شيكل`);
    }
}

// تشغيل دالة العرض فوراً ليرى الزبون الأطباق في الكونسول
displayMenu();


// ==========================================
// 3. دالة حساب السعر النهائي مع الخصم والضريبة
// ==========================================
function calculateTotal(price, promoCode) {
    let finalPrice = price;

    // التحقق من كود الخصم
    if (promoCode === "TAIF10") {
        finalPrice = finalPrice - 10;
        console.log("تم تطبيق خصم 10 شيكل بنجاح! ✅");
    }

    // إضافة ضريبة القيمة المضافة 15%
    let tax = finalPrice * 0.15;
    finalPrice = finalPrice + tax;

    // إرجاع القيمة النهائية
    return finalPrice;
}


// ==========================================
// 4. التفاعل مع الزبون وإدخال البيانات
// ==========================================

// أخذ اسم الزبون
let customerName = prompt("مرحباً بك في مطعم طيف! ما هو اسمك الكريم؟");

// أخذ اختيار الطبق
let selectedId = prompt(`أهلاً بك يا ${customerName}.\nالرجاء إدخال رقم الطبق الذي تريد طلبه (1 أو 2 أو 3):`);
selectedId = Number(selectedId);

// حلقة بينما (While) للتأكد من اختيار رقم صحيح ضمن القائمة
while (selectedId < 1 || selectedId > 3 || isNaN(selectedId)) {
    selectedId = prompt("عذراً! خيار غير صحيح. يرجى كتابة رقم الطبق من 1 إلى 3 فقط:");
    selectedId = Number(selectedId);
}

// أخذ كود الخصم
let userCode = prompt("أدخل كود الخصم (إن وجد)، أو اضغط Cancel للمتابعة:");

// جلب بيانات الطبق المختار من المصفوفة (تذكر أن الفهرس يبدأ من 0)
let chosenDish = menu[selectedId - 1];


// ==========================================
// 5. معالجة الحساب وطباعة الفاتورة
// ==========================================

// استدعاء دالة الحساب وحفظ الناتج في متغير
let totalBill = calculateTotal(chosenDish.price, userCode);

// تجهيز نص الفاتورة مرتب سطر تحت سطر باستخدام Backticks
let receipt = `=== 🧾 فاتورة مطعم طيف 🧾 ===
اسم الزبون: ${customerName}
الطلب: ${chosenDish.name}
السعر الأصلي: ${chosenDish.price} شيكل
----------------------------
الإجمالي النهائي (شاملاً الضريبة والخصم): ${totalBill} شيكل
شكراً لزيارتك لنا!`;

// عرض الفاتورة للزبون في تنبيه وفي الكونسول
alert(receipt);
console.log(receipt);
*/









// const menu =[
//     {  
//         id:1,  
//     name: "ستيك" , price:120
//     },

//  {    
//       id:2,  
//     name: "بيتزا" , price:50
//     },

//      {   
//           id:3,   
//     name: "شاورما" , price:20
//     },

// ];

// function displayMenu(){
//     console.log("-----  قائمة الطعام  --------");
//     for(let i=0; i<menu.length; i++){
//         console.log(`${menu[i].id   } ${menu[i].name   }  ---    السعر : ${menu[i].price} شيكل`)
//     }
// };

// displayMenu();


// function  calculateTotal(price , promoCode){
//         let finalPrice=price;

//     if(promoCode === "TAIF10" ){
//         finalPrice=  finalPrice -10;
//         console.log("تم تطبيق الخصم ")
    
    
//     }

//     let tax=finalPrice * 0.15;
    
//     finalPrice =finalPrice+tax;

//     return finalPrice;



// }
// let  customerName=prompt("أهلا بك في مطعم طيف  ما هو اسمك ؟" );

// let selectedId=prompt(` أهلا بك يا ${customerName}.. \n (3,2,1) الرجاء ادخال رقم الطبق التي تريد طلبه`);

// selectedId=Number(selectedId);

// while(selectedId <1 || selectedId>3 || isNaN(selectedId)){

// selectedId=prompt("يرجى كتابة رقم من 1 الى 3 فقط  !! خيار غير صحيح " );
// selectedId=Number(selectedId);
// }


// let  userCode=prompt("ادخل كود الخصم  ان وجد او اضغط    اغلاق للمتابعة ");

// let choseDish=menu[selectedId - 1 ];

// let totalBill=calculateTotal(choseDish.price ,userCode );

// let receipt= `-----  فاتورة مطعم طيف ---------
//  اسم الزبون : ${customerName}
//  الطلب  : ${choseDish.name}
//  السعر الاصلي  : ${choseDish.price} شيكل 
// **********************************************************
// الاجمالي النهائي : ${totalBill} شيكل  
// شاملة الضريبة و الخصم 


// `;
// alert(receipt);
// console.log(receipt);






// let title=document.getElementById("main-title");
// console.log(title);

// let  item_1= document.querySelector(".item-1");
// console.log(item_1);



// let items=document.querySelectorAll(".item-1");

// console.log(items);

// console.log(items[0]);

// let title = document.getElementById("main-title");
// title.textContent="مطعم فرع 2";
// console.log(title);


// title.innerHTML="   فن الطهي الحديث <span style='color:red;'>العصري </span> ";

// let inputField=document.getElementById("name");
// console.log(inputField.value);



// let img=document.getElementById("taif-restaurant-img");
// console.log(img.getAttribute("src"));

// img.src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80";

// img.setAttribute("alt" , "صورة 2 من مطعم طيف")


// let logoTitle=document.getElementById("logo-text");
// logoTitle.style.color="#1a1c23";




// let form=document.getElementById("add-dish");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let nameInput=document.getElementById("dish-name-input").value;
//         let priceInput=document.getElementById("dish-price-input").value;

//         if(nameInput === "" || priceInput === ""){
//             alert("الرجاء تعبْة الحقول");
//             return;
            
//         }
//         console.log(`تم استلام الطبق  : ${nameInput}  
//             بسعر  ${priceInput}  `);

//             document.getElementById("dish-name-input").value="";
//                         document.getElementById("dish-price-input").value="";


// })

// const  menuGrid=document.getElementById("menu-grid");


// menuGrid.addEventListener("click" , function (event){
//     if (event.target.classList.contains("add-to-card-btn")){
//         const button= event.target;
// const price = Number(button.getAttribute("data-price"));

// const cardInfo = button.closest(".card-info");
// const dishTitle = cardInfo.querySelector("h3").textContent;
//        console.log(`تم إضافة الطبق: ${dishTitle} بسعر: $${price}`);

//     }
// });



// const addDishForm = document.getElementById("add-dish");

// addDishForm.addEventListener("submit" , function(event){
//     event.preventDefault();

//     const nameInput=document.getElementById("dish-name-input");
//         const  priceInput=document.getElementById("dish-price-input");
 
//         const newcard=document.createElement("article");

//         newcard.className="food-card";
//         newcard.innerHTML=`
//         <div class="card-img">
//                                 <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"  alt="${nameInput.value}">
//                                  </div>

//                                       <div class="card-info">
//                                        <h3> ${nameInput.value}</h3>
//                          <p class="item-1">عنصر جديد     </p>
//                                                  <span class="price">${priceInput.value}</span>
//                         <button class="add-to-card-btn"  data-price="${priceInput.value}">اضافة  للسلة </button>

//                     </div>
//         `;

//         menuGrid.appendChild(newcard);
        
// addDishForm.reset();

// })













// const menuGrid = document.getElementById("menu-grid");
// const addDishForm = document.getElementById("add-dish");
// const submitBtn = document.getElementById("submit-btn");
// async function loadMenuFromServer() {
//     try {
//         await new Promise(resolve => setTimeout(resolve, 2000));

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
        
//         if (!response.ok) throw new Error("فشل الاتصال بالسيرفر");

//         const dishes = [
//             { id: 1, title: "ستيك الفاخر", price: 120, desc: "لحم بقر مع زبدة الكمأة" },
//             { id: 2, title: "ستيك العجل", price: 110, desc: "لحم عجل مع زبدة الأعشاب" },
//             { id: 3, title: "ستيك التوماهوك", price: 150, desc: "لحم فاخر مشوي على الحطب" }
//         ];

//         menuGrid.innerHTML = "";

//         dishes.forEach(dish => {
//             menuGrid.appendChild(createDishCard(dish.title, dish.price, dish.desc));
//         });

//     } catch (error) {
//         menuGrid.innerHTML = `<p class="error-text">❌ حدث خطأ أثناء تحميل المنيو: ${error.message}</p>`;
//     }
// }
// addDishForm.addEventListener("submit", async function(event) {
//     event.preventDefault();

//     const nameInput = document.getElementById("dish-name-input");
//     const priceInput = document.getElementById("dish-price-input");

//     submitBtn.disabled = true;
//     submitBtn.textContent = "جاري الحفظ بالسيرفر...";

//     try {
//         await new Promise(resolve => setTimeout(resolve, 1500));

//         const newCard = createDishCard(nameInput.value, priceInput.value, "طبقت جديد تم إضافته حديثاً");
//         menuGrid.appendChild(newCard);

//         alert("✅ تم حفظ الطبق بنجاح في السيرفر!");
//         addDishForm.reset();

//     } catch (error) {
//         alert("❌ تعذر حفظ الطبق، حاول لاحقاً.");
//     } finally {
//         submitBtn.disabled = false;
//         submitBtn.textContent = "إضافة للمنيو";
//     }
// });


// function createDishCard(title, price, desc) {
//     const card = document.createElement("article");
//     card.className = "food-card";
//     card.innerHTML = `
//         <div class="card-img">
//             <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" alt="${title}">
//         </div>
//         <div class="card-info">
//             <h3>${title}</h3>
//             <p>${desc}</p>
//             <span class="price">${price}$</span>
//             <button class="add-to-cart-btn" data-price="${price}">إضافة للسلة</button>
//         </div>
//     `;
//     return card;
// }

// loadMenuFromServer();



































window.toggleCart = function () {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.classList.toggle("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("taif_theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeBtn) themeBtn.textContent = "🌙 الوضع الداكن";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      themeBtn.textContent = isLight ? "🌙 الوضع الداكن" : "☀️ الوضع الفاتح";
      localStorage.setItem("taif_theme", isLight ? "light" : "dark");
    });
  }


  let cart = JSON.parse(localStorage.getItem("taif_cart")) || [];

  function updateCartUI() {
    const cartCountEl = document.getElementById("cart-count");
    const cartTotalEl = document.getElementById("cart-total");
    const cartItemsContainer = document.getElementById("cart-items");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartTotalEl) cartTotalEl.textContent = `$${totalPrice.toFixed(2)}`;

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = "";
      if (cart.length === 0) {
        cartItemsContainer.innerHTML =
          "<p style='text-align:center; color:var(--text-muted, #888); margin-top:30px;'>السلة فارغة حالياً</p>";
      } else {
        cart.forEach((item, index) => {
          const itemEl = document.createElement("div");
          itemEl.className = "cart-item";
          itemEl.innerHTML = `
            <div class="cart-item-info">
              <h4 style="margin:0; font-size:0.95rem;">${item.name}</h4>
              <span style="color:var(--primary-gold, #c59b27); font-size:0.85rem; font-weight:bold;">$${item.price} × ${item.quantity}</span>
            </div>
            <div class="cart-item-actions">
              <button onclick="changeQuantity(${index}, 1)">+</button>
              <button onclick="changeQuantity(${index}, -1)">-</button>
              <button onclick="removeFromCart(${index})" class="btn-remove">🗑️</button>
            </div>
          `;
          cartItemsContainer.appendChild(itemEl);
        });
      }
    }

    localStorage.setItem("taif_cart", JSON.stringify(cart));
  }

  window.changeQuantity = function (index, delta) {
    if (cart[index]) {
      cart[index].quantity += delta;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
      updateCartUI();
    }
  };

  window.removeFromCart = function (index) {
    if (cart[index]) {
      cart.splice(index, 1);
      updateCartUI();
    }
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;

    const card = btn.closest(".food-card, .promo-slide, .promo-details");
    if (!card) return;

    const nameEl = card.querySelector("h3, h4");
    const priceEl = card.querySelector(".price, span");

    if (nameEl && priceEl) {
      const name = nameEl.textContent.trim();
      const priceMatch = priceEl.textContent.match(/\d+(\.\d+)?/);
      const price = priceMatch ? parseFloat(priceMatch[0]) : 0;

      const existingItem = cart.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartUI();
      showToast(`تمت إضافة 
        "${name}" إلى السلة`);
    }
  });

  updateCartUI();



  function showToast(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notification";
      toast.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: var(--primary-gold, #c59b27);
        color: var(--bg-dark, #121212);
        padding: 12px 22px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 99999;
        box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        transition: opacity 0.3s ease, transform 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
    }, 3000);
  }
});
