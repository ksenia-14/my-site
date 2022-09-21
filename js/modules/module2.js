export const cloneSection = () => {
    let btnClone = document.getElementById("btn-clone");
    let section = btnClone.parentNode;

    let cloneSection = section.cloneNode(true);
    section.after(cloneSection);

    functionBtn();
}

const functionBtn = () => {
    let btnCloneM = document.getElementsByClassName("clone-button");
    for (let btn of btnCloneM) {
        btn.addEventListener('click', cloneSection);
    }
}

