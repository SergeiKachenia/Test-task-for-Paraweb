import './pages/index.css';


const axiosContainer = document.querySelector(".posts__grid-container");

const getPostsData = () => {
    axios.get('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
        .then((res) => {
            console.log(res.data.articles)
            res.data.articles.map((post) => {
                (axiosContainer.innerHTML += `
                <div class="post">
                <div class="post__content">
                <time class="post__date">${post.publishedAt}</time>
                <h3 class="post__title">${post.title}</h3>
                <p class="post__description">${post.description}</p>
              <p class="post__author">${post.author}</p>
              </div>
              </div>`)
            });
        });
};
getPostsData();


let slideIndex = 0;
const showSlides = () => {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("carousel__dot");
    for ( let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("carousel__dot_active");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].classList.add("carousel__dot_active");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();
