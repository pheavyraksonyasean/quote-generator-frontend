# Quote Generator  
*by [Sean Pheavyraksonya]*  

## Description  
The **Quote Generator** is a simple yet inspiring web application that delivers quotes from some of the world’s greatest minds.  
It is built with a **React** frontend, a **Node.js/Express** backend, and uses **Supabase** as the database for storing and retrieving quotes.  

## Features  
- Get random inspirational quotes  
- Copy quotes with one click  
- Generate new quotes instantly  
- Modern UI with clean design  

## Setup Instructions  

### 1. Clone the repository  
```bash
git clone https://github.com/pheavyraksonyasean/quote-generator-frontend.git
git clone https://github.com/pheavyraksonyasean/quote-generator-backend.git
```
### 2. Install dependencies

#### Frontend (React)
```bash
cd quote-generator-frontend
npm install
npm run dev
```
Frontend run : [http://localhost:3000](http://localhost:3000)

#### Backend (Express+Supabase)
```bash
cd quote-generator-backend
npm install
npm run dev
```
Backend run : [http://localhost:5000](http://localhost:5000)

### 3. Environment Variables
Create a .env file inside the backend folder:
```bash
SUPABASE_URL=https://flkodwlkaehdnpecwjqd.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsa29kd2xrYWVoZG5wZWN3anFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNjA4MDgsImV4cCI6MjA3MjYzNjgwOH0.tGuyRLMooTO8wRPjSrWurfTNtUjhVNhAFhWzU_EEnbI
PORT=5000
```

## Architecture Explanation
The Quote Generator follows a three-layer architecture:

### Frontend (React)
- The React app displays quotes to users.
- It sends a request to the backend API at [http://localhost:3000/api/random-quote](http://localhost:3000/api/random-quote).
- Once the response is received, the frontend renders the quote and author dynamically.

### Backend (Express)
- The Express server listens on [http://localhost:3000](http://localhost:3000).
- It exposes an API endpoint [http://localhost:3000/api/random-quote](http://localhost:3000/api/random-quote).
- When called, it communicates with Supabase by invoking a stored procedure (get_random_quote) to fetch a random quote.

### Database (Supabase)
- Supabase stores the quotes and authors.
- The backend uses the Supabase client to call the database function and return the result to the frontend.






















