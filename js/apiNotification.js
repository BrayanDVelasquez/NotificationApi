    var aut = document.querySelector("#aut");
    var ver = document.querySelector("#ver");
    var not = document.querySelector("#notificacion");
    var cerrar = document.querySelector("#cerrar");
    var notificacion;

  aut.addEventListener("click", function(){
    Notification.requestPermission();
  })
  ver.addEventListener("click", function(){
    console.log(Notification.permission);
  })
    not.addEventListener("click", function(){
    notificacion = new Notification("Esto es una notificacion", {
    body : "Permitiste tener notificaciones",
    icon : "img/icon.png",
    image : "img/image.png"
    });

    cerrar.addEventListener("click", function(){
      notificacion.close();
      })
  })
      