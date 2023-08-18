Task: Develop, Test, and Design an Online Book Review System
Description:
Develop a full-stack application for an online book review system. Users should be able to
sign up, log in, add books, write reviews for them, view books, and their reviews through a
user-friendly interface. The application should also have a backend API for processing the
data.
Backend Features:
1. User Authentication:
o Implement signup, login, and logout functionality.
o Use JWT for Authentication and Authorization.
2. CRUD for Books:
o Allow users to add new books with details like title, author, ISBN, etc.
o Implement endpoints to view, update, and delete book details.
3. Reviews on Books:
o Allow users to write, view, and delete reviews on books.
o Each review should have a rating (1-5), text content, and the user who wrote
it.
4. Search and Pagination:
o Implement endpoints to search for books by title or author.
o Implement pagination on the book listing endpoint.
5. Data Storage:
o Use MongoDB or Postgres for storing book and review details.
o Implement caching using Redis to speed up frequently accessed endpoints.
Frontend Features:
1. User Interface:
o Use ReactJS or any other UI/UX framework to create a responsive web
interface.
o Implement pages for user registration, login, adding/viewing books, and
writing/viewing reviews.
2. Dynamic Interactions:
o Utilize Socket.io to notify users in real-time if a new review is added to a book
they added or reviewed.
o Implement dynamic searching: As users type in a search bar, display book
results that match the query.
3. Styling:
o Use CSS and any preferred frameworks (like Bootstrap) for styling the
interface, making sure it's mobile-responsive.

