console.log('ejemplo de consola');
console.info('mensaje');
console.error('Error mensaje');
console.warn('Error....')
/** cometarion en parrafo
 * multiples lineas
 */
// solo una linea

//Declaracion de variables en JS
/** 1.- let 
 *  2.- var
 *  3.- const
 */
const Hparrafo=document.getElementById('parrafo');
Hparrafo.style.color='red';
console.log(Hparrafo)
//document.getElemetById busca un elemento de html mediante su id
//addEventListener nos permite agregar eventos (click, dobleclik, key, keyup)
Hparrafo.addEventListener('click',function(){
    Hparrafo.style.color="orange"
})