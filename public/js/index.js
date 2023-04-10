const socket = io()

const containerProducts = document.getElementById("products")

socket.on("new-product", (data)=>{
    containerProducts.innerHTML += `
                                    <li>
                                        <p><b>${data.title}</b></p>
                                        <p>Precio: $ ${data.price}</p>
                                        <p>Stock: ${data.stock}</p>
                                        <p>Categoría: ${data.category}</p>
                                    </li>
                                    `
})