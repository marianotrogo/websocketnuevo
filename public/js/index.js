const socket = io();

const table = document.getElementById("product-table");
socket.on("NewActionWithProduct", (products) => {
  console.log(products)
  table.innerHTML = `<tr>
                      <th style="width: 10%;"> title</th>
                      <th style="width: 10%;"> description</th>
                      <th style="width: 10%;"> code</th>
                      <th style="width: 10%;"> price</th>
                      <th style="width: 10%;"> stock</th>
                      <th style="width: 10%;"> thumbnails</th>
                      <th style="width: 10%;"> Id</th>
                    </tr>`;

  products.forEach((product) => {
    let newRow = document.createElement("tr");
    Object.values(product).forEach((value) => {
      let cell = document.createElement("td");
      cell.innerText = value;
      newRow.appendChild(cell);
    });
    table.appendChild(newRow);
  });
});

// const socket = io();

// const productData = document.getProductsById("prodsList-display");
// socket.on("productList", async(data)=>{
//     console.log(data);
//     let prodsList = "";
//     await data.forEach((e)=>{
//         prodsList += `
//             <ul>
//                 <li> Titulo:${e.title},
//                     Id:${e.id},
//                     Precio:${e.precio},
//                     Stock:${e.stock}
//                 </li>
//             </ul>`
//         });
//         productData.innerHTML = prodsList;
// });