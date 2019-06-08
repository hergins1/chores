Use chores_app;

INSERT INTO Households (name, createdAt, updatedAt) VALUES ("Anderson", CURDATE(), CURDATE());
INSERT INTO Households (name, createdAt, updatedAt) VALUES ("Smith", CURDATE(), CURDATE());

INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) VALUES ("Rick", 55, 1, CURDATE(), CURDATE(), 1);
INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) VALUES ("Morty", 13, 0, CURDATE(), CURDATE(), 1);
INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) VALUES ("Summer", 18, 0, CURDATE(), CURDATE(), 2);
INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) VALUES ("Beth", 35, 1, CURDATE(), CURDATE(), 1);
INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) VALUES ("Jerry", 35, 1, CURDATE(), CURDATE(), 2);

INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Clean room", 5, "2019-06-15", 0, CURDATE(), CURDATE(), 1);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Wash car", 10, "2019-06-15", 0, CURDATE(), CURDATE(), 2);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Dishes", 3, "2019-06-15", 0, CURDATE(), CURDATE(), 3);

INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://www.sterlingcleaning.net/wp-content/uploads/2017/01/Spring-Cleaning-the-Bedroom-1.jpg", CURDATE(), CURDATE(), 1);
INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcdWNziH6y-2G_UszUQt0rZ_lpuzPkYhb7IPVHek6M-Zr5CBGjA", CURDATE(), CURDATE(), 2);
INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwfzvqvp4FZx5Ay2nNZAWwUemTHRJ3srjQWMdukN79Yi4FZ2k", CURDATE(), CURDATE(), 3);