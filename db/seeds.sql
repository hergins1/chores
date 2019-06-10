Use chores_app;

INSERT INTO Households (name, createdAt, updatedAt) 
VALUES 
("Anderson", CURDATE(), CURDATE()),
("Smith", CURDATE(), CURDATE());

INSERT INTO Users (name, age, admin, email, password, photo, createdAt, updatedAt, HouseholdId) 
VALUES 
("Erik", 28, 1, "ehergins", "ehergins", ".images/avatars/erik.png", CURDATE(), CURDATE(), 1),
("Jason", 26, 0, "jmoore", "jmoore", ".images/avatars/jason.png", CURDATE(), CURDATE(), 1),
("Jonathan", 26, 1, "jorlowski", "jorlowski", ".images/avatars/jonathan.png", CURDATE(), CURDATE(), 1),
("Josh", 39, 0, "jbradley", "jbradley", "./images/avatars/josh.png", CURDATE(), CURDATE(), 1);

<<<<<<< HEAD
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Clean room", 5, "2019-06-30", 0, CURDATE(), CURDATE(), 1);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Wash car", 10, "2019-06-21", 0, CURDATE(), CURDATE(), 2);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Dishes", 3, "2019-06-16", 0, CURDATE(), CURDATE(), 3);

INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://www.sterlingcleaning.net/wp-content/uploads/2017/01/Spring-Cleaning-the-Bedroom-1.jpg", CURDATE(), CURDATE(), 1);
INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcdWNziH6y-2G_UszUQt0rZ_lpuzPkYhb7IPVHek6M-Zr5CBGjA", CURDATE(), CURDATE(), 2);
INSERT INTO Photos (data, createdAt, updatedAt, ChoreId) VALUES ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwfzvqvp4FZx5Ay2nNZAWwUemTHRJ3srjQWMdukN79Yi4FZ2k", CURDATE(), CURDATE(), 3);
=======
INSERT INTO Chores (name, value, due, photo, completed, createdAt, updatedAt, UserId) 
VALUES 
("Vacuum The Floor", 2, "2019-06-15", "./images/chore-icons/vacuum.png", 0, CURDATE(), CURDATE(), 1),
("Clean The Bathroom", 3, "2019-06-15", "./images/chore-icons/bathroom.png", 0, CURDATE(), CURDATE(), 1),
("Do The Laundry", 4, "2019-06-15", "./images/chore-icons/laundry.png", 0, CURDATE(), CURDATE(), 1),
("Do The Dishes", 2, "2019-06-15", "./images/chore-icons/dishes.png", 0, CURDATE(), CURDATE(), 1),
("Take Out The Trash", 2, "2019-06-15", "./images/chore-icons/trash.png", 0, CURDATE(), CURDATE(), 1),
("Mow The Lawn", 10, "2019-06-15", "./images/chore-icons/mowing.png", 0, CURDATE(), CURDATE(), 1),
("Walk The Dog", 4, "2019-06-15", "./images/chore-icons/dog.png", 0, CURDATE(), CURDATE(), 1);
>>>>>>> 5f82a882eaed100efc40ed9e0ed2bbac0e2ec4ee
