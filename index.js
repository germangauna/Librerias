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

// let boton = document.getElementById("boton");
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



// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Sweet!",
//         text: "Modal with a custom image.",
//         imageUrl: "https://unsplash.it/400/200",
//         imageWidth: 400,
//         imageHeight: 200,
//         imageAlt: "Custom image"
//       });

//     });

// tenemos alertas mas avanzadas, donde tenemos una ventana donde nos hace una pregunta,
// y tenemos dos opciones, si es true saldra el mensaje y se ejecutara y sino, no se ejecutara nada.

// si quisieramos eliminar y que esto lo saue del localStorage, lam logica la podemos poner dentro del if.


// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Esta seguro de eliminar el producto?",
//         icon: "warning",
//         showDenyButton: true,
//         confirmButtonText: "Si, seguro",
//         cancelButtonText: `No, no quiero`,
//       }).then((result) => {
//         if (result.isConfirmed) {
//             //logica para eliminar
//           Swal.fire({
//             title: "Borrado",
//             icon:"success",
//             text: "El archivo a sido borrado",
//           }) 
//         }
//       });
// });


// });


// este ejemplo de abajo es para poner como ingreso el git hub de cada usuario

// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Submit your Github username",
//         input: "text",
//         inputAttributes: {
//           autocapitalize: "off"
//         },
//         showCancelButton: true,
//         confirmButtonText: "Look up",
//         showLoaderOnConfirm: true,
//         preConfirm: async (login) => {
//           try {
//             const githubUrl = `
//               https://api.github.com/users/${login}
//             `;
//             const response = await fetch(githubUrl);
//             if (!response.ok) {
//               return Swal.showValidationMessage(`
//                 ${JSON.stringify(await response.json())}
//               `);
//             }
//             return response.json();
//           } catch (error) {
//             Swal.showValidationMessage(`
//               Request failed: ${error}
//             `);
//           }
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: `${result.value.login}'s avatar`,
//             imageUrl: result.value.avatar_url
//           });
//         }
//       });
    
    
// });


// este se puede usar para agregar al carrito, o se guardo, se acepto la entrada, etc. es muy rapida.
// y si le apoyamos el mouse encima se para el tiempo en el cual se va a cerrar el cartel o alerta


//   boton.addEventListener("click", () => {
//     const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         }
//       });
//       Toast.fire({
//         icon: "question",
//         title: "Signed in successfully"
//       });
    
//   });







































































