const listCategories = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
    category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category").innerHTML = id[0];
    document.getElementById("tableBody_Category").innerHTML = categoria[0];
    
}

const listCategories2 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
    category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category2").innerHTML = id[1];
    document.getElementById("tableBody_Category2").innerHTML = categoria[1];
    
}

const listCategories3 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
        category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category3").innerHTML = id[2];
    document.getElementById("tableBody_Category3").innerHTML = categoria[2];
    
}

const listCategories4 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
        category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category4").innerHTML = id[3];
    document.getElementById("tableBody_Category4").innerHTML = categoria[3];
    
}

const listCategories5 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
        category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category5").innerHTML = id[4];
    document.getElementById("tableBody_Category5").innerHTML = categoria[4];
    
}

const listCategories6 = async() => {
    const response = await fetch('https://tranquil-wave-00535.herokuapp.com/api/v1/category');
    const category = await response.json()

    let id = []
    let categoria =[]
        category.forEach((categories, index) => {
        id.push(categories.idCategory)
        categoria.push(categories.name)
    });

    document.getElementById("tableId_Category6").innerHTML = id[5];
    document.getElementById("tableBody_Category6").innerHTML = categoria[5];
    
}

window.addEventListener("load", function() {
    listCategories()
    listCategories2()
    listCategories3()
    listCategories4()
    listCategories5()
    listCategories6()
});