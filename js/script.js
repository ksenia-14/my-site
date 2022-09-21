import * as module1 from "./modules/module1.js";
import * as module2 from "./modules/module2.js";
import * as module3 from "./modules/module3.js";

// получаем кнопку
const btnAddCats = document.getElementById("btnAddCats");
btnAddCats.addEventListener('click', module1.addCats);

const btnDeleteCats = document.getElementById("btnDeleteCats");
btnDeleteCats.addEventListener('click', module1.deleteCats);

const btnClone = document.getElementById("btn-clone");
btnClone.addEventListener('click', module2.cloneSection);

const btnOk = document.getElementById("ok-button");
btnOk.addEventListener('click', module3.readCat);


