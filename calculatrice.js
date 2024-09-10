//calculatrice

const spanbouton=document.querySelectorAll('span')
const ecran=document.querySelector('.container-ecran')
const boutonclear=document.querySelector('.delete')
const lotion=document.querySelectorAll('.lotion')
const chiffre=document.querySelectorAll('.chiffre')
let valeurEcran=0; // initialisation de l'écran
ecran.innerHTML=`
    <h3> ${valeurEcran}</h3>
`
// const division=document.querySelector('.division')
// division.addEventListener('click',()=>{
//     division.style.color='orange'
// })

let click=1;

console.log(chiffre)


//animation des boutons

spanbouton.forEach(box => {
    box.addEventListener('click', (e)=>{

//initialisation du zero 

        if (valeurEcran === 0) {
            valeurEcran = e.target.innerHTML;
        } else {
            valeurEcran += e.target.innerHTML; // Sinon, on concatène la nouvelle valeur
        }
//initialisation des opérateurs

        if(e.target.innerText==='÷'){

            console.log("j'ai selectionner la division")
            e.target.classList.add('lotion')

            
            // if(){

            // }
            
        }else if(e.target.innerText==='x'){
            console.log("j'ai selectionner la x ")
            e.target.classList.add('lotion')

        }else if(e.target.innerText==='-'){
            console.log("j'ai selectionner la - ")
            e.target.classList.add('lotion')

        }else if(e.target.innerText==='+') {
            console.log("j'ai selectionner la +")
            e.target.classList.add('lotion')

        }else if(e.target.innerText==='='){
            console.log("j'ai selectionner la =")
            e.target.classList.add('animation')

        }else{
            e.target.classList.add('animation')
        }

        ecran.innerHTML=`
            <h3> ${valeurEcran}</h3>
        `
//animation de mes boutons
        setTimeout(()=>{
            e.target.classList.remove('animation')
        },1000)
    })      
//les calculs


// calcul(nb1,nb2,op)











    box.addEventListener('mouseover',(e)=>{
        e.target.style.cursor='pointer'
    })
});

//Ecran

boutonclear.addEventListener('click',()=>{
    valeurEcran=0
    ecran.innerHTML=`
    <h3> ${valeurEcran}</h3>
    `   
    document.querySelectorAll('.lotion').forEach(lotion =>{
        lotion.classList.remove('lotion')
    })
})

//fonction calcul
function calcul(nb1,nb2,op){
    let resultat=eval(`${nb1} ${op} ${nb2}`)
    return resultat
}
//3 variables pour calculer
let nombre1;
let nombre2;
let opérateur;

// console.log(calcul(1,2,''))