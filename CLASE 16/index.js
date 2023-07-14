const inputItem = document.getElementById("inputItem");
const btnItem = document.querySelector("#btnItem");
const listItems = document.querySelector("#listItems");

inputItem.focus();
listItems.innerHTML =  localStorage.getItem('htmlItem');
btnItem.addEventListener("click",function(){
   // alert(inputItem.value);
   const trElement=document.createElement("tr"); /** <tr></tr> */
   const tdEmlentOne = document.createElement("td"); /** <td></td> */
   const tdElementTwo = document.createElement("td"); /** <td></td>  */

   const trLength = document.querySelectorAll("tbody tr").length;
   trElement.id="item_"+trLength;

   console.log(trLength);
    tdEmlentOne.textContent = inputItem.value;

    tdElementTwo.innerHTML ='<button data-id="'+trLength+'" id="deleteItem" class="btn btn-danger">Eliminar</button>';


   trElement.appendChild(tdEmlentOne);/** <tr><td></td></tr> */
   trElement.appendChild(tdElementTwo);/** <tr><td></td> <td></td></tr> */
   listItems.prepend(trElement);/** <tbody> <tr><td></td> <td></td></tr> </tbody>*/

   
   const btnEliminar = document.querySelector("#deleteItem");

   btnEliminar.addEventListener("click",function(){
        let numberItem = btnEliminar.getAttribute("data-id");
        console.log(btnEliminar.getAttribute("data-id"));
        const trEliminar = document.querySelector("#item_"+numberItem);
        console.log(trEliminar);
        trEliminar.remove();
   });

   inputItem.value='';
   inputItem.focus();

   localStorage.setItem('htmlItem',listItems.innerHTML);
});

console.log(2+'hola'+2+'hola...');