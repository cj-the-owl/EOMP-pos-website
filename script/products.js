let products = [
    {
        id: 1,
        name: "Spy x Family",
        image: "https://i.postimg.cc/cH18LK9b/Anya-Forger-Hoodie-1-removebg-preview.png",
        price: "R300.00",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 2,
        name: "My Hero Academia",
        image: "https://i.postimg.cc/Znbkgmq3/My-Hero-Academia-Hoodie-Beige-L-removebg-preview.png",
        price: "R300.00",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 3,
        name: "Hunter x Hunter",
        image: "https://i.postimg.cc/N0Fy8STj/Killua-and-Gon-Hoodie-White-S-removebg-preview.png",
        price: "R300.00",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 4,
        name: "Demon Slayer",
        image: "https://i.postimg.cc/hvLwCCxX/Roupinhas-da-shopee-removebg-preview.png",
        price: "R300.300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 5,
        name: "Death Note",
        image: "https://i.postimg.cc/N0qvsr47/8-5-US-41-OFF-Death-Note-Anime-Sweatshirt-Manga-Sweatshirt-Women-Kawaii-Hoodies-Death-Note-H.png",
        price: "R300.00",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 6,
        name: "One Punch Man",
        image: "https://i.postimg.cc/2SNY32B1/One-Punch-Anime-Hoodie-Men-2022-Autumn-Fleece-Tracksuit-Male-Streetwear-Clothes-Fashion-Mens-Pullove.png",
        price: "R300.00",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 7,
        name: "Darling in the Franxx",
        image: "https://i.postimg.cc/Lscznx10/removebg-preview.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 8,
        name: "Jujitsu Kaisen",
        image: "https://i.postimg.cc/9Q83577f/Lil-Gojo-Anime-Gojo-Satoru-Hot-sale-T-Shirt-Women-Fashion-Loose-Short-Sleeve-Cartoons-Style-Short-Sl.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 9,
        name: "Naruto",
        image: "https://i.postimg.cc/662CdJ0b/download-1-removebg-preview.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 10,
        name: "Attack on Titan",
        image: "https://i.postimg.cc/gkB91hR2/Intense-Power-Attack-On-Titan-T-Shirt-Haze-Blue-L-removebg-preview.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 11,
        name: "One Piece",
        image: "https://i.postimg.cc/SKSLksH1/One-piece-removebg-preview.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 12,
        name: "Spirited Away",
        image: "https://i.postimg.cc/wB8PVhyy/Spirited-Away-T-shirt-Anime-Cartoon-Anime-Harajuku-Graphic-Street-Style-T-shirt-For-Men-s-Women-s-Un.png",
        price: "R200.00",
        quantity: 5,
        category: "T-Shirts"
    },
    // {
    //     id: 13,
    //     image: "#",
    //     price: "#",
    //     quantity: 5,
    //     category: "#"
    // },
    // {
    //     id: 14,
    //     image: "#",
    //     price: "#",
    //     quantity: 5,
    //     category: "#"
    // },
    // {
    //     id: 15,
    //     image: "#",
    //     price: "#",
    //     quantity: 5,
    //     category: "#"
    // },
];

function displayProducts() {
    let ourProducts = document.getElementById("products");
    products.forEach((product) => {
        let productElement = document.createElement("div");
        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" id="product-img">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})" class=" btn add-btn">Add To Cart</button>`;
        ourProducts.appendChild(productElement);
    });
};

let cart = JSON.parse(localStorage.getItem("Products")) || [];

function addToCart(productId) {
    let product = products.find((product) => product.id === productId);
    if (product && product.quantity > 0) {
        cart.push(product);
        product.quantity--;
        updateCart();
    }
}

displayProducts();

updateCart();