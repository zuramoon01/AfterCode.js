-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2022 at 10:18 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aftercodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `email`, `name`, `src`, `price`, `text`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 'zuramoon@gmail.com', 'ROG Zephyrus G15 GA503', '../public/img/rog_zephyrus_g15_ga503_', 24500000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', 2, '2022-01-21 09:15:07', '2022-01-21 09:16:18'),
(2, 'zuramoon@gmail.com', 'ROG Flow X13 GV301', '../public/img/rog_flow_x13_gv301_', 25500000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', 1, '2022-01-21 09:15:13', '2022-01-21 09:15:13'),
(3, 'ananda12345@gmail.com', 'ROG Strix G15', '../public/img/rog_strix_g15_', 36700000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', 3, '2022-01-21 09:16:36', '2022-01-21 09:16:37'),
(4, 'karinamannita28@gmail.com', 'ROG Zephyrus G14 GA401', '../public/img/rog_zephyrus_g14_ga401_', 22000000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', 6, '2022-01-21 09:17:17', '2022-01-21 09:17:26'),
(5, 'karinamannita28@gmail.com', 'ROG Flow X13 GV301', '../public/img/rog_flow_x13_gv301_', 25500000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', 4, '2022-01-21 09:17:23', '2022-01-21 09:17:27');

-- --------------------------------------------------------

--
-- Table structure for table `laptops`
--

CREATE TABLE `laptops` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `laptops`
--

INSERT INTO `laptops` (`id`, `name`, `src`, `price`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 'ROG Zephyrus G14 GA401', '../public/img/rog_zephyrus_g14_ga401_', 22000000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', '2021-12-27 11:05:09', '2021-12-27 11:05:09'),
(2, 'ROG Zephyrus G15 GA503', '../public/img/rog_zephyrus_g15_ga503_', 24500000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', '2021-12-27 11:05:09', '2021-12-27 11:05:09'),
(3, 'ROG Flow X13 GV301', '../public/img/rog_flow_x13_gv301_', 25500000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', '2021-12-27 11:05:09', '2021-12-27 11:05:09'),
(4, 'ROG Strix G15', '../public/img/rog_strix_g15_', 36700000, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam at rerum dolor nihil earum tenetur et delectus eum minus, ratione, excepturi molestias omnis dolorem nam, officia libero! Totam, exercitationem sint.', '2021-12-27 11:05:09', '2021-12-27 11:05:09');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `fullName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Zura Moon', 'zuramoon@gmail.com', '$2a$10$gsgDnWD5hrKJ3Z1ZUJSpNOFWCr51tClV1RMWGG9XeZN4EpWZAcUL.', '2022-01-21 08:44:45', '2022-01-21 08:44:45'),
(2, 'Karina Mannita', 'karinamannita28@gmail.com', '$2a$10$7b11qRmxntpHkyAaFFvjPeekrDn3eN1iTjFZDk1FHCgVvsAzhiUIa', '2022-01-21 08:49:19', '2022-01-21 08:49:19'),
(3, 'Ananda Putra', 'ananda12345@gmail.com', '$2a$10$G0PGRfzCHnvZrKXa7oevU.h75VJF.LDpnYgfcInj31izeWyp/Rq0a', '2022-01-21 09:14:19', '2022-01-21 09:14:19');

-- --------------------------------------------------------

--
-- Table structure for table `signins`
--

CREATE TABLE `signins` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signins`
--

INSERT INTO `signins` (`id`, `firstName`, `lastName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Zura', 'Moon', 'zuramoon@gmail.com', '$2a$10$gsgDnWD5hrKJ3Z1ZUJSpNOFWCr51tClV1RMWGG9XeZN4EpWZAcUL.', '2022-01-21 08:44:45', '2022-01-21 08:44:45'),
(2, 'Karina', 'Mannita', 'karinamannita28@gmail.com', '$2a$10$7b11qRmxntpHkyAaFFvjPeekrDn3eN1iTjFZDk1FHCgVvsAzhiUIa', '2022-01-21 08:49:19', '2022-01-21 08:49:19'),
(3, 'Ananda', 'Putra', 'ananda12345@gmail.com', '$2a$10$G0PGRfzCHnvZrKXa7oevU.h75VJF.LDpnYgfcInj31izeWyp/Rq0a', '2022-01-21 09:14:19', '2022-01-21 09:14:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptops`
--
ALTER TABLE `laptops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `signins`
--
ALTER TABLE `signins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `laptops`
--
ALTER TABLE `laptops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `signins`
--
ALTER TABLE `signins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
