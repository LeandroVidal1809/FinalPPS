var express = require('express');  
var app = express();

app.use(express.static('public'));


//Crear Encuestas=======================================================
/**
 * @api {post} /Alta/ Alta Encuesta
 * @apiGroup Encuestas
 * @apiDescription Generar encuesta. 
 * @apiParam {String} Pregunta   Pregunta de la encuesta   
 * @apiParam {String} TipoRespuesta   Tipo de la respuesta (Menu de Seleccion - Botones Opcion)   
 * @apiParam {String} Respuesta1   Primer respuesta a la pregunta
 * @apiParam {String} Respuesta2   Segunda respuesta a la pregunta   
 * @apiParam {String} Respuesta3   Segunda respuesta a la pregunta
 * @apiParam {Date} Duración   Duración en Minutos de la encuesta     
 * @apiPermission Profesor
 *  * @apiParamExample {json} Input
 *    {
 *      "Pregunta": "Parcial Oral o Escrito?",
 *      "TipoRespuesta": "Menu Seleccion",
 *      "Respuesta1": "Oral",
 *      "Respuesta2": "Escrito",
 *      "Respuesta3": "Me es indistinto",
 *      "Duracion": "00:30"
 *    }
 * 
 * @apiSuccess {String} Mensaje Mensaje de finalización de proceso
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "Mensaje": "Proceso de grabación finalizado"
 *      
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
app.post('/AltaEncuesta', function(req, res) {  
    // business logic for create a Login...
});

/**
 * @api {put} /Modificar/ Modificar encuesta
 * @apiGroup Encuestas
 * @apiDescription Modificar encuesta. 
 * @apiParam {String} Pregunta   Pregunta de la encuesta   
 * @apiParam {String} TipoRespuesta   Tipo de la respuesta (Menu de Seleccion - Botones Opcion)   
 * @apiParam {String} Respuesta1   Primer respuesta a la pregunta
 * @apiParam {String} Respuesta2   Segunda respuesta a la pregunta   
 * @apiParam {String} Respuesta3   Segunda respuesta a la pregunta
 * @apiParam {Date} Duración  Duración en Minutos de la encuesta     
 * @apiPermission Profesor
 *  * @apiParamExample {json} Input
 *    {
 *      "Pregunta": "Parcial Oral o Escrito?",
 *      "TipoRespuesta": "Menu Seleccion",
 *      "Respuesta1": "Oral",
 *      "Respuesta2": "Escrito",
 *      "Respuesta3": "Me es indistinto"
 *      "Duracion": "00:45"
 *    }
 * 
 * @apiSuccess {String} Mensaje Mensaje de finalización de proceso
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
*       "Mensaje": "Proceso de modificación finalizado"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
app.put('/ModificaEncuesta', function(req, res) {  
    // business logic for create a Login...
});

/**
 * @api {Delete} /Eliminar/  Eliminar encuesta
 * @apiGroup Encuestas
 * @apiDescription Eliminar encuesta. 
 * @apiParam {integer} Id   Id de la pregunta a eliminar
 * @apiPermission Profesor
 *  * @apiParamExample {json} Input
 *    {
 *      "Id": 22
 *    }
 * 
 * @apiSuccess {String} Mensaje Mensaje de finalización de proceso
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "Mensaje": "Proceso de Eliminación finalizado"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
app.delete('/EliminaEncuesta', function(req, res) {  
    // business logic for create a Login...
});



/**
 * @api {get} /Traer/ Traer Encuesta
 * @apiSampleRequest http://api.github.com/some_path/
 * @apiGroup Encuestas
 * @apiDescription Traer encuesta vigente.
 * @apiPermission Profesor
 * @apiSuccess {Object} Encuests
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
    *      "Id": "Proceso de Eliminación finalizado"
    *      "Pregunta": "Parcial Oral o Escrito?",
    *      "TipoRespuesta": "Menu Seleccion",
    *      "Respuesta1": "Oral",
    *      "Respuesta2": "Escrito",
    *      "Respuesta3": "Me es indistinto"
    *      "Duracion": "00:15"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
app.get('/TraeEncuesta', function(req, res) {  
    // business logic for create a Login...
 });


app.listen(3000, function() {  
    console.log('Login api up and running...');
});