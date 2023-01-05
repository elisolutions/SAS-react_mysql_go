# SAS-react_mysql_go
 
 -This a full-stack web application that is a basic User information management with CRUD features: 

• Create User
• List All Users 
• Update User 
• Delete User 
• View User 

These are APIs that the Go Language application will export:
GET all User's        :     /users 
GET User by ID     :     /users/{_id} 
POST User             :     /users 
PUT User               :     /users/{_id} 
DELETE User       :     /users/{_id}

 
-Create database 'userdb':
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


Initialize the Go project:
Initialize the Go project using the following command
go mod init backend
or 
code backend

Adding the modules required for the project:
go get github.com/gorilla/mux
go get github.com/go-sql-driver/mysql


---Front Project Structure:---

Frontend Local Setup
Step 1: The npm install installs all modules that are listed on package.json file and their 
            dependencies
npm install
Step 2: Run the Frontend application
npm start
 App running at:
  - Local:http://localhost:3000/ 

