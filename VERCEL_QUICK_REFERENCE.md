# 🚀 VERCEL DEPLOYMENT - QUICK REFERENCE

## Environment Variables (Copy-Paste Ready)

### BACKEND Environment Variables (Set in Vercel)

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

### FRONTEND Environment Variables (Set in Vercel)

```
VITE_API_BASE_URL=https://your-backend-name.vercel.app/api
VITE_APP_ENV=production
VITE_APP_NAME=Medical Store Management System
VITE_API_TIMEOUT=15000
```

---

## Deployment Options for Vercel UI

### BACKEND Deployment Options ✅

When importing your project to Vercel:

```
1. Project Name: any-name (e.g., my-medical-store-api)
2. Repository: Select your GitHub repo
3. Root Directory: Backend/ ← SELECT THIS
4. Framework: Other (not a preset)
5. Build Command: (leave empty - Node.js auto-detected)
6. Output Directory: (leave empty)
7. Install Command: (leave empty - npm auto-detected)
8. Environment Variables: (see list above)
9. Click Deploy
```

**Important Settings:**

- Root Directory: `Backend/`
- Framework: `None - Other`
- Node.js will auto-detect and run `npm install` then `node api/index.js`

---

### FRONTEND Deployment Options ✅

When importing your project to Vercel:

```
1. Project Name: any-name (e.g., my-medical-store-web)
2. Repository: Select your GitHub repo
3. Root Directory: Frontend/ ← SELECT THIS
4. Framework: Vite ← SELECT THIS
5. Build Command: npm run build (auto-filled)
6. Output Directory: dist (auto-filled)
7. Install Command: npm install (auto-filled)
8. Environment Variables: (see list above)
9. Click Deploy
```

**Important Settings:**

- Root Directory: `Frontend/`
- Framework: `Vite` (will auto-detect framework.config.js)
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Build Commands Used

### Backend

```
No explicit build command needed
Vercel runs: npm install
Then starts: node api/index.js
```

### Frontend

```
Build Command: npm run build
This runs: vite build
Output: dist/
Vercel serves: dist/index.html
```

---

## Step-by-Step Deployment Process

### 1. Deploy Backend FIRST

```
1. Go to vercel.com/dashboard
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repo
5. Root Directory: Backend/
6. Add environment variables (see above)
7. Click Deploy
8. Wait ~3 minutes
9. Copy backend URL from deployment
```

### 2. Update Frontend Env Vars

```
1. In Frontend/.env.example (for local testing):
   VITE_API_BASE_URL=https://your-backend-url.vercel.app/api

2. This will be set in Vercel Environment Variables
   during frontend deployment
```

### 3. Deploy Frontend SECOND

```
1. Go to vercel.com/dashboard
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Select your GitHub repo
5. Root Directory: Frontend/
6. Framework: Vite
7. Build Command: npm run build
8. Output Directory: dist
9. Add environment variables:
   VITE_API_BASE_URL=https://your-backend-url.vercel.app/api
   VITE_APP_ENV=production
10. Click Deploy
11. Wait ~3 minutes
12. Copy frontend URL
```

---

## Testing After Deployment

### Test Backend

```
1. Open: https://your-backend.vercel.app
   Expected: "Medical Store Management System API is running..."

2. Open: https://your-backend.vercel.app/api/health
   Expected: {"status":"ok","db":"connected"}
```

### Test Frontend

```
1. Open: https://your-frontend.vercel.app
   Should show login page

2. Login with:
   Username: Admin
   Password: Admin123@

3. You should see the dashboard with data
```

### Test Backend-Frontend Connection

```
In browser console (F12):
fetch('https://your-backend.vercel.app/api/health')
  .then(r => r.json())
  .then(console.log)
```

---

## Environment Variables Explained

| Variable                | Backend | Frontend | Purpose             | Example                        |
| ----------------------- | ------- | -------- | ------------------- | ------------------------------ |
| NODE_ENV                | ✅      | -        | Production mode     | production                     |
| PORT                    | ✅      | -        | Server port         | 5000                           |
| MONGODB_URI             | ✅      | -        | Database connection | mongodb+srv://...              |
| FRONTEND_URL            | ✅      | -        | CORS origin         | https://frontend.vercel.app    |
| CORS_ORIGINS            | ✅      | -        | Allowed origins     | https://frontend.vercel.app    |
| AUTO_SEED_ON_STARTUP    | ✅      | -        | Skip data seeding   | false                          |
| ENSURE_ADMIN_ON_STARTUP | ✅      | -        | Create admin user   | true                           |
| VITE_API_BASE_URL       | -       | ✅       | API endpoint        | https://backend.vercel.app/api |
| VITE_APP_ENV            | -       | ✅       | App environment     | production                     |

---

## Important Notes

⚠️ **BEFORE GOING LIVE:**

1. **Change Default Admin Password**
   - Login with: Admin / Admin123@
   - Go to settings and change password

2. **Disable Seeding**
   - Already set to `AUTO_SEED_ON_STARTUP=false` ✅

3. **Monitor Logs**
   - View in Vercel: Project → Deployments → Logs

4. **Database Backup**
   - Enable in MongoDB Atlas

5. **Set Custom Domain**
   - Vercel: Project → Settings → Domains

---

## File Structure After Deployment

```
Your GitHub Repo/
├── Backend/
│   ├── api/
│   │   └── index.js         (Vercel entry point)
│   ├── vercel.json          ✅ (Updated)
│   ├── package.json         ✅ (Configured)
│   ├── .env.example         ✅ (Updated guide)
│   └── ...
├── Frontend/
│   ├── src/
│   │   └── api/
│   │       └── client.js    (Uses VITE_API_BASE_URL)
│   ├── vite.config.js       ✅ (Updated)
│   ├── vercel.json          ✅ (Updated)
│   ├── package.json         ✅ (Updated)
│   ├── .env.example         ✅ (Updated guide)
│   └── dist/                (Generated on Vercel)
├── DEPLOYMENT_GUIDE.md      ✅ (Full guide)
├── VERCEL_QUICK_REFERENCE.md (This file)
└── README.md
```

---

## Troubleshooting

### "Cannot connect to API"

- Check VITE_API_BASE_URL is correct
- Check backend deployment is successful
- Check CORS_ORIGINS matches frontend URL

### "Page not found (404)"

- Frontend is SPA, all routes redirect to /index.html
- This is configured in Frontend/vercel.json ✅

### "MongoDB connection failed"

- Check MONGODB_URI format
- Check MongoDB Atlas whitelist includes 0.0.0.0/0 for Vercel
- Test connection string locally

### "Data not seeding"

- Check ENSURE_ADMIN_ON_STARTUP=true
- Check database connection is working
- Check logs in Vercel dashboard

---

## Quick Links

- 🔗 Vercel Dashboard: https://vercel.com/dashboard
- 🔗 MongoDB Atlas: https://cloud.mongodb.com
- 🔗 GitHub: https://github.com
- 📖 Full Guide: See DEPLOYMENT_GUIDE.md

---

**Status**: ✅ Ready for Production Deployment
**Last Updated**: March 30, 2026
