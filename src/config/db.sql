-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: sp-api
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (3,'testtest','$2b$10$ubBxOpcqSkHpzfZiFtort.ZP8SXFsfwgDLrjkWmX/ouaTO4YE5tu.','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R0ZXN0Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIxMzE0NTkyfQ.YRck114DzbshPyRXmc9oafRtSvKoC018PDBIb74mqpQ'),(4,'admin123','$2b$10$UTt/qkqK1h2qxHh/xcA.muxTFdluvAWOlMMifem18VaKv1rS68Vua','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMTIzIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIxNDQ5Mzg5fQ.ljV5l0JPuhSthuPh-cU0EeD_SkVageL1qJzw8jmG5Uo');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aturan_gejala`
--

DROP TABLE IF EXISTS `aturan_gejala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aturan_gejala` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_aturan` varchar(4) NOT NULL,
  `kode_gejala` varchar(4) NOT NULL,
  `kode_penyakit` varchar(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kode_aturan` (`kode_aturan`),
  KEY `kode_gejala` (`kode_gejala`),
  KEY `kode_penyakit` (`kode_penyakit`),
  CONSTRAINT `aturan_gejala_ibfk_2` FOREIGN KEY (`kode_gejala`) REFERENCES `daftar_gejala` (`kode_gejala`),
  CONSTRAINT `aturan_gejala_ibfk_3` FOREIGN KEY (`kode_penyakit`) REFERENCES `penyakit` (`kode_penyakit`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aturan_gejala`
--

LOCK TABLES `aturan_gejala` WRITE;
/*!40000 ALTER TABLE `aturan_gejala` DISABLE KEYS */;
INSERT INTO `aturan_gejala` VALUES (1,'R01','G01','P01'),(2,'R01','G06','P01'),(3,'R01','G12','P01'),(4,'R01','G14','P01'),(5,'R01','G18','P01'),(6,'R02','G04','P01'),(7,'R02','G07','P01'),(8,'R02','G11','P01'),(9,'R02','G15','P01'),(10,'R02','G19','P01'),(11,'R03','G02','P01'),(12,'R03','G06','P01'),(13,'R03','G07','P01'),(14,'R03','G08','P01'),(15,'R03','G12','P01'),(16,'R04','G04','P01'),(17,'R04','G09','P01'),(18,'R04','G12','P01'),(19,'R04','G15','P01'),(20,'R04','G20','P01'),(21,'R05','G03','P02'),(22,'R05','G05','P02'),(23,'R05','G08','P02'),(24,'R05','G11','P02'),(25,'R05','G12','P02'),(26,'R06','G01','P02'),(27,'R06','G06','P02'),(28,'R06','G14','P02'),(29,'R06','G18','P02'),(30,'R07','G05','P02'),(31,'R07','G08','P02'),(32,'R07','G14','P02'),(33,'R07','G16','P02'),(34,'R07','G17','P02'),(35,'R07','G21','P02'),(36,'R08','G03','P02'),(37,'R08','G10','P02'),(38,'R08','G16','P02'),(39,'R08','G17','P02'),(40,'R09','G02','P03'),(41,'R09','G04','P03'),(42,'R09','G05','P03'),(43,'R09','G07','P03'),(44,'R10','G03','P03'),(45,'R10','G09','P03'),(46,'R10','G10','P03'),(47,'R10','G13','P03'),(48,'R10','G16','P03'),(49,'R10','G17','P03'),(50,'R11','G07','P03'),(51,'R11','G15','P03'),(52,'R11','G19','P03'),(53,'R11','G20','P03'),(54,'R12','G03','P03'),(55,'R12','G13','P03'),(56,'R12','G16','P03'),(57,'R12','G17','P03'),(58,'R12','G21','P03'),(75,'R13','G09','P04');
/*!40000 ALTER TABLE `aturan_gejala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daftar_gejala`
--

DROP TABLE IF EXISTS `daftar_gejala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daftar_gejala` (
  `id_gejala` int NOT NULL AUTO_INCREMENT,
  `kode_gejala` varchar(4) NOT NULL,
  `nama_gejala` varchar(100) NOT NULL,
  `pertanyaan` text NOT NULL,
  PRIMARY KEY (`kode_gejala`),
  UNIQUE KEY `id_gejala` (`id_gejala`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daftar_gejala`
--

LOCK TABLES `daftar_gejala` WRITE;
/*!40000 ALTER TABLE `daftar_gejala` DISABLE KEYS */;
INSERT INTO `daftar_gejala` VALUES (1,'G01','Sering Marah','Saya merasa bahwa diri saya menjadi marah karena hal-hal sepele.'),(2,'G02','Mulut Kering','Saya merasa mulut saya sering kering.'),(3,'G03','Tidak dapat merasakan perasaan positif','Saya sama sekali tidak dapat merasakan perasaan positif.'),(4,'G04','Kesulitan Bernafas','Saya mengalami kesulitan bernafas (misalnya: sering kali terengah-engah atau tidak dapat bernafas padahal tidak melakukan aktivitas fisik sebelumnya).'),(5,'G05','Tidak kuat untuk melakukan kegiatan','Saya sepertinya tidak kuat lagi untuk melakukan suatu kegiatan.'),(6,'G06','Bereaksi Berlebihan','Saya cenderung bereaksi berlebihan terhadap suatu situasi.'),(7,'G07','Gemetar','Saya merasa gemetar (misalnya: pada tangan).'),(8,'G08','Energi habis saat cemas','Saya merasa telah menghabiskan banyak energi disaat merasa cemas'),(9,'G09','Khawatir akan panik dan mempermalukan diri sendiri','Saya merasa khawatir dengan situasi dimana saya mungkin menjadi panik dan mempermalukan diri sendiri.'),(10,'G10','Tidak ada hal yg diharapkan','Saya merasa tidak ada hal yang dapat diharapkan di masa depan.'),(11,'G11','Gelisah','Saya sedang merasa gelisah.'),(12,'G12','Sulit bersantai','Saya merasa sulit untuk bersantai'),(13,'G13','Sedih dan tertekan','Saya merasa sedih dan tertekan.'),(14,'G14','Sulit Sabar dalam menghadapi gangguan','Saya sulit untuk sabar dalam menghadapi gangguan terhadap hal yang sedang saya lakukan.'),(15,'G15','Hampir Panik','Saya merasa saya hampir panik.'),(16,'G16','Tidak merasa antusias','Saya tidak merasa antusias dalam hal apapun.'),(17,'G17','Tidak merasa Berharga','Saya merasa bahwa saya tidak berharga sebagai seorang manusia.'),(18,'G18','Mudah tersinggung','Saya merasa bahwa saya mudah tersinggung.'),(19,'G19','Perubahan detak jantung','Saya menyadari perubahan detak jantung, walaupun tidak sehabis melakukan aktivitas fisik (misalnya: merasa detak jantung meningkat atau melemah).'),(20,'G20','Merasa takut tanpa alasan yg jelas','Saya merasa takut tanpa alasan yang jelas.'),(21,'G21','Merasa hidup tidak bermanfaat','Saya merasa bahwa hidup tidak bermanfaat.'),(100,'G22','test symptom','tessst123qwertyuiop'),(101,'G23','test symptom','tessst123qwertyuiop'),(102,'G24','test symptom','tessst123qwertyuiop'),(103,'G25','test symptom','tessst123qwertyuiop'),(104,'G26','test symptom','tessst123qwertyuiop');
/*!40000 ALTER TABLE `daftar_gejala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hipotesis_gejala`
--

DROP TABLE IF EXISTS `hipotesis_gejala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hipotesis_gejala` (
  `id_gejala` int NOT NULL AUTO_INCREMENT,
  `kode_gejala` varchar(4) NOT NULL,
  `kode_penyakit` varchar(4) NOT NULL,
  `nilai_cf` float DEFAULT NULL,
  PRIMARY KEY (`id_gejala`),
  KEY `kode_gejala` (`kode_gejala`),
  KEY `kode_penyakit` (`kode_penyakit`),
  CONSTRAINT `hipotesis_gejala_ibfk_1` FOREIGN KEY (`kode_gejala`) REFERENCES `daftar_gejala` (`kode_gejala`),
  CONSTRAINT `hipotesis_gejala_ibfk_2` FOREIGN KEY (`kode_penyakit`) REFERENCES `penyakit` (`kode_penyakit`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hipotesis_gejala`
--

LOCK TABLES `hipotesis_gejala` WRITE;
/*!40000 ALTER TABLE `hipotesis_gejala` DISABLE KEYS */;
INSERT INTO `hipotesis_gejala` VALUES (1,'G01','P01',0.5),(2,'G02','P01',-0.6),(3,'G04','P01',0.1),(4,'G06','P01',0.1),(5,'G07','P01',0.1),(6,'G08','P01',0.1),(7,'G09','P01',0.1),(8,'G11','P01',0.5),(9,'G12','P01',0.2),(10,'G14','P01',0.1),(11,'G15','P01',0.3),(12,'G18','P01',0.6),(13,'G19','P01',-0.8),(14,'G20','P01',0.1),(15,'G01','P02',-0.4),(16,'G03','P02',0.3),(17,'G05','P02',0.1),(18,'G06','P02',1),(19,'G08','P02',0.6),(20,'G10','P02',0),(21,'G11','P02',1),(22,'G12','P02',0.8),(23,'G13','P02',0.8),(24,'G14','P02',0.8),(25,'G16','P02',0.8),(26,'G17','P02',0.4),(27,'G18','P02',0.6),(28,'G21','P02',-0.2),(29,'G02','P03',-0.6),(30,'G03','P03',0.3),(31,'G04','P03',0.1),(32,'G05','P03',-0.6),(33,'G07','P03',0.2),(34,'G09','P03',0.8),(35,'G10','P03',-0.6),(36,'G13','P03',1),(37,'G15','P03',0.4),(38,'G16','P03',0.3),(39,'G17','P03',0),(40,'G19','P03',-0.8),(41,'G20','P03',0.5),(42,'G21','P03',0.5),(50,'G23','P04',0.1);
/*!40000 ALTER TABLE `hipotesis_gejala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penyakit`
--

DROP TABLE IF EXISTS `penyakit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `penyakit` (
  `id_penyakit` int NOT NULL AUTO_INCREMENT,
  `kode_penyakit` varchar(4) NOT NULL,
  `nama_penyakit` varchar(30) NOT NULL,
  PRIMARY KEY (`kode_penyakit`),
  UNIQUE KEY `id_penyakit` (`id_penyakit`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penyakit`
--

LOCK TABLES `penyakit` WRITE;
/*!40000 ALTER TABLE `penyakit` DISABLE KEYS */;
INSERT INTO `penyakit` VALUES (1,'P01','Depresi'),(2,'P02','Anxiety'),(4,'P03','Stress'),(37,'P04','Test Disease');
/*!40000 ALTER TABLE `penyakit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `umur` int NOT NULL,
  `jenis_kelamin` enum('pria','wanita') DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_answer`
--

DROP TABLE IF EXISTS `users_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `question_id` varchar(4) DEFAULT NULL,
  `answer` float DEFAULT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `user_id` (`user_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `users_answer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `users_answer_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `daftar_gejala` (`kode_gejala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_answer`
--

LOCK TABLES `users_answer` WRITE;
/*!40000 ALTER TABLE `users_answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-28 20:37:37
