// Add price, year, ratings to info.json```

const [[query, product_id]] = new URLSearchParams(window.location.search)

console.log(product_id)

function getData() {
  fetch('../resources/info.json')
    .then((response) => response.json())
    .then((data) => {
      var products = data.data

      var product = products.filter((product) => product['url'] == product_id)

      const product_details = product[0]

      console.log(product_details)

      document.querySelector(
        '#product-data',
      ).innerHTML = `<div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-2">
          <div class="product-image p-5">
            <img
              id="image"
              src="${product_details['img']}"
              alt=""
              class="img-fluid w-100"
            />
          </div>
        </div>
        <div class="col-lg-6 pt-5">
          <h2 class="my-3">${
            product_details['brand'] + ' ' + product_details['name']
          }</h2>
          <span class="star-rating me-2" style="font-size: 1.5rem;">
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-half text-warning"></i>
            <i class="bi bi-star text-warning"></i>
          </span>
          <span style="font-size: 1.5rem;">3.5/5 (48)</span>
          <h1 class="my-2">$999</h1>
          <ul class="text-secondary">
            <li id="brand">
              Brand: ${product_details['brand']}
            </li>
            <li id="name">
              Model: ${product_details['name']}
            </li>
            <li id="storage">Storage: ${product_details['storage']}</li>
            <li id="memory">Memory: ${product_details['memory']}</li>
          </ul>
          <div class="row my-3 color-picker px-2" style="font-size: 1rem;">
            <h5 class="mb-3">Color</h5> 
            <div class="col-1">
              <div
                class="bg-primary selected"
                style="height: 1.25rem; width: 1.25rem; border-radius: 50%;"
              ></div>
              <!-- <i class="bi bi-circle-fill text-primary selected"></i> -->
            </div>
            <div class="col-1">
              <div
                class="bg-success"
                style="height: 1.25rem; width: 1.25rem; border-radius: 50%;"
              ></div>
            </div>
            <div class="col-1">
              <div
                class="bg-warning"
                style="height: 1.25rem; width: 1.25rem; border-radius: 50%;"
              ></div>
            </div>
            <div class="col-1">
              <div
                class="bg-danger"
                style="height: 1.25rem; width: 1.25rem; border-radius: 50%;"
              ></div>
            </div>
            <span class="mt-3 text-secondary">Space Blue</span>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-6 offset-lg-3 text-center">
          <a href="#" class="btn btn-success me-2" style="font-size: 1.25rem;">
            <i class="bi bi-cart2 me-2"></i>
            Buy Now
          </a>
          <a href="#" class="btn btn-warning" style="font-size: 1.25rem;">
            <i class="bi bi-search me-2"></i>
            Compare with other products
          </a>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-6" style="border-right: 1px solid grey;">
          <h3 class="text-center mb-3">Full Tech Specs</h3>
          <div class="row">
            <div
              class="col-lg-2 offset-lg-2"
              style="font-weight: bold; font-size: 1rem;"
            >
              <p>Brand:</p>
              <p>Model:</p>
              <p>Color:</p>
              <p>Storage:</p>
              <p>Memory:</p>
            </div>
            <div class="col-lg-8" style="font-size: 1rem;">
              <p>Apple</p>
              <p>iPhone 13 Pro</p>
              <p>Space Blue</p>
              <p>256 GB</p>
              <p>6 GB</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 px-5">
          <h3 class="text-center mb-3">Ratings and Reviews</h3>
          <div class="row">
            <div class="col-lg-2 row align-content-center"><h1>3.5</h1></div>
            <div class="col-lg-10 text-secondary" style="font-size: 1rem;">
              <div class="row mb-3">
                <div class="col-lg-2">
                  5 stars
                </div>
                <div class="col-lg-9">
                  <div
                    class="bg-warning"
                    style="width: 76%; border-radius: 1rem;"
                  >
                    &nbsp;
                  </div>
                </div>
                <div class="col-lg-1">
                  13
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-2">
                  4 stars
                </div>
                <div class="col-lg-9">
                  <div
                    class="bg-warning"
                    style="width: 46%; border-radius: 1rem;"
                  >
                    &nbsp;
                  </div>
                </div>
                <div class="col-lg-1">
                  8
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-2">
                  3 stars
                </div>
                <div class="col-lg-9">
                  <div
                    class="bg-warning"
                    style="width: 22%; border-radius: 1rem;"
                  >
                    &nbsp;
                  </div>
                </div>
                <div class="col-lg-1">
                  4
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-2">
                  2 stars
                </div>
                <div class="col-lg-9">
                  <div
                    class="bg-warning"
                    style="width: 10%; border-radius: 1rem;"
                  >
                    &nbsp;
                  </div>
                </div>
                <div class="col-lg-1">
                  2
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-2">
                  1 star
                </div>
                <div class="col-lg-9">
                  <div
                    class="bg-warning"
                    style="width: 40%; border-radius: 1rem;"
                  >
                    &nbsp;
                  </div>
                </div>
                <div class="col-lg-1">
                  7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
    })
}

getData()
