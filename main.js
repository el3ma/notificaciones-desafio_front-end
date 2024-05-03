const markAll = document.querySelector("#mark-all");
const numberElement = document.getElementById("number");
const posts = document.querySelectorAll(".post");
const main = document.querySelectorAll(".main");

posts.forEach(post =>{
    post.addEventListener("click", () =>{
        post.querySelector(".not-read").classList.remove("not-read")
        post.classList.remove("post-no-read");
        updateNotification()
    })
    
})



markAll.addEventListener("click", () =>{
    const notReadElements = document.querySelectorAll(".not-read");
    const notReadPosts = document.querySelectorAll(".post.post-no-read");

    notReadElements.forEach((notReadElements)=>{
        notReadElements.classList.remove("not-read")
    })
    notReadPosts.forEach((post) => {
        post.classList.remove("post-no-read");
    });
    updateNotification()

})

const updateNotification = () => {
    const notReadElementsActual = document.querySelectorAll(".not-read");
    numberElement.innerText = notReadElementsActual.length;
}

