// Add price, year, ratings to info.json```

function getData() {
  fetch('../resources/info.json')
    .then((response) => response.json())
    .then((data) => {
      let products = data.data

      products.forEach((product) => {
        document.querySelector(
          '#product-grid',
        ).innerHTML += `<div class="col-lg-3">
        <a href="./product-details.html?product=${
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
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-half text-warning"></i>
            <i class="bi bi-star text-warning"></i>
          </span>
          <span>3.5/5 (48)</span>
          <p style="font-size: 1.25rem">$999</p>
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
