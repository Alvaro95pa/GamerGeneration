$(document).ready(function() {
    //Iniciar sesión
    $('#login').click(function(){
        
        var usr = $('#user').val();
        var pass = $('#pass').val();
        
        if((usr == 'admin') && (pass == '1234')) {
            $('#logeo').text('admin');
            $('#myModal').modal('hide');
            
            $('#mContent').remove();
            $('#mDialog').append('<div class="modal-content" id="mContent">' 
            +'<div class="modal-body" id="mBody"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h2>Ir a perfil:</h2><a type="button" class="btn btn-info" href="perfil.html">Perfil</a>' 
            +'<hr><h3>Cierre de sesión</h3><button type="button" class="cierre" id="cerrar">Cerrar sesión</button></div></div>');
        }
        else if((usr != 'admin') && (pass == '1234')) {
            $('#user').attr("placeholder", "USUARIO INCORRECTO");
            $('#user').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
        }
        else if((pass != '1234') && (usr == 'admin')) {
            $('#pass').attr("placeholder", "CONTRASEÑA INCORRECTA");
            $('#pass').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
        }
        else{
            $('#user').attr("placeholder", "USUARIO INCORRECTO");
            $('#user').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
            $('#pass').attr("placeholder", "CONTRASEÑA INCORRECTA");
            $('#pass').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
        }
    });
    
    //Cerrar sesión
    $('body').on('click', '#cerrar', function() {
        $('#logeo').text('Login');
        
        $('#myModal').modal('hide');
        
        $('#mContent').remove();
        $('#mDialog').append('<div class="modal-content" id="mContent"><div class="modal-header">'
        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        +'<span aria-hidden="true">&times;</span></button><h3 class="sesion">Iniciar sesión</h3>'
        +'</div><div class="modal-body"><form><span class="usr_pas">Usuario:</span><br>'
        +'<input id="user" type="text" class="form-control" placeholder="Nombre de usuario">'
        +'</form><br><form><span>Contraseña:</span><br>'
        +'<input id="pass" type="password" class="form-control" placeholder="Contraseña">'
        +'</form><br><button type="button" id="login">Entrar</button>'
        +'<label class="record"><input type="checkbox">Recuérdame</label><hr>'
        +'<div class="reg"><span>Si aún no estas registrado en nuestra web puedes hacerlo aquí:'
        +'</span><br><a type="button" class="btn btn-info" href="registro.html">Registrarse</a>'
        +'</div></div></div>');
    })
})