// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_hCkuaECQSEdkmiFrO1Vklctb8EXfQsQ",
  authDomain: "trivial-film-eoi.firebaseapp.com",
  databaseURL: "https://trivial-film-eoi.firebaseio.com",
  projectId: "trivial-film-eoi",
  storageBucket: "trivial-film-eoi.appspot.com",
  messagingSenderId: "655951519588"
};
firebase.initializeApp(config);


$.get('https://trivial-film-eoi.firebaseio.com/.json?print=pretty', function(data) {
  usuarios = data.usuarios
  anadirUsuarios(usuarios)
});


limpiar();

function anadirUsuarios(users){
  nombresUsuarios = Object.keys(users) ;

  $('.btn').on("click", function(e){

      cat = $(this).attr('value');

      var coincide = 0;

      usuario = $('.jugador').val();
      if ( usuario === "" ){
        alert('Introduce un nombre')
      }

      else{

        long = nombresUsuarios.length

        for (var i = 0; i < long; i++){

          if (usuario === nombresUsuarios[i]){
              alert('Ese nombre se está usando. Introduce otro.')
              coincide = 1;
              break;
          }

        }//Fin FOR

        if (coincide == 1){
          limpiar();
        }
        else{
            setTimeout(move,1500)
        }//Fin ELSE


          
    }//Fin ELSE

  })//FIN fincion CLICK

}//FIN funcion ANADIRUSUARIOS


function limpiar(){
  $('.jugador').val('');
}

function numRandom (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}//FIN funcion NUMRANDOM


function move(){
  url = './preguntas.html?'+cat+'?nombre='+usuario;
  window.location = url;
}