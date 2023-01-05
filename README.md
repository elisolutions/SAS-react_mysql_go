﻿# SAS-react_mysql_go
 
 Step 1- set-up the database(mysql)
 you can find the sql file in the folder named db
 
 or you can create your own with database name - userdb
 
 and create table
 -- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `civil_status` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `contact` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


Step 2 -run the backend
$ go run main.go

Step-3 - run the frontend
$ npm install
$ npm start
