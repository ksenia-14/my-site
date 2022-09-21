export const readCat = () => {
    deleteItems();
    
    let nameCat = document.getElementById("cat-name").value;
    let colorCat = document.getElementById("cat-color").value;
    let sizeCat = document.getElementById("cat-size").value;

    let boxContainer = document.getElementById("yourCat");

    let imgBox = document.createElement('img');
    imgBox.setAttribute('src', './img/box (1).png');
    imgBox.classList.add('box');

    let text = document.createElement('text');
    text.innerHTML = "В этой коробке тот кот, которого Вам хочется" + `<br>`;
    
    let textCat = document.createElement('text');
    textCat.innerHTML = `<br>` + "Имя: " + nameCat + `<br>` +
                                 "Цвет: " + colorCat + `<br>` +
                                 "Размер: " + sizeCat;
    console.log(nameCat);

    boxContainer.append(text);
    boxContainer.append(imgBox);
    boxContainer.append(textCat);
}

const deleteItems = () => {
    var deleteElement = document.getElementById('yourCat');
    deleteElement.innerHTML = '';
  }


