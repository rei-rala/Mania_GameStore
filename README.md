Mania\_ Store (ReactJS)

Preview ultima version:  
Desktop:  
![](https://imgur.com/iCc0y0e.gif)

"Mobile":  
![](https://imgur.com/44JzVeZ.gif)

Mania\_ es un e-commerce de articulos de computacion y videojuegos, el nombre surge de un pequeño local 'de la infancia' que alquilaba cartuchos de consolas como Sega y NES.

Dependencias del proyecto:  
*React  
*React-router  
*styled-components: Formato 'condicional' a componentes especificos que lo requieran
*node-sass: Compilacion y archivos css con fuente en SCSS

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

![](https://i.imgur.com/xZDDUKw.gif)

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
Home muestra un producto en descuento al azar  
Productos en descuento (home, promociones) tienen marco con animacion, no activa en caso de estar el producto agotado  
Seccion de productos en descuento (promociones): todo producto con esta condicion aparecera alli  
Seccion Cart: tiene mensaje para redireccionar a una posible compra en caso de estar vacio, muestra los productos en caso de tener añadidos y la posibilidad de quitarlos del mismo  
NavBar: Cart animado, estilo para cart activo, secciones activas con estilo especifico, mejorado menu mobile, reducido box de categorias en desktop
