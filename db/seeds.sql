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

INSERT INTO Chores (name, value, due, photo, completed, createdAt, updatedAt, UserId) 
VALUES 
("Vacuum The Floor", 2, "2019-06-15", "./images/chore-icons/vacuum.png", 0, CURDATE(), CURDATE(), 1),
("Clean The Bathroom", 3, "2019-06-15", "./images/chore-icons/bathroom.png", 0, CURDATE(), CURDATE(), 1),
("Do The Laundry", 4, "2019-06-15", "./images/chore-icons/laundry.png", 0, CURDATE(), CURDATE(), 1),
("Do The Dishes", 2, "2019-06-15", "./images/chore-icons/dishes.png", 0, CURDATE(), CURDATE(), 1),
("Take Out The Trash", 2, "2019-06-15", "./images/chore-icons/trash.png", 0, CURDATE(), CURDATE(), 1),
("Mow The Lawn", 10, "2019-06-15", "./images/chore-icons/mowing.png", 0, CURDATE(), CURDATE(), 1),
("Walk The Dog", 4, "2019-06-15", "./images/chore-icons/dog.png", 0, CURDATE(), CURDATE(), 1);
