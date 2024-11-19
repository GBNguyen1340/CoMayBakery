# Cỏ May Bakery: Online Bakery Website

Cỏ May Bakery is a web application showcasing and managing bakery products, built using **Next.js** and **Sanity CMS**, and deployed on **Vercel**.

---

## Features

- Showcase of bakery products with a modern UI.
- Managed content using **Sanity CMS**.
- Optimized for deployment on **Vercel**.
- Built with the latest features of **Next.js**.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Sanity](https://www.sanity.io/) project set up.
- A [Vercel](https://vercel.com/) account for deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/co-may-bakery.git
   cd co-may-bakery
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```env
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_secret_key
     ```

4. Connect to Sanity CMS:
   - Replace `your_sanity_project_id` with your actual Sanity project ID.
   - Ensure your Sanity project has the required schemas for bakery products.

### Running Locally

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Deploy on Vercel

1. Install the Vercel CLI if not already installed:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel:
   - Go to your project dashboard on Vercel.
   - Add the same environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`) under the **Environment Variables** section.

5. Your application will be live at the Vercel-provided URL.

---

## Sanity CMS Setup

1. Install the Sanity CLI globally if not already installed:
   ```bash
   npm install -g @sanity/cli
   ```

2. Navigate to the `sanity` folder (if included in the project):
   ```bash
   cd sanity
   ```

3. Login to your Sanity account and initialize the project:
   ```bash
   sanity login
   sanity init
   ```

4. Deploy your Sanity studio:
   ```bash
   sanity deploy
   ```

---

## Project Structure

```
├── components/        # Reusable components
├── pages/             # Application routes
├── public/            # Static assets
├── styles/            # Global and component-level styles
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
```

---

## Useful Scripts

- `npm run dev`: Run the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the application in production mode.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
