async function llamar() {
    const res = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const data = await res.json();
    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');

    img1.src = data[0].image;
    img2.src = data[1].image;
    img3.src=data[2].image;
    img4.src=data[3].image;
    img5.src=data[4].image;
    img6.src=data[5].image;
}

llamar()

const listProducts = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products").innerHTML = juegos[0];
    document.getElementById("tableDes_Products").innerHTML = des[0];
    document.getElementById("tablePre_Products").innerHTML = pre[0];
    document.getElementById("tableId_Products").innerHTML = id[0];
}

const listProducts2 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products2").innerHTML = juegos[1];
    document.getElementById("tableDes_Products2").innerHTML = des[1];
    document.getElementById("tablePre_Products2").innerHTML = pre[1];
    document.getElementById("tableId_Products2").innerHTML = id[1];
}

const listProducts3 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products3").innerHTML = juegos[2];
    document.getElementById("tableDes_Products3").innerHTML = des[2];
    document.getElementById("tablePre_Products3").innerHTML = pre[2];
    document.getElementById("tableId_Products3").innerHTML = id[2];
}

const listProducts4 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products4").innerHTML = juegos[3];
    document.getElementById("tableDes_Products4").innerHTML = des[3];
    document.getElementById("tablePre_Products4").innerHTML = pre[3];
    document.getElementById("tableId_Products4").innerHTML = id[3];
}

const listProducts5 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products5").innerHTML = juegos[4];
    document.getElementById("tableDes_Products5").innerHTML = des[4];
    document.getElementById("tablePre_Products5").innerHTML = pre[4];
    document.getElementById("tableId_Products5").innerHTML = id[4];
}

const listProducts6 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/products');
    const products = await response.json()

    let id = []
    let juegos =[]
    let des=[]
    let pre=[]
    products.forEach((product, index) => {
        id.push(product.id)
        juegos.push(product.name),
        des.push(product.description),
        pre.push(product.price)
    });

    document.getElementById("tableBody_Products6").innerHTML = juegos[5];
    document.getElementById("tableDes_Products6").innerHTML = des[5];
    document.getElementById("tablePre_Products6").innerHTML = pre[5];
    document.getElementById("tableId_Products6").innerHTML = id[5];
}

window.addEventListener("load", function() {
    listProducts()
    listProducts2()
    listProducts3()
    listProducts4()
    listProducts5()
    listProducts6()
});