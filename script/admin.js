let anotherProduct = [
    {
        id: 1,
        name: "Spy x Family",
        image: "https://i.postimg.cc/cH18LK9b/Anya-Forger-Hoodie-1-removebg-preview.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 2,
        name: "My Hero Academia",
        image: "https://i.postimg.cc/Znbkgmq3/My-Hero-Academia-Hoodie-Beige-L-removebg-preview.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 3,
        name: "Hunter x Hunter",
        image: "https://i.postimg.cc/N0Fy8STj/Killua-and-Gon-Hoodie-White-S-removebg-preview.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 4,
        name: "Demon Slayer",
        image: "https://i.postimg.cc/hvLwCCxX/Roupinhas-da-shopee-removebg-preview.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 5,
        name: "Death Note",
        image: "https://i.postimg.cc/N0qvsr47/8-5-US-41-OFF-Death-Note-Anime-Sweatshirt-Manga-Sweatshirt-Women-Kawaii-Hoodies-Death-Note-H.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 6,
        name: "One Punch Man",
        image: "https://i.postimg.cc/2SNY32B1/One-Punch-Anime-Hoodie-Men-2022-Autumn-Fleece-Tracksuit-Male-Streetwear-Clothes-Fashion-Mens-Pullove.png",
        price: "300",
        quantity: 5,
        category: "Hoodies"
    },
    {
        id: 7,
        name: "Darling in the Franxx",
        image: "https://i.postimg.cc/Lscznx10/removebg-preview.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 8,
        name: "Jujitsu Kaisen",
        image: "https://i.postimg.cc/9Q83577f/Lil-Gojo-Anime-Gojo-Satoru-Hot-sale-T-Shirt-Women-Fashion-Loose-Short-Sleeve-Cartoons-Style-Short-Sl.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 9,
        name: "Naruto",
        image: "https://i.postimg.cc/662CdJ0b/download-1-removebg-preview.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 10,
        name: "Attack on Titan",
        image: "https://i.postimg.cc/gkB91hR2/Intense-Power-Attack-On-Titan-T-Shirt-Haze-Blue-L-removebg-preview.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 11,
        name: "One Piece",
        image: "https://i.postimg.cc/SKSLksH1/One-piece-removebg-preview.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 12,
        name: "Spirited Away",
        image: "https://i.postimg.cc/wB8PVhyy/Spirited-Away-T-shirt-Anime-Cartoon-Anime-Harajuku-Graphic-Street-Style-T-shirt-For-Men-s-Women-s-Un.png",
        price: "200",
        quantity: 5,
        category: "T-Shirts"
    },
    {
        id: 13,
        name: "Naruto Uchiha",
        image: "https://i.postimg.cc/wjyj2Qnd/Uchiha-removebg-preview.png",
        price: "500",
        quantity: 5,
        category: "Jackets"
    },
    {
        id: 14,
        name: "Tokyo Revengers",
        image: "https://i.postimg.cc/8C7CJhgj/I-m-Reincarnated-as-Emma-twin-Tokyo-revengers-fan-fiction-Reincarnated-clothing-removebg-previe.png",
        price: "500",
        quantity: 5,
        category: "Jackets"
    },
    {
        id: 15,
        name: "Attack on Titan",
        image: "https://i.postimg.cc/CLC7XqtB/Manteau-L-Attaque-des-Titans-Bataillon-d-exploration-Noir-M-removebg-preview.png",
        price: "500",
        quantity: 5,
        category: "Jackets"
    },
    {
        id: 16,
        name: "Tokyo Ghoul",
        image: "https://i.postimg.cc/Z57MsNBP/44-99-US-US-size-Men-Women-Hoodies-Anime-Tokyo-Ghoul-Ken-Kaneki-Cosplay-Jacket-Sweatshirts-Thicken.png",
        price: "400",
        quantity: 5,
        category: "Jackets"
    },
    {
        id: 17,
        name: "Full Metal Alchemist",
        image: "https://i.postimg.cc/FHMBQ4p1/44-25-US-25-OFF-New-Winter-Warm-Fullmetal-Alchemist-Hoodie-Anime-Hooded-Coat-Thick-Zipper-Men-Card.png",
        price: "400",
        quantity: 5,
        category: "Jackets"
    },
    {
        id: 18,
        name: "Pokemon",
        image: "https://i.postimg.cc/L8QZq9w6/Pokemon-go-valor-jacket-3-XL-Black-and-Grey-removebg-preview.png",
        price: "400",
        quantity: 5,
        category: "Jackets"
    },
];

function displayProductItems() {
    let myProd = document.querySelector(".productInfo");
    anotherProduct.forEach((data) => {
        let prodElement = document.createElement("tr");
        prodElement.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>  
        <td>${data.price}</td>
        <td>${data.category}</td>
        `;
        myProd.appendChild(prodElement);
    })
}

function saveProducts() {
    localStorage.setItem('data', productInfo.innerHTML);
}

displayProductItems()

// function addProduct() {
//     let Value = {
//         id: document.getElementById("Id").value,
//         name: document.getElementById("Name").value,
//         price: document.getElementById("Price").value,
//         category: document.getElementById("Category"),
//     };

//     anotherProduct.push(Value);

//     let table = document.querySelector("productInfo");
//     table.innerHTML = "";
//     anotherProduct.forEach((data) => {
//         table.innerHTML += `
//         <tbody>
//         <tr>
//         <td>${data.id}</td>
//         <td>${data.name}</td>
//         <td>${data.price}</td>
//         <td>${data.category}</td>
//         </tr>
//         </tbody>`;
//     })
// }