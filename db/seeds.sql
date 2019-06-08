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

INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Clean room", 5, "2019-06-15", 0, CURDATE(), CURDATE(), 1);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Wash car", 10, "2019-06-15", 0, CURDATE(), CURDATE(), 2);
INSERT INTO Chores (name, value, due, completed, createdAt, updatedAt, UserId) VALUES ("Dishes", 3, "2019-06-15", 0, CURDATE(), CURDATE(), 3);
