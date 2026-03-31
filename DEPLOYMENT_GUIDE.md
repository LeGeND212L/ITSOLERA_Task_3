# MERN Stack Deployment Guide on Vercel

## Project Structure

```
Backend:  Backend/ (REST API)
Frontend: Frontend/ (React + Vite)
```

---

## PART 1: BACKEND DEPLOYMENT

### Backend Prerequisites

- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)

### Step 1: MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free tier cluster
   - Create a database user and get the connection string

2. **Get MongoDB Connection String**
   - Your connection string format:
     ```
     mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/medical-store?retryWrites=true&w=majority
     ```
   - Keep this secret - never commit to git

### Step 2: Prepare Backend for Deployment

The backend is already configured. Key files:

- `api/index.js` - Vercel serverless function entry point
- `vercel.json` - Vercel configuration ✓
- `.env.example` - Environment variables template

### Step 3: Deploy Backend to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Create Vercel Project**
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Search for your repository and click "Import"

3. **Configure Backend Project Settings**

   **Select Root Directory:**
   - Framework: `Other`
   - Root Directory: `Backend`
   - Click "Continue"

4. **Set Environment Variables**
   - Click "Environment Variables"
   - Add these variables:

   | Variable                  | Value                   | Example                                          |
   | ------------------------- | ----------------------- | ------------------------------------------------ |
   | `NODE_ENV`                | `production`            | production                                       |
   | `MONGODB_URI`             | Your MongoDB connection | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
   | `FRONTEND_URL`            | Your frontend URL       | `https://frontend.vercel.app`                    |
   | `CORS_ORIGINS`            | Your frontend URL       | `https://frontend.vercel.app`                    |
   | `AUTO_SEED_ON_STARTUP`    | `false`                 | false                                            |
   | `ENSURE_ADMIN_ON_STARTUP` | `true`                  | true                                             |
   - Click "Save"

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (~2-3 minutes)
   - Note your backend URL: `https://your-project-name.vercel.app`

### Backend Environment Variables (Complete List)

```bash
NODE_ENV=production
PORT=5000
BACKEND_URL=https://your-backend.vercel.app
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/medical-store?retryWrites=true&w=majority
MONGODB_URI_FALLBACK=
FRONTEND_URL=https://your-frontend.vercel.app
CORS_ORIGINS=https://your-frontend.vercel.app
AUTO_SEED_ON_STARTUP=false
ENSURE_ADMIN_ON_STARTUP=true
ALLOW_SERVER_WITHOUT_DB=false 
```

---

## PART 2: FRONTEND DEPLOYMENT

### Step 1: Update Frontend Configuration

1. **Copy `.env.example` to `.env.local`** (for development testing)

   ```bash
   cp Frontend/.env.example Frontend/.env.local
   ```

2. **Update `.env.local` with your backend URL**
   ```
   VITE_API_BASE_URL=https://your-backend.vercel.app/api
   ```

### Step 2: Build Frontend Locally (Test)

```bash
cd Frontend
npm install
npm run build
```

Verify `dist/` folder is created with optimized production build.

### Step 3: Deploy Frontend to Vercel

1. **Create New Vercel Project**
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Search for your repository and click "Import"

2. **Configure Frontend Project Settings**

   **Select Root Directory:**
   - Framework: `Vite`
   - Root Directory: `Frontend`

   **Build Configuration:**
   - Build Command: `npm run build` (should auto-fill)
   - Output Directory: `dist` (should auto-fill)
   - Install Command: `npm install` (should auto-fill)
   - Click "Continue"

3. **Set Environment Variables**
   - Click "Environment Variables"
   - Add these variables:

   | Variable            | Value                                 | Notes                             |
   | ------------------- | ------------------------------------- | --------------------------------- |
   | `VITE_API_BASE_URL` | `https://your-backend.vercel.app/api` | Must match backend deployment URL |
   | `VITE_APP_ENV`      | `production`                          | Environment identifier            |
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment (~2-3 minutes)
   - Note your frontend URL: `https://your-project-name.vercel.app`

### Frontend Environment Variables (Complete List)

```bash
VITE_API_BASE_URL=https://your-backend.vercel.app/api
VITE_APP_ENV=production
VITE_APP_NAME=Medical Store Management System
VITE_API_TIMEOUT=15000
```

---

## PART 3: POST-DEPLOYMENT VERIFICATION

### Test Backend API

1. **Check Health Endpoint**

   ```
   https://your-backend.vercel.app/api/health
   ```

   Expected Response:

   ```json
   {
     "status": "ok",
     "db": "connected"
   }
   ```

2. **Check Root Endpoint**
   ```
   https://your-backend.vercel.app
   ```
   Expected Response: Medical Store Management System API is running...

### Test Frontend

1. **Visit Frontend URL**

   ```
   https://your-frontend.vercel.app
   ```

2. **Test Login**
   - Default credentials:
     - Username: `Admin`
     - Password: `Admin123@`
   - ⚠️ Change these credentials IMMEDIATELY after first login

3. **Test API Calls**
   - Try accessing medicines, suppliers, or other features
   - Check browser console for errors (F12)
   - Check Network tab to verify API requests

---

## PART 4: TROUBLESHOOTING

### Frontend Shows "Connection Error"

**Problem**: Frontend cannot connect to backend API

**Solutions**:

1. Verify backend URL in frontend environment variables
2. Check CORS is enabled in backend (should be automatic)
3. Verify backend is still running

**Check Connection:**

```javascript
// In browser console
fetch("https://your-backend.vercel.app/api/health")
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);
```

### Backend Not Seeding Data

**Expected Behavior** (First deployment only):

- Default admin created: Admin/Admin123@
- Business data (suppliers, customers) created

**If data not appearing**:

1. Check `ENSURE_ADMIN_ON_STARTUP=true` in environment variables
2. Check MongoDB connection string is correct
3. Check MongoDB Atlas network access (whitelist 0.0.0.0/0 for Vercel)

### Logs Configuration

Both services have disabled console logs in production for security.

**To view logs:**

1. Go to Vercel project dashboard
2. Click "Deployments"
3. Click the latest deployment
4. Click "Logs" tab

---

## PART 5: IMPORTANT SECURITY STEPS

⚠️ **BEFORE PUTTING INTO PRODUCTION:**

1. **Change Admin Password**
   - Login with: Admin / Admin123@
   - Go to user settings and change password immediately

2. **Disable Auto-Seeding**
   - Backend already has `AUTO_SEED_ON_STARTUP=false` ✓

3. **Enable Secret Keys** (if implementing JWTs)
   - Add `JWT_SECRET` to environment variables
   - Use a strong, random 32+ character string

4. **Monitor MongoDB**
   - Set up alerts in MongoDB Atlas
   - Monitor disk space and connections

5. **Set Up Monitoring**
   - Enable Vercel Analytics
   - Set up error tracking (Sentry, Rollbar, etc.)

---

## PART 6: BUILD COMMANDS REFERENCE

### Backend Build Command

```bash
# Vercel automatically handles this
# No build step needed for Node.js backend
# Just installs dependencies and starts server
```

### Frontend Build Command

```bash
npm run build
# Output: Frontend/dist/
```

### Local Testing Commands

**Backend (local)**:

```bash
cd Backend
npm install
npm run dev
# Server runs on http://localhost:5000
```

**Frontend (local)**:

```bash
cd Frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## PART 7: ENVIRONMENT VARIABLES QUICK REFERENCE

### Backend (.env on Vercel)

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/db
FRONTEND_URL=https://frontend-url.vercel.app
CORS_ORIGINS=https://frontend-url.vercel.app
AUTO_SEED_ON_STARTUP=false
ENSURE_ADMIN_ON_STARTUP=true
```

### Frontend (.env.production on Vercel)

```
VITE_API_BASE_URL=https://backend-url.vercel.app/api
VITE_APP_ENV=production
```

---

## PART 8: VERCEL DEPLOYMENT OPTIONS SUMMARY

### For Backend Deployment:

- **Framework Preset**: Other (Node.js)
- **Root Directory**: Backend/
- **Build Command**: Automatic (npm install)
- **Output Directory**: N/A (APIs don't have output)
- **Runtime**: Node.js 18.x ✓
- **Memory**: 1024 MB (default) ✓
- **Max Duration**: 30 seconds (default) ✓

### For Frontend Deployment:

- **Framework Preset**: Vite
- **Root Directory**: Frontend/
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Cache**: Enabled for node_modules

---

## PART 9: DEPLOYMENT CHECKLIST

Before deploying:

- [ ] Backend code committed to GitHub
- [ ] Frontend code committed to GitHub
- [ ] MongoDB Atlas cluster created and accessible
- [ ] MongoDB connection string copied
- [ ] Backend deployed to Vercel
- [ ] Backend URL noted
- [ ] Frontend environment variables updated with backend URL
- [ ] Frontend deployed to Vercel
- [ ] Frontend can connect to backend (test /api/health)
- [ ] Can login with Admin/Admin123@
- [ ] Password changed from default
- [ ] Data appears in frontend (medicines, suppliers, etc.)

---

## PART 10: NEXT STEPS & OPTIMIZATION

After initial deployment:

1. **Enable HTTPS**
   - Vercel automatically provides SSL ✓

2. **Set Custom Domains**
   - Go to Vercel project > Settings > Domains
   - Add your custom domain

3. **Setup Monitoring**
   - Use Vercel's built-in analytics
   - Consider external monitoring (Sentry, DataDog)

4. **Optimize Images**
   - Use Vercel WebP optimization
   - Compress images before upload

5. **Enable Caching**
   - Frontend assets already cached for 1 year ✓
   - Consider API response caching

6. **Backup Database**
   - Enable MongoDB backups
   - Set up automated snapshots

---

## Support & Debugging

**Useful Links:**

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Vite Docs: https://vitejs.dev/

**Common Commands:**

```bash
# View logs locally
npm run dev

# Build and test locally
npm run build
npm run preview

# Check environment
console.log(process.env)  # Backend
console.log(import.meta.env)  # Frontend
```

---

## Version Info

- Node.js: 18.x (Vercel default)
- React: 19.2.4
- Express: 5.2.1
- MongoDB Driver: 9.3.1
- Vite: 8.0.1

---

Generated for Medical Store Management System
Deployment Date: March 30, 2026
