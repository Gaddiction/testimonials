// caching the dom
const root = document.documentElement;
const name = document.querySelector(".name");
const info = document.querySelector(".info");
const para = document.querySelector("p");
const button = document.querySelector("button");
const left_right = document.querySelectorAll("i");

const data = [
{src:"url(https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg)",
title:"THE BOSS",
para:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
},
{
  src:"url(https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg)",
  title:"WEB DESIGNER",
  para:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"  
},
{
src:"url(https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg)",
title:"WEB DEVELOPER",
para:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},
{
src:"url(https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg)",
title:"INTERN",
para:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
}];
let index = 0;
left_right.forEach(function(icon){
    icon.addEventListener('click',()=>{
        if(icon.getAttribute("data-id") === "left"){
        if(index >0){
            index--;
            root.style.setProperty("--img",data[index].src);
            para.innerHTML = data[index].para;
            info.innerHTML = data[index].title;
        }
        }
        else{
        if(index>=0 && index < data.length){
        index++;
        root.style.setProperty("--img",data[index].src);
        para.innerHTML = data[index].para;
        info.innerText = data[index].title;
        }}
            });
        });
button.addEventListener('click',()=>{
const random= Math.floor(Math.random()*4);
root.style.setProperty("--img",data[random].src);
para.innerHTML = data[random].para;
info.innerHTML = data[random].title;
});