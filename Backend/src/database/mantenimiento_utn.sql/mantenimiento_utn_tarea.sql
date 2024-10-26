-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mantenimiento_utn
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `tarea`
--

LOCK TABLES `tarea` WRITE;
/*!40000 ALTER TABLE `tarea` DISABLE KEYS */;
INSERT INTO `tarea` VALUES (1,'Relevar marca.'),(2,'Relevar material.'),(3,'Relevar tamaño de gabinete.'),(4,'Relevar marca de máquina primaria y alternador.'),(5,'Relevar tipo de piso.'),(6,'Relevar material de paredes.'),(7,'Relevar modelo.'),(8,'Número de hojas.'),(9,'Relevar tamaño.'),(10,'Cerradura Si/No.'),(11,'Mochila Empotrada/Exterior.'),(12,'Canaletas Si/No.'),(13,'Bajadas Si/No.'),(14,'Acceso desde el interior Si/No.'),(15,'Relevar tipo. Abril/Corredizo/Levadizo/Otro.'),(16,'Relevar dimensiones.'),(17,'Relevar tipo de techo.'),(18,'Relevar material de piso.'),(19,'Tipo. Caracol/Marinera/Convencional.'),(20,'Relevar potencia.'),(21,'Relevar Potencia/Tamaño.'),(22,'Con Vidrio/Sin Vidrio/Tipo.'),(23,'Tipo de vidrio.'),(24,'Relevar tipo.'),(25,'De Columna/Empotrado.'),(26,'Relevar cantidad de piletas.'),(27,'Montaje: Pared / Techo / Móvil.'),(28,'Relevar tipo de accionamiento.'),(29,'Eléctrico/Gas - Tipo de gas.'),(30,'Cantidad de bajadas.'),(31,'Relevar cantidad y potencia.'),(32,'Relevar potencia y características eléctricas principales.'),(33,'Relevar Tipo/Material.'),(34,'Tipo de tapa. Ciega/Rejilla/Otra.'),(35,'Abiertas/Cerradas.'),(36,'Relevar material de techo.'),(37,'Relevar cantidad de lámparas por equipo.'),(38,'Frío - Calor - Frío/Calor.'),(39,'Corrediza/De abrir.'),(40,'Relevar tipo de canilla.'),(41,'Relevar cantidad y material de palas.'),(42,'Tipo de puerta.'),(43,'Bajadas Internas/Externas.'),(44,'Baranda Si/No.'),(45,'Relevar capacidad.'),(46,'Tiene iluminación sobre estructura.'),(47,'Marca/Modelo/Tipo de cerradura.'),(48,'Agua Fría/Caliente.'),(49,'Relevar tipo y marca de controlador.'),(50,'Puerta Manual / Automática.'),(51,'Tiro balanceado Si/No.'),(52,'Material de bajadas.'),(53,'Marca/Modelo/Tipo de bisagras.'),(54,'Relevar cualquier otro dato que considere relevante para el mantenimiento.'),(55,'Tomar Fotografía.'),(56,'Al finalizar la actividad deje el área limpia, ordenada y segura.'),(57,'Señalice el área de trabajo. Desconecte la energía eléctrica - Verificar NO exisitencia de tensión eléctrica.'),(58,'Señalice el área de trabajo.'),(59,'Control de louver.'),(60,'Verificar correcto estado de cableado eléctrico, tomacorriente y conexiones eléctricas.'),(61,'Verifique correcto funcionamiento de válvulas.'),(62,'Verifique estado general.'),(63,'Verificar correcta y firme fijación a pared o estructura.'),(64,'Verificar correcta y firme fijación a pared o estructura. Verificar correcta y firme fijación de baranda a pared o estructura.'),(65,'Verificar correcta y firme fijación  a pared o estructura.'),(66,'Utilice los elementos de protección personal para trabajos en altura.'),(67,'Verificar estado general.'),(68,'Verificación de funcionamiento de la totalidad de las lámparas.'),(69,'Verificar correcta y firme fijación a pared o estructura de ambas unidades.'),(70,'Verificar NO de pérdidas.'),(71,'Verifique y lubrique bisagras y/o correderas.'),(72,'Verifique y lubrique bisagras y/o correderas y/o enrolladores.'),(73,'Verificar estado de carga. Lectura de manómetro de presión y fecha de vencimiento.'),(74,'Verifique el buen estado general.'),(75,'Verificar NO  de pérdidas.'),(76,'  -----  \"ATENCIÓN: ESTA MISMA OT SERÁ UTILIZADA PARA LAS 4 ACTIVIDADES MENSUALES\"  -----'),(77,'Verificación de estados de zócalos y/o portalámparas.'),(78,'Verificar existencia y correcto montaje de protecciones mecánicas.'),(79,'Realizar limpieza del equipo.'),(80,'Verifique y lubrique cerraduras.'),(81,'Verifique firme montaje de componentes.'),(82,'Verificar y correcto montaje de protecciones mecánicas.'),(83,'Verificar correcta sujeción de coberturas, canaletas, cumbreras, cenefas y otros.'),(84,'Verificar NO existencia de pérdidas.'),(85,'Realice limpieza, ordenamiento y/o emprolijamiento del área.'),(86,'Limpieza de luminaria y lámpara.'),(87,'Verificar carga de gas y NO de fugas.'),(88,'Realice verificación de correcto funcionamiento.'),(89,'Verifique correcta sujeción de vidrios.'),(90,'Verificar y correcto montaje de la protección contra choque eléctrico.'),(91,'Verificar correcto estado de cableado eléctrico.'),(92,'Verifique limpieza de canaletas. Debe encontrarse libre de obstrucciones y apta para la correcta descarga de agua.'),(93,'Actividad 1 de 4 Mensual. Indique Fecha:'),(94,'Verificar correcto montaje y sujeción.'),(95,'Realice limpieza de filtros.'),(96,'Verificar correcto funcionamiento de puertas y cerraduras.'),(97,'Verificar NO de pérdidas de líquidos y/o gas.'),(98,'Realizar limpieza externa del equipo.'),(99,'Verifique sujeción y estanqueidad de bajadas de descarga de canaletas.'),(100,'Realice limpieza de los equipos.'),(101,'Realice limpieza interna y externa de los equipos.'),(102,'Actividad 2 de 4 Mensual. Indique Fecha:'),(103,'Verifique correcto funcionamiento del equipo luego de finalizada la actividad.'),(104,'Realice limpieza completa de ambas unidades.'),(105,'Verificar correcto ajuste de conexiones eléctricas. Verificar NO de señales de sobrecalentamiento de los componentes.'),(106,'Verifique que las descargas de canaletas permitan flujo libre y se encuentren conectadas correctamente en extremos y uniones.'),(107,'Actividad 3 de 4 Mensual. Indique Fecha:'),(108,'Conecte nuevamente a la red eléctrica y realice una prueba de correcto funcionamiento.'),(109,'Realizar limpieza del equipo. No utilice elementos húmedos ni líquidos. Para retirar polvos, utilice un equipo de aspiración.'),(110,'¡¡¡EN CASO DE DETECTAR ANOMALÍAS CONTACTAR AL SERVICIO TÉCNICO AUTORIZADO. SI ESTAS ANOMALÍAS SON CRÍTICAS, DETENGA EL USO DEL EQUIPO!!!'),(111,'Actividad 4 de 4 Mensual. Indique Fecha:'),(112,'Complete la documentación de mantenimiento.'),(113,'Al finalizar la actividad deje el área y equipos limpios, ordenados y seguros.');
/*!40000 ALTER TABLE `tarea` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-25 22:17:10
