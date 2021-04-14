## Para ejecutar el programa:

1. Instalar paquetes: `npm install`
2. Modo desarrollo: `npm run dev`
3. Modo produccion: `npm run start`


## RESPUESTAS:
### EJERCICIO 2
1. Un servidor `HTTP` es un software que se ejecuta en el servidor capaz de realizar comunicaciones bidireccionales o unidireccionales `Cliente-Servidor = Servidor-Cliente` bajo protocolos de red. Generando así una parte lógica que se encarga de enviar y/o recibir información.

2. Los verbos `HTTP` son los métodos de acción con que el servidor se va a comunicar con el cliente o cliente servidor. Los más conocidos son `GET`, `POST`, `PUT`, `DELETE`.

3. Un `request` es una petición que hace un cliente al servidor. Un `response` es una respuesta del servidor al cliente. La petición `HEAD` es similar a `GET` pero unicamente devuelve el encabezado de la plantilla html sin el contenido body.

4. Se le llama `Query String` a la selección de parámetros de una url para buscar información específica, por lo general, dentro de una base de datos. Por ejemplo: www.mipagina.com/agregar/porId/100 siendo asi el numero 100, el objeto a buscar.

5. `Response Code` es el resultado de la búsqueda por url o mejor dicho, respuesta nativa del servidor. Indicando asi el resultado de la respuesta. Si fue correcta, el servidor responde con `“status 200”`. Caso contrario con el famoso `404`. 
Existen 5 tipos de respuestas (Las más conocidas) Se puede utilizar el módulo “Morgan”:
    - 100: Respuesta de información, indica que todo está correcto. (cliente puede continuar)
    - 200: Respuesta del lado del servidor (métodos). Todo está correcto
    - 300: Redireccionamientos
    - 400: Errores en el Cliente
    - 500: Errores en el Servidor

6. Para enviar información a través del método `POST`, se puede generar un simple formulario (En el frontend) haciendo `“action”` a determinada ruta y enviar los datos al servidor. Ejemplo en la imagen:
![Image of Yaktocat](https://i.imgur.com/v24zE66.png).
Para recibir información a través de GET, es haciendo una petición a una URL e inyectando parámetros Query String. Ej: {{url}}/categorias/frutas/88 o simplemente {{url}}/
El servidor se encargará de interpretar la url y devolverá la solución a través del método GET.

7. El método que utilizamos para acceder a una página es `GET`, ya que estamos pidiendo información a dicha página o url.


8. Ambas estructuras de datos se encargan intercambiar información de forma ordenada. No conozco mucho de XML pero si se que es más antiguo que JSON. Las estructuras de datos JSON son archivos ligeros y fácil de interpretar para los desarrolladores, se puede utilizar para infinidades de cosas, la más común es la obtención de datos a través de una api. Otras pueden ser una pequeña base de datos, archivos de configuración (package.json en node), etc… Estos archivos son multi plataforma, se puede utilizar en cualquier lenguaje de programación. Ejemplo de estructura. (package.json)


9. Es un protocolo `mas robusto que REST` el cual intercambia datos y comunicaciones de diferentes procesos unicamente a través de estructuras XML dentro del protocolo http. Estos métodos de comunicación pueden ser FTP y TCP.


10. Por otro lado existe otra tecnología llamada `REST`, que es mucho más nueva que `SOAP` y a la vez más flexible ya que su único protocolo de comunicación es a través de los métodos http mencionados anteriormente. REST permite enviar y recibir cualquier tipo de dato definido por el tipo de contenido o (Content Type) utilizando también las respuestas nativas de http.

11. Los `headers` son la parte principal de los HTTP request ya que transmiten información específica del servidor, del cliente, url, páginas, etc…
Content-Type se utiliza para determinar qué tipo de información será mostrada o interpretada.

### EJERCICIO 3:
Realice una petición a la {{url}} GET para obtener los datos que se encuentran en la base de datos. Luego a través del método POST inserte nueva data a la base de datos con mi apellido, dni y nombre. Nuevamente petición GET para ver los cambios realizados. Ya se encuentra mi información en la base de datos.