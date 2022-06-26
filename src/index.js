import './pages/index.css';


const axiosContainer = document.querySelector(".axios-results__grid-container");

const getPostsData = () => {
    axios.get('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
        .then((res) => {
            console.log(res.data.articles)
            res.data.articles.map((post) => {
                (axiosContainer.innerHTML += `
                <div class="axios-results__grid-item">
                <div class="axios-results__content">
                <p class="axios-results__data">${post.publishedAt}</p>
                <p class="axios-results__title">${post.title}</p>
                <p class="axios-results__description">${post.description}</p>
              <p class="axios-results__author">${post.author}</p>
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
