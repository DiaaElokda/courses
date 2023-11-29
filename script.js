let btn_all =document.getElementById("btn_all")
let btn_mobile =document.getElementById("btn_mobile")
let btn_web =document.getElementById("btn_web")
let btn_net =document.getElementById("btn_net")

let cont =document.getElementById("cont")

let ccna_blog =document.getElementById("ccna_blog")
let front_blog =document.getElementById("front_blog")
let back_blog =document.getElementById("back_blog")
let android_blog =document.getElementById("android_blog")
let flutter_blog =document.getElementById("flutter_blog")
let ios_blog =document.getElementById("ios_blog")

cont.style.display="none"
// // ccna_blog.style.display="none"
// // front_blog.style.display="none"
// // back_blog.style.display="none"
// // android_blog.style.display="none"
// // flutter_blog.style.display="none"
// // ios_blog.style.display="none"

btn_all.onclick=function(){
    cont.style.display="flex"
    ccna_blog.style.display="none"
    front_blog.style.display="block"
    back_blog.style.display="block"
    android_blog.style.display="block"
    flutter_blog.style.display="block"
    ios_blog.style.display="block"

}

btn_mobile.onclick=function(){
    cont.style.display="flex"
    ccna_blog.style.display="none"
    front_blog.style.display="none"
    back_blog.style.display="none"
    android_blog.style.display="block"
    flutter_blog.style.display="block"
    ios_blog.style.display="block"

}

btn_web.onclick=function(){
    cont.style.display="flex"
    android_blog.style.display="none"
    flutter_blog.style.display="none"
    ios_blog.style.display="none"
    ccna_blog.style.display="none"
    front_blog.style.display="block"
    back_blog.style.display="block"

}

btn_net.onclick=function(){
    cont.style.display="flex"
    front_blog.style.display="none"
    back_blog.style.display="none"
    android_blog.style.display="none"
    flutter_blog.style.display="none"
    ios_blog.style.display="none"
    ccna_blog.style.display="block"

}