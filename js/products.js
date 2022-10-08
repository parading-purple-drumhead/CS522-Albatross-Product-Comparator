const [[query, product_type]] = new URLSearchParams(window.location.search)

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getData() {
  fetch('../resources/information.json')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#product-type').textContent = capitalize(
        product_type,
      )

      let products = data.data[product_type]

      products.forEach((product) => {
        const ratings = product.ratings
        const num_of_ratings =
          ratings['5'] +
          ratings['4'] +
          ratings['3'] +
          ratings['2'] +
          ratings['1']
        const avg_rating =
          (ratings['5'] * 5 +
            ratings['4'] * 4 +
            ratings['3'] * 3 +
            ratings['2'] * 2 +
            ratings['1']) /
          num_of_ratings

        full_stars = ``
        half_stars = ``
        empty_stars = ``

        for (i = 0; i < Math.floor(avg_rating); i++) {
          full_stars += `<i class="bi bi-star-fill text-warning"></i>`
        }
        for (i = 0; i < 5 - Math.ceil(avg_rating); i++) {
          empty_stars += `<i class="bi bi-star text-warning"></i>`
        }
        if (avg_rating % 1 > 0) {
          half_stars = `<i class="bi bi-star-half text-warning"></i>`
        }

        document.querySelector(
          '#product-grid',
        ).innerHTML += `<div class="col-lg-3">
        <a href="./product-details.html?product_type=${product_type}&product=${
          product.url
        }" style="text-decoration: none; color: #111">
        <div class="product-card">
          <img
            src="${product.img}"
            class="img-fluid"
            alt=""
          />
          <h5 class="mt-3">${product.brand + ' ' + product.name}</h5>
          <span class="star-rating">
            ${full_stars + half_stars + empty_stars}            
          </span>
          <span>${avg_rating.toFixed(1)}/5 (${num_of_ratings})</span>
          <p>
          <input class="form-check-input me-2" type="checkbox" />
                Add to compare
          </p>
        </div>
        </a>
      </div>`
      })
    })
}

getData()
