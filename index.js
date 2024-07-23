// lo primero que vamos hacer con las librerias va a ser buscar en el navegador,
//para instalar, en la pagina va a tener muchos ejemplos de alertas, copiamos el codigo
// que nos da la pagina, copiamos y pegamos, dentro de los ejemplo hay muchas alertas.
//
//Para instalar lo que hay que hacer es ir hasta el final de la pagina donde dice install:

//pegamos el link al principo del html.
// y el script al final del body, junto con el script de js vinmculado, y asi podremos usar la libreria copiando codigo,
// y agregandolo a nuestros proyectos.

//<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
//{/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script> */}
// siempre el script va arriba del arriba del script del js


// con el script pegado al final ya tenemos la libreria vinculada
// para saber si funciona pegaremos un codigo de alerta a ver si sale cuando levantamos la pagina.

//ejemplo de alert funcionando

// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });


// ahora crearemos en el html un boton en el html y despues lo traemos al js, creamos una variable,
// a esta variable le ponemos nombre que sea igual a document.getElementById("boton"); de esta manera estamos
// trayendo el boton del html al js, 
// al botn le agregamos un evento que es el que escucha cuando apretemos el boton, seguimos con el arrow function,
// y dentro de la arrow function le vamos a poner el alert que trajimos de la pagina.
// y levantamos la pagina, nos encontraremos con el boton, hacemos el click y nos aprecera el alerta.
// podemos cambiar el mensaje, el icono y en la libreria tambien podemos buscar iconos y demas cosas.


// en la documentacion de la pagina podremos ver como podemos cambiar, posicion en la pagina, iconos,
//mensajes, el tiempo de espera, lo que aprece y desapárece, colocarle una imagen tambien.

let boton = document.getElementById("boton");
// boton.addEventListener("click", () => {
//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: '<a href="#">Why do I have this issue?</a>'
//       });
// });

//En este alert podemos ver que cambnio el icono, el titulo, y el boton de confirmar, podemos cambiar textoas.


// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Genial",
//         title: "Haz agregado al carrito",
//         icon: "success",
//         confirmButtonText: "ok"
//       });

//     });

//Tambien tenemos las alertas que tienen una timer, esto hace que desaparezca el mensaje solo.
// timer: 1500 - podemos cambiar al tiempo en el cual desaparece el mensaje
//tambien podemos pponer la pasicion, lo que querramos.
// position: "top-end"
// en esta linea tiene el boton en false, si queremos que muestre lo ponemos en true
//showConfirmButton: false
//



// boton.addEventListener("click", () => {
//     Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Tu trabajo se ha guardado",
//         showConfirmButton: false,
//         timer: 1500
//       });

//     });


// Se le puede colocasr una imagen, la imagen puede tener un titulo, un texto,
//elegimos la imagen y el ancho, la altura 



boton.addEventListener("click", () => {
    Swal.fire({
        title: 'sweet!',
        text: 'Modal with a custon image',
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Farboles%2F&psig=AOvVaw2tqsuNJz7Ye4nEYENWLurf&ust=1721781828405000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDhrqn3u4cDFQAAAAAdAAAAABAE",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "A tall image"
      });

    });



// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Do you want to save the changes?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Save",
//         denyButtonText: `Don't save`
//       }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//           Swal.fire("Saved!", "", "success");
//         } else if (result.isDenied) {
//           Swal.fire("Changes are not saved", "", "info");
//         }
//       });
// });





















































































