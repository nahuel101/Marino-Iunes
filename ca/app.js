const menu = [
  {
    id: 1,
    title: "40x25x13",
    category: "Cuerina",
    price: 850,
    img: "./images/cuerina.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con cuerina Las mismas pueden ser lavadas con un paño, no se marcan con la fricción e incluyen una manija de eco-cuero. `,
    boton: "https://articulo.mercadolibre.com.ar/MLA-742228631-caja-organizadora-decorativa-40x25x13-carton-_JM",
  },
  {
    id: 2,
    title: "45x33x17",
    category: "Cuerina",
    price: 1150,
    img: "./images/cuerina.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con cuerina Las mismas pueden ser lavadas con un paño, no se marcan con la fricción e incluyen una manija de eco-cuero. `,
    boton: "https://articulo.mercadolibre.com.ar/MLA-833562629-caja-organizadora-decorativa-45x33x17-carton-_JM",
  },
  {
    id: 3,
    title: "50x40x20",
    category: "Cuerina",
    price: 1390,
    img: "./images/cuerina.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con cuerina Las mismas pueden ser lavadas con un paño, no se marcan con la fricción e incluyen una manija de eco-cuero.`,
    boton: "https://articulo.mercadolibre.com.ar/MLA-875182480-caja-organizadora-decorativa-50x40x20-carton-_JM",
  },
  {
    id: 4,
    title: "40x25x13",
    category: "Kraft",
    price: 790,
    img: "./images/kraft.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con papel kraft el cual es de color marrón. Resistente al desagarro y la fricción con otros objetos. `,
    boton:"https://articulo.mercadolibre.com.ar/MLA-854564886-cajas-organizadora-decorativa-40x25x13-kraft-carton-_JM",
  },
  {
    id: 5,
    title: "45x33x17",
    category: "Kraft",
    price: 1090,
    img: "./images/kraft.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con papel kraft el cual es de color marrón. Resistente al desagarro y la fricción con otros objetos.  `,
    boton: "https://articulo.mercadolibre.com.ar/MLA-854566674-caja-organizadora-decorativa-45x33x17-kraft-carton-rotulador-_JM",
  },
  {
    id: 6,
    title: "50x40x20",
    category: "Kraft",
    price: 1210,
    img: "./images/kraft.png",
    desc: `Cajas confexionadas con cartón rígido importado. Forradas en su exterior con papel kraft el cual es de color marrón. Resistente al desagarro y la fricción con otros objetos.`,
    boton: "https://articulo.mercadolibre.com.ar/MLA-854566085-caja-organizadora-decorativa-50x40x20-kraft-carton-rotulador-_JM",
  },
  // {
  //   id: 7,
  //   title: "40x25x13",
  //   category: "Afiche",
  //   price: 8.99,
  //   img: "./images/item-7.jpeg",
  //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  //   boton: "",
  // },
  // {
  //   id: 8,
  //   title: "45x33x17",
  //   category: "Afiche",
  //   price: 12.99,
  //   img: "./images/item-8.jpeg",
  //   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  //   boton: "",
  // },
  // {
  //   id: 9,
  //   title: "50x40x20",
  //   category: "Afiche",
  //   price: 16.99,
  //   img: "./images/item-9.jpeg",
  //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  //   boton: "",
  // },

];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
            <button class="filter-btn"><a href="${item.boton}" target="_blank">Comprar</a></button>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
