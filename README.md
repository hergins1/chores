# Chorz

Chorz is a full-stack application, designed to be a clean, simple, and mobile solution to chore tracking in the household. The functionality is divided in to two types of users, Admins and Users. Admins will have the ability to assign chores, approve completed chores, create new users, and create new chores. Users are assigned the chores and will have the ability to mark chores as complete. Icons at the bottom of the viewport provide access to each user to the following links:

  1. Home
     - Users - A dashboard that displays the user's icon, name, current balance, and assigned chore list
     - Admins - Buttons for assigning chores to users, approving chores, and creating new chores and users 
  2. Chores - A comprehensive list of all available chores
  3. Message - The ability to message other family members (Coming Soon)
  4. Family - A listing of your family members

## Instructions

**NOTE -- BEST VIEWED FROM MOBILE PERSPECTIVE!**
- While the app is responsive overall, the layout was designed with the younger user's typical devices in mind

From the login page, use one of the following:
  1. User
     - Email: guest@chorz.com
     - Pass: guest
  2. Admin
     - Email: admin@chorz.com
     - Pass: admin

User Dashboard
  - Users can see their picture, current balance, and currently assigned chores.
  - Marking chores as complete (Coming Soon)
  
Admin Dashboard
  - Click on the Add New Chore button to pull up the new chore form.  Type in a brief description, monetary value, select an icon, and
  click submit.  The new chore can be viewed by clicking the Chores icon in the bottom menu.  
  - Click on the Add New User button to pull up the new user form.  Type in the display name, age, email, password, select the user
  level, choose an avatar, and click submit.  The new user can be viewed by clicking the Family icon in the bottom menu.
  - Assigning Chores, Approving Chores (Coming Soon)
  
  ## Technologies
  
  Chorz was created utilizing a number of technologies, including JavaScript, jQuery, Node, Express, SQL, Sequelize, Handlebars, and
  Bulma. The login authentication was handled with Express Sessions.
