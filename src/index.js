import '../styles/index.css';


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