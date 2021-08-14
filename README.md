Mania\_ Store (ReactJS)

Preview ultima version:  
Mobile:  
![Giphy](https://media.giphy.com/media/zVQy7yn06jcmHMTRy0/giphy.gif)

Mania\_ es un e-commerce de articulos de computacion y videojuegos, el nombre surge de un pequeño local 'de la infancia' que alquilaba cartuchos de consolas como Sega y NES.

Dependencias del proyecto:  
*React  
*React-router  
*styled-components: Formato 'condicional' a componentes especificos que lo requieran  
*node-sass: Compilacion y archivos css con fuente en SCSS  
\*Firebase para almacentar algunos produtos y categorias en Firestore

---

Changelog:

06-07-2021:  
-Definidos header con Navbar, redes sociales, buscador y carrito  
-Primera implementacion de carousel  
-Primer modelo de botones  
-Primer modelo de cards de productos

07-07-2021:  
-Cards de productos con botones 'reactivos' a la cantidad

13-07-2021:  
-Cards de productos ya no interactuan con la cantidad a comprar, si no que llevan a un 'modal' de descripcion ampliada y adicion de unidades.  
-Cards de productos ahora provienen de objetos js  
-Implementacion de componente de carga  
-Simulacion de carga lenta para prueba de componente de carga

15-07-2021:  
-Primera version de vista previa de producto que muestra informacion acerca de un producto seleccionado, esta incluye el componente para seleccionar la cantidad y eventualmente añadir al carrito

16-07-2021:  
-Implementacion de useEffect en componentes para evitar sobre renderizar  
-Styled components

20-07-2021:  
Removidos styled components no necesarios  
Añadidos react routing para home y productos especificos  
Modificados estilos de detalles de productos

21-07-2021:  
\*Routing

22-07-2021:  
Creacion de atributo categorias en cada producto  
Routing a seccion productos: notebooks y perifericos

23-07-2021:  
Alguna mejora en el README

[Imgur](https://i.imgur.com/xZDDUKw.gif)

24-07-2021:  
Handling de ingreso de direccion a id incorrecto de producto  
Componente ItemCountConfirm: Confirmacion de cantidad de producto seleccionado

25-07-2021:  
Mejorado NavBar para 'mobile' (width<864px): Iconos, busqueda, menu  
Mejorado NavBar desktop: menu categorias  
NavBars con redirects a categorias mapeadas  
Carousel en home (/Mania\_)
Componente de item para articulo/s en promocion (actualmente: Gabinete, "15% off"), disponible en home

26-07-2021:  
Previews en README.md (ya desactualizadas)  
Desktop:  
[Giphy](https://media.giphy.com/media/35YgWly2BJWACycj7G/giphy.gif)

"Mobile":  
[Giphy](https://media.giphy.com/media/fWYOtZmN67YHghkVF1/giphy.gif)

27-07-2021:
Home muestra un producto en descuento al azar  
Productos en descuento (home, promociones) tienen marco con animacion, no activa en caso de estar el producto agotado  
Seccion de productos en descuento (promociones): todo producto con esta condicion aparecera alli  
Seccion Cart: tiene mensaje para redireccionar a una posible compra en caso de estar vacio, muestra los productos en caso de tener añadidos y la posibilidad de quitarlos del mismo  
NavBar: Cart animado, estilo para cart activo, secciones activas con estilo especifico, mejorado menu mobile, reducido box de categorias en desktop  
+Refactorizado codigo en componentes varios.

28-07-2021:  
Algunos componentes fueron refactorizados  
Se reemplazaron JSON de productos y categorias por Firestore  
CartWidget: Componente para mostrar la cantidad de items en el carrito (suma de todas las cantidades de producto)  
Cart ahora muestra los productos en carritos 'ordenadamente', tiene ademas una card que totaliza el valor de la compra y tiene las opciones para finalizar o seguir adquiriendo productos  
CartContext (Context) lleva la administracion de productos en carrito(agrega, quita, vacia), asi como su sumatoria de unidades y precios.  
El Cart(carrito) es persitente en memoria del navegador!

29-07-2021:  
Creado componente para ordenar lista de productos  
Categorias en navbar y menu se ordenan alfabeticamente (excepto seccion de promociones que siempre aparece primero)  
Tras agregar un item al carrito, podremos editar su cantidad/quitarlo del carrito desde la misma pagina del producto

31-07-2021:  
Categorias son distribuidas a los componentes mediante un context que realiza el fetch correspondiente.  
ExhibitParallax: Componente que muestra las categorias con un estilo y formato. Posee un problema de scroll en mobile.  
Redefinido componente carousel, ahora no se ni que es pero quedo bonito! Funciona tanto en mobile como desktop.  
Componente para ordenar distribuido en pagina de promociones y en paginas generales de produtos, siempre y cuando haya mas de un producto para mostrar.  
Refactorizado codigos de varios componentes.  
Modificado el estilo en algunos componentes.  

01-08-2021:  
Correcion en package.json  
Redefinido 'ex carousel' en landing page  
Funcion experimental: al hacer hover en la imagen de un producto, se mostraria la misma en mayor resolucion en alguna zona disponible del viewport  
Modificado el estilo en algunos componentes
  
02-08-2021:  
Landing en path '/' en lugar de '/Mania'  
Renombradas variables de context de categorias para mejor semantica  
Todos los componentes que utilizan categorias ahora obtienen el dato del context creado.  
Pequeño rework a opcion de categorias en NavBar.  
Ex carousel reestilizado tiene desempeño mas fluido  
  
12-08-2021:  
Se modifico el estilo de varios componentes.  
  
13-08-2021:  
Formulario de datos sobre comprador.  
Modificado estilo de algunos componentes.  
  
14-08-2021:  
Proceso de compra 'completo'.  
Tras verificar stocks de las ordenes, se crea registro de la orden a nombre del comprador ingresado.  
Tras confirmar compra, saldra un cartel con el ID de la orden.  
+Nuevo path _/ordenes_ en donde se realizaran consultas a ordenes.  
+Componente Orders encargado de mostrar las ordenes en caso de una consulta correcta.