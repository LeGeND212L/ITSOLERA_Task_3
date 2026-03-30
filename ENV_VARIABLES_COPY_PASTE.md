# 📋 EXACT ENVIRONMENT VARIABLES (Copy-Paste Ready)

**⚠️ Important**: Replace placeholder values like `your-backend.vercel.app` with your actual deployment URLs

---

## BACKEND ENVIRONMENT VARIABLES

Copy all of these into Vercel Backend Project → Settings → Environment Variables

```
NODE_ENV=production

PORT=5000

BACKEND_URL=https://your-backend-name.vercel.app

MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/medical-store?retryWrites=true&w=majority

MONGODB_URI_FALLBACK=

FRONTEND_URL=https://your-frontend-name.vercel.app

CORS_ORIGINS=https://your-frontend-name.vercel.app

AUTO_SEED_ON_STARTUP=false

ENSURE_ADMIN_ON_STARTUP=true

ALLOW_SERVER_WITHOUT_DB=false
```

**Total: 11 environment variables**

### Backend Variables Explained:

| Variable                | Value                          | Where to Get                       | Do NOT Share        |
| ----------------------- | ------------------------------ | ---------------------------------- | ------------------- |
| NODE_ENV                | production                     | Hardcoded                          | No (it's just text) |
| PORT                    | 5000                           | Vercel auto-sets                   | No                  |
| BACKEND_URL             | Your Vercel backend URL        | From Vercel dashboard after deploy | No                  |
| MONGODB_URI             | Your MongoDB connection string | MongoDB Atlas                      | YES - Keep Secret!  |
| MONGODB_URI_FALLBACK    | Optional fallback              | MongoDB Atlas (optional)           | YES - Keep Secret!  |
| FRONTEND_URL            | Your Vercel frontend URL       | From Vercel after frontend deploys | No                  |
| CORS_ORIGINS            | Your frontend URL              | Same as FRONTEND_URL               | No                  |
| AUTO_SEED_ON_STARTUP    | false                          | Hardcoded                          | No                  |
| ENSURE_ADMIN_ON_STARTUP | true                           | Hardcoded                          | No                  |
| ALLOW_SERVER_WITHOUT_DB | false                          | Hardcoded                          | No                  |

---

## FRONTEND ENVIRONMENT VARIABLES

Copy all of these into Vercel Frontend Project → Settings → Environment Variables

```
VITE_API_BASE_URL=https://your-backend-name.vercel.app/api

VITE_APP_ENV=production

VITE_APP_NAME=Medical Store Management System

VITE_API_TIMEOUT=15000
```

**Total: 4 environment variables**

### Frontend Variables Explained:

| Variable          | Value                   | Where to Get                   | Do NOT Share |
| ----------------- | ----------------------- | ------------------------------ | ------------ |
| VITE_API_BASE_URL | Your backend URL + /api | From backend Vercel deployment | No           |
| VITE_APP_ENV      | production              | Hardcoded                      | No           |
| VITE_APP_NAME     | Can be anything         | Hardcoded                      | No           |
| VITE_API_TIMEOUT  | 15000 (milliseconds)    | Hardcoded                      | No           |

---

## STEP-BY-STEP: HOW TO ADD ENVIRONMENT VARIABLES IN VERCEL

### For Backend:

1. Go to: https://vercel.com/dashboard
2. Click on your backend project name
3. Click "Settings" (top menu bar)
4. Click "Environment Variables" (left sidebar)
5. Click "Add New"
6. Paste each line from above one by one:
   - **Name**: NODE_ENV | **Value**: production
   - **Name**: PORT | **Value**: 5000
   - **Name**: BACKEND_URL | **Value**: https://your-url.vercel.app
   - etc...
7. Click "Save"
8. Redeploy: Click "Deployments" → Latest → "Redeploy"

### For Frontend:

1. Go to: https://vercel.com/dashboard
2. Click on your frontend project name
3. Click "Settings" (top menu bar)
4. Click "Environment Variables" (left sidebar)
5. Click "Add New"
6. Paste each line from above one by one:
   - **Name**: VITE_API_BASE_URL | **Value**: https://your-backend.vercel.app/api
   - **Name**: VITE_APP_ENV | **Value**: production
   - etc...
7. Click "Save"
8. Redeploy: Click "Deployments" → Latest → "Redeploy"

---

## MONGODB CONNECTION STRING FORMAT

Your MongoDB Atlas connection string will look like:

```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/medical-store?retryWrites=true&w=majority
```

### How to get it:

1. Go to: https://cloud.mongodb.com
2. Click your cluster → "Connect"
3. Choose "Drivers" → "Node.js"
4. Copy the connection string
5. Replace `<password>` with your actual password
6. Paste into MONGODB_URI

### Example (do NOT use this):

```
mongodb+srv://myuser:myPassword123@cluster0.abc123.mongodb.net/medical-store?retryWrites=true&w=majority
```

---

## VERCEL URLS AFTER DEPLOYMENT

### Backend URL:

After backend deploys, Vercel will show a URL like:

```
https://medical-store-api.vercel.app
```

Use this for:

- BACKEND_URL in backend env vars
- FRONTEND_URL value in backend env vars
- VITE_API_BASE_URL in frontend (add /api)

### Frontend URL:

After frontend deploys, Vercel will show a URL like:

```
https://medical-store-web.vercel.app
```

Use this for:

- FRONTEND_URL in backend env vars
- CORS_ORIGINS in backend env vars

---

## QUICK TEMPLATE (Fill in YOUR values)

### YOUR BACKEND URL:

```
https://_______________________.vercel.app
```

### YOUR FRONTEND URL:

```
https://_______________________.vercel.app
```

### YOUR MONGODB CONNECTION STRING:

```
mongodb+srv://______________​_____________________.mongodb.net/medical-store?retryWrites=true&w=majority
```

---

## CHECKLIST: BEFORE HITTING DEPLOY

- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string copied
- [ ] Backend code pushed to GitHub
- [ ] Frontend code pushed to GitHub
- [ ] All environment variable values ready
- [ ] Know which is backend URL and which is frontend URL
- [ ] .gitignore excludes .env files
- [ ] Ready to deploy!

---

## TESTING URLs AFTER DEPLOYMENT

### Test Backend is Working:

```
https://your-backend.vercel.app
https://your-backend.vercel.app/api/health
```

### Test Frontend is Working:

```
https://your-frontend.vercel.app
```

### Test Connection (in browser console F12):

```javascript
fetch("https://your-backend.vercel.app/api/health")
  .then((r) => r.json())
  .then(console.log);
```

---

## DEFAULT LOGIN CREDENTIALS

**⚠️ CHANGE THESE IMMEDIATELY AFTER FIRST LOGIN**

- Username: `Admin`
- Password: `Admin123@`

How to change:

1. Login with above credentials
2. Go to User Settings
3. Change password to something strong
4. Save

---

## PRODUCTION CHECKLIST

After deployment:

- [ ] Backend is running (test /api/health)
- [ ] Frontend is loading
- [ ] Can login with Admin/Admin123@
- [ ] Dashboard shows data
- [ ] Can create/edit/delete records
- [ ] Changed admin password
- [ ] Checked Vercel logs for errors
- [ ] No console errors in browser (F12)

---

## SUMMARY

**Backend Env Vars**: 11 total
**Frontend Env Vars**: 4 total
**Total Setup Time**: ~15 minutes per project
**Deploy Time**: ~3-5 minutes per project

**Order**: Deploy Backend FIRST, then Frontend

---

**Ready to Deploy!** 🚀

See other documents for more details:

- `DEPLOYMENT_GUIDE.md` - Complete step-by-step guide
- `VERCEL_QUICK_REFERENCE.md` - UI options and commands
- `DEPLOYMENT_CHECKLIST.md` - Full checklist
