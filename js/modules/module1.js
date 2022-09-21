// module1
export const addCats = () => {
    let numAddCats = document.getElementById("numCats").value;
    // console.log(numAddCats);
    while(numAddCats > 0) {
        addOneCat();
        numAddCats--;
    }
}

export const addOneCat = () => {
    // создание элемента
    const newCat = document.createElement('img');

    // подсчет элементов
    let numOfCats = document.getElementsByClassName('cat').length;
    // console.log(numOfCats);
    let varCase = numOfCats % 10;
    // console.log(varCase);

    // выбор элемента
    switch (varCase) {
        case 0: newCat.setAttribute('src', './img/cats/cat1.png'); break;
        case 1: newCat.setAttribute('src', './img/cats/cat2.png'); break;
        case 2: newCat.setAttribute('src', './img/cats/cat3.png'); break;
        case 3: newCat.setAttribute('src', './img/cats/cat4.png'); break;
        case 4: newCat.setAttribute('src', './img/cats/cat5.png'); break;
        case 5: newCat.setAttribute('src', './img/cats/cat6.png'); break;
        case 6: newCat.setAttribute('src', './img/cats/cat7.png'); break;
        case 7: newCat.setAttribute('src', './img/cats/cat8.png'); break;
        case 8: newCat.setAttribute('src', './img/cats/cat9.png'); break;
        case 9: newCat.setAttribute('src', './img/cats/cat5.png'); break;
        default: break;
    }

    // добавление элемента
    const containerCats = document.querySelector('.container-cats-images');
    newCat.classList.add('cat');
    containerCats.append(newCat);
}

export const deleteCats = () => {
    let numDeleteCats = document.getElementById("numCats").value;
    // console.log(numAddCats);
    while(numDeleteCats > 0) {
        deleteOneCat();
        numDeleteCats--;
    }
}

export const deleteOneCat = () => {
    // подсчет элементов
    let numOfCats = document.getElementsByClassName('cat').length;
    if (numOfCats == 0) {
        return;
    }
    // нахождение последнего кота
    const cat = document.querySelector('.cat:last-child');
    // удаление кота
    cat.remove();
}

