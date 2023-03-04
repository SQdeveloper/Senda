const buttonPlus = document.querySelectorAll(".questions > div");
const parrafo    = document.querySelectorAll(".questions p");
const imgs        = document.querySelectorAll(".questions .top img");
let flag = [true, true, true, true, true];

buttonPlus.forEach((bt, index)=>{
    bt.addEventListener("click", ()=>{
        /*****Iniabilitamos las demas preguntas ******/
        parrafo.forEach(pr=>{
            pr.classList.remove("active");
        });
        /*****Cambiamos de imagen a la preguntas excepto al que se le hizo click*/
        imgs.forEach((im, i)=>{
            if(i != index) {
                im.src = "../rg/svg/plus.svg";
            }
        });
        /******* Cambiamos los valores de los flag excepto al que se le hizo click********/
        flag.forEach((fg, i)=>{
            if(i != index) {
                flag[i] = true;
            }
        });

        /*********** Camibiamos de imagen segun corresponda ********** */
        if(flag[index] === true) {
            imgs[index].src = "../rg/svg/dash.svg";
            flag[index] = false;
            parrafo[index].classList.add("active");
        }else {
            imgs[index].src = "../rg/svg/plus.svg"
            flag[index] = true;
            parrafo[index].classList.remove("active");
        }
    });
});