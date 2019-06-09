Use chores_app;

INSERT INTO Households (name, email, password, createdAt, updatedAt) 
VALUES 
("Anderson", CURDATE(), CURDATE()),
("Smith", CURDATE(), CURDATE());

INSERT INTO Users (name, age, admin, username, password, photo, createdAt, updatedAt, HouseholdId) 
VALUES 
("Rick", 55, 1, "PickRick", "12sdf&%", "photo", CURDATE(), CURDATE(), 1),
("Morty", 13, 0, "Mmmmorty", "48@@08", "photo", CURDATE(), CURDATE(), 1),
("Summer", 18, 0, "SummerRules", "39(#8D", "photo", CURDATE(), CURDATE(), 2),
("Beth", 35, 1, "MammaBear", "(#89JE", "photo", CURDATE(), CURDATE(), 1),
("Jerry", 35, 1, "Dad", "password", "photo", CURDATE(), CURDATE(), 2);

INSERT INTO Chores (name, value, due, photo, completed, createdAt, updatedAt, UserId) 
VALUES 
("Clean room", 5, "2019-06-15", "photo", 1, CURDATE(), CURDATE(), 1),
("Wash car", 10, "2019-06-15", "photo", 1, CURDATE(), CURDATE(), 2),
("Dishes", 3, "2019-06-15", "photo", 0, CURDATE(), CURDATE(), 1);
