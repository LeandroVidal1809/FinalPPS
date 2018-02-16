

module M {
    var s = "hello";
    export function f() {
        var a = document.getElementById('valorcamporeturn').value;
        var s = document.getElementById('valorcampo').value;
       if(s==100 || s==500 || s==102)
        {

            document.getElementById('valorcamporeturn').value = "{Mensaje:Proceso de Eliminación finalizado}"
                        
        }
        else
            {
                document.getElementById('valorcamporeturn').value = "{Mensaje:El id ingresado no existe}";
            }   
            

    }
}