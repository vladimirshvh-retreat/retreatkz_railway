# Deployment Instructions

## 1. GitHub
1.  Create a new repository on GitHub.
2.  Push this code to the repository:
    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```

## 2. Railway
1.  Log in to [Railway](https://railway.app/).
2.  Click "New Project" -> "Deploy from GitHub repo".
3.  Select your repository.
4.  **Add a Database**:
    - Right-click on the canvas or click "New".
    - Select "Database" -> "PostgreSQL".
5.  **Connect Database**:
    - Click on your Next.js service.
    - Go to "Variables".
    - Add `DATABASE_URL`.
    - Value: `${{Postgres.DATABASE_URL}}` (Railway should autocomplete this).
6.  **Build & Deploy**:
    - Railway will automatically build and deploy.
    - The `postinstall` script (`prisma generate`) will run automatically.
    - The migration (`prisma db push`) might need to be run manually in the Railway CLI or added to the start command, but for now, `prisma db push` is the easiest way to sync schema.
    - **Recommended**: Add a "Start Command" in Settings -> "Deploy":
      `npx prisma db push && next start`

## 3. Verify
- Open your deployed URL.
- Try submitting the booking form.
- Check the database in Railway to see the new record.
