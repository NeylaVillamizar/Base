    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }else{
                  RegistrarEmpleado();
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()
      function RegistrarEmpleado (){
          let nombres = document.querySelector("#txtNombres").value;
          let apellidos = document.querySelector("#txtApellidos").value;
          let email = document.querySelector("#txtEmail").value;
          let telefono = document.querySelector("#txtTelefono").value;

          let url = `http://[::1]:3000/empleados`;
          let datos = {
              nombres: nombres,
              apellidos: apellidos,
              email: email,
              telefono: telefono,
          };
          
          fetch(url, {
              method: 'POST',
              body: JSON.stringify(datos),
              headers:{
                  'Content-Type':'application/json'
              }
      }).then(res => res.json())
      .then(mensaje =>  {
          conslole.log(mensaje)
      })
    }