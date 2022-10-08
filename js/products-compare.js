const [
  [query3, product_type],
  [query4, product],
  [query5, compare],
] = new URLSearchParams(window.location.search)

console.log(product)
console.log(product_type)

function getData() {
  fetch(
    'https://raw.githubusercontent.com/parading-purple-drumhead/CS522-Albatross-Product-Comparator/main/resources/information.json',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      var products = data.data

      var device = products[product_type].filter(
        (phone) => phone['url'] == product,
      )

      console.log(device)

      const product_details = device[0]

      console.log(product_details)

      if (product_type == 'phones') {
        document.querySelector(
          '#comparator',
        ).innerHTML = `<div class="container">
          <div class="row my-5">
            <center><h1>Comparison</h1></center>
            <div class="row">
              <div class="col-lg-12">
                <table class="table table-striped table-borderless my-3">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th class="text-center" scope="col">
                        <img
                          src="${product_details['img']}"
                          class="img-fluid"
                          style="height: 10rem;"
                          alt=""
                        />
                        <h5 class="mt-2">${
                          product_details['brand'] +
                          ' ' +
                          product_details['name']
                        }</h5>
                      </th>
                      <th class="text-center" scope="col">
                        <img
                          src="https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg"
                          class="img-fluid"
                          style="height: 10rem;"
                          alt=""
                        />
                        <h5 class="mt-2">Google Pixel 6 Pro</h5>
                      </th>
                      <th class="text-center" scope="col">
                        <div class="mb-5">
                          <i class="bi bi-plus-circle" style="font-size: 3rem;"></i>
                        </div>

                        <h6>Add Another Product</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Brand</td>
                      <td class="text-center">${product_details['brand']}</td>
                      <td class="text-center">Google</td>
                      <td class="text-center">N/A</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td class="text-center table-success">$${
                        product_details['price'][0]['price']
                      }</td>
                      <td class="text-center">$999</td>
                      <td class="text-center">N/A</td>
                    </tr>
                    <tr>
                      <td>Processor</td>
                      <td class="text-center">${
                        product_details['processor']['name']
                      }</td>
                      <td class="text-center table-success">Google Tensor</td>
                      <td class="text-center">N/A</td>
                    </tr>
                    <tr>
                      <td>Memory</td>
                      <td class="text-center">${
                        product_details['memory']
                      } GB</td>
                      <td class="text-center table-success">12 GB</td>
                      <td class="text-center">N/A</td>
                    </tr>
                    <tr>
                      <td>Storage</td>
                      <td class="text-center">${
                        product_details['storage']
                      } GB</td>
                      <td class="text-center table-success">256 GB</td>
                      <td class="text-center">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>`
      } else {
        document.querySelector(
          '#comparator',
        ).innerHTML = `<div class="container">
      <div class="row my-5">
        <center><h1>Comparison</h1></center>
        <div class="row">
          <div class="col-lg-12">
            <table class="table table-striped table-borderless my-3">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th class="text-center" scope="col">
                    <img
                      src="${product_details['img']}"
                      class="img-fluid"
                      style="height: 10rem;"
                      alt=""
                    />
                    <h5 class="mt-2">${
                      product_details['brand'] + ' ' + product_details['name']
                    }</h5>
                  </th>
                  <th class="text-center" scope="col">
                    <img
                      src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501187cv4d.jpg"
                      class="img-fluid"
                      style="height: 10rem;"
                      alt=""
                    />
                    <h5 class="mt-2">MSI Stealth GS77</h5>
                  </th>
                  <th class="text-center" scope="col">
                    <div class="mb-5">
                      <i class="bi bi-plus-circle" style="font-size: 3rem;"></i>
                    </div>

                    <h6>Add Another Product</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td class="text-center">${product_details['brand']}</td>
                  <td class="text-center">MSI</td>
                  <td class="text-center">N/A</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td class="text-center table-success">$${
                    product_details['price'][0]['price']
                  }</td>
                  <td class="text-center">$3599</td>
                  <td class="text-center">N/A</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td class="text-center">${
                    product_details['processor']['name']
                  }</td>
                  <td class="text-center table-success">Intel Core i9 12th Gen</td>
                  <td class="text-center">N/A</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td class="text-center">${product_details['memory']} GB</td>
                  <td class="text-center table-success">32 GB</td>
                  <td class="text-center">N/A</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td class="text-center">${product_details['storage']} GB</td>
                  <td class="text-center table-success">1024 GB</td>
                  <td class="text-center">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>`
      }
    })
}

getData()
