-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: muebleria_imperio_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cocina'),(2,'Comedor'),(3,'Dormitorio'),(4,'Living'),(5,'Oficina');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_items_un` (`id`),
  KEY `order_items_FK` (`productId`),
  KEY `order_items_FK_1` (`orderId`),
  CONSTRAINT `order_items_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `order_items_FK_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (15,5,71,5,'2021-11-18','2021-11-18');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `state` varchar(100) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orders_un` (`id`),
  KEY `orders_FK` (`userId`),
  CONSTRAINT `orders_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,17,'PENDING','2021-11-17','2021-11-17'),(5,18,'PENDING','2021-11-18','2021-11-18');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(150) NOT NULL,
  `description` varchar(800) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `measures` varchar(100) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `origin` varchar(100) NOT NULL,
  `discount` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d609518a-22a6-47db-8d4e-a87f95e24af6` (`categoryId`),
  CONSTRAINT `FK_d609518a-22a6-47db-8d4e-a87f95e24af6` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (9,'cama amberes 6 cajones','La Cama Amberes de 6 cajones es la cama ideal para tu dormitorio, su diseÃ±o minimalista, le aporta calidez y te ayuda a reducir el desorden, dejando tu cuarto mucho mas ordenado. AsÃ­ podrÃ¡s relajarte y disfrutar de tu espacio.\r\n\r\nLos 6 cajones con guÃ­as telescÃ³picas son muy Ãºtiles y cÃ³modos en su uso diario.\r\n\r\n \r\n\r\nLa medida de colchÃ³n hasta 1.20 mtrs, se diseÃ±a con un solo mÃ³dulo de cajones (3 cajones). La direcciÃ³n de la cama es a elecciÃ³n.',3,'1,48x0,40x1,98',78000,'Argentina',5,'2021-10-28 20:57:48','2021-10-28 20:57:48'),(10,'cama nordica con carrito','La Cama NÃ³rdica es la cama ideal para tu dormitorio, su diseÃ±o minimalista, le aporta calidez y te ayuda a reducir el desorden, dejando tu cuarto mucho mas ordenado. AsÃ­ podrÃ¡s relajarte y disfrutar de tu espacio.\r\n\r\nEl carrito es un accesorio fundamental para el cuarto de tus hijos, pijamadas, invitados, ante cualquier ocasiÃ³n, una soluciÃ³n conveniente. \r\n\r\n \r\n\r\nMedidas en base al colchÃ³n de 0,80 x1,90 mtrs\r\n\r\n \r\n\r\n    â€¢    Ancho 0,88 mts\r\n\r\n    â€¢    Alto 0,40 mts\r\n\r\n    â€¢    Profundidad 1.98 mts\r\n\r\n \r\n\r\nÂ¡Las fabricamos en todas las medidas de colchon del mercado!\r\n\r\n \r\n\r\n \r\n\r\nMateriales:\r\n\r\n \r\n\r\n    â€¢    Enchapado en ParaÃ­so. Lustre poliuretano natural\r\n\r\n    â€¢    Carrito para colchon de 80x190. Frente de carrito en MDF laqueado poliuretano. Blanco negro o chocolate\r\n\r',3,'0,88x0,40x1,98',72500,'Argentina',10,'2021-10-28 21:00:23','2021-10-28 21:00:23'),(11,'mesa de luz heisinki','Mesitas de noche, tus compaÃ±eras de sueÃ±os\r\nLas mesas de luz son hÃ©roes no reconocidos que mantienen a tu alcance todo lo que necesitas para irte a dormir. Tenemos muchos modelos de mesitas de noche diferentes para que puedas encontrar fÃ¡cilmente una que combine con el resto de muebles de tu dormitorio. Algunas tienen puertas o cajones donde puedes cargar el celular y esconder tus placeres de lectura.\r\n\r\n \r\n\r\nLa bandeja deslizable, es tu mejor aliada para para cargar el celu o guardar el libro del momento, huecos libres para pantuflas, cosmeticos y perfumes, y 2 cajones para tener siempre a mano lo que necesitas',3,'0,40x0,65x0,40',18000,'Argentina',0,'2021-10-28 21:11:12','2021-10-28 21:11:12'),(12,'mesa luz oslo','\r\n    â€¢    Estructura en enchapado paraÃ­so. Lustre poliuretano natural\r\n\r\n    â€¢    Frentes de cajones en MDF laqueado poliuretano. Colores blanco negro o chocolate\r\n\r\n    â€¢    Cajones con guÃ­as metalicas y tope de freno\r\n\r\n    â€¢    Patas macizas en paraÃ­so',3,'0,40x0,65x0,40',19000,'Rep. Cheka',0,'2021-10-28 21:15:51','2021-10-28 21:15:51'),(13,'placard chimuelo','\r\nColor a eleccion de Melamina 18mm. \r\nGuias de aluminio en las puertas\r\nPerfileria de aluminio en puertas\r\nBaulera integrada.\r\n',3,'1,00x2,40x0,60',57000,'Argentina',0,'2021-10-28 21:19:29','2021-10-28 21:19:29'),(19,'placard 3 metros','Melamina 18mm. Colores a elegir entre Melamina Rovere Chiaro\r\nGuias de aluminio en las puertas\r\nPerfileria de aluminio en puertas\r\nBaulera integrada.',3,'3,00x2,40x0,60',169000,'Rep. Cheka',0,'2021-10-28 21:33:06','2021-10-28 21:33:06'),(20,'comoda heisinki','Con su diseÃ±o de lÃ­neas puras, nuestra lÃ­nea Helsinki es una cÃ³moda que se adapta a ti, a tu ropa y a tu espacio. Los cajones, fÃ¡ciles de abrir y cerrar, llevan guÃ­as metÃ¡licas con tope. Para conseguir un orden perfecto, te recomendamos clasificar el contenido de los cajones de tus cÃ³modas utilizando cajas y organizadores.',3,'0,90x0,90x0,45',45000,'Rep. Cheka',0,'2021-10-28 21:38:18','2021-10-28 21:38:18'),(21,'comoda new york','Con su diseÃ±o de lÃ­neas puras nuestra lÃ­nea Nueva York es una cÃ³moda que se adapta a ti, a tu ropa y a tu espacio. Las hacemos de diferentes medidas para que puedas utilizarlas en cualquier dormitorio. ',3,'1,20x0,90x0,45',46000,'Argentina',0,'2021-10-28 21:41:42','2021-10-28 21:41:42'),(23,'comoda black','Estilo: Moderno - Escandinavo',3,'1,20x0,80x0,45',19565,'Iran',0,'2021-10-28 21:48:37','2021-10-28 21:48:37'),(24,'sillon estocolmo',' \r\n\r\nHazte con un sillÃ³n cÃ³modo para ti\r\nÂ¿A quiÃ©n no le gusta sentarse a leer, relajarse, ver una pelÃ­cula o dormir la siesta en su sillÃ³n? Nuestros sillones de tela han sido especÃ­ficamente diseÃ±ados para ello. Comodos, versÃ¡tiles y modernos, harÃ¡n de tu living, el lugar preferido para estar. \r\n\r\n ',4,'2,00x0,80x0,95',95000,'Argentina',10,'2021-10-28 21:53:24','2021-10-28 21:53:24'),(25,'sillon tombs','Placa de asiento 22kg\r\n    â€¢    Relleno el respaldo de guata y copoc enfundado con frizelina \r\n    â€¢    Estructura de madera\r\n    â€¢    Patas de madera paraiso macizo\r\n\r\n    â€¢    Telas disponibles pana, lino y talampaya, todas con proceso antimancha',4,'2,00x0,80x0,95',92000,'Argentina',0,'2021-10-28 22:09:30','2021-10-28 22:09:30'),(26,'sillon larvik','Hazte con un sillÃ³n cÃ³modo para ti\r\nÂ¿A quiÃ©n no le gusta sentarse a leer, relajarse, ver una pelÃ­cula o dormir la siesta en su sillÃ³n? Nuestros sillones de tela han sido especÃ­ficamente diseÃ±ados para ello. Comodos, versÃ¡tiles y modernos, harÃ¡n de tu living, el lugar preferido para estar. ',4,'2,00x0,80x0,95',92000,'Argentina',0,'2021-10-28 22:11:59','2021-10-28 22:11:59'),(27,'torre new york','Con nuestras torres modulares podes combinar distintos elementos como puertas, cajones y estantes, para crear un mÃ³dulo que sea perfecto para ti. Â¡ConseguirÃ¡s tener ordenado cualquier espacio del hogar!',4,'0,60x1,80x0,40',65000,'Argentina',0,'2021-10-28 22:25:41','2021-10-28 22:25:41'),(28,'torre new york black','Con nuestras torres modulares podes combinar distintos elementos como puertas, cajones y estantes, para crear un mÃ³dulo que sea perfecto para ti. Â¡ConseguirÃ¡s tener ordenado cualquier espacio del hogar!',4,'1,90x0,60x0,45',68000,'Argentina',0,'2021-10-28 22:28:11','2021-10-28 22:28:11'),(29,'torre berlin simpleto Nombre del producto:','\r\nCon un diseÃ±o funcional, la torre Berlin permite distribuir y jerarquizas los objetos, teniendo la posibilidad de guardar tras las puertas algunas cosas y dejar a la vista nuestros objetos preferidos. Los parantes verticales son muy importantes para el sostÃ©n del estante horizontal. Nuestras bibliotecas aguantan mucho peso sin pandearse',4,'0,70x0,40x1,98',43000,'Argentina',0,'2021-10-28 22:32:30','2021-10-28 22:32:30'),(30,'biblioteca Roma black','Con nuestras Bibliotecas modulares podes combinar distintos elementos como puertas, cajones y estantes, para crear un mÃ³dulo que sea perfecto para ti. Â¡ConseguirÃ¡s tener ordenado cualquier espacio del hogar!',4,'1,48x0,40x1,98',46000,'Argentina',0,'2021-10-28 22:37:08','2021-10-28 22:37:08'),(31,'biblioteca Roma white','Con nuestras Bibliotecas modulares podes combinar distintos elementos como puertas, cajones y estantes, para crear un mÃ³dulo que sea perfecto para ti. Â¡ConseguirÃ¡s tener ordenado cualquier espacio del hogar!',4,'1,00x1,80x0,45',40000,'Argentina',0,'2021-10-28 22:42:14','2021-10-28 22:42:14'),(32,'biblioteca Milan white','Con nuestras Bibliotecas modulares podes combinar distintos elementos como puertas, cajones y estantes, para crear un mÃ³dulo que sea perfecto para ti. Â¡ConseguirÃ¡s tener ordenado cualquier espacio del hogar!',4,'1,00x1,80x0,45',45500,'Argentina',0,'2021-10-28 22:44:32','2021-10-28 22:44:32'),(33,'escritorio oslo pin','   Bloque de apoyo y guardado en MDF laqueado poliuretano;  Colores a eleccion Blanco / Negro \r\n\r\n    â€¢    Base en paraiso maciso lustre poliuretano\r\n\r\n    â€¢    2 Cajones con guias metÃ¡licas\r\n\r\n    â€¢    Agarre de cajon sin herraje (cortes a 45Âº)',5,'1,00x0,80x0,45',42000,'Argentina',10,'2021-10-28 23:01:36','2021-10-28 23:01:36'),(34,'escritorio oslo pan','   Bloque de apoyo y guardado en MDF laqueado poliuretano;  Colores a eleccion Blanco / Negro \r\n\r\n    â€¢    Base en paraiso maciso lustre poliuretano\r\n\r\n    â€¢    2 Cajones con guias metÃ¡licas\r\n\r\n    â€¢    Agarre de cajon sin herraje (cortes a 45Âº)',5,'1,00x0,80x0,45',50000,'Argentina',0,'2021-10-28 23:02:46','2021-10-28 23:02:46'),(35,'escritorio Lima','   Bloque de apoyo y guardado en MDF laqueado poliuretano;  Colores a eleccion Blanco / Negro \r\n\r\n    â€¢    Base en paraiso maciso lustre poliuretano\r\n\r\n    â€¢    2 Cajones con guias metÃ¡licas\r\n\r\n    â€¢    Agarre de cajon sin herraje (cortes a 45Âº)',5,'1,00x0,80x0,45',39000,'Argentina',0,'2021-10-28 23:03:42','2021-10-28 23:03:42'),(38,'esc. New York black','escritorio',5,'1,00x1,80x0,45',78000,'Argentina',0,'2021-10-28 23:08:00','2021-10-28 23:08:00'),(39,'escritorio areas','Flexibilidad y operatividad: una lÃ­nea que introduce en la oficina operativa mÃºltiples formas de solucionar la configuraciÃ³n del espacio, satisfaciendo las mÃ¡s diversas necesidades de trabajo. Las mesas, caracterizadas por el espesor de 25mm en todos los componentes, pueden equiparse con paneles separadores y completarse con cajoneras, porta-CPU y demÃ¡s accesorios.',5,'',85000,'Argentina',0,'2021-10-28 23:31:23','2021-10-28 23:31:23'),(40,'cajonera espejada','cajonera espejada de 1 a 3 cajones',5,'0,60x0,40x0,40',60000,'Japon',0,'2021-10-28 23:49:18','2021-10-28 23:49:18'),(41,'juego de cocina Imperio dorado','juego completo de cocina no incluye artefactos ni electrodomesticos',1,'00x000x000',250000,'Japon',5,'2021-10-28 23:55:41','2021-10-28 23:55:41'),(42,'sillon ejecutivo larguirucho','muy cÃ³modo y largo',5,'00x000x000',27650,'TrulalÃ¡',0,'2021-10-28 23:59:03','2021-10-28 23:59:03'),(43,'silla gerencial grenn','para gerentes muy productivos',5,'00x000x000',30000,'Argentina',0,'2021-10-29 00:01:45','2021-10-29 00:01:45'),(44,'escritorio Mulder','The truth is out there',5,'00x000x000',46000,'Argentina',0,'2021-10-29 00:07:58','2021-10-29 00:07:58'),(45,'mesa Archer espejada','Producto a Producir:\r\n\r\nLuego de concretada la compra se ordenarÃ¡ su pronta producciÃ³n y personalizaciÃ³n con elementos seleccionados. Tiempo estimado de producciÃ³n 45 a 50 dÃ­as hÃ¡biles. \r\n\r\n',2,'1,20x1,20x0,76',151000,'Argentina',0,'2021-10-29 00:17:24','2021-10-29 00:17:24'),(46,'Isola Bella Zoita + 4 sillas tulip','Material de la mesa: madera maciza zoita en 3cm de espesor laqueada en poliuretano (cubre a la madera de cosas sÃ³lidas y lÃ­quidas, por lo tanto no las absorbe). MÃ¡s info > Laca poliuretÃ¡nica\r\nLas vetas pueden variar por tratarse de madera maciza.\r\nMedidas de la mesa del combo 140x80x76(h), pero la podÃ©s pedir en la medida que gustes!\r\nPatas de caÃ±o estructural y hierro en 4cmx4cm, pintadas a horno con epoxi. Mejor tÃ©cnica aplicada a metal.\r\nColores: negro, negro mate, gris y blanco.\r\nSillas tulip de polipropileno con almohadÃ³n de ecocuero y patas de madera haya laqueadas > Sillas tulip',2,'140x80x76',87900,'Argentina',0,'2021-10-29 00:20:49','2021-10-29 00:20:49'),(47,'juego comedor Evora','Base de mesa en MDP simil madera color Freijo\r\n\r\n75x82x40cm\r\n\r\nTapa de mesa con vidrio pintado de 3mm de espesor sobre estructura de MDP color Freijo\r\n\r\n3x120x80cm\r\n\r\n4 sillas tapizadas\r\n\r\n99.5x42x61.5cm',2,'00x000x000',57640,'Japon',10,'2021-10-29 00:24:46','2021-10-29 00:24:46'),(48,'Tirreno Zoita + 4 sillas Pesaro','Material de la mesa: madera maciza zoita en 4cm de espesor laqueada en poliuretano (cubre a la madera de cosas sÃ³lidas y lÃ­quidas, por lo tanto no las absorbe). MÃ¡s info > Laca poliuretÃ¡nica\r\nLas vetas pueden variar por tratarse de madera maciza.\r\nMedidas de la mesa del combo 160x90x76(h), pero la podÃ©s pedir en la medida que gustes!\r\nPatas de caÃ±o estructural y hierro en 70/30, pintadas a horno con epoxi. La mejor tÃ©cnica aplicada no se oxida, ni se salta.\r\nColores: negro, negro mate, gris y blanco.\r\nSillas pesaro de soga de polipropileno y base de hierro pintada a horno (aptas para exterior)> Silla Simil Yute Pesaro',2,'00x000x000',99500,'Argentina',0,'2021-10-29 00:27:41','2021-10-29 00:27:41'),(49,'mesa Lille','Producto a Producir:\r\n\r\nLuego de concretada la compra se ordenarÃ¡ su pronta producciÃ³n y personalizaciÃ³n con elementos seleccionados. Tiempo estimado de producciÃ³n 45 a 50 dÃ­as hÃ¡biles. ',2,'2,20x1,20x0,76',162149,'Argentina',0,'2021-10-29 00:32:41','2021-10-29 00:32:41'),(51,'mesa Genova',' Es una madera dura, utilizada para exterior e interior. Las vetas varÃ­an por ser madera maciza. La terminaciÃ³n es laqueado en poliuretano, satinado mate o mate mate.',2,'2,20x1,20x0,76',103500,'Argentina',0,'2021-10-29 00:37:27','2021-10-29 00:37:27'),(52,'mesa isola bella paraiso','Material: Madera maciza ParaÃ­so.\r\nTerminaciÃ³n: laqueada en poliuretano semi mate.\r\nPatas de caÃ±o estructural 6cmx6cm, pintadas a horno con epoxi. A partir de 180 utilizamos caÃ±o 8x8cm.\r\nColores: negro, negro mate y blanco.',2,'00x000x000',68700,'Argentina',0,'2021-10-29 00:41:46','2021-10-29 00:41:46'),(53,'silla comedor burano',' Estructura de madera ParaÃ­so maciza. Seguridad y confort de interior de cinchas bicoelÃ¡sticas y placa soft de 26 kg en asiento y respaldo. Patas de madera de ParaÃ­so maciza, lustres a elecciÃ³n (natural, nogal, roble, wengue o cedro)',2,'00x000x000',25300,'Argentina',0,'2021-10-29 00:46:18','2021-10-29 00:46:18'),(54,'banqueta eco cuero','*Alto del piso al respaldo: 90 o 102 cm (avisar al comprar).\r\n*Alto al asiento: 65cm o 75cm (avisar al comprar).\r\n*Profundidad: 39cm',2,'00x000x000',235900,'Argentina',0,'2021-10-29 00:52:00','2021-10-29 00:52:00'),(55,'aparador cocina 5 p.','MATERIAL: Melamina sobre MDP 15 mm.\r\n* 3 cajones con correderas metÃ¡licas.\r\n* 2 puertas inferiores y 3 superiores.\r\n* Fondo color blanco.\r\n* Manijas plÃ¡sticas color gris.',1,'00x000x000',13890,'Argentina',0,'2021-10-29 00:57:39','2021-10-29 00:57:39'),(56,'porta microondas despensero','MATERIAL: Melamina sobre MDP 15 mm.\r\n* 2 puertas con bisagras a resorte.\r\n* 1 estante de altura regulable.\r\n* Manijas tipo barral color gris.',1,'00x000x000',6500,'Argentina',0,'2021-10-29 00:59:59','2021-10-29 00:59:59'),(57,'cocina compacta TucumÃ¡n','DescripciÃ³n: Cocina compacta con bacha blanco con frente carvalho mezzo\r\nFABRICANTE: Mosconi\r\nMEDIDAS PRODUCTO ARMADO: 181x50x195 cm.\r\nCOLOR: Blanco con frente carvalho mezzo\r\nMATERIAL: Melamina sobre MDP 15 mm. - Interior blanco\r\n* 6 puertas con bisagras a resorte.\r\n* 3 cajones con correderas metÃ¡licas. Costado y contra frente de cajÃ³n de melamina blanca 15 mm.\r\n* La cajonera puede colocarse tanto a la izquierda como a la derecha.\r\n* Manijas plÃ¡sticas color gris - PUEDEN COLOCARSE DE MANERA HORIZONTAL O VERTICAL-\r\n* Mesada de acero inoxidable de 1,20 mts',1,'00x000x000',35200,'Argentina',0,'2021-10-29 01:16:01','2021-10-29 01:16:01'),(58,'combo cocina chocolate','MATERIAL: Melamina sobre MDP 15 mm.\r\n*Alacena con 4 puertas y 1 estante.\r\n*Bajo mesada con 3 puertas y 3 cajones.\r\n*La cajonera puede colocarse tanto a la izquierda como a la derecha.\r\n*Fondo blanco.\r\n*Manijas plÃ¡sticas color gris - PUEDEN COLOCARSE DE MANERA HORIZONTAL O VERTICAL-\r\n*Mesada de acero inoxidable con escurridor y bacha ovalada central adaptable a las bajo mesadas.\r\n*Incluye sopapa de 7 cm. de diÃ¡metro.',1,'00x000x000',35955,'Argentina',0,'2021-10-29 01:19:36','2021-10-29 01:19:36'),(59,'alacena 1,40m blanco','COLORES DISPONIBLES: Blanco\r\nMATERIAL: Melamina sobre MDP 15 mm.\r\n* 3 puertas - 1 estante.\r\n* Interior y fondo blanco.\r\n* Manijas plÃ¡sticas color gris - PUEDEN COLOCARSE DE MANERA HORIZONTAL O VERTICAL-',1,'00x000x000',7800,'Argentina',0,'2021-10-29 01:23:08','2021-10-29 01:23:08'),(60,'alacena 12,60m chocolate','COLORES DISPONIBLES: Blanco\r\nMATERIAL: Melamina sobre MDP 15 mm.\r\n* 3 puertas - 1 estante.\r\n* Interior y fondo blanco.\r\n* Manijas plÃ¡sticas color gris - PUEDEN COLOCARSE DE MANERA HORIZONTAL O VERTICAL-',1,'00x000x000',5670,'Argentina',0,'2021-10-29 01:25:33','2021-10-29 01:25:33'),(61,'combo cocina 1,20m blanco','COLORES DISPONIBLES: Blanco\r\nMATERIAL: Melamina sobre MDP 15 mm.\r\n* Alacena con 3 puertas y 1 estante.\r\n* Bajo mesada con 2 puertas y 3 cajones con correderas metÃ¡licas.\r\n* La cajonera puede colocarse tanto a la izquierda como a la derecha.\r\n* Fondo blanco.',1,'00x000x000',25788,'Argentina',0,'2021-10-29 01:29:46','2021-10-29 01:29:46'),(62,'organizador de planchado','MATERIAL: Melamina sobre MDP 15 mm.\r\n* 2 puertas con bisagras a resorte y 1 estante.\r\n* Soporte de plancha de acero pintado blanco rebatible.\r\n* Manijas plÃ¡sticas tipo barral color gris.\r\n* Posee ruedas para facilitar su traslado.',1,'00x000x000',6130,'Argentina',0,'2021-10-29 01:32:30','2021-10-29 01:32:30');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_f819129a-538d-4df8-80ac-234064b81f5a` (`productId`),
  CONSTRAINT `FK_f819129a-538d-4df8-80ac-234064b81f5a` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (16,'1635454668422_img_.jpg',9),(17,'1635454668425_img_.jpg',9),(18,'1635454668427_img_.jpg',9),(19,'1635454668439_img_.jpg',9),(20,'1635454823045_img_.jpg',10),(21,'1635454823077_img_.jpg',10),(22,'1635454823136_img_.jpg',10),(23,'1635454823138_img_.jpg',10),(24,'1635455472965_img_.jpg',11),(25,'1635455472969_img_.jpg',11),(26,'1635455472972_img_.jpg',11),(27,'1635455472975_img_.jpg',11),(28,'1635455751574_img_.jpg',12),(29,'1635455751576_img_.jpg',12),(30,'1635455751581_img_.jpg',12),(31,'1635455751584_img_.jpg',12),(32,'1635455969848_img_.jpg',13),(33,'1635455969853_img_.jpg',13),(34,'1635455969855_img_.jpg',13),(35,'1635455969858_img_.jpg',13),(36,'1635456786497_img_.jpg',19),(37,'1635456786500_img_.jpg',19),(38,'1635456786507_img_.jpg',19),(39,'1635456786510_img_.jpg',19),(40,'1635457097975_img_.jpg',20),(41,'1635457097978_img_.jpg',20),(42,'1635457097980_img_.jpg',20),(43,'1635457097993_img_.jpg',20),(44,'1635457302152_img_.jpg',21),(45,'1635457302154_img_.jpg',21),(46,'1635457302164_img_.jpg',21),(47,'1635457302166_img_.jpg',21),(51,'1635457717780_img_.jpg',23),(52,'1635457717782_img_.jpg',23),(53,'1635457717804_img_.jpg',23),(54,'1635457717807_img_.jpg',23),(55,'1635458004270_img_.jpg',24),(56,'1635458004279_img_.jpg',24),(57,'1635458004282_img_.jpg',24),(58,'1635458004284_img_.jpg',24),(59,'1635458970396_img_.jpg',25),(60,'1635458970463_img_.jpg',25),(61,'1635458970496_img_.jpg',25),(62,'1635458970520_img_.jpg',25),(63,'1635459119311_img_.jpg',26),(64,'1635459119357_img_.jpg',26),(65,'1635459119365_img_.jpg',26),(66,'1635459119372_img_.jpg',26),(67,'1635459941600_img_.jpg',27),(68,'1635459941619_img_.jpg',27),(69,'1635459941655_img_.jpg',27),(70,'1635459941658_img_.jpg',27),(71,'1635460091220_img_.jpg',28),(72,'1635460091235_img_.jpg',28),(73,'1635460091240_img_.jpg',28),(74,'1635460091260_img_.jpg',28),(75,'1635460350756_img_.jpg',29),(76,'1635460350785_img_.jpg',29),(77,'1635460350788_img_.jpg',29),(78,'1635460350818_img_.jpg',29),(79,'1635460628374_img_.jpg',30),(80,'1635460628376_img_.jpg',30),(81,'1635460628386_img_.jpg',30),(82,'1635460628390_img_.jpg',30),(83,'1635460934848_img_.jpg',31),(84,'1635460934850_img_.jpg',31),(85,'1635460934854_img_.jpg',31),(86,'1635460934857_img_.jpg',31),(87,'1635461072338_img_.jpg',32),(88,'1635461072341_img_.jpg',32),(89,'1635461072344_img_.jpg',32),(90,'1635461072348_img_.jpg',32),(91,'1635462096224_img_.jpg',33),(92,'1635462096247_img_.jpg',33),(93,'1635462096252_img_.jpg',33),(94,'1635462096278_img_.jpg',33),(95,'1635462166078_img_.jpg',34),(96,'1635462166080_img_.jpg',34),(97,'1635462166083_img_.jpg',34),(98,'1635462166087_img_.jpg',34),(99,'1635462222726_img_.jpg',35),(100,'1635462222728_img_.jpg',35),(101,'1635462222756_img_.jpg',35),(102,'1635462222791_img_.jpg',35),(103,'1635462480587_img_.jpg',38),(104,'1635462480590_img_.jpg',38),(105,'1635462480628_img_.jpg',38),(106,'1635462480631_img_.jpg',38),(107,'1635463883630_img_.jpg',39),(108,'1635463883639_img_.jpg',39),(109,'1635463883646_img_.jpg',39),(110,'1635463883658_img_.jpg',39),(111,'1635464958341_img_.jpg',40),(112,'1635464958343_img_.jpg',40),(113,'1635464958345_img_.jpg',40),(114,'1635464958348_img_.jpg',40),(115,'1635465340996_img_.png',41),(116,'1635465341001_img_.png',41),(117,'1635465341010_img_.png',41),(118,'1635465341013_img_.png',41),(119,'1635465543029_img_.jpg',42),(120,'1635465543031_img_.jpg',42),(121,'1635465543034_img_.jpg',42),(122,'1635465543036_img_.jpg',42),(123,'1635465705260_img_.jpg',43),(124,'1635465705262_img_.jpg',43),(125,'1635465705266_img_.jpg',43),(126,'1635465705268_img_.jpg',43),(127,'1635466078150_img_.jpg',44),(128,'1635466078153_img_.jpg',44),(129,'1635466078238_img_.jpg',44),(130,'1635466078289_img_.jpg',44),(131,'1635466644916_img_.jpg',45),(132,'1635466644919_img_.jpg',45),(133,'1635466644923_img_.jpg',45),(134,'1635466644925_img_.jpg',45),(135,'1635466849477_img_.jpeg',46),(136,'1635466849482_img_.jpeg',46),(137,'1635466849490_img_.jpeg',46),(138,'1635466849493_img_.jpeg',46),(139,'1635467086316_img_.jpg',47),(140,'1635467086320_img_.jpg',47),(141,'1635467086323_img_.jpg',47),(142,'1635467086326_img_.jpg',47),(143,'1635467261020_img_.jpeg',48),(144,'1635467261024_img_.jpeg',48),(145,'1635467261030_img_.jpeg',48),(146,'1635467261033_img_.jpeg',48),(147,'1635467561804_img_.jpg',49),(148,'1635467561824_img_.jpg',49),(149,'1635467561849_img_.jpg',49),(150,'1635467561864_img_.jpg',49),(151,'1635467847326_img_.jpeg',51),(152,'1635467847329_img_.jpeg',51),(153,'1635467847333_img_.jpeg',51),(154,'1635467847345_img_.jpeg',51),(155,'1635468106948_img_.jpeg',52),(156,'1635468106952_img_.jpeg',52),(157,'1635468106964_img_.jpeg',52),(158,'1635468106977_img_.jpeg',52),(159,'1635468378228_img_.jpg',53),(160,'1635468378230_img_.jpg',53),(161,'1635468378234_img_.jpg',53),(162,'1635468378236_img_.png',53),(163,'1635468720748_img_.jpg',54),(164,'1635468720766_img_.jpg',54),(165,'1635468720787_img_.jpeg',54),(166,'1635468720800_img_.jpeg',54),(167,'1635469059610_img_.jpeg',55),(168,'1635469059612_img_.jpeg',55),(169,'1635469059615_img_.jpeg',55),(170,'1635469059618_img_.jpeg',55),(171,'1635469199494_img_.jpeg',56),(172,'1635469199496_img_.jpeg',56),(173,'1635469199498_img_.jpeg',56),(174,'1635469199501_img_.jpeg',56),(175,'1635470161139_img_.jpeg',57),(176,'1635470161141_img_.jpeg',57),(177,'1635470161145_img_.jpeg',57),(178,'1635470161150_img_.jpeg',57),(179,'1635470376923_img_.jpeg',58),(180,'1635470376925_img_.jpeg',58),(181,'1635470376930_img_.jpeg',58),(182,'1635470376932_img_.jpeg',58),(183,'1635470588310_img_.jpeg',59),(184,'1635470588312_img_.jpeg',59),(185,'1635470588314_img_.jpeg',59),(186,'1635470588317_img_.jpeg',59),(187,'1635470732976_img_.jpeg',60),(188,'1635470732978_img_.jpeg',60),(189,'1635470732980_img_.jpeg',60),(190,'1635470732986_img_.jpeg',60),(191,'1635470986906_img_.jpeg',61),(192,'1635470986908_img_.jpeg',61),(193,'1635470986912_img_.jpeg',61),(194,'1635470986916_img_.jpeg',61),(195,'1635471150714_img_.jpeg',62),(196,'1635471150716_img_.jpeg',62),(197,'1635471150739_img_.jpeg',62),(198,'1635471150742_img_.jpeg',62);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol` int(2) NOT NULL DEFAULT 0,
  `tel` varchar(30) DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `street` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Santiago','Juarez','santiagogjuarez@gmail.com','$2a$12$s3rcEiRhCznCGB.x3kvSg.uB7cKg7kUM2Ezor4Jb3MFfyGMTI0IGa','default-image.png',1,'1127640611',38242823,'Gavilan 494','','','2021-10-18 23:08:06','2021-10-19 02:02:54'),(2,'Sofia','Gauna','sofgauna2@gmail.com','$2a$12$sehRQ/MkGugAJaXy8l..beN6EiXT6ebJ4r2/2cHRJu7ErNu2MFzHW','default-image.png',0,NULL,0,NULL,NULL,NULL,'2021-10-19 03:12:21','2021-10-19 03:12:21'),(3,'admin','admin','admin@hotmail.com','$2a$12$jxm1BJv8wWpv/GVBbYSEJeUnBVCg.wFWrz3XKHgVP8MGh/Q9UtNvC','default-image.png',1,NULL,0,NULL,NULL,NULL,'2021-10-28 22:02:18','2021-10-28 22:02:18'),(4,'usuario','usuario','usuario@mail.com','$2a$12$4hEQnL7bC4RtT18E.i4jM.RdeU0yz8KlXpElc5fv02Y5FulIFeYdW','default-image.png',0,NULL,0,NULL,NULL,NULL,'2021-10-29 01:34:04','2021-10-29 01:34:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'muebleria_imperio_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-03 12:17:09
