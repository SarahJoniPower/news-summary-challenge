let feed = new NewsFeed();

let titles = feed.getStories()

document.getElementById('headlines').innerHTML = `${titles}`


function getArticles() {
  fetch("http://news-summary-api.herokuapp.com/guardian?search?show-fields=all")
  .then(response => {
      response.json().then(post => {

      })
  })
}