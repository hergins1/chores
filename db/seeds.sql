Use chores_app;

INSERT INTO Households (name, createdAt, updatedAt) 
VALUES 
("Anderson", CURDATE(), CURDATE()),
("Smith", CURDATE(), CURDATE());

INSERT INTO Users (name, age, admin, email, password, balance, photo, createdAt, updatedAt, HouseholdId) 
VALUES 
("Erik", 28, 1, "ehergins@gmail.com", "ehergins", 0, "./images/avatars/erik.png", CURDATE(), CURDATE(), 2),
("Jason", 26, 0, "jmoore@gmail.com", "jmoore", 20, "./images/avatars/jason.png", CURDATE(), CURDATE(), 1),
("Jonathan", 26, 1, "jorlowski@gmail.com", "jorlowski", 0, "./images/avatars/jonathan.png", CURDATE(), CURDATE(), 2),
("Josh", 39, 0, "jbradley@gmail.com", "jbradley", 10, "./images/avatars/josh.png", CURDATE(), CURDATE(), 1);

INSERT INTO Chores (name, value, due, photo, completed, createdAt, updatedAt, UserId) 
VALUES 
("Vacuum The Floor", 2, "2019-06-15", "./images/chore-icons/vacuum.png", 0, CURDATE(), CURDATE(), 1),
("Clean The Bathroom", 3, "2019-06-15", "./images/chore-icons/bathroom.png", 0, CURDATE(), CURDATE(), 1),
("Do The Laundry", 4, "2019-06-15", "./images/chore-icons/laundry.png", 0, CURDATE(), CURDATE(), 1),
("Do The Dishes", 2, "2019-06-15", "./images/chore-icons/dishes.png", 0, CURDATE(), CURDATE(), 1),
("Take Out The Trash", 2, "2019-06-15", "./images/chore-icons/trash.png", 0, CURDATE(), CURDATE(), 1),
("Mow The Lawn", 10, "2019-06-15", "./images/chore-icons/mowing.png", 0, CURDATE(), CURDATE(), 1),
("Walk The Dog", 4, "2019-06-15", "./images/chore-icons/dog.png", 0, CURDATE(), CURDATE(), 1);