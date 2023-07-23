// Code to show search button

// Method - 1    To toggle after click

// const searchBtn = document.querySelector(".search")

// document.querySelector("#search-btn").onclick = ()=>{
//     searchBtn.classList.toggle("active")
// }

// Method - 2       To toggle after click

const search = document.getElementById("search")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("active")
    userProfile.classList.remove("active")
    sideNav.classList.remove("active")
})

// Code to show user profile button


const userProfile = document.getElementById("user-profile");
const userBtn = document.getElementById("user-btn");

userBtn.addEventListener("click", ()=>{
    userProfile.classList.toggle("active")
    search.classList.remove("active")
    sideNav.classList.remove("active")
    
})


// Code to show side bar links

const sideNav = document.getElementById("side-nav")
const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", ()=>{
    sideNav.classList.toggle("active")
    search.classList.remove("active")
    userProfile.classList.remove("active")

})


// Code to hide side bar


const cross = document.querySelector(".cross")

cross.addEventListener("click", ()=>{
    sideNav.classList.remove("active")
})



















