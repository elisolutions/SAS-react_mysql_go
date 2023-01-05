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
  
-Add User
![add_user](https://user-images.githubusercontent.com/113105714/210849591-b7c96b0c-a69f-4912-aa21-877ba0a84e70.png)

- User List
![list](https://user-images.githubusercontent.com/113105714/210849633-9eb5dd49-0208-47d3-bbcd-cf4442be3d89.png)

-Update User
![update_user](https://user-images.githubusercontent.com/113105714/210849752-aac3035f-4254-42f9-9ab2-f9fba689aa9b.png)

-Delete User
![delete_user](https://user-images.githubusercontent.com/113105714/210849866-f22a69fe-94e9-42d1-8877-cc7fd20b1e13.png)


-User Details
![user_details](https://user-images.githubusercontent.com/113105714/210849952-c8214fef-40c0-455a-82fb-06dd96fe9f17.png)







