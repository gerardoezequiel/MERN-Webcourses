# ¿Qué harás?

La tarea consistirá en que crearás una página web en la cual el usuario accederá a una lista de cursos online de informática.

El usuario no solo debe poder acceder a los cursos, debe también poder modificarlos, añadir cursos e incluso eliminarlos.

Tambien se mostrará información sobre los instructores que dan los cursos.

## Información de la base de datos

Necesitaremos 2 modelos de datos: Uno para los cursos y otro para los instructores.

De cada curso necesitaremos una imagen promocional (como un URL a una dirección web con la imagen), su nombre, la categoria, una descripción, la duración del curso (hazlo como un simple string, ej: "Dos semanas" o "Tres meses"), el enlace a la web del curso, el nombre instructor del curso y el nombre de la empresa que promueve el curso. Habrá 3 posibles categorias: HTML, CSS y JavaScript. El usuario no podrá crear nuevas categorias. Solo podrá elegir una de las categorias existentes.

Respecto a los instructores, de cada uno necesitamos su nombre completo, su email, un número de telefono, su fecha de nacimiento, la ciudad donde viven y una presentación.

## Páginas que crearemos para el Cliente

Para empezar, nuestra web tendrá 10 páginas:

- Cuando el usuario llegue a nuestra web, se encontrará con una página de bienvenida que le mostrará una descripción de nuestra página y un botón que le llevará a la lista de cursos.
- Como digimos arriba, una de las páginas será la lista con todos los cursos, mostrando solo la imagen (que estará en un tamaño reducido), el nombre y la categoria. Existirá un "select" que servira para filtrar los cursos según su categoria.
- Si el usuario pulsa en la imagen del curso, le llevará a otra de las páginas, en la cual mostrará información de ese curso con más detalle. La imagen se mostrará a mayor tamaño y ahora sí se mostrará la descripción del curso, el instructor, la duración y un enlace que llevaría al curso (para no complicarnos, cada enlace llevará a uno de los temas de nuestro curso de Adecco). También en esta página aparecerán botones para modificar o eliminar el curso.
- Necesitaremos una página que nos llevará a un formulario para crear un nuevo curso.
- Otra página llevará a un formulario que permitirá modificar cursos. Recuerda que este formulario debe empezar mostrando la información del curso en sus respectivos campos.
- Existirá tambien una página que se encargará de mostrar quienes crearon la página y de que se encargo cada uno.
- Necesitaremos una página en la cual muestren todos los instructores, mostrando de cada uno su nombre, su telefono y su email.
- Al pulsar en el nombre de un instructor, nos llevará a otra página donde se ampliara la información del instructor, mostrandose tambien su fecha de nacimiento, donde vive y su presentación. Incluye botones para modificar o eliminar al instructor.
- Necesitamos una página con el formulario para introducir a un nuevo profesor.
- Habrá tambien una página con un formulario que modifique los datos del instructor. Al igual que al modificar un curso, debe empezar mostrando la información del curso en sus respectivos campos.

Los formularios deben mostrar una caja de texto con el nombre del curso, una etiqueta "select" con las posibles categorias, un "textarea" con la descripción, otra caja de texto para la duración, otra caja de texto para el nombre del instructor, otra caja para el enlace del curso y una última para el enlace a la imagen.

En todas las páginas se mostrara una cabecera que mostrará 5 enlaces. El primero sirve para devolver al usuario a la lista de cursos, el segundo lleva al formulario para crear un nuevo curso, el tercero lleva a los créditos, el cuarto lleva a la lista de profesores y el quinto permite introducir a un nuevo profesor.

Tambien aparecera un pie de página con los nombres de los creadores de la página web.

## Ficheros para el Servidor

Necesitarás un fichero que se encargue de almacenar las rutas que vas a necesitar.
Basicamente, necesitamos una ruta para mostrar cursos, otra para introducir un nuevo curso, otra para modificar un curso ya existente y una última para eliminar un curso.
Estas rutas llamarán a funciones dentro de otro fichero, que se encargarán de obtener información de la BBDD que finalmente mostrará en pantalla las páginas del cliente.

### Pasos para realizar el proyecto

1. Empezaremos montando la parte del server. Empezaría como un proyecto Node, con la idea de irlo testeando en Postman.
2. Una vez hayamos creado un proyecto Node satisfactorio, lo siguiente será crear un proyecto Monorepo, al cual moveremos nuestro proyecto Node y lo convertiremos en la carpeta server.
3. Una vez tengamos la parte del server completada, habrá que crear la carpeta client, y montaremos las páginas.
4. Para finalizar, realizaremos los últimos pasos con los que convertir el Monorepo en un proyecto Mern (usar Heroku y demás).
5. El acto final consistirá en enviar nuestro proyecto a Netifly. A ver si es posible arreglar los problemas del PC para poder hacerlo mediante Hyper.

### Fecha límite para finalizar este proyecto

Tienes hasta el Marte 3 de Octubre. Deberás entregarlo ese día después de volver del almuerzo.

### Wireframe

![Screenshot](https://i.ibb.co/B6NGkVB/Home.png)
![Screenshot](https://i.ibb.co/fvhVVR8/Courses-list.png)
![Screenshot](https://i.ibb.co/n81VptF/Curso.png)
![Screenshot](https://i.ibb.co/KFqxnTZ/Create-course.png)
![Screenshot](https://i.ibb.co/64F0NNn/About-us.png)
