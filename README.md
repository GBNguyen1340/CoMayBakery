# Cỏ May Bakery: Online Bakery Website

Cỏ May Bakery is a web application showcasing and managing bakery products, built using **Next.js** and **Sanity CMS**, and deployed on **Vercel**.
Check example website here: https://co-may-bakery.vercel.app/
BackEnd repo: https://github.com/GBNguyen1340/comay_bakery_sanity
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
5. Your application will be live at the Vercel-provided URL.

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
