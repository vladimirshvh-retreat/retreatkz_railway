# Deployment Instructions (Render)

## 1. GitHub
Ensure your code is pushed to GitHub (already done).
Repository: `https://github.com/vladimirshvh-retreat/retreatkz_railway.git`

## 2. Render Setup
1.  Log in to [Render](https://render.com/).
2.  Click **New +** -> **PostgreSQL**.
    - **Name**: `retreat-db`
    - **Database**: `retreat_db`
    - **User**: `retreat_user`
    - **Region**: Frankfurt (or closest to you)
    - **Plan**: Free
    - Click **Create Database**.
    - **IMPORTANT**: Copy the **Internal Database URL** (starts with `postgres://...`).

3.  Click **New +** -> **Web Service**.
    - **Build from GitHub**.
    - Select your repository `retreatkz_railway`.
    - **Name**: `retreat-web`
    - **Region**: Same as database.
    - **Branch**: `main`
    - **Runtime**: Node
    - **Build Command**: `npm install && npx prisma generate && npm run build`
    - **Start Command**: `npx prisma db push && npm start`
    - **Plan**: Free

4.  **Environment Variables** (Advanced / Environment):
    - Add `DATABASE_URL`.
    - Value: Paste the **Internal Database URL** you copied earlier.
    - Add `NODE_VERSION`.
    - Value: `20` (or `18`)

5.  Click **Create Web Service**.

## 3. Verify
- Wait for the build to finish.
- Render will provide a URL (e.g., `retreat-web.onrender.com`).
- Open the URL and test the booking form.
