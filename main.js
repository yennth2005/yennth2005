const list = [
    {
        name: "yen",
        amount: 10,

    },
    {
        name: "iphone",
        amount: 20,

    },
    {
        name: "apple",
        amount: 100,

    },
    {
        name: "sấmung",
        amount: 310,

    }
]
// main.js
let data = '';
const container = document.createElement('div'); // Create a container element

list.forEach((item, index) => {
  data += `
    <div class="card-name">${item.name}</div>
    <section class="card-price">${item.amount}</section>
    <section class="bottom">
      <div class="amount">Số lượng: </div>
      <form action="" method="POST">
        <input type="hidden" name="product_id" value="">
        <input type="hidden" name="action" value="add">
        <a type="submit">
          <i class="fa-solid fa-cart-plus"></i>
        </a>
      </form>
    </section>
    <button class="cart"><a href="">View</a></button>
  `;
});

container.innerHTML = data; // Add data to the container

const details = document.getElementsByClassName("details")[0]; // Get the first element
details.appendChild(container); // Append the container with generated content

console.log(data); // This is no longer needed for displaying data