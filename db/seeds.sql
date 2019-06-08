Use chores_app;

INSERT INTO Households (name, createdAt, updatedAt) 
VALUES 
("Anderson", CURDATE(), CURDATE()),
("Smith", CURDATE(), CURDATE());

INSERT INTO Users (name, age, admin, createdAt, updatedAt, HouseholdId) 
VALUES 
("Rick", 55, 1, CURDATE(), CURDATE(), 1),
("Morty", 13, 0, CURDATE(), CURDATE(), 1),
("Summer", 18, 0, CURDATE(), CURDATE(), 2),
("Beth", 35, 1, CURDATE(), CURDATE(), 1),
("Jerry", 35, 1, CURDATE(), CURDATE(), 2);

INSERT INTO Chores (name, value, photo, completed, createdAt, updatedAt, UserId) 
VALUES 
("Vacuum The Floor", 2, "./images/vacuum.png", 0, CURDATE(), CURDATE(), 1),
("Clean The Bathroom", 3, "./images/bathroom.png", 0, CURDATE(), CURDATE(), 1),
("Do The Laundry", 4, "./images/laundry.png", 0, CURDATE(), CURDATE(), 1),
("Do The Dishes", 2, "./images/dishes.png", 0, CURDATE(), CURDATE(), 1),
("Take Out The Trash", 2, "./images/trash.png", 0, CURDATE(), CURDATE(), 1),
("Mow The Lawn", 10, "./images/mowing.png", 0, CURDATE(), CURDATE(), 1),
("Walk The Dog", 4, "./images/dog.png", 0, CURDATE(), CURDATE(), 1);
