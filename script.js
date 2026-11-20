const notes=document.querySelectorAll(".note")
const button=document.getElementsByClassName("button")
const Surligner =document.getElementById("#surligner")
const input=document.getElementsByClassName("input")
const p=document.getElementsByClassName("p")
notes.forEach(note => {
    
    Surligner.addEventListener("click",()=>{
        note.classList.toggle()="bg-yellow-200"
    
    })
});
 function ajouter(){
    const ajouter=document.getElementById("ajouter")
    ajouter.addEventListener("click",()=>{
        

    })
 }
 ajouter()