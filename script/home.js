let features = [
    {
        id: "1",
        image: "https://i.postimg.cc/bvKfdYWk/One-Punch-Anime-Hoodie-Men-2022-Autumn-Fleece-Tracksuit-Male-Streetwear-Clothes-Fashion-Mens-Pullove.png",
        title: "Hoodies",
        des: "High-quality unisex hoodies in various colors with assorted character designs"
    },
    {
        id: "2",
        image: "https://i.postimg.cc/qvS5xbwd/Spirited-Away-T-shirt-Anime-Cartoon-Anime-Harajuku-Graphic-Street-Style-T-shirt-For-Men-s-Women-s-Un.png",
        title: "T-Shirts",
        des: "High-Quality unisex t-shirts in various with assorted character inspirations"
    },
    {
        id: "3",
        image: "https://i.postimg.cc/wjyj2Qnd/Uchiha-removebg-preview.png",
        title: "Jackets",
        des: "High quality unisex assorted jackets"
    },
]

let displayFeatures = document.querySelector(".row");
features.forEach((data) => {
    displayFeatures.innerHTML += `
    <div class="col-lg-4">
    <img src="${data.image}" width="200" height="200" class="rounded-1">
    <h2 class="fw-norma">${data.title}</h2>
    <p>${data.des}</p>
    <p><a class="btn" href="../html/products.html">View</a></p>
    </div>`
});