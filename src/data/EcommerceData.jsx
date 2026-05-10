import ecom1 from "../images/ecommerce/ecom1.webp";
import ecom2 from "../images/ecommerce/ecom2.webp";
import ecom3 from "../images/ecommerce/ecom3.webp";
import ecom4 from "../images/ecommerce/ecom4.webp";
import ecom5 from "../images/ecommerce/ecom5.webp";
import ecom6 from "../images/ecommerce/ecom6.webp";
import ecom7 from "../images/ecommerce/ecom7.webp";
import ecom8 from "../images/ecommerce/ecom8.webp";
import ecom9 from "../images/ecommerce/ecom9.webp";
import ecom10 from "../images/ecommerce/ecom10.webp";
import ecom11 from "../images/ecommerce/ecom11.webp";
import ecom12 from "../images/ecommerce/ecom12.webp";
import ecom13 from "../images/ecommerce/ecom13.webp";
import ecom14 from "../images/ecommerce/ecom14.webp";
import ecom15 from "../images/ecommerce/ecom15.webp";
import ecom16 from "../images/ecommerce/ecom16.webp";
import ecom17 from "../images/ecommerce/ecom17.webp";
import ecom18 from "../images/ecommerce/ecom18.webp";
import ecom19 from "../images/ecommerce/ecom19.webp";
import ecom20 from "../images/ecommerce/ecom20.webp";
import ecom21 from "../images/ecommerce/ecom21.webp";
import ecom22 from "../images/ecommerce/ecom22.webp";
import ecom23 from "../images/ecommerce/ecom23.webp";
import ecom24 from "../images/ecommerce/ecom24.webp";
import ecom25 from "../images/ecommerce/ecom25.webp";
import ecom26 from "../images/ecommerce/ecom26.webp";
import ecom27 from "../images/ecommerce/ecom27.webp";
import ecom28 from "../images/ecommerce/ecom28.webp";
import ecom29 from "../images/ecommerce/ecom29.webp";
import ecom30 from "../images/ecommerce/ecom30.webp";
import ecom31 from "../images/ecommerce/ecom31.webp";
import ecom32 from "../images/ecommerce/ecom32.webp";
import ecom33 from "../images/ecommerce/ecom33.webp";
export const Ecommerce = [
  {
    taskId: "ecom1",
    taskTitle: "E-commerce Project Setup (React + Express + Rspack)",
    introduction:
      "In this task, we will set up the foundation for a full-stack e-commerce application. The frontend will use React bundled with Rspack, and the backend will use Node.js with Express. By the end, you will have a working project structure with both client and server running concurrently.",
    steps: [
      {
        stepTitle: "Step 1: Create the Project Structure",
        titleDescription:
          "We first organize the folders for the frontend (client) and backend (server), along with shared root files.",
        sections: [
          {
            subtitleDescription: "Main folders",
            descriptions: [
              "Create a root folder named `ecom`.",
              "Inside it, create two main folders: `client/` and `server/`.",
              "Also include a `.env` file at the root.",
            ],
          },
          {
            subtitleDescription: "Client structure",
            descriptions: [
              "Inside `client/`, add `src/` folder with subfolders: `components/`, `pages/`, `context/`, `hooks/`, `styles/`, and `utils/`.",
              "Keep the `rspack.config.mjs` inside `client/`.",
              "Do not move `index.html` into client; keep it in the project root.",
            ],
          },
          {
            subtitleDescription: "Server structure",
            descriptions: [
              "Inside `server/`, create empty folders: `config/`, `controllers/`, `models/`, `routes/`, `middleware/`, and `utils/`.",
              "Add a file `server.js` as the backend entry point.",
              "We will later expand each folder when we implement backend logic.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Setup the Client with Rspack",
        titleDescription: "We will scaffold the React frontend using Rspack.",
        sections: [
          {
            subtitleDescription: "Scaffold project",
            descriptions: [
              "Navigate into `ecom/`.",
              "Run `npx create-rspack@latest client`.",
              "Choose React + JSX with CSS enabled (no TypeScript).",
            ],
          },
          {
            subtitleDescription: "Install dependencies",
            descriptions: [
              "Navigate to `client/`.",
              "Run `npm install` to install Rspack and React dependencies.",
              "This ensures your scaffold is ready for development.",
            ],
          },
          {
            subtitleDescription: "Client scripts",
            descriptions: [
              "Update `client/package.json` scripts:",
              "`dev` → `rspack dev`",
              "`build` → `rspack build`",
              "`preview` → `rspack preview`",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Setup the Server with Express",
        titleDescription:
          "We configure the backend server with Node.js and Express.",
        sections: [
          {
            subtitleDescription: "Initialize server",
            descriptions: [
              "Navigate to `server/`.",
              "Run `npm init -y` to generate a package.json.",
              "Add a simple `server.js` with a hello world endpoint.",
            ],
          },
          {
            subtitleDescription: "Install dependencies",
            descriptions: [
              "Run `npm install express mongoose bcrypt jsonwebtoken cors dotenv morgan nodemailer stripe paypal-rest-sdk`.",
              "Install `nodemon` as a dev dependency with `npm install --save-dev nodemon`.",
              "These dependencies will be used for authentication, database, payments, and API handling.",
            ],
          },
          {
            subtitleDescription: "Server scripts",
            descriptions: [
              "Update `server/package.json` scripts:",
              "`dev` → `nodemon server.js`",
              "`start` → `node server.js`",
              "This makes it easier to run the backend during development.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Setup Root Configuration",
        titleDescription:
          "We use the root package.json to run both client and server together.",
        sections: [
          {
            subtitleDescription: "Initialize root package",
            descriptions: [
              "From the root `ecom/`, run `npm init -y`.",
              "This creates a root-level package.json.",
              "We will use it to manage both apps together.",
            ],
          },
          {
            subtitleDescription: "Install concurrently",
            descriptions: [
              "Run `npm install concurrently`.",
              "This allows us to run both client and server in parallel.",
              "It’s helpful for full-stack development.",
            ],
          },
          {
            subtitleDescription: "Root scripts",
            descriptions: [
              "Add `install-all` script: installs client and server dependencies.",
              "Add `dev` script: runs both `npm run dev --prefix server` and `npm run dev --prefix client`.",
              "This creates a smooth developer experience.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Configure Environment Variables",
        titleDescription: "We set up environment variables for sensitive data.",
        sections: [
          {
            subtitleDescription: "Create `.env` file",
            descriptions: [
              "At the root of the project, create a `.env` file.",
              "Add placeholders for secrets like:",
              "`MONGO_URI=`, `JWT_SECRET=`, `STRIPE_SECRET=`, `PAYPAL_CLIENT_ID=`, `EMAIL_USER=`, `EMAIL_PASS=`.",
              "These values will be filled in later.",
            ],
          },
          {
            subtitleDescription: "Use dotenv",
            descriptions: [
              "In the server, ensure `dotenv` is installed and configured.",
              "Load variables in `server.js` with `dotenv.config()`.",
              "This keeps sensitive keys out of your code.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Verify Rspack Config & HTML",
        titleDescription:
          "We confirm that frontend config points to the correct HTML file.",
        sections: [
          {
            subtitleDescription: "Check rspack.config.mjs",
            descriptions: [
              "Ensure `rspack.config.mjs` is inside `client/`.",
              "Verify the HTML plugin points to `../index.html`.",
              "This allows Rspack to use the root `index.html`.",
            ],
          },
          {
            subtitleDescription: "Keep index.html at root",
            descriptions: [
              "Do not move `index.html` inside `client/`.",
              "Keep it at the project root.",
              "Rspack config will correctly reference it.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Install Everything",
        titleDescription:
          "We install all dependencies across client and server in one go.",
        sections: [
          {
            subtitleDescription: "Run install-all",
            descriptions: [
              "From the root, run `npm run install-all`.",
              "This installs dependencies in both client and server.",
              "Ensures everything is ready before starting dev servers.",
            ],
          },
          {
            subtitleDescription: "Check node_modules",
            descriptions: [
              "Confirm `client/node_modules/` exists.",
              "Confirm `server/node_modules/` exists.",
              "Both must be present for the app to run.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Run and Test",
        titleDescription:
          "We finally run the full stack and verify both sides.",
        sections: [
          {
            subtitleDescription: "Run dev servers",
            descriptions: [
              "From the root, run `npm run dev`.",
              "This starts both server and client simultaneously.",
              "The app should now be accessible.",
            ],
          },
          {
            subtitleDescription: "Verify client",
            descriptions: [
              "Visit `http://localhost:8080`.",
              "You should see the React app running.",
              "This confirms the frontend is working.",
            ],
          },
          {
            subtitleDescription: "Verify server",
            descriptions: [
              "Visit `http://localhost:5000`.",
              "You should see the Express hello world response.",
              "This confirms the backend is working.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Access Package & Config Codes",
        titleDescription:
          "Easily get all the necessary configuration files to run the project without errors.",
        sections: [
          {
            subtitleDescription: "Copying Configs",
            descriptions: [
              "All package.json files (root, client, server) are available in the cheatsheet.",
              "The `rspack.config.mjs` file for frontend setup is also included.",
              "You can copy the code directly by pressing the 'Copy' button in the cheatsheet.",
              "This ensures everyone can quickly set up their project without manually typing the configs.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["Ecommerce Projects"],
    completed: false,
    codesandboxUrl: "/notavailable",
img: ecom1,    videoLink: "",
  },
  {
    taskId: "ecom2",
    taskTitle: "Connect Your MERN E-Commerce Project to GitHub",
    introduction:
      "In this lesson you’ll wire your monorepo (root + client + server) to Git/GitHub the right way: clean .gitignore, first commit, remote linking, push, optional branch protection, and a daily workflow cheat-sheet. This gives you version control, backup, collaboration, and a safe foundation for Phase 2 (Database & Backend Auth).",
    steps: [
      {
        stepTitle: "Step 1: Hook + Lesson Intro",
        titleDescription: "",
        sections: [
          {
            subtitleDescription: "Why this matters",
            descriptions: [
              "GitHub is your project’s brain in the cloud: version history, backups, collaboration, and easy deployment.",
              "You’ll set up Git correctly for a MERN monorepo (root + client + server) so nothing sensitive (like .env) is ever pushed.",
            ],
          },
          {
            subtitleDescription: "What you’ll finish with",
            descriptions: [
              "A clean repository on GitHub with your current code.",
              "A daily workflow you can reuse on every future client project.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create a GitHub Repository",
        titleDescription: "Make a home for your code on GitHub",
        sections: [
          {
            subtitleDescription: "On GitHub",
            descriptions: [
              "Go to github.com → click the + (top-right) → New repository.",
              "Name it e.g. 'react-ecommerce-foundation'. Add a short description.",
              "Visibility: choose Public (open learning) or Private (personal).",
              "Leave all boxes unchecked: DO NOT initialize with README, .gitignore, or License. We’ll add them locally to avoid conflicts.",
            ],
          },
          {
            subtitleDescription: "Keep this tab open",
            descriptions: [
              "GitHub shows connection commands (remote add / push). You’ll use them in a later step.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Initialize Git Locally (Root of Project)",
        titleDescription: "Turn your folder into a Git repository",
        sections: [
          {
            subtitleDescription: "In your terminal (root: ecom/)",
            descriptions: [
              "Run: git init",
              "This creates a hidden .git folder—Git now tracks your files and changes.",
              "Tip: if you accidentally ran git init inside client or server, remove those .git folders so only the root is a repo.",
            ],
          },
          {
            subtitleDescription: "Optional: set your user (once per machine)",
            descriptions: [
              'git config --global user.name "Your Name"',
              'git config --global user.email "you@example.com"',
              "These identify your commits on GitHub.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add .gitignore (and friends) the Right Way",
        titleDescription: "Keep secrets & noise out of your repo",
        sections: [
          {
            subtitleDescription: "Create a .gitignore at the project root",
            descriptions: [
              "Add entries to ignore heavy, generated, and secret files:",
              "node_modules/",
              "client/node_modules/",
              "server/node_modules/",
              "dist/",
              "build/",
              "client/dist/",
              "client/build/",
              "coverage/",
              "*.log",
              ".DS_Store",
              ".env",
              "server/.env",
              "client/.env",
            ],
          },
          {
            subtitleDescription: "Why this matters",
            descriptions: [
              "Prevents pushing secrets (API keys, DB URIs) and reduces repo size.",
              "Keeps your commit history clean and focused on source code.",
            ],
          },
          {
            subtitleDescription: "Already committed something by mistake?",
            descriptions: [
              "Remove it from Git history (but keep locally):",
              "git rm -r --cached node_modules",
              "git rm --cached .env",
              "Then commit again.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Make Your First Commit",
        titleDescription: "Snapshot your current, clean state",
        sections: [
          {
            subtitleDescription: "Stage and commit",
            descriptions: [
              "git add . ← stage everything that isn’t ignored",
              'git commit -m "chore: initial project setup (root, client, server)"',
              "Tip: Use conventional messages (feat, fix, chore, docs, refactor) so history reads like a story.",
            ],
          },
          {
            subtitleDescription: "VS Code users",
            descriptions: [
              "You can stage/commit via the Source Control panel too—same result.",
              "Ensure the root folder is the one with the git icon (not /client or /server).",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Connect Local Repo → GitHub",
        titleDescription: "Add remote and push your code",
        sections: [
          {
            subtitleDescription: "Run the three commands GitHub showed you",
            descriptions: [
              "git remote add origin https://github.com/<your-username>/<your-repo>.git",
              "git branch -M main",
              "git push -u origin main",
              "The -u flag sets upstream so future git push needs no extra args.",
            ],
          },
          {
            subtitleDescription: "Troubleshooting",
            descriptions: [
              "Remote already exists? git remote -v to inspect; replace with:",
              "git remote set-url origin https://github.com/<your-username>/<your-repo>.git",
              "Auth issues on Windows? Install & sign in via GitHub Desktop or run:",
              "git config --global credential.helper manager",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Verify Online + Understand the Layout",
        titleDescription: "Check your repository on github.com",
        sections: [
          {
            subtitleDescription: "Refresh your repo page",
            descriptions: [
              "You should see: client/, server/, package.json (root), and your configs.",
              "If client/ or server/ are missing, you probably pushed from the wrong folder—re-init at root and push again.",
            ],
          },
          {
            subtitleDescription: "Know your upstream",
            descriptions: [
              "git remote -v shows your origin.",
              "git status shows branch and staged changes.",
              'From now on: git add . → git commit -m "..." → git push.',
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 8: Protect main & Plan Branching (Optional but Recommended)",
        titleDescription: "Keep production safe and work cleanly",
        sections: [
          {
            subtitleDescription: "Protect main",
            descriptions: [
              "Repo → Settings → Branches → Add rule → Protect main.",
              "Require pull requests before merging; block direct pushes to main.",
            ],
          },
          {
            subtitleDescription: "Suggested branch model",
            descriptions: [
              "main → always deployable/stable.",
              "dev → integration branch for features.",
              "feature/<short-name> → e.g. feature/auth, feature/payments.",
              "Create and push dev now:",
              "git checkout -b dev → git push -u origin dev",
            ],
          },
          {
            subtitleDescription: "Working via PRs",
            descriptions: [
              "Create feature branch → commit → push → open Pull Request into dev or main.",
              "Review, merge, and keep history clean.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Daily Workflow + Fix-It Cheats",
        titleDescription: "What you’ll do every day (and how to escape traps)",
        sections: [
          {
            subtitleDescription: "Your daily loop",
            descriptions: [
              "git pull (sync with remote)",
              "Code, test, and run the app.",
              'git add . → git commit -m "feat: X" → git push',
            ],
          },
          {
            subtitleDescription: "Common fixes",
            descriptions: [
              "Forgot to pull first? Run git pull then resolve conflicts.",
              "Quickly save local work without committing: git stash → later git stash pop.",
              "Accidentally tracked a secret? git rm --cached .env then commit. Rotate the leaked key immediately.",
            ],
          },
          {
            subtitleDescription: "Monorepo tip",
            descriptions: [
              "Keep Git commands at the root so client/ and server/ always stay in the same commit snapshot.",
              "If you MUST make separate repos later, use Git submodules (advanced).",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["Ecommerce Projects"],
    completed: false,
    codesandboxUrl: "/notavailable",
img: ecom2,    videoLink: "",
  },
  {
    taskId: "ecom3",
    taskTitle: "Connecting Your Fullstack E-Commerce Project to MongoDB Atlas",
    introduction:
      "In this task, you’ll set up a cloud-hosted MongoDB Atlas database and connect it to your Express backend using Mongoose. This ensures your project has a secure, scalable, and production-ready database. We’ll cover account creation, cluster setup, database user management, environment variables, and backend integration step by step.",
    steps: [
      {
        stepTitle: "Step 1: Create a MongoDB Atlas Account",
        titleDescription:
          "Set up your free MongoDB Atlas account to host your database in the cloud.",
        sections: [
          {
            subtitleDescription: "Why MongoDB Atlas?",
            descriptions: [
              "MongoDB Atlas is a cloud-hosted database service. It allows you to create clusters, manage data, and scale easily without installing MongoDB locally.",
              "It is secure, production-ready, and widely used in real-world MERN stack applications.",
              "Using a cloud database ensures that your backend can always access data from anywhere.",
            ],
          },
          {
            subtitleDescription: "Sign Up & Initial Setup",
            descriptions: [
              "Go to https://www.mongodb.com/atlas and click **Start Free**.",
              "Sign up using Google, GitHub, or email.",
              "Once signed in, create a new project and give it a clear name, e.g., 'E-Commerce Project'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create a Cluster",
        titleDescription:
          "Clusters are where your databases live in MongoDB Atlas.",
        sections: [
          {
            subtitleDescription: "Choose Cluster Options",
            descriptions: [
              "Select the Free Tier (M0) for development purposes.",
              "Pick a cloud provider (AWS is recommended for beginners).",
              "Select a region closest to you to improve performance.",
            ],
          },
          {
            subtitleDescription: "Cluster Creation",
            descriptions: [
              "Name your cluster (e.g., 'EcomCluster').",
              "Click **Create Cluster** and wait a few minutes for it to initialize.",
              "Clusters can host multiple databases, so you can add more later if needed.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add a Database User",
        titleDescription:
          "MongoDB requires authentication to connect securely.",
        sections: [
          {
            subtitleDescription: "Why a Separate User?",
            descriptions: [
              "Instead of using your main account, create a dedicated database user.",
              "This protects your main credentials and adds a security layer.",
            ],
          },
          {
            subtitleDescription: "Creating the User",
            descriptions: [
              "Go to **Database Access** → **Add New Database User**.",
              "Set a username (e.g., 'ecomUser') and a strong password.",
              "Give the user appropriate roles (start with read/write access for development).",
              "Save the credentials securely; you will need them in the connection string.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Whitelist Your IP Address",
        titleDescription:
          "Only allow trusted IP addresses to access your database.",
        sections: [
          {
            subtitleDescription: "Understanding IP Whitelisting",
            descriptions: [
              "MongoDB Atlas blocks all connections unless the IP is explicitly allowed.",
              "This prevents unauthorized access and potential security breaches.",
            ],
          },
          {
            subtitleDescription: "Adding IP",
            descriptions: [
              "Go to **Network Access** → **Add IP Address**.",
              "For development, select 'Allow Access from Anywhere (0.0.0.0/0)'.",
              "For production, only add specific trusted IP addresses.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Get Your Connection String",
        titleDescription:
          "The connection string (URI) allows your backend to communicate with MongoDB Atlas.",
        sections: [
          {
            subtitleDescription: "Retrieve URI",
            descriptions: [
              "Go to **Clusters** → **Connect** → **Connect your application**.",
              "Select Node.js driver and version 4.0 or later.",
              "Copy the generated connection string; it will contain placeholders for your password and database name.",
            ],
          },
          {
            subtitleDescription: "Modify the URI",
            descriptions: [
              "Replace `<password>` with your database user password.",
              "Replace `<dbname>` with your chosen database name (e.g., 'ecommerceDB').",
              "This URI will be used in your backend to establish the database connection.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Store Connection String in .env",
        titleDescription:
          "Keep credentials secure by using environment variables.",
        sections: [
          {
            subtitleDescription: "Why Use .env?",
            descriptions: [
              "Never hardcode sensitive credentials into your code.",
              "Environment variables allow flexibility between development, staging, and production.",
              "They also prevent accidental exposure when pushing code to GitHub.",
            ],
          },
          {
            subtitleDescription: "How to Configure",
            descriptions: [
              "Install dotenv: `npm install dotenv`.",
              "Create a `.env` file in your backend root directory.",
              "Add your connection string: `MONGO_URI=your_connection_string_here`.",
              "Add `.env` to `.gitignore` to keep it out of version control.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Prepare Backend for Mongoose",
        titleDescription:
          "Mongoose simplifies interactions with MongoDB using models and schemas.",
        sections: [
          {
            subtitleDescription: "Install Mongoose",
            descriptions: [
              "Run `npm install mongoose` in your backend folder.",
              "This library provides a structured way to handle data and collections.",
            ],
          },
          {
            subtitleDescription: "Create Connection File",
            descriptions: [
              "Inside `config` folder, create a `db.js` file.",
              "You will import this file in `server.js` to connect your backend to MongoDB.",
              "Full code you can find below by pressing the **Cheatsheet** button.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Connect MongoDB in Server",
        titleDescription:
          "Initialize the database connection when starting the server.",
        sections: [
          {
            subtitleDescription: "Integrate Connection",
            descriptions: [
              "Import your connection file in `server.js`.",
              "Call the connection function before starting the server with `app.listen()`.",
              "This ensures the server only starts if the database is connected successfully.",
            ],
          },
          {
            subtitleDescription: "Verify Connection",
            descriptions: [
              "Run `npm run dev` or `node server.js`.",
              "Check the console for a success message indicating the database connection is working.",
              "If errors occur, double-check your URI, password, and IP whitelist.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Access All Code via Cheatsheet",
        titleDescription:
          "All code snippets used in this lesson are available for easy copy & paste.",
        sections: [
          {
            subtitleDescription: "Cheatsheet Button",
            descriptions: [
              "Press the **Cheatsheet** button below to see all necessary code for this lesson.",
              "You’ll find connection setup, models, and any backend integration code.",
              "This ensures you can quickly implement features without worrying about syntax or typos.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Easy",
    authorIndex: 0,
    prerequisites: ["Ecommerce Projects"],
    completed: false,
    codesandboxUrl: "/notavailable",
img: ecom3,    videoLink: "",
  },
  {
    taskId: "ecom4",
    taskTitle: "Create a User Schema",
    introduction:
      "Design and implement a Mongoose User schema, including embedded address sub-documents, password hashing, and order history references.",
    steps: [
      {
        stepTitle: "Step 1: Plan the Schema Design",
        titleDescription:
          "Define the structure and relationships for the User schema.",
        sections: [
          {
            subtitleDescription: "Identify the Entity",
            descriptions: [
              "The main entity is User, representing customers or admins in the e-commerce platform.",
            ],
          },
          {
            subtitleDescription: "Structure and Relationships",
            descriptions: [
              "Include core user details: name, email, password, and role.",
              "Embed an array of addresses for shipping or billing.",
              "Reference order history via an external Order model.",
            ],
          },
          {
            subtitleDescription: "Fields for User Schema",
            descriptions: [
              "name: Required string, trimmed.",
              "email: Required, unique, lowercase string, indexed.",
              "password: Required string, hidden by default.",
              "role: String ('user' or 'admin'), defaults to 'user'.",
              "addresses: Array of embedded address sub-documents.",
              "orderHistory: Array of ObjectIds referencing Order documents.",
            ],
          },
          {
            subtitleDescription: "Fields for AddressSchema",
            descriptions: [
              "label: String, defaults to 'home'.",
              "fullName: Required string for recipient.",
              "street, city, country: Required strings.",
              "state, postalCode, phone: Optional strings.",
            ],
          },
          {
            subtitleDescription: "Additional Features",
            descriptions: [
              "Automatic password hashing before saving.",
              "Method to compare passwords for authentication.",
              "Timestamps for creation and update tracking.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create a Models Folder",
        titleDescription:
          "Set up the project structure for schema definitions.",
        sections: [
          {
            subtitleDescription: "Organize the Project",
            descriptions: [
              "Create a 'models' folder in the e-commerce backend directory.",
              "Add a 'User.js' file inside the models folder for the User schema.",
              "Keep schemas separate from other models like Order or Product.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add ESLint Directive",
        titleDescription: "Prevent ESLint warnings for imported modules.",
        sections: [
          {
            subtitleDescription: "Configure ESLint",
            descriptions: [
              "Add '/* eslint-disable no-undef */' at the top of User.js.",
              "This disables warnings for undefined variables like mongoose and bcrypt.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Import Required Modules",
        titleDescription: "Bring in necessary libraries for schema creation.",
        sections: [
          {
            subtitleDescription: "Import Libraries",
            descriptions: [
              "Import mongoose for schema and model definitions.",
              "Import bcrypt for secure password hashing.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Define the Address Sub-Schema",
        titleDescription:
          "Create the embedded AddressSchema for user addresses.",
        sections: [
          {
            subtitleDescription: "Address Schema Fields",
            descriptions: [
              "Use mongoose.Schema to define AddressSchema.",
              "Fields: label (String, default 'home'), fullName (String, required), street (String, required), city (String, required), country (String, required).",
              "Optional fields: state (String), postalCode (String), phone (String).",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Set '_id: false' to prevent generating an _id for each address.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Define the User Schema",
        titleDescription:
          "Create the main User schema with all fields and options.",
        sections: [
          {
            subtitleDescription: "User Schema Fields",
            descriptions: [
              "Create userSchema with mongoose.Schema.",
              "Fields: name (String, required, trimmed), email (String, required, unique, lowercase, indexed), password (String, required, select: false).",
              "role: String, enum ['user', 'admin'], default 'user'.",
              "addresses: Array of AddressSchema.",
              "orderHistory: Array of ObjectIds, ref: 'Order'.",
            ],
          },
          {
            subtitleDescription: "Schema Option",

            descriptions: [
              "Add '{ timestamps: true }' for automatic createdAt and updatedAt fields.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Add Password Hashing Middleware",
        titleDescription: "Secure the password before saving the user.",
        sections: [
          {
            subtitleDescription: "Pre-Save Middleware",
            descriptions: [
              "Add pre('save') middleware to userSchema.",
              "Check if password is modified using this.isModified('password').",
              "Get salt rounds from process.env.BCRYPT_SALT_ROUNDS (default 10).",
              "Hash password with bcrypt.hash and store in this.password.",
              "Call next() to proceed with saving.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Add Password Comparison Method",
        titleDescription: "Enable password verification for authentication.",
        sections: [
          {
            subtitleDescription: "Custom Method",
            descriptions: [
              "Add comparePassword method to userSchema using userSchema.methods.",
              "Take a candidate password as an argument.",
              "Use bcrypt.compare to compare candidate password with stored hash.",
              "Return boolean result of the comparison.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Compile and Export the User Model",
        titleDescription: "Finalize and export the User model.",
        sections: [
          {
            subtitleDescription: "Model Creation",
            descriptions: [
              "Compile userSchema into a Mongoose model named 'User'.",
              "Export the model using 'export default' for use in other project files.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: ["Mongoose", "Node.js", "Ecommerce Projects"],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/jp9hkk?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom4,    videoLink: "",
  },
  {
    taskId: "ecom5",
    taskTitle: "Create Product and Order Schemas for an E-commerce Platform",
    introduction:
      "Design and implement Mongoose schemas for Product and Order entities, including embedded sub-schemas, text indexing, and references for an e-commerce platform.",
    steps: [
      {
        stepTitle: "Step 1: Plan the Schema Design",
        titleDescription:
          "Define the structure and relationships for Product and Order schemas.",
        sections: [
          {
            subtitleDescription: "Identify the Entities",
            descriptions: [
              "Product: Represents items for sale.",
              "Order: Represents customer purchases.",
            ],
          },
          {
            subtitleDescription: "Structure and Relationships for Product",
            descriptions: [
              "Include product details: name, price, stock.",
              "Embed RatingSchema for user reviews.",
              "Add text index for search functionality.",
              "Include averageRating and numReviews for rating summaries.",
            ],
          },
          {
            subtitleDescription: "Fields for Product Schema",
            descriptions: [
              "name: Required string, indexed.",
              "description: Required string.",
              "price: Required number, minimum 0.",
              "stock: Required number, minimum 0, default 0.",
              "category: String, indexed.",
              "images: Array of strings for image URLs.",
              "ratings: Array of RatingSchema sub-documents.",
              "averageRating: Number, default 0.",
              "numReviews: Number, default 0.",
            ],
          },
          {
            subtitleDescription: "Fields for RatingSchema",
            descriptions: [
              "user: Reference to User model via ObjectId.",
              "rating: Required number, between 1 and 5.",
              "comment: Optional string for review text.",
              "createdAt: Date, default current timestamp.",
            ],
          },
          {
            subtitleDescription: "Structure and Relationships for Order",
            descriptions: [
              "Include user details, order items, shipping address, and payment info.",
              "Embed OrderItemSchema for purchased products.",
              "Reference User and Product models.",
            ],
          },
          {
            subtitleDescription: "Fields for Order Schema",
            descriptions: [
              "user: Required reference to User, indexed.",
              "items: Array of OrderItemSchema sub-documents.",
              "shippingAddress: Embedded object with address fields.",
              "totalAmount: Required number for order total.",
              "status: String, enum ['pending', 'paid', 'shipped', 'delivered', 'canceled'], default 'pending', indexed.",
              "paymentMethod: String, enum ['stripe', 'paypal', 'cod'].",
              "paymentStatus: String, enum ['pending', 'paid', 'failed'], default 'pending'.",
              "paidAt: Date for payment timestamp.",
            ],
          },
          {
            subtitleDescription: "Fields for OrderItemSchema",
            descriptions: [
              "productId: Reference to Product via ObjectId.",
              "name: String for product name.",
              "image: String for product image URL.",
              "price: Number for product price.",
              "quantity: Number for quantity ordered.",
            ],
          },
          {
            subtitleDescription: "Additional Features",
            descriptions: [
              "Include timestamps for both schemas.",
              "Add text index on Product for search.",
              "Add createdAt index on Order for sorting.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create a Models Folder",
        titleDescription:
          "Organize schema definitions in the project structure.",
        sections: [
          {
            subtitleDescription: "Set Up Models Folder",
            descriptions: [
              "Ensure a 'models' folder exists in the e-commerce backend directory.",
              "Create 'Product.js' for the Product schema.",
              "Create 'Order.js' for the Order schema.",
              "Keep schemas modular and separate from other models (e.g., User).",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Import Mongoose in Both Files",
        titleDescription: "Set up Mongoose for schema and model creation.",
        sections: [
          {
            subtitleDescription: "Import Mongoose",
            descriptions: [
              "In Product.js, import mongoose for schema definitions.",
              "In Order.js, import mongoose for schema definitions.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Define the Rating Sub-Schema in Product.js",
        titleDescription:
          "Create the embedded RatingSchema for product reviews.",
        sections: [
          {
            subtitleDescription: "Rating Schema Fields",
            descriptions: [
              "Use mongoose.Schema to define RatingSchema.",
              "Fields: user (ObjectId, ref: 'User'), rating (Number, required, min 1, max 5).",
              "comment: String, optional.",
              "createdAt: Date, default Date.now.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Use default _id: true to generate an _id for each rating.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Define the Product Schema",
        titleDescription: "Create the main Product schema with all fields.",
        sections: [
          {
            subtitleDescription: "Product Schema Fields",
            descriptions: [
              "Create productSchema with mongoose.Schema.",
              "Fields: name (String, required, indexed), description (String, required), price (Number, required, min 0).",
              "stock: Number, required, min 0, default 0.",
              "category: String, indexed.",
              "images: Array of String for image URLs.",
              "ratings: Array of RatingSchema.",
              "averageRating: Number, default 0.",
              "numReviews: Number, default 0.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Add '{ timestamps: true }' for createdAt and updatedAt fields.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Text Index for Product Search",
        titleDescription: "Enable full-text search for Product schema.",
        sections: [
          {
            subtitleDescription: "Text Index",
            descriptions: [
              "Add text index to productSchema on name, description, and category fields.",
              "Use index method for full-text search functionality.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Compile and Export the Product Model",
        titleDescription: "Finalize and export the Product model.",
        sections: [
          {
            subtitleDescription: "Model Creation",
            descriptions: [
              "Compile productSchema into a Mongoose model named 'Product'.",
              "Export the model using 'export default'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Define the Order Item Sub-Schema in Order.js",
        titleDescription:
          "Create the embedded OrderItemSchema for order items.",
        sections: [
          {
            subtitleDescription: "Order Item Schema Fields",
            descriptions: [
              "Use mongoose.Schema to define OrderItemSchema.",
              "Fields: productId (ObjectId, ref: 'Product'), name (String), image (String).",
              "price: Number, quantity: Number.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Set '_id: false' to avoid generating _id for order items.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Define the Order Schema",
        titleDescription: "Create the main Order schema with all fields.",
        sections: [
          {
            subtitleDescription: "Order Schema Fields",
            descriptions: [
              "Create orderSchema with mongoose.Schema.",
              "Fields: user (ObjectId, ref: 'User', required, indexed), items (Array of OrderItemSchema).",
              "shippingAddress: Embedded object with fullName, street, city, state, postalCode, country, phone (all Strings).",
              "totalAmount: Number, required.",
              "status: String, enum ['pending', 'paid', 'shipped', 'delivered', 'canceled'], default 'pending', indexed.",
              "paymentMethod: String, enum ['stripe', 'paypal', 'cod'].",
              "paymentStatus: String, enum ['pending', 'paid', 'failed'], default 'pending'.",
              "paidAt: Date.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Add '{ timestamps: true }' for createdAt and updatedAt fields.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Add Index for Order Sorting",
        titleDescription: "Enable efficient sorting for Order schema.",
        sections: [
          {
            subtitleDescription: "CreatedAt Index",
            descriptions: [
              "Add index to orderSchema on createdAt field with value 1 (ascending).",
              "Use index method for efficient sorting.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Compile and Export the Order Model",
        titleDescription: "Finalize and export the Order model.",
        sections: [
          {
            subtitleDescription: "Model Creation",
            descriptions: [
              "Compile orderSchema into a Mongoose model named 'Order'.",
              "Export the model using 'export default'.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: ["Mongoose", "Node.js", "Ecommerce Projects"],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/64pzky?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom5,    videoLink: "",
  },
  {
    taskId: "ecom6",
    taskTitle: "Create a Cart Schema ",
    introduction:
      "Design and implement a Mongoose Cart schema to manage a user’s shopping cart, including embedded cart items and manual timestamp updates.",
    steps: [
      {
        stepTitle: "Step 1: Plan the Schema Design",
        titleDescription:
          "Define the structure and relationships for the Cart schema.",
        sections: [
          {
            subtitleDescription: "Identify the Entity",
            descriptions: [
              "The main entity is Cart, representing a user’s shopping cart in the e-commerce platform.",
            ],
          },
          {
            subtitleDescription: "Structure and Relationships",
            descriptions: [
              "Store a user reference and a list of cart items.",
              "Embed CartItemSchema as an array for product details.",
              "Each cart is unique to a user, with a reference to the User model and an index for queries.",
            ],
          },
          {
            subtitleDescription: "Fields for Cart Schema",
            descriptions: [
              "user: Required ObjectId referencing User, unique and indexed.",
              "items: Array of CartItemSchema sub-documents.",
              "updatedAt: Date, default current timestamp.",
            ],
          },
          {
            subtitleDescription: "Fields for CartItemSchema",
            descriptions: [
              "productId: ObjectId referencing Product model.",
              "quantity: Required number, minimum 1.",
              "addedAt: Date, default current timestamp.",
            ],
          },
          {
            subtitleDescription: "Additional Features",
            descriptions: [
              "Pre-save middleware to update the updatedAt field.",
              "No automatic timestamps; updatedAt is manually managed, and createdAt is omitted.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create a Models Folder",
        titleDescription:
          "Organize schema definitions in the project structure.",
        sections: [
          {
            subtitleDescription: "Set Up Models Folder",
            descriptions: [
              "Ensure a 'models' folder exists in the e-commerce backend directory.",
              "Create 'Cart.js' inside the models folder for the Cart schema.",
              "Keep the schema modular alongside User, Product, and Order models.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Import Mongoose",
        titleDescription: "Set up Mongoose for schema and model creation.",
        sections: [
          {
            subtitleDescription: "Import Mongoose",
            descriptions: [
              "In Cart.js, import mongoose to define CartItemSchema and cartSchema.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Define the Cart Item Sub-Schema",
        titleDescription: "Create the embedded CartItemSchema for cart items.",
        sections: [
          {
            subtitleDescription: "Cart Item Schema Fields",
            descriptions: [
              "Use mongoose.Schema to define CartItemSchema.",
              "Fields: productId (ObjectId, ref: 'Product'), quantity (Number, required, min 1).",
              "addedAt: Date, default Date.now.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Set '_id: false' to prevent generating _id for cart items.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Define the Cart Schema",
        titleDescription: "Create the main Cart schema with all fields.",
        sections: [
          {
            subtitleDescription: "Cart Schema Fields",
            descriptions: [
              "Create cartSchema with mongoose.Schema.",
              "Fields: user (ObjectId, ref: 'User', required, unique, indexed).",
              "items: Array of CartItemSchema.",
              "updatedAt: Date, default Date.now.",
            ],
          },
          {
            subtitleDescription: "Schema Option",
            descriptions: [
              "Omit '{ timestamps: true }' to manually manage updatedAt without createdAt.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Pre-Save Middleware",
        titleDescription: "Update the updatedAt field before saving the cart.",
        sections: [
          {
            subtitleDescription: "Pre-Save Middleware",
            descriptions: [
              "Add pre('save') middleware to cartSchema.",
              "Set this.updatedAt to Date.now().",
              "Call next() to proceed with the save operation.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Compile and Export the Cart Model",
        titleDescription: "Finalize and export the Cart model.",
        sections: [
          {
            subtitleDescription: "Model Creation",
            descriptions: [
              "Compile cartSchema into a Mongoose model named 'Cart'.",
              "Export the model using 'export default'.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: ["Mongoose", "Node.js", "Ecommerce Projects"],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/ydpnqw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom6,    videoLink: "",
  },
  {
    taskId: "ecom7",
    taskTitle: "Build a User Registration Endpoint with JWT Authentication",
    introduction:
      "In this task, you will create a user registration endpoint using Node.js, Express, and MongoDB with Mongoose. You’ll learn to validate user input, check for duplicate emails, create a user, generate JSON Web Tokens (JWTs) for secure authentication, store a refresh token in a cookie, and return an access token with user details. This step-by-step guide is designed to help you build a secure authentication system for an e-commerce platform.",
    steps: [
      {
        stepTitle: "Step 1: Understand the Authentication Requirements",
        titleDescription:
          "Learn the purpose and components of the user registration endpoint.",
        sections: [
          {
            subtitleDescription: "Identify the Goal",
            descriptions: [
              "Create an endpoint to register users with name, email, password, and optional addresses.",
              "Generate JWTs: an access token for API requests and a refresh token for session renewal.",
              "Use a User model with fields: _id, name, email, password, role, and addresses.",
            ],
          },
          {
            subtitleDescription: "Plan Input Handling",
            descriptions: [
              "Require name, email, and password in the request body.",
              "Allow addresses as an optional array, defaulting to empty if not provided.",
              "Validate inputs to ensure they are present before processing.",
            ],
          },
          {
            subtitleDescription: "Plan Token and Cookie Logic",
            descriptions: [
              "Generate an access token with user ID and role, expiring in 15 minutes.",
              "Generate a refresh token with user ID, expiring in 7 days.",
              "Store the refresh token in a secure HTTP-only cookie.",
            ],
          },
          {
            subtitleDescription: "Plan Security and Response",
            descriptions: [
              "Use separate secrets for signing access and refresh tokens.",
              "Return a JSON response with the access token and user details (id, name, email, role, addresses).",
              "Handle errors by passing them to an Express error middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Set Up the Project Environment",
        titleDescription: "Prepare the project structure and dependencies.",
        sections: [
          {
            subtitleDescription: "Organize Project Folders",
            descriptions: [
              "Create a 'controllers' folder in the project root for authentication logic.",
              "Ensure a 'models' folder exists with a 'User.js' file for the User model.",
              "Add an 'auth.js' file in 'controllers' to hold registration logic.",
            ],
          },
          {
            subtitleDescription: "Install Required Packages",
            descriptions: [
              "Run 'npm install jsonwebtoken' to install the JWT library.",
              "Ensure 'dotenv' is installed with 'npm install dotenv' for environment variables.",
              "Verify that Express and Mongoose are already installed in the project.",
            ],
          },
          {
            subtitleDescription: "Check Project Setup",
            descriptions: [
              "Confirm the User model has fields: _id, name, email, password, role, addresses.",
              "Ensure the User model includes password hashing (e.g., via bcrypt).",
              "Plan to connect 'auth.js' to an Express router later.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Configure Environment Variables",
        titleDescription:
          "Set up secure environment variables for JWT signing.",
        sections: [
          {
            subtitleDescription: "Create .env File",
            descriptions: [
              "In the project root, create a '.env' file for environment variables.",
              "Add JWT_SECRET and JWT_REFRESH_SECRET with unique, strong values.",
              "Set NODE_ENV to 'development' or 'production' for cookie settings.",
            ],
          },
          {
            subtitleDescription: "Secure and Load Variables",
            descriptions: [
              "Generate secrets using a secure method (e.g., a password generator).",
              "Use 'dotenv' to load variables in the main app file (e.g., index.js).",
              "Add '.env' to '.gitignore' to prevent exposing secrets.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Import Libraries and Models",
        titleDescription: "Add necessary imports to the auth.js file.",
        sections: [
          {
            subtitleDescription: "Import Required Modules",
            descriptions: [
              "In 'controllers/auth.js', import the jsonwebtoken library.",
              "Import the User model from '../models/User.js'.",
              "Check that the import paths match your project structure.",
            ],
          },
          {
            subtitleDescription: "Support Module Systems",
            descriptions: [
              "Use ES module syntax ('import') for modern Node.js projects.",
              "If using CommonJS, use 'require' for jsonwebtoken and User model.",
              "Test imports to ensure no path or module errors occur.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Create the Token Generation Function",
        titleDescription:
          "Write a function to generate access and refresh tokens.",
        sections: [
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "Create a function named 'generateTokens' that accepts a user object.",
              "Plan to generate two tokens with different payloads and secrets.",
              "Use the jsonwebtoken library’s sign method for token creation.",
            ],
          },
          {
            subtitleDescription: "Set Up Token Payloads",
            descriptions: [
              "For access token, include user ID and role in the payload.",
              "For refresh token, include only user ID to minimize data.",
              "Set expiry times: 15 minutes for access, 7 days for refresh.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Implement Token Generation Logic",
        titleDescription: "Add logic to the token generation function.",
        sections: [
          {
            subtitleDescription: "Generate Access Token",
            descriptions: [
              "Use jwt.sign to create an access token with user ID and role.",
              "Sign with JWT_SECRET from environment variables.",
              "Set expiry to 15 minutes using expiresIn option.",
            ],
          },
          {
            subtitleDescription: "Generate Refresh Token",
            descriptions: [
              "Use jwt.sign to create a refresh token with user ID only.",
              "Sign with JWT_REFRESH_SECRET from environment variables.",
              "Set expiry to 7 days using expiresIn option.",
            ],
          },
          {
            subtitleDescription: "Return Tokens",
            descriptions: [
              "Return an object containing both accessToken and refreshToken.",
              "Ensure tokens are correctly formatted for use in the controller.",
              "Test token generation to verify payloads and expiry.",
            ],
          },
          {
            subtitleDescription: "Enhance Token Security",
            descriptions: [
              "Use separate secrets for access and refresh tokens.",
              "Keep refresh token payload minimal to reduce risk.",
              "Verify environment variables are loaded correctly.",
            ],
          },
          {
            subtitleDescription: "Prepare for Controller Use",
            descriptions: [
              "Ensure generateTokens is ready to be called in the controller.",
              "Plan to use the returned tokens for cookie and response.",
              "Check that the function handles user data correctly.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Define the Register Controller",
        titleDescription: "Set up the main registration controller function.",
        sections: [
          {
            subtitleDescription: "Create Async Function",
            descriptions: [
              "Define an async function named 'register' with req, res, next.",
              "Use async/await to handle database and token operations.",
              "Prepare to process the HTTP request body.",
            ],
          },
          {
            subtitleDescription: "Add Error Handling",
            descriptions: [
              "Wrap all logic in a try-catch block for error management.",
              "Pass errors to next() for Express error middleware.",
              "Ensure errors don’t crash the server.",
            ],
          },
          {
            subtitleDescription: "Outline Controller Steps",
            descriptions: [
              "Validate input, check for duplicates, and create a user.",
              "Generate tokens and store refresh token in a cookie.",
              "Send a response with access token and user details.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Validate Input and Check Duplicates",
        titleDescription: "Add input validation and email uniqueness check.",
        sections: [
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "Destructure name, email, password, addresses from req.body.",
              "Check that name, email, and password are provided.",
              "Return a 400 error if any required field is missing.",
            ],
          },
          {
            subtitleDescription: "Check for Existing Email",
            descriptions: [
              "Query the User model to find if the email already exists.",
              "Return a 400 error if the email is already registered.",
              "Use an efficient query to minimize database load.",
            ],
          },
          {
            subtitleDescription: "Prepare for User Creation",
            descriptions: [
              "Plan to create a new User if validation and checks pass.",
              "Set addresses to an empty array if not provided.",
              "Rely on the User model for password hashing.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Create User and Generate Tokens",
        titleDescription: "Create a new user and generate JWTs.",
        sections: [
          {
            subtitleDescription: "Create New User",
            descriptions: [
              "Instantiate a User with name, email, password, and addresses.",
              "Save the user to the database using async/await.",
              "Assume the User model handles password hashing.",
            ],
          },
          {
            subtitleDescription: "Generate Tokens",
            descriptions: [
              "Call generateTokens with the saved user object.",
              "Store the returned accessToken and refreshToken.",
              "Verify tokens match the planned payloads and expiry.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Store Cookie and Send Response",
        titleDescription:
          "Set the refresh token cookie and return the response.",
        sections: [
          {
            subtitleDescription: "Configure Refresh Token Cookie",
            descriptions: [
              "Set an HTTP-only cookie named 'refreshToken' with the refresh token.",
              "Use secure: true in production, sameSite: 'strict', and 7-day maxAge.",
              "Ensure cookie settings prevent client-side access.",
            ],
          },
          {
            subtitleDescription: "Send Response and Export",
            descriptions: [
              "Return a 201 response with accessToken and user details.",
              "Include user fields: id, name, email, role, addresses.",
              "Export the register function for use in an Express router.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/xlt4w8?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom7,    videoLink: "",
  },
  {
    taskId: "ecom8",
    taskTitle: "Add Authentication Routes and Server Enhancements",
    introduction:
      "In this task, you will update an e-commerce backend server to add authentication routes, handle form data, and manage errors. You’ll create a routes file for user registration, test it with Thunder Client, and learn to set up secure JWT secrets. Follow these steps to build a secure authentication system.",
    steps: [
      {
        stepTitle: "Step 1: Set Up Environment Variables",
        titleDescription:
          "Configure environment variables for the server and JWT.",
        sections: [
          {
            subtitleDescription: "Create .env File",
            descriptions: [
              "Make a .env file in the server folder.",
              "Set a port number for the server.",
              "Add a MongoDB connection string.",
            ],
          },
          {
            subtitleDescription: "Add JWT Secrets",
            descriptions: [
              "Add a secret for access token signing.",
              "Add a different secret for refresh token signing.",
              "Ensure secrets are unique and secure.",
            ],
          },
          {
            subtitleDescription: "Generate JWT Secret Key",
            descriptions: [
              "Run a Node.js command to generate a random secret key ( openssl rand -base64 32 ).",
              "Use the generated key for the access token secret.",
              "Generate another key for the refresh token secret.",
            ],
          },
          {
            subtitleDescription: "Load Environment Variables",
            descriptions: [
              "Import the dotenv package in server.js.",
              "Load the .env file at the start of server.js.",
              "Place this before other server setup tasks.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add Middleware to Server",
        titleDescription: "Update the server with middleware for requests.",
        sections: [
          {
            subtitleDescription: "Handle Form Data",
            descriptions: [
              "Add middleware to parse URL-encoded form data.",
              "Place it after JSON parsing middleware.",
              "Enable support for complex form data.",
            ],
          },
          {
            subtitleDescription: "Enable CORS",
            descriptions: [
              "Add middleware to allow frontend requests.",
              "Set the frontend origin to localhost:3000.",
              "Place it before route definitions.",
            ],
          },
          {
            subtitleDescription: "Log Requests",
            descriptions: [
              "Add middleware to log HTTP requests.",
              "Use a development logging format.",
              "Place it at the top of middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create Authentication Routes File",
        titleDescription: "Set up a file for authentication routes.",
        sections: [
          {
            subtitleDescription: "Create Routes File",
            descriptions: [
              "Make a routes folder in the server directory.",
              "Create an authRoutes.js file in the routes folder.",
              "Set up an Express router in the file.",
            ],
          },
          {
            subtitleDescription: "Add Register Route",
            descriptions: [
              "Create a POST route for user registration.",
              "Use the register function from the auth controller.",
              "Export the router from the file.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Import Libraries and Models",
        titleDescription: "Add imports to server.js and authRoutes.js.",
        sections: [
          {
            subtitleDescription: "Update Server Imports",
            descriptions: [
              "Import the authentication routes in server.js.",
              "Keep existing imports for express and other libraries.",
              "Add imports at the top of server.js.",
            ],
          },
          {
            subtitleDescription: "Add Route Imports",
            descriptions: [
              "Import Express in authRoutes.js for the router.",
              "Import the register function from the auth controller.",
              "Place imports at the start of authRoutes.js.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Connect Authentication Routes",
        titleDescription: "Link the authentication routes to the server.",
        sections: [
          {
            subtitleDescription: "Mount Routes",
            descriptions: [
              "Add the authentication routes to server.js.",
              "Use a prefix like /api/auth for the routes.",
              "Place the route setup after middleware.",
            ],
          },
          {
            subtitleDescription: "Start the Server",
            descriptions: [
              "Run the server to test the setup.",
              "Check for a console message showing the port.",
              "Ensure no errors occur on startup.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Error Handling",
        titleDescription: "Set up error handling in server.js.",
        sections: [
          {
            subtitleDescription: "Create Error Handler",
            descriptions: [
              "Add a function to handle server errors.",
              "Log errors to the console for debugging.",
              "Send a generic error message to the client.",
            ],
          },
          {
            subtitleDescription: "Place Error Handler",
            descriptions: [
              "Add the error handler after all routes.",
              "Ensure it catches errors from the register route.",
              "Keep it at the end of server.js.",
            ],
          },
          {
            subtitleDescription: "Log Error Details",
            descriptions: [
              "Log the full error stack for debugging.",
              "Use a 500 status code for errors.",
              "Include a simple error message in the response.",
            ],
          },
          {
            subtitleDescription: "Test Error Handling",
            descriptions: [
              "Send an invalid request to the register route.",
              "Check for an error message in the response.",
              "Confirm the error is logged in the console.",
            ],
          },
          {
            subtitleDescription: "Ensure Server Stability",
            descriptions: [
              "Test that errors don’t crash the server.",
              "Send a valid request to confirm functionality.",
              "Check that other routes work correctly.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test Registration Endpoint",
        titleDescription: "Test the registration endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Set Up Thunder Client",
            descriptions: [
              "Open Thunder Client in VS Code.",
              "Create a POST request for the register endpoint.",
              "Set the request body to use JSON format.",
            ],
          },
          {
            subtitleDescription: "Test Registration",
            descriptions: [
              "Send a request with name, email, and password.",
              "Check for a success response with a token.",
              "Verify user details in the response.",
            ],
          },
          {
            subtitleDescription: "Check Refresh Token",
            descriptions: [
              "Look for a refresh token cookie in the response.",
              "Confirm the cookie has a 7-day expiry.",
              "Test an invalid request to see error handling.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/pfk598?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom8,    videoLink: "",
  },
  {
    taskId: "ecom9",
    taskTitle: "Build a User Login Endpoint with JWT Authentication",
    introduction:
      "In this task, you will create a user login endpoint for an e-commerce backend using Node.js, Express, and MongoDB with Mongoose. You’ll validate user credentials, compare passwords with bcrypt, generate JWTs, store a refresh token in a cookie, and test the endpoint with Thunder Client. This builds on the existing registration endpoint.",
    steps: [
      {
        stepTitle: "Step 1: Create the Login Controller Function",
        titleDescription:
          "Add a login function to handle user authentication in authController.js.",
        sections: [
          {
            subtitleDescription: "Set Up the Function",
            descriptions: [
              "Add a new async function named 'login' in server/controllers/authController.js.",
              "Use req, res, next as parameters for the function.",
              "Wrap the logic in a try-catch block to handle errors.",
            ],
          },
          {
            subtitleDescription: "Validate Input",
            descriptions: [
              "Destructure email and password from req.body.",
              "Check if email and password are provided.",
              "Return a 400 error with a message if either is missing.",
            ],
          },
          {
            subtitleDescription: "Check User Credentials",
            descriptions: [
              "Query the User model with findOne({ email }).select('+password').",
              "Use the comparePassword method to verify the password.",
              "Return a 401 error with 'Invalid credentials' if user or password is incorrect.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Generate Tokens and Set Cookie",
        titleDescription:
          "Generate JWTs and store the refresh token in a cookie.",
        sections: [
          {
            subtitleDescription: "Generate Tokens",
            descriptions: [
              "Call the existing generateTokens function with the user object.",
              "Get accessToken (15 minutes) and refreshToken (7 days) from the function.",
            ],
          },
          {
            subtitleDescription: "Set Refresh Token Cookie",
            descriptions: [
              "Set an HTTP-only cookie named 'refreshToken' with the refresh token.",
              "Configure it with secure: true in production, sameSite: 'strict', and 7-day maxAge.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Send Login Response",
        titleDescription:
          "Return the access token and user details in the response.",
        sections: [
          {
            subtitleDescription: "Build Response",
            descriptions: [
              "Send a 200 response with accessToken and user details.",
              "Include user fields: id, name, email, role, addresses.",
            ],
          },
          {
            subtitleDescription: "Export Function",
            descriptions: [
              "Export the login function from authController.js.",
              "Ensure it’s exported alongside the register function.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add Login Route",
        titleDescription: "Update authRoutes.js to include the login route.",
        sections: [
          {
            subtitleDescription: "Update Routes File",
            descriptions: [
              "Import the login function from authController.js in server/routes/authRoutes.js.",
              "Add a POST route for '/login' using the login function.",
              "Keep the existing /register route.",
            ],
          },
          {
            subtitleDescription: "Export Router",
            descriptions: [
              "Export the Express router from authRoutes.js.",
              "Ensure the router is mounted in server.js under /api/auth.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test the Login Endpoint",
        titleDescription: "Test the login endpoint using Thunder Client.",
        sections: [
          {
            subtitleDescription: "Set Up Thunder Client",
            descriptions: [
              "Open Thunder Client in VS Code.",
              "Create a POST request for http://localhost:5001/api/auth/login.",
              "Set the request body to JSON format.",
            ],
          },
          {
            subtitleDescription: "Test Successful Login",
            descriptions: [
              'Send a request with a registered user’s email and password (e.g., { "email": "test@example.com", "password": "password123" }).',
              "Check for a 200 response with accessToken and user details.",
              "Verify the refreshToken cookie is set with a 7-day expiry.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              'Send a request with missing fields (e.g., { "email": "test@example.com" }).',
              "Check for a 400 error with 'Email and password are required'.",
              "Send a request with wrong credentials and check for a 401 error with 'Invalid credentials'.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "User Registration Endpoint",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/gw96tv?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom9,    videoLink: "",
  },
  {
    taskId: "ecom10",
    taskTitle: "Build Authentication Middleware for Protected Routes",
    introduction:
      "In this task, you will create middleware to secure API routes in an e-commerce backend using Node.js, Express, and MongoDB. You'll implement two middleware functions: authMiddleware to verify JSON Web Tokens (JWTs) for authentication and adminMiddleware to enforce admin-only access. These will be stored in a dedicated middleware file to maintain a modular codebase, building on the registration and login endpoints from Phase 3.2 Authentication.",
    steps: [
      {
        stepTitle: "Step 1: Create the Middleware File",
        titleDescription:
          "Set up a dedicated file for authentication middleware.",
        sections: [
          {
            subtitleDescription: "Create authMiddleware.js",
            descriptions: [
              "Create a new file in the server/middleware/ directory named authMiddleware.js.",
              "Prepare to import the jsonwebtoken library for JWT verification.",
              "Define two middleware functions: authMiddleware (for token verification) and adminMiddleware (for role-based access).",
            ],
          },
          {
            subtitleDescription: "Purpose of Middleware",
            descriptions: [
              "Middleware runs before route handlers to perform checks like authentication, keeping logic separate from controllers.",
              "Storing middleware in a separate file promotes modularity, enabling reuse across multiple routes (e.g., user or admin routes).",
              "This aligns with the MVC pattern by isolating authentication logic, improving maintainability and scalability.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Verify Dependencies",
        titleDescription:
          "Ensure required dependencies and environment variables are set up.",
        sections: [
          {
            subtitleDescription: "Check jsonwebtoken Installation",
            descriptions: [
              "Verify that jsonwebtoken is listed in server/package.json under dependencies, likely installed during register/login setup.",
              "If not installed, run 'npm install jsonwebtoken' in the server directory to add it.",
            ],
          },
          {
            subtitleDescription: "Confirm .env Settings",
            descriptions: [
              "Ensure server/.env includes JWT_SECRET for access token verification, matching the secret used in the login endpoint.",
              "Generate a secure JWT_SECRET using a command like 'openssl rand -base64 32' if not already set.",
              "Verify that .env is excluded from version control by checking .gitignore.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Implement authMiddleware",
        titleDescription:
          "Add logic to verify JWT in the Authorization header.",
        sections: [
          {
            subtitleDescription: "Extract and Verify Token",
            descriptions: [
              "Retrieve the Authorization header from the request, expecting the format 'Bearer <token>'.",
              "Validate that the header exists and starts with 'Bearer ', returning a 401 Unauthorized error if it’s missing or incorrectly formatted.",
              "Extract the JWT token by removing the 'Bearer ' prefix from the header string.",
              "Use the jsonwebtoken library’s verify method to validate the token against the JWT_SECRET from .env, ensuring it’s authentic and not expired.",
              "If verification succeeds, decode the token to extract user data (e.g., id and role) and attach it to req.user for use in subsequent middleware or routes.",
              "If verification fails (e.g., due to an invalid signature, tampered token, or expiration), catch the error and return a 401 Unauthorized error with a clear message.",
            ],
          },
          {
            subtitleDescription: "Purpose and Security Benefits",
            descriptions: [
              "This middleware ensures only authenticated users with valid JWTs can access protected routes, enforcing secure API access.",
              "By attaching user data to req.user, it eliminates the need for additional database queries in route handlers, improving performance.",
              "Using a short-lived access token (15 minutes, as set in the login endpoint) minimizes the risk of token misuse.",
              "The middleware supports stateless authentication, making it ideal for scalable, distributed systems like e-commerce platforms.",
              "Error handling ensures the API provides meaningful feedback without exposing sensitive details, aligning with security best practices.",
            ],
          },
          {
            subtitleDescription: "Key Implementation Notes",
            descriptions: [
              "The decoded token (from the generateTokens function in authController.js) contains user ID and role, as set during login.",
              "Ensure JWT_SECRET matches the one used in token generation to avoid verification failures.",
              "The middleware is designed for access tokens, not refresh tokens, which require separate handling (e.g., in a future refresh endpoint).",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Implement adminMiddleware",
        titleDescription: "Add logic to restrict access to admin users.",
        sections: [
          {
            subtitleDescription: "Check Admin Role",
            descriptions: [
              "Assume authMiddleware has already executed, populating req.user with decoded token data (id, role).",
              "Verify that req.user exists and that req.user.role is exactly 'admin', as defined in the User schema’s role enum (['user', 'admin']).",
              "If req.user is missing (e.g., authMiddleware wasn’t run) or the role is not 'admin', return a 403 Forbidden error to indicate insufficient permissions.",
              "If the user is an admin, call next() to proceed to the next middleware or route handler, granting access to the protected resource.",
            ],
          },
          {
            subtitleDescription: "Role-Based Access Control (RBAC)",
            descriptions: [
              "This middleware enforces authorization, ensuring only users with the 'admin' role can access sensitive routes, such as managing products or user accounts.",
              "It builds on authMiddleware, which handles authentication (verifying identity), to add authorization (checking permissions), following the principle of least privilege.",
              "The 403 status code clearly communicates that the user is authenticated but lacks the required role, aiding in debugging and user feedback.",
              "This approach supports role-based access control (RBAC), a standard for managing permissions in applications with multiple user types.",
            ],
          },
          {
            subtitleDescription: "Implementation Considerations",
            descriptions: [
              "Always apply adminMiddleware after authMiddleware in route definitions to ensure req.user is available.",
              "The User schema’s role field must be consistent (e.g., 'admin' not 'Admin') to avoid comparison errors.",
              "This middleware is reusable for any admin-only route, promoting code efficiency and maintainability.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Plan Middleware Usage",
        titleDescription: "Understand how to apply middleware to routes.",
        sections: [
          {
            subtitleDescription: "Apply to Routes",
            descriptions: [
              "Import authMiddleware and adminMiddleware into route files (e.g., authRoutes.js or future userRoutes.js).",
              "Use authMiddleware alone for routes that any authenticated user can access, such as viewing their profile.",
              "Combine authMiddleware and adminMiddleware for routes restricted to admins, such as managing inventory or user accounts.",
            ],
          },
          {
            subtitleDescription: "Public vs Protected Routes",
            descriptions: [
              "Keep public routes like /register and /login free of middleware, as they don’t require authentication.",
              "Apply middleware to protected routes in future phases (e.g., /api/auth/me or /api/admin/dashboard) to enforce security.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test Middleware Functionality",
        titleDescription: "Validate middleware with a test route.",
        sections: [
          {
            subtitleDescription: "Set Up a Test Route",
            descriptions: [
              "Create a temporary GET route in authRoutes.js (e.g., /api/auth/test) to test middleware functionality.",
              "Apply authMiddleware to the route and return req.user data to verify token decoding.",
              "Optionally create a second test route with both authMiddleware and adminMiddleware to test admin access.",
            ],
          },
          {
            subtitleDescription: "Test with Thunder Client",
            descriptions: [
              "Start the server from the server directory using 'npm start'.",
              "Use Thunder Client in VS Code to send a GET request to the test route, including an Authorization header with a valid access token ('Bearer <accessToken>').",
              "Obtain the access token by logging in via POST /api/auth/login.",
              "Expect a 200 response with user data for valid tokens, a 401 for missing or invalid tokens, and a 403 for non-admin users on admin routes.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Troubleshoot Issues",
        titleDescription: "Resolve common middleware errors.",
        sections: [
          {
            subtitleDescription: "Fix 401 Unauthorized Errors",
            descriptions: [
              "If 'No token provided or invalid format': Ensure the Authorization header is correctly formatted as 'Bearer <token>'.",
              "If 'Invalid or expired token': Confirm JWT_SECRET in .env matches the secret used during token generation in the login endpoint.",
            ],
          },
          {
            subtitleDescription: "Fix 403 Forbidden Errors",
            descriptions: [
              "Ensure authMiddleware runs before adminMiddleware to populate req.user.",
              "Verify the user’s role in the token payload is 'admin', as set in the User schema and login endpoint.",
            ],
          },
          {
            subtitleDescription: "General Debugging Tips",
            descriptions: [
              "Check server logs for detailed error messages, such as JWT verification failures or missing environment variables.",
              "Verify that jsonwebtoken is installed and properly imported in authMiddleware.js.",
              "Ensure middleware is applied in the correct order in route definitions (authMiddleware before adminMiddleware).",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "User Registration Endpoint",
      "User Login Endpoint",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/p9y4kp?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom10,    videoLink: "",
  },
  {
    taskId: "ecom11",
    taskTitle: "Add User Profile and Logout Endpoints",
    introduction:
      "In this task, you will update an e-commerce backend to add endpoints for fetching the current user’s profile and logging out. You’ll add functions to the authentication controller, update routes, and test with Thunder Client to ensure the endpoints work correctly.",
    steps: [
      {
        stepTitle: "Step 1: Add Profile Function to Controller",
        titleDescription:
          "Create a function to fetch the current user’s profile.",
        sections: [
          {
            subtitleDescription: "Create Profile Function",
            descriptions: [
              "Add a function in authController.js for user profile.",
              "Name it to reflect fetching user data.",
              "Use async/await for database queries.",
            ],
          },
          {
            subtitleDescription: "Fetch User Data",
            descriptions: [
              "Find the user by ID from the request’s user object.",
              "Exclude the password from the response.",
              "Return a 404 error if the user is not found.",
            ],
          },
          {
            subtitleDescription: "Generate JWT Secret Key",
            descriptions: [
              "Run a Node.js command to generate a random secret key.",
              "Use the key for access token signing.",
              "Generate another key for refresh token signing.",
            ],
          },
          {
            subtitleDescription: "Handle Response",
            descriptions: [
              "Send user details in a JSON response.",
              "Include ID, name, email, role, and addresses.",
              "Pass errors to the next middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add Logout Function to Controller",
        titleDescription: "Create a function to handle user logout.",
        sections: [
          {
            subtitleDescription: "Create Logout Function",
            descriptions: [
              "Add a function in authController.js for logout.",
              "Name it to indicate session termination.",
              "Use async/await for consistency.",
            ],
          },
          {
            subtitleDescription: "Clear Refresh Token",
            descriptions: [
              "Remove the refresh token cookie from the response.",
              "Use same cookie settings as in registration.",
              "Send a success message to the client.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "Wrap the function in a try-catch block.",
              "Pass errors to the next middleware.",
              "Keep the logout process simple.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add Routes to authRoutes.js",
        titleDescription: "Set up routes for profile and logout.",
        sections: [
          {
            subtitleDescription: "Add Profile Route",
            descriptions: [
              "Create a GET route for the user profile.",
              "Protect it with authentication middleware.",
              "Link it to the profile function.",
            ],
          },
          {
            subtitleDescription: "Add Logout Route",
            descriptions: [
              "Create a POST route for user logout.",
              "Link it to the logout function.",
              "Keep the route accessible without middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Import and Use Functions in Routes",
        titleDescription: "Import and connect functions in authRoutes.js.",
        sections: [
          {
            subtitleDescription: "Import Functions",
            descriptions: [
              "Import the profile function from authController.js.",
              "Import the logout function from authController.js.",
              "Add imports at the top of authRoutes.js.",
            ],
          },
          {
            subtitleDescription: "Use Functions in Routes",
            descriptions: [
              "Connect the profile function to the GET route.",
              "Connect the logout function to the POST route.",
              "Add authentication middleware to the profile route.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Test Profile Endpoint",
        titleDescription: "Test the profile endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Set Up Thunder Client",
            descriptions: [
              "Open Thunder Client in VS Code.",
              "Create a GET request for the profile endpoint.",
              "Ensure no request body is included.",
            ],
          },
          {
            subtitleDescription: "Add Authentication",
            descriptions: [
              "Get an access token from a login request.",
              "Add the token to the Authorization header.",
              "Use Bearer format for the token.",
            ],
          },
          {
            subtitleDescription: "Check Profile Response",
            descriptions: [
              "Send the request and expect user details.",
              "Verify name, email, role, and addresses.",
              "Confirm the password is not included.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Send a request without a token.",
              "Expect a 401 error for missing token.",
              "Use an invalid token and expect a 401 error.",
            ],
          },
          {
            subtitleDescription: "Verify User Data",
            descriptions: [
              "Check that user ID matches the token’s ID.",
              "Confirm addresses match registered data.",
              "Ensure the response format is consistent.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test Logout Endpoint",
        titleDescription: "Test the logout endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Set Up Logout Request",
            descriptions: [
              "Create a POST request for the logout endpoint.",
              "Include the refresh token cookie from login.",
              "Use no request body for the POST.",
            ],
          },
          {
            subtitleDescription: "Send Logout Request",
            descriptions: [
              "Send the request to log out the user.",
              "Expect a success message in the response.",
              "Check that the refresh token cookie is cleared.",
            ],
          },
          {
            subtitleDescription: "Test After Logout",
            descriptions: [
              "Try the profile endpoint after logout.",
              "Expect a 401 error due to no valid token.",
              "Confirm the logout ends the session.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/t5fckk?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom11,    videoLink: "",
  },
  {
    taskId: "ecom12",
    taskTitle: "Add User Profile Management Endpoints",
    introduction:
      "In this task, you will add endpoints to an e-commerce backend for managing user profiles. This includes fetching the current user’s profile, updating the profile, and fetching a user by ID (admin-only). You’ll create a user controller, set up routes, update the server, and test the endpoints with Thunder Client to ensure they function correctly.",
    steps: [
      {
        stepTitle: "Step 1: Create getProfile Function in userController.js",
        titleDescription: "Add a function to fetch the current user’s profile.",
        sections: [
          {
            subtitleDescription: "Set Up the File and Import Model",
            descriptions: [
              "Create a new file named userController.js in the controllers directory if it doesn't exist.",
              "At the top of the file, import the User model from the models directory.",
            ],
          },
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "Export an async function named getProfile that takes req, res, and next as parameters.",
              "Inside the function, use a try-catch block to handle potential errors.",
            ],
          },
          {
            subtitleDescription: "Fetch the User",
            descriptions: [
              "In the try block, use the User model to find a user by their ID, which is available in req.user.id.",
              "Use the select method to exclude the password field from the result.",
              "Store the result in a variable named user.",
            ],
          },
          {
            subtitleDescription: "Check if User Exists",
            descriptions: [
              "If the user is not found, send a 404 status response with a JSON object containing a message: 'User not found'.",
            ],
          },
          {
            subtitleDescription: "Prepare and Send Response",
            descriptions: [
              "If the user is found, create a JSON response with a user object that includes id (using _id), name, email, role, and addresses.",
              "Send this response using res.json.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In the catch block, pass the error to the next middleware function.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add updateProfile Function in userController.js",
        titleDescription:
          "Add a function to update the current user’s profile.",
        sections: [
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "Export another async function named updateProfile with req, res, next parameters.",
              "Use a try-catch block inside the function.",
            ],
          },
          {
            subtitleDescription: "Extract Fields from Request",
            descriptions: [
              "In the try block, destructure name, email, password, and addresses from req.body.",
              "Create an empty object named updates.",
            ],
          },
          {
            subtitleDescription: "Build Updates Object",
            descriptions: [
              "Check if name is provided and add it to updates if so.",
              "Do the same for email, password, and addresses.",
              "Note that password will be hashed later by the schema.",
            ],
          },
          {
            subtitleDescription: "Validate Updates",
            descriptions: [
              "Check if the updates object has any keys; if not, send a 400 status with a message: 'No valid fields to update'.",
            ],
          },
          {
            subtitleDescription: "Update the User",
            descriptions: [
              "Use User.findByIdAndUpdate to update the user with req.user.id.",
              "Pass { $set: updates } as the update, and options { new: true, runValidators: true }.",
              "Select to exclude password.",
              "Store the updated user in a variable.",
            ],
          },
          {
            subtitleDescription: "Check if Updated User Exists",
            descriptions: [
              "If no user is found after update, send 404 with 'User not found'.",
            ],
          },
          {
            subtitleDescription: "Send Updated Response",
            descriptions: [
              "Send a JSON response with the updated user details similar to getProfile.",
              "In the catch, pass the error to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add getUserById Function in userController.js",
        titleDescription: "Add a function to fetch a user by ID (for admins).",
        sections: [
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "Export an async function named getUserById with req, res, next.",
            ],
          },
          {
            subtitleDescription: "Fetch the User",
            descriptions: [
              "In try-catch, find the user by req.params.id, exclude password.",
            ],
          },
          {
            subtitleDescription: "Handle Not Found",
            descriptions: ["If not found, send 404 with 'User not found'."],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send JSON with user details.",
              "Catch errors and pass to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Create userRoutes.js",
        titleDescription: "Set up routes for user profile management.",
        sections: [
          {
            subtitleDescription: "Set Up the File and Imports",
            descriptions: [
              "Create a new file userRoutes.js in the routes directory.",
              "Import express at the top.",
              "Import the three functions: getProfile, updateProfile, getUserById from the userController.",
              "Import authMiddleware and adminMiddleware from the authMiddleware file.",
            ],
          },
          {
            subtitleDescription: "Create the Router",
            descriptions: ["Initialize a router using express.Router()."],
          },
          {
            subtitleDescription: "Define Profile Routes",
            descriptions: [
              "Add a GET route for '/profile' protected by authMiddleware, calling getProfile.",
              "Add a PATCH route for '/profile' also protected by authMiddleware, calling updateProfile.",
            ],
          },
          {
            subtitleDescription: "Define Admin Route",
            descriptions: [
              "Add a GET route for '/:id' protected by both authMiddleware and adminMiddleware, calling getUserById.",
            ],
          },
          {
            subtitleDescription: "Export the Router",
            descriptions: ["Export the router as default."],
          },
        ],
      },
      {
        stepTitle: "Step 5: Update server.js to Include User Routes",
        titleDescription:
          "Import and mount the user routes in the main server file.",
        sections: [
          {
            subtitleDescription: "Import the Routes",
            descriptions: [
              "In server.js, add an import for userRoutes from the routes directory.",
            ],
          },
          {
            subtitleDescription: "Mount the Routes",
            descriptions: [
              "After mounting the auth routes, add app.use for '/api/users' with userRoutes.",
            ],
          },
          {
            subtitleDescription: "Verify Changes",
            descriptions: [
              "Compare with the previous version of server.js to ensure only the new import and use are added.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test GET /api/users/profile",
        titleDescription:
          "Test the profile fetch endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Start the Server",
            descriptions: [
              "Run 'cd server' and 'npm start'.",
              "Expect 'Server running on port 5001' and 'MongoDB Connected Successfully'.",
            ],
          },
          {
            subtitleDescription: "Register a User (if needed)",
            descriptions: [
              "POST to http://localhost:5001/api/auth/register with JSON body including name, email, password, and addresses.",
              "Expect 201 response.",
            ],
          },
          {
            subtitleDescription: "Log In to Get Access Token",
            descriptions: [
              "POST to http://localhost:5001/api/auth/login with email and password.",
              "Copy the accessToken from the response.",
            ],
          },
          {
            subtitleDescription: "Test GET Request",
            descriptions: [
              "GET to http://localhost:5001/api/users/profile.",
              "Add Authorization: Bearer <accessToken>.",
              "Expect 200 OK with user details in JSON.",
            ],
          },
          {
            subtitleDescription: "Error Cases",
            descriptions: [
              "No token: Expect 401 with 'No token provided or invalid format'.",
              "Invalid token: Expect 401 with 'Invalid or expired token'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test PATCH /api/users/profile",
        titleDescription:
          "Test the profile update endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Use Existing Access Token",
            descriptions: ["Use the token from the previous login."],
          },
          {
            subtitleDescription: "Test PATCH Request",
            descriptions: [
              "PATCH to http://localhost:5001/api/users/profile.",
              "Add Authorization: Bearer <accessToken>.",
              "Body JSON with fields like name and addresses.",
              "Expect 200 OK with updated user details.",
            ],
          },
          {
            subtitleDescription: "Error Cases",
            descriptions: [
              "No fields: Empty body, expect 400 with 'No valid fields to update'.",
              "Invalid token: Expect 401 with 'Invalid or expired token'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test GET /api/users/:id",
        titleDescription:
          "Test the admin user fetch endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Create an Admin User",
            descriptions: [
              "Register a user via POST /api/auth/register.",
              "Update role to 'admin' in MongoDB using db.users.updateOne.",
              "Log in to get admin accessToken.",
            ],
          },
          {
            subtitleDescription: "Test GET Request",
            descriptions: [
              "GET to http://localhost:5001/api/users/<user-id>.",
              "Add Authorization: Bearer <admin-access-token>.",
              "Expect 200 OK with user details.",
            ],
          },
          {
            subtitleDescription: "Error Cases",
            descriptions: [
              "Non-admin: Use non-admin token, expect 403 with 'Admin access required'.",
              "Invalid ID: Fake ID, expect 404 with 'User not found'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Troubleshooting",
        titleDescription: "Common issues and fixes for the user endpoints.",
        sections: [
          {
            subtitleDescription: "404 Not Found",
            descriptions: [
              "Verify app.use('/api/users', userRoutes) in server.js.",
              "Check route paths in userRoutes.js.",
            ],
          },
          {
            subtitleDescription: "401 Unauthorized",
            descriptions: [
              "Ensure Authorization: Bearer <token> header is correct.",
              "Verify JWT_SECRET in .env.",
            ],
          },
          {
            subtitleDescription: "403 Forbidden",
            descriptions: ["Confirm the user has role: 'admin' in MongoDB."],
          },
          {
            subtitleDescription: "MongoDB Errors",
            descriptions: ["Check MONGO_URI and database connection."],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/7y4s3h?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom12,    videoLink: "",
  },
  {
    taskId: "ecom13",
    taskTitle: "Add Product Listing and Details Endpoints",
    introduction:
      "In this task, you will add endpoints to an e-commerce backend for listing and viewing products. This includes fetching a list of products with filters, pagination, and search, as well as fetching details for a single product by ID. You’ll create a product controller, set up routes, update the server, insert test data, and test the endpoints with Thunder Client to ensure they function correctly.",
    steps: [
      {
        stepTitle:
          "Step 1: Create getProducts Function in productController.js",
        titleDescription:
          "Add a function to fetch a list of products with filters, pagination, and search.",
        sections: [
          {
            subtitleDescription: "Set Up the File and Import Model",
            descriptions: [
              "Create a new file named productController.js in the controllers directory if it doesn't exist.",
              "At the top of the file, import the Product model from the models directory.",
            ],
          },
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "Export an async function named getProducts that takes req, res, and next as parameters.",
              "Inside the function, use a try-catch block to handle potential errors.",
            ],
          },
          {
            subtitleDescription: "Extract Query Parameters",
            descriptions: [
              "In the try block, destructure page (default 1), limit (default 10), category, minPrice, maxPrice, and search from req.query.",
            ],
          },
          {
            subtitleDescription: "Build the Query Object",
            descriptions: [
              "Create an empty query object.",
              "If category is provided, add it to the query.",
              "If minPrice or maxPrice is provided, create a price object in query and add $gte for minPrice and $lte for maxPrice, converting to numbers.",
              "If search is provided, add a $text field with $search set to the search value.",
            ],
          },
          {
            subtitleDescription: "Fetch Products",
            descriptions: [
              "Use Product.find with the query, sort by createdAt descending, skip based on page and limit, limit the results, and select fields like name, description, price, stock, category, images, averageRating, numReviews, createdAt, updatedAt.",
              "Store the results in a variable named products.",
            ],
          },
          {
            subtitleDescription: "Count Total Documents",
            descriptions: [
              "Use Product.countDocuments with the query to get the total count.",
              "Store in a variable named total.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send a JSON response with products and a pagination object including page, limit, total, and totalPages calculated as Math.ceil(total / limit).",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In the catch block, pass the error to the next middleware function.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create productRoutes.js for GET /api/products",
        titleDescription: "Set up the route for listing products.",
        sections: [
          {
            subtitleDescription: "Set Up the File and Imports",
            descriptions: [
              "Create a new file named productRoutes.js in the routes directory.",
              "Import express at the top.",
              "Import the getProducts function from the productController.",
            ],
          },
          {
            subtitleDescription: "Create the Router",
            descriptions: ["Initialize a router using express.Router()."],
          },
          {
            subtitleDescription: "Define the Route",
            descriptions: ["Add a GET route for '/' calling getProducts."],
          },
          {
            subtitleDescription: "Export the Router",
            descriptions: ["Export the router as default."],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update server.js to Mount Product Routes",
        titleDescription:
          "Import and mount the product routes in the main server file.",
        sections: [
          {
            subtitleDescription: "Import the Routes",
            descriptions: [
              "In server.js, add an import for productRoutes from the routes directory.",
            ],
          },
          {
            subtitleDescription: "Mount the Routes",
            descriptions: [
              "Add app.use for '/api/products' with productRoutes.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test GET /api/products",
        titleDescription:
          "Insert test products and test the listing endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Insert Test Products",
            descriptions: [
              "Use MongoDB shell or Compass to insert sample products into the products collection, including fields like name, description, price, stock, category, images, ratings, averageRating, numReviews.",
              "For ratings, include a user ID from your users collection.",
            ],
          },
          {
            subtitleDescription: "Start the Server",
            descriptions: [
              "Run 'cd server' and 'npm start'.",
              "Expect 'Server running on port 5001' and 'MongoDB Connected Successfully'.",
            ],
          },
          {
            subtitleDescription: "Test Basic List",
            descriptions: [
              "In Thunder Client, make a GET request to http://localhost:5001/api/products.",
              "Expect 200 OK with products array and pagination info.",
            ],
          },
          {
            subtitleDescription: "Test Variations",
            descriptions: [
              "Test pagination with ?page=1&limit=1.",
              "Test filters with ?category=electronics&minPrice=20.",
              "Test search with ?search=mouse.",
            ],
          },
          {
            subtitleDescription: "Error Cases",
            descriptions: [
              "Clear the DB and expect empty products array.",
              "Use invalid search term and expect empty array.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 5: Add getProductById Function in productController.js",
        titleDescription: "Add a function to fetch a single product by ID.",
        sections: [
          {
            subtitleDescription: "Define the Function",
            descriptions: [
              "In productController.js, export an async function named getProductById with req, res, next parameters.",
              "Use a try-catch block inside the function.",
            ],
          },
          {
            subtitleDescription: "Fetch the Product",
            descriptions: [
              "Use Product.findById with req.params.id and populate 'ratings.user' selecting 'name email'.",
            ],
          },
          {
            subtitleDescription: "Handle Not Found",
            descriptions: [
              "If no product, return 404 status with { message: 'Product not found' }.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: ["Send JSON with the product."],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: ["In catch, pass error to next."],
          },
        ],
      },
      {
        stepTitle: "Step 6: Update productRoutes.js for GET /api/products/:id",
        titleDescription: "Add the route for product details.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: ["Import getProductById along with getProducts."],
          },
          {
            subtitleDescription: "Add the Route",
            descriptions: [
              "Add a GET route for '/:id' calling getProductById.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test GET /api/products/:id",
        titleDescription:
          "Test the product details endpoint with Thunder Client.",
        sections: [
          {
            subtitleDescription: "Get Product ID",
            descriptions: ["Use a product ID from the previous listing test."],
          },
          {
            subtitleDescription: "Test GET Request",
            descriptions: [
              "GET to http://localhost:5001/api/products/<product-id>.",
              "Expect 200 OK with full product details including populated ratings.",
            ],
          },
          {
            subtitleDescription: "Error Cases",
            descriptions: [
              "Invalid ID: Expect 404 with 'Product not found'.",
              "Malformed ID: Expect 500 error.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Troubleshooting",
        titleDescription: "Common issues and fixes for the product endpoints.",
        sections: [
          {
            subtitleDescription: "404 Not Found for Routes",
            descriptions: [
              "Verify app.use('/api/products', productRoutes) in server.js.",
              "Check route paths in productRoutes.js.",
            ],
          },
          {
            subtitleDescription: "No Products Returned",
            descriptions: [
              "Ensure test products are inserted in MongoDB.",
              "Check query parameters and filters.",
            ],
          },
          {
            subtitleDescription: "Database Errors",
            descriptions: ["Verify MONGO_URI in .env and connection logs."],
          },
          {
            subtitleDescription: "Populate Issues",
            descriptions: [
              "Ensure ratings.user references valid user IDs.",
              "Check the populate syntax for ratings.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/nrv4kj?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom13,    videoLink: "",
  },
  {
    taskId: "ecom14",
    taskTitle: "Add Admin Product Management Endpoints",
    introduction:
      "In this lesson, you’ll add endpoints to an e-commerce backend for admins to manage products: creating, updating, and deleting products by ID. You’ll update the product controller, set up secure routes with authentication, and test with Thunder Client to ensure only authorized admins can perform these actions. This builds on your existing product listing and details endpoints, keeping the process educational for beginners.",
    steps: [
      {
        stepTitle: "Step 1: Add createProduct Function to productController.js",
        titleDescription:
          "Create a function that lets admins add new products with required fields, ensuring data validity before saving. This sets up the foundation for admin product management.",
        sections: [
          {
            subtitleDescription: "Open or Create the Controller File",
            descriptions: [
              "Navigate to the controllers directory in your server folder.",
              "If it doesn’t exist, create a new file named productController.js to hold product-related functions.",
            ],
          },
          {
            subtitleDescription: "Import the Product Model",
            descriptions: [
              "At the top of productController.js, import the Product model from the models directory.",
              "This connects your controller to the MongoDB schema for products.",
            ],
          },
          {
            subtitleDescription: "Define the createProduct Function",
            descriptions: [
              "Add an async function named createProduct with parameters req (request data), res (response), and next (for error handling).",
              "Make it async since it will save data to MongoDB, which takes time.",
            ],
          },
          {
            subtitleDescription: "Set Up Error Handling",
            descriptions: [
              "Wrap the function’s code in a try-catch block to handle issues like invalid data or database errors.",
              "This keeps your server safe from crashes.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "From req.body, extract fields like name, description, price, stock, category, images, and set ratings to an empty array if not provided.",
              "Check that name, description, price are present and stock is a number; if not, send a 400 status with a message about required fields.",
            ],
          },
          {
            subtitleDescription: "Create the Product",
            descriptions: [
              "Use the Product model to create a new product instance with the extracted fields, setting averageRating and numReviews to 0 initially.",
              "Save the product to MongoDB using the save method.",
            ],
          },
          {
            subtitleDescription: "Send Success Response",
            descriptions: [
              "If saved, send a 201 status with a JSON response containing the new product.",
              "This confirms the creation to the client.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In the catch block, pass any errors to the next parameter for Express’s error middleware to handle.",
              "This keeps error handling clean and consistent.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add updateProduct Function to productController.js",
        titleDescription:
          "Add a function to let admins update product details, ensuring the product exists and updates are valid. This allows flexible changes like adjusting price or stock.",
        sections: [
          {
            subtitleDescription: "Define the updateProduct Function",
            descriptions: [
              "In productController.js, add an async function named updateProduct with req, res, next parameters.",
              "Use a try-catch block to handle potential errors.",
            ],
          },
          {
            subtitleDescription: "Extract Updates",
            descriptions: [
              "Take all fields from req.body and store them in a variable for updates.",
              "Check if the updates object is empty; if so, send a 400 status with a message about no fields to update.",
            ],
          },
          {
            subtitleDescription: "Update the Product",
            descriptions: [
              "Use Product.findByIdAndUpdate with req.params.id to find the product and apply updates using $set.",
              "Include options to return the updated product and run schema validations.",
            ],
          },
          {
            subtitleDescription: "Check if Product Exists",
            descriptions: [
              "If no product is found, send a 404 status with a message: ‘Product not found’.",
            ],
          },
          {
            subtitleDescription: "Send Updated Response",
            descriptions: [
              "Send a JSON response with the updated product.",
              "In the catch block, pass errors to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add deleteProduct Function to productController.js",
        titleDescription:
          "Create a function to allow admins to delete a product by ID, checking if it exists first. This ensures secure removal of products from the database.",
        sections: [
          {
            subtitleDescription: "Define the deleteProduct Function",
            descriptions: [
              "Add an async function named deleteProduct with req, res, next parameters.",
              "Wrap the code in a try-catch block for error handling.",
            ],
          },
          {
            subtitleDescription: "Delete the Product",
            descriptions: [
              "Use Product.findByIdAndDelete with req.params.id to locate and remove the product.",
              "Store the result in a variable to check if it was found.",
            ],
          },
          {
            subtitleDescription: "Check if Product Exists",
            descriptions: [
              "If no product is found, send a 404 status with a message: ‘Product not found’.",
            ],
          },
          {
            subtitleDescription: "Send Success Response",
            descriptions: [
              "If deleted, send a JSON response with a message: ‘Product deleted successfully’.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "Pass any errors in the catch block to the next middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update productRoutes.js for Admin Routes",
        titleDescription:
          "Add routes for creating, updating, and deleting products, all protected by auth and admin middleware. This ensures only authorized admins can manage products.",
        sections: [
          {
            subtitleDescription: "Open the Routes File",
            descriptions: [
              "Navigate to the routes directory and open productRoutes.js, where other product routes (e.g., GET) are defined.",
              "This file organizes all product-related URLs.",
            ],
          },
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Import createProduct, updateProduct, and deleteProduct from productController.js.",
              "Ensure authMiddleware and adminMiddleware are imported from authMiddleware.js.",
            ],
          },
          {
            subtitleDescription: "Add Admin Routes",
            descriptions: [
              "Add a POST route for '/' with authMiddleware and adminMiddleware, calling createProduct.",
              "Add a PATCH route for '/:id' with both middleware, calling updateProduct.",
              "Add a DELETE route for '/:id' with both middleware, calling deleteProduct.",
            ],
          },
          {
            subtitleDescription: "Verify Router Export",
            descriptions: [
              "Confirm the router is exported as default to be used in server.js.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Verify server.js Configuration",
        titleDescription:
          "Ensure product routes are properly mounted in the main server file. This makes all product management endpoints accessible under /api/products.",
        sections: [
          {
            subtitleDescription: "Check Imports",
            descriptions: [
              "In server.js, verify that productRoutes is imported from './routes/productRoutes.js'.",
              "This should already be present from previous product-related steps.",
            ],
          },
          {
            subtitleDescription: "Confirm Route Mounting",
            descriptions: [
              "Check that app.use('/api/products', productRoutes) is in server.js, typically after middleware like express.json.",
              "This enables all product routes, including POST, PATCH, and DELETE.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Test POST /api/products with Thunder Client",
        titleDescription:
          "Test the product creation endpoint to ensure admins can add products with valid data. This confirms the createProduct function works and enforces admin access.",
        sections: [
          {
            subtitleDescription: "Get Admin Token",
            descriptions: [
              "If needed, update a user in MongoDB to have role: 'admin' using db.users.updateOne with the email and role fields.",
              "Send a POST request to http://localhost:5001/api/auth/login with admin credentials and copy the accessToken.",
            ],
          },
          {
            subtitleDescription: "Send the POST Request",
            descriptions: [
              "In Thunder Client, create a POST request to http://localhost:5001/api/products.",
              "Add an Authorization header with ‘Bearer <admin-access-token>’ and a JSON body with fields like name, description, price, stock, category, and images.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 201 status with a JSON response containing the new product, including default ratings and numReviews as 0.",
              "Verify fields like name and price match your input.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Send a request with missing fields (e.g., only name), expect 400 with ‘Required fields: name, description, price, and stock must be provided’.",
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
              "Omit the Authorization header, expect 401 with ‘No token provided or invalid format’.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test PATCH /api/products/:id with Thunder Client",
        titleDescription:
          "Test the product update endpoint to verify admins can modify product details like price or stock. This ensures updates are applied correctly and securely.",
        sections: [
          {
            subtitleDescription: "Get a Product ID",
            descriptions: [
              "Send a GET request to http://localhost:5001/api/products to list products and note a valid product ID (e.g., from the created product).",
              "Keep the admin token from the previous step.",
            ],
          },
          {
            subtitleDescription: "Send the PATCH Request",
            descriptions: [
              "Create a PATCH request to http://localhost:5001/api/products/<product-id> with the Authorization header.",
              "Include a JSON body with fields to update, like price or stock.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with a JSON response containing the updated product.",
              "Verify the updated fields (e.g., new price) in the response.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Send an empty body, expect 400 with ‘No fields to update’.",
              "Use an invalid ID, expect 404 with ‘Product not found’.",
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test DELETE /api/products/:id with Thunder Client",
        titleDescription:
          "Test the delete endpoint to confirm admins can remove products and access is restricted. This validates the deleteProduct function and its security.",
        sections: [
          {
            subtitleDescription: "Get a Product ID",
            descriptions: [
              "Use a product ID from GET /api/products (e.g., the created product’s ID).",
              "Ensure you have the admin token ready.",
            ],
          },
          {
            subtitleDescription: "Send the DELETE Request",
            descriptions: [
              "Create a DELETE request to http://localhost:5001/api/products/<product-id> with the Authorization header.",
              "No body is needed for DELETE requests.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with a JSON message: ‘Product deleted successfully’.",
              "Run GET /api/products to confirm the product is gone.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Use an invalid ID, expect 404 with ‘Product not found’.",
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
              "Omit the Authorization header, expect 401 with ‘No token provided or invalid format’.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Troubleshoot Common Issues",
        titleDescription:
          "Learn to fix common problems with the admin product endpoints to ensure smooth operation. This helps beginners debug issues like access errors or missing data.",
        sections: [
          {
            subtitleDescription: "404 Product Not Found",
            descriptions: [
              "Verify the product ID exists by checking GET /api/products results.",
              "Ensure route paths in productRoutes.js are correct (e.g., '/:id' for PATCH and DELETE).",
            ],
          },
          {
            subtitleDescription: "401 Unauthorized Errors",
            descriptions: [
              "Check that the Authorization header uses ‘Bearer <token>’ with a valid admin token.",
              "Confirm JWT_SECRET in .env matches the token’s signature.",
            ],
          },
          {
            subtitleDescription: "403 Forbidden Errors",
            descriptions: [
              "Verify the user has role: 'admin' in MongoDB’s users collection.",
              "Ensure adminMiddleware is applied to POST, PATCH, and DELETE routes.",
            ],
          },
          {
            subtitleDescription: "Database or Validation Issues",
            descriptions: [
              "Check MONGO_URI in .env and ensure MongoDB is running (look for ‘MongoDB Connected Successfully’ in logs).",
              "For createProduct, verify all required fields (name, description, price, stock) are sent correctly.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/4d7s44?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom14,    videoLink: "",
  },
  {
    taskId: "ecom15",
    taskTitle: "Implement Order Management Endpoints",
    introduction:
      "In this lesson, you’ll build a complete set of order management endpoints for an e-commerce backend, enabling users to create and view their orders, and admins to update, delete, and view all orders. You’ll create an order controller, set up secure routes with authentication, and test everything using Thunder Client to ensure functionality and security. This lesson assumes you have a Product model and an Order model with fields like user, items, shippingAddress, totalAmount, paymentMethod, status, and paymentStatus.",
    steps: [
      {
        stepTitle:
          "Step 1: Create the createOrder Function in orderController.js",
        titleDescription:
          "Build a function to allow authenticated users to place orders, validating items, payment method, and shipping address. This ensures orders are created securely and accurately.",
        sections: [
          {
            subtitleDescription: "Set Up the Controller File",
            descriptions: [
              "In your server folder, create a controllers directory if it doesn’t exist, and add a new file named orderController.js.",
              "This file will hold all order-related logic for your backend.",
            ],
          },
          {
            subtitleDescription: "Import Required Models",
            descriptions: [
              "At the top of orderController.js, import the Product and Order models from the models directory.",
              "These models let you validate product IDs and save orders to MongoDB.",
            ],
          },
          {
            subtitleDescription: "Define the createOrder Function",
            descriptions: [
              "Create an async function named createOrder that accepts req (request data), res (response), and next (error handler).",
              "Make it async to handle database operations that take time.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "Extract items, paymentMethod, and shippingAddress from req.body, where items is an array of objects with productId and quantity.",
              "Check that items is a non-empty array, paymentMethod exists, and shippingAddress includes fullName, street, city, and country; return a 400 error if any are missing.",
            ],
          },
          {
            subtitleDescription: "Validate Product IDs",
            descriptions: [
              "Extract product IDs from the items array and query MongoDB to find matching products using the Product model.",
              "If any IDs don’t match existing products, return a 400 error to stop the order.",
            ],
          },
          {
            subtitleDescription: "Build Order Items",
            descriptions: [
              "Transform the items array into a format matching your OrderItemSchema, including productId, name, image (first image or empty), price from the database, and quantity.",
              "This ensures order data is consistent with product data.",
            ],
          },
          {
            subtitleDescription: "Calculate Total Amount",
            descriptions: [
              "Calculate the total cost by summing the product price times quantity for each item in the order.",
              "This provides the totalAmount field required by your schema.",
            ],
          },
          {
            subtitleDescription: "Create and Save the Order",
            descriptions: [
              "Create a new Order instance with the user ID (from req.user.id via auth middleware), order items, shipping address, total amount, payment method, and default status/paymentStatus as 'pending'.",
              "Save the order to MongoDB and send a 201 response with the order details.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "Use a try-catch block to catch any errors, like database issues, and pass them to the next middleware.",
              "This keeps the server running smoothly.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create orderRoutes.js for POST /api/orders",
        titleDescription:
          "Set up a POST route to allow authenticated users to create orders, protected by authentication middleware. This connects the order creation logic to a URL.",
        sections: [
          {
            subtitleDescription: "Create the Routes File",
            descriptions: [
              "In the routes directory, create a new file named orderRoutes.js to define order-related routes.",
              "This organizes all order endpoints in one place.",
            ],
          },
          {
            subtitleDescription: "Import Dependencies",
            descriptions: [
              "Import express to create the router, createOrder from orderController.js, and authMiddleware from authMiddleware.js.",
              "These provide the tools to set up secure routes.",
            ],
          },
          {
            subtitleDescription: "Define the POST Route",
            descriptions: [
              "Create an Express router and add a POST route for '/' that uses authMiddleware followed by createOrder.",
              "This ensures only logged-in users can create orders.",
            ],
          },
          {
            subtitleDescription: "Export the Router",
            descriptions: [
              "Export the router as default to be mounted in server.js.",
              "This makes the route accessible in your app.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Mount Order Routes in server.js",
        titleDescription:
          "Add the order routes to the main server file to make /api/orders endpoints available. This integrates order functionality into the app.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "In server.js, import orderRoutes from './routes/orderRoutes.js'.",
              "This brings in the order routes for use.",
            ],
          },
          {
            subtitleDescription: "Mount the Routes",
            descriptions: [
              "Add app.use('/api/orders', orderRoutes) after other middleware like express.json in server.js.",
              "This enables endpoints like /api/orders for client requests.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Test POST /api/orders with Thunder Client",
        titleDescription:
          "Test the order creation endpoint to ensure users can place valid orders and errors are handled correctly. This confirms the endpoint works and enforces authentication.",
        sections: [
          {
            subtitleDescription: "Get a User Token",
            descriptions: [
              "Send a POST request to http://localhost:5001/api/auth/login with valid user credentials (e.g., email: 'jane@example.com', password: 'password123').",
              "Copy the accessToken from the response for authentication.",
            ],
          },
          {
            subtitleDescription: "Get Product IDs",
            descriptions: [
              "Send a GET request to http://localhost:5001/api/products to list products and note valid product IDs (e.g., for Headphones and Cotton T-Shirt).",
              "These IDs are needed for the order’s items array.",
            ],
          },
          {
            subtitleDescription: "Send the POST Request",
            descriptions: [
              "In Thunder Client, create a POST request to http://localhost:5001/api/orders with an Authorization header set to 'Bearer <user-access-token>'.",
              "Include a JSON body with items (array of productId and quantity), paymentMethod (e.g., 'stripe'), and a complete shippingAddress.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 201 status with a JSON response containing the new order, including items with product details, totalAmount, and 'pending' status.",
              "Verify the totalAmount matches the sum of price times quantity for all items.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Send a request with no items, expect 400 with 'Items array is required and cannot be empty'.",
              "Omit paymentMethod, expect 400 with 'Payment method is required'.",
              "Send an incomplete shippingAddress (e.g., no city), expect 400 with 'Shipping address must include fullName, street, city, and country'.",
              "Use an invalid productId, expect 400 with 'One or more products not found'.",
              "Omit the Authorization header, expect 401 with 'No token provided or invalid format'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add getOrders Function to orderController.js",
        titleDescription:
          "Create a function to let users fetch their own orders with pagination, ensuring only their orders are shown. This powers the user’s order history page.",
        sections: [
          {
            subtitleDescription: "Open orderController.js",
            descriptions: [
              "Open orderController.js in the controllers directory.",
              "Add the new function below createOrder.",
            ],
          },
          {
            subtitleDescription: "Define the getOrders Function",
            descriptions: [
              "Create an async function named getOrders with req, res, next parameters.",
              "Use a try-catch block to handle errors.",
            ],
          },
          {
            subtitleDescription: "Extract Pagination Parameters",
            descriptions: [
              "Extract page (default 1) and limit (default 10) from req.query for pagination.",
              "This controls how many orders are shown per page.",
            ],
          },
          {
            subtitleDescription: "Query User Orders",
            descriptions: [
              "Use Order.find to get orders where the user field matches req.user.id (from auth middleware).",
              "Sort by createdAt descending, skip for pagination, limit results, and populate items.productId with name, images, and price.",
            ],
          },
          {
            subtitleDescription: "Count Total Orders",
            descriptions: [
              "Use Order.countDocuments to count the user’s orders for pagination metadata.",
              "Calculate totalPages as the ceiling of total divided by limit.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send a JSON response with the orders array and pagination details (page, limit, total, totalPages).",
              "In the catch block, pass errors to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Update orderRoutes.js for GET /api/orders",
        titleDescription:
          "Add a GET route to let users view their orders, protected by authentication middleware. This connects the order listing logic to a URL.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "In orderRoutes.js, import getOrders from orderController.js alongside createOrder.",
              "Ensure authMiddleware is included.",
            ],
          },
          {
            subtitleDescription: "Add the GET Route",
            descriptions: [
              "Add a GET route for '/' that uses authMiddleware followed by getOrders.",
              "This restricts access to authenticated users.",
            ],
          },
          {
            subtitleDescription: "Verify Router Export",
            descriptions: ["Confirm the router is exported as default."],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test GET /api/orders with Thunder Client",
        titleDescription:
          "Test the order listing endpoint to ensure users can see their orders with pagination. This verifies the endpoint returns user-specific orders correctly.",
        sections: [
          {
            subtitleDescription: "Use the User Token",
            descriptions: [
              "Use the accessToken from the POST /api/orders test (or log in again to get it).",
              "This authenticates the user for the request.",
            ],
          },
          {
            subtitleDescription: "Send the GET Request",
            descriptions: [
              "Create a GET request to http://localhost:5001/api/orders?page=1&limit=5 with the Authorization header.",
              "No body is needed for GET requests.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with a JSON response containing an orders array (e.g., including the order from Step 4) and pagination details.",
              "Verify items include populated product details like name and price.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Omit the Authorization header, expect 401 with 'No token provided or invalid format'.",
              "If the user has no orders, expect an empty orders array with total: 0.",
              "Use an invalid page parameter (e.g., ?page=abc), expect it to default to page 1.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Add getOrderById Function to orderController.js",
        titleDescription:
          "Create a function to let users fetch a specific order by ID, ensuring it belongs to them. This powers the order details page for users.",
        sections: [
          {
            subtitleDescription: "Define the getOrderById Function",
            descriptions: [
              "Add an async function named getOrderById with req, res, next parameters.",
              "Use a try-catch block for error handling.",
            ],
          },
          {
            subtitleDescription: "Query the Order",
            descriptions: [
              "Use Order.findOne to find an order by _id (from req.params.id) and user (req.user.id from auth middleware).",
              "Populate items.productId with name, images, and price.",
            ],
          },
          {
            subtitleDescription: "Check if Order Exists",
            descriptions: [
              "If no order is found or it doesn’t belong to the user, send a 404 status with ‘Order not found or not authorized’.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send a JSON response with the order details.",
              "Pass errors in the catch block to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Update orderRoutes.js for GET /api/orders/:id",
        titleDescription:
          "Add a GET route for users to view a specific order’s details, protected by authentication middleware. This ensures only the order’s owner can access it.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Import getOrderById from orderController.js.",
              "Ensure authMiddleware is included.",
            ],
          },
          {
            subtitleDescription: "Add the GET Route",
            descriptions: [
              "Add a GET route for '/:id' with authMiddleware followed by getOrderById.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Test GET /api/orders/:id with Thunder Client",
        titleDescription:
          "Test the order details endpoint to ensure users can view their specific order’s details. This verifies user-specific access and populated data.",
        sections: [
          {
            subtitleDescription: "Get an Order ID",
            descriptions: [
              "Use GET /api/orders to list the user’s orders and note an order ID (e.g., from Step 4).",
              "Keep the user’s accessToken.",
            ],
          },
          {
            subtitleDescription: "Send the GET Request",
            descriptions: [
              "Create a GET request to http://localhost:5001/api/orders/<order-id> with the Authorization header.",
              "No body is needed.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with the order’s details, including populated product data.",
              "Verify fields like totalAmount and shippingAddress match the created order.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Use an invalid order ID, expect 404 with ‘Order not found or not authorized’.",
              "Use another user’s token, expect 404 with the same message.",
              "Omit the Authorization header, expect 401 with ‘No token provided or invalid format’.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Add updateOrder Function to orderController.js",
        titleDescription:
          "Create a function for admins to update order fields like status or paymentStatus, ensuring the order exists. This enables admin order management.",
        sections: [
          {
            subtitleDescription: "Define the updateOrder Function",
            descriptions: [
              "Add an async function named updateOrder with req, res, next parameters.",
              "Use a try-catch block.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Updates",
            descriptions: [
              "Get updates from req.body and check if any fields were provided; if not, send a 400 status with ‘No fields to update’.",
              "If paymentStatus is set to 'paid', add a paidAt field with the current date.",
            ],
          },
          {
            subtitleDescription: "Update the Order",
            descriptions: [
              "Use Order.findByIdAndUpdate with req.params.id, apply updates with $set, and enable schema validations and return the updated order.",
              "Populate items.productId with name, images, and price.",
            ],
          },
          {
            subtitleDescription: "Check if Order Exists",
            descriptions: [
              "If no order is found, send a 404 status with ‘Order not found’.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send a JSON response with the updated order.",
              "Pass errors to next.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Update orderRoutes.js for PATCH /api/orders/:id",
        titleDescription:
          "Add a PATCH route for admins to update orders, protected by auth and admin middleware. This restricts updates to authorized admins.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Import updateOrder from orderController.js.",
              "Ensure authMiddleware and adminMiddleware are included.",
            ],
          },
          {
            subtitleDescription: "Add the PATCH Route",
            descriptions: [
              "Add a PATCH route for '/:id' with authMiddleware and adminMiddleware, followed by updateOrder.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Test PATCH /api/orders/:id with Thunder Client",
        titleDescription:
          "Test the order update endpoint to ensure admins can modify order details like status. This confirms the endpoint works and restricts access.",
        sections: [
          {
            subtitleDescription: "Get an Admin Token",
            descriptions: [
              "Update a user in MongoDB to have role: 'admin' using db.users.updateOne, then log in at http://localhost:5001/api/auth/login.",
              "Copy the accessToken from the response.",
            ],
          },
          {
            subtitleDescription: "Get an Order ID",
            descriptions: [
              "Use GET /api/orders with a user’s token to find an order ID.",
            ],
          },
          {
            subtitleDescription: "Send the PATCH Request",
            descriptions: [
              "Create a PATCH request to http://localhost:5001/api/orders/<order-id> with the Authorization header (Bearer <admin-access-token>).",
              "Include a JSON body with updates like status: 'shipped' or paymentStatus: 'paid'.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with the updated order, including populated product data and paidAt if paymentStatus is 'paid'.",
              "Verify updated fields match the request.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Send an empty body, expect 400 with ‘No fields to update’.",
              "Use an invalid order ID, expect 404 with ‘Order not found’.",
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
              "Use an invalid status, expect a 500 error due to schema validation.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 14: Add deleteOrder Function to orderController.js",
        titleDescription:
          "Create a function for admins to delete an order by ID, ensuring it exists before removal. This allows admins to clean up invalid or fraudulent orders.",
        sections: [
          {
            subtitleDescription: "Define the deleteOrder Function",
            descriptions: [
              "Add an async function named deleteOrder with req, res, next parameters.",
              "Use a try-catch block for error handling.",
            ],
          },
          {
            subtitleDescription: "Delete the Order",
            descriptions: [
              "Use Order.findByIdAndDelete with req.params.id to find and remove the order.",
              "Store the result to check if it was found.",
            ],
          },
          {
            subtitleDescription: "Check if Order Exists",
            descriptions: [
              "If no order is found, send a 404 status with ‘Order not found’.",
            ],
          },
          {
            subtitleDescription: "Send Success Response",
            descriptions: [
              "Send a JSON response with ‘Order deleted successfully’.",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: ["Pass errors in the catch block to next."],
          },
        ],
      },
      {
        stepTitle: "Step 15: Update orderRoutes.js for DELETE /api/orders/:id",
        titleDescription:
          "Add a DELETE route for admins to remove orders, protected by auth and admin middleware. This ensures only admins can delete orders.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Import deleteOrder from orderController.js.",
              "Ensure authMiddleware and adminMiddleware are included.",
            ],
          },
          {
            subtitleDescription: "Add the DELETE Route",
            descriptions: [
              "Add a DELETE route for '/:id' with authMiddleware and adminMiddleware, followed by deleteOrder.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 16: Test DELETE /api/orders/:id with Thunder Client",
        titleDescription:
          "Test the delete endpoint to ensure admins can remove orders and access is restricted. This verifies the endpoint’s functionality and security.",
        sections: [
          {
            subtitleDescription: "Get an Admin Token",
            descriptions: [
              "Use the admin token from Step 13 or log in again to get a new one.",
            ],
          },
          {
            subtitleDescription: "Get an Order ID",
            descriptions: ["Use GET /api/orders to find an order ID."],
          },
          {
            subtitleDescription: "Send the DELETE Request",
            descriptions: [
              "Create a DELETE request to http://localhost:5001/api/orders/<order-id> with the Authorization header.",
              "No body is needed.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with ‘Order deleted successfully’.",
              "Verify with GET /api/orders that the order is gone.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Use an invalid order ID, expect 404 with ‘Order not found’.",
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
              "Omit the Authorization header, expect 401 with ‘No token provided or invalid format’.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 17: Add getAllOrders Function to orderController.js",
        titleDescription:
          "Create a function for admins to fetch all orders with pagination, including user and product details. This powers admin dashboards for order management.",
        sections: [
          {
            subtitleDescription: "Define the getAllOrders Function",
            descriptions: [
              "Add an async function named getAllOrders with req, res, next parameters.",
              "Use a try-catch block.",
            ],
          },
          {
            subtitleDescription: "Extract Pagination Parameters",
            descriptions: [
              "Extract page (default 1) and limit (default 10) from req.query.",
            ],
          },
          {
            subtitleDescription: "Query All Orders",
            descriptions: [
              "Use Order.find to get all orders, sort by createdAt descending, skip for pagination, and limit results.",
              "Populate items.productId with name, images, price, and user with name, email.",
            ],
          },
          {
            subtitleDescription: "Count Total Orders",
            descriptions: [
              "Use Order.countDocuments to count all orders.",
              "Calculate totalPages for pagination.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Send a JSON response with orders and pagination details.",
              "Pass errors to next.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 18: Update orderRoutes.js for Admin GET /api/orders/all",
        titleDescription:
          "Add a GET route for admins to list all orders, protected by auth and admin middleware. This separates admin access from user-specific order listing.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Import getAllOrders from orderController.js.",
              "Ensure authMiddleware and adminMiddleware are included.",
            ],
          },
          {
            subtitleDescription: "Add the Admin GET Route",
            descriptions: [
              "Add a GET route for '/all' with authMiddleware and adminMiddleware, followed by getAllOrders.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 19: Test GET /api/orders/all with Thunder Client",
        titleDescription:
          "Test the admin-only endpoint to ensure all orders are listed with pagination. This confirms admin access and comprehensive order data.",
        sections: [
          {
            subtitleDescription: "Get an Admin Token",
            descriptions: [
              "Use the admin token from previous steps or log in again.",
            ],
          },
          {
            subtitleDescription: "Send the GET Request",
            descriptions: [
              "Create a GET request to http://localhost:5001/api/orders/all?page=1&limit=5 with the Authorization header.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect a 200 status with all orders, including populated user and product data.",
              "Verify pagination details like total and totalPages.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Use a non-admin token, expect 403 with ‘Admin access required’.",
              "Omit the Authorization header, expect 401 with ‘No token provided or invalid format’.",
              "If no orders exist, expect an empty orders array with total: 0.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 20: Troubleshoot Common Issues",
        titleDescription:
          "Learn to fix common problems with order endpoints to ensure they work smoothly. This helps beginners debug issues like authentication or validation errors.",
        sections: [
          {
            subtitleDescription: "404 Order Not Found",
            descriptions: [
              "Verify order IDs exist by checking GET /api/orders results.",
              "Ensure route paths in orderRoutes.js are correct (e.g., '/:id' for GET, PATCH, DELETE).",
            ],
          },
          {
            subtitleDescription: "401 Unauthorized Errors",
            descriptions: [
              "Check that the Authorization header uses ‘Bearer <token>’ with a valid token.",
              "Confirm JWT_SECRET in .env matches the token’s signature.",
            ],
          },
          {
            subtitleDescription: "403 Forbidden Errors",
            descriptions: [
              "Verify the user has role: 'admin' in MongoDB for admin routes.",
              "Ensure adminMiddleware is applied to PATCH, DELETE, and GET /all routes.",
            ],
          },
          {
            subtitleDescription: "Validation or Database Issues",
            descriptions: [
              "For POST, verify items, paymentMethod, and shippingAddress are sent correctly.",
              "Check MONGO_URI in .env and confirm MongoDB is running (look for ‘MongoDB Connected Successfully’ in logs).",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/h3698f?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom15,    videoLink: "",
  },
  {
    taskId: "ecom16",
    taskTitle: "Add Product Rating Management Endpoints",
    introduction:
      "In this lesson, you’ll extend your e-commerce backend by adding endpoints for users to rate products, edit their ratings, view paginated and filtered ratings, and delete their own ratings. You’ll update the product controller with new functions, secure routes with authentication, and test with Thunder Client to ensure only authenticated users can interact with ratings. This builds on your existing product CRUD operations from task ecom15, focusing on enhancing user engagement through reviews while maintaining data integrity and preventing abuse like duplicate ratings.",
    steps: [
      {
        stepTitle: "Step 1: Add addRating Function to productController.js",
        titleDescription:
          "Create a function that lets authenticated users add a rating and comment to a product, preventing duplicates and updating averages automatically. This encourages genuine user feedback on products and improves trust.",
        sections: [
          {
            subtitleDescription: "Open the Controller File",
            descriptions: [
              "Navigate to the controllers directory in your server folder and open productController.js, where existing functions like createProduct and updateProduct are already defined for product management.",
            ],
          },
          {
            subtitleDescription: "Define the addRating Function",
            descriptions: [
              "Add a new async function named addRating that takes req, res, and next as parameters to handle asynchronous database operations.",
              "Wrap the entire logic inside a try-catch block to gracefully handle potential errors like invalid data or server issues.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "Extract the rating and optional comment from req.body to capture the user's feedback input from the client request.",
              "Check if the rating field is provided; if missing, return a 400 Bad Request error with a clear message to inform the client.",
            ],
          },
          {
            subtitleDescription: "Find the Product",
            descriptions: [
              "Use Product.findById method with req.params.id to locate the specific product in the MongoDB database by its unique identifier.",
              "If the product is not found, send a 404 Not Found error to prevent operations on non-existent items.",
            ],
          },
          {
            subtitleDescription: "Check for Existing Rating",
            descriptions: [
              "Iterate through the product's ratings array using some method to check if the current user (identified by req.user.id from JWT) has already submitted a rating.",
              "If a duplicate is detected, return a 400 error to enforce one rating per user and maintain review integrity.",
            ],
          },
          {
            subtitleDescription: "Add the Rating",
            descriptions: [
              "Push a new object into the product's ratings array, including the user ID, rating value, comment, and a timestamp for when it was created.",
            ],
          },
          {
            subtitleDescription: "Update Review Stats",
            descriptions: [
              "Update the numReviews field to reflect the new total count by setting it to the length of the ratings array.",
              "Recalculate averageRating by summing all rating values using reduce and dividing by the number of reviews for accurate display.",
            ],
          },
          {
            subtitleDescription: "Save and Respond",
            descriptions: [
              "Save the modified product document back to MongoDB using the save method to persist the changes permanently.",
              "Send a 201 Created status response with the updated product object to confirm success to the client application.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add editRating Function to productController.js",
        titleDescription:
          "Build a function for authenticated users to edit their existing rating and comment on a product, recalculating the average rating afterward. This allows users to refine their feedback over time.",
        sections: [
          {
            subtitleDescription: "Define the editRating Function",
            descriptions: [
              "Add another async function named editRating below the addRating one, using req, res, next parameters for consistency.",
              "Enclose the logic in a try-catch block to catch and forward any errors to the global error handler middleware.",
            ],
          },
          {
            subtitleDescription: "Validate Input",
            descriptions: [
              "Pull out rating and optional comment from req.body; enforce that rating is present or return 400 error with explanatory message.",
            ],
          },
          {
            subtitleDescription: "Find Product and User Rating",
            descriptions: [
              "Query the database with Product.findById to retrieve the product; respond with 404 if it doesn't exist in the collection.",
              "Search within the ratings array using find to locate the specific entry matching req.user.id; if absent, send 404 error.",
            ],
          },
          {
            subtitleDescription: "Update the Rating",
            descriptions: [
              "Modify the found rating object's properties: set new rating value, update comment if provided or clear it, and refresh the timestamp.",
            ],
          },
          {
            subtitleDescription: "Recalculate Stats",
            descriptions: [
              "Set numReviews to the current ratings array length to keep the count accurate after any potential changes.",
              "Recompute averageRating by reducing the array to sum ratings and dividing by numReviews to reflect the updated average.",
            ],
          },
          {
            subtitleDescription: "Save and Respond",
            descriptions: [
              "Persist the changes by calling save on the product instance to update the MongoDB document accordingly.",
              "Return a 200 OK response including the full updated product to provide immediate feedback to the user.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 3: Add getProductRatings Function to productController.js",
        titleDescription:
          "Create a function to fetch, paginate, filter, and sort a product's ratings for display, populating user details. This helps shoppers make informed decisions based on reviews.",
        sections: [
          {
            subtitleDescription: "Define the getProductRatings Function",
            descriptions: [
              "Introduce an async function called getProductRatings with standard req, res, next parameters for handling the retrieval process.",
              "Use a try-catch structure to manage errors such as invalid queries or database connectivity problems.",
            ],
          },
          {
            subtitleDescription: "Extract Query Parameters",
            descriptions: [
              "Destructure page, limit, sortBy, minRating, and maxRating from req.query, providing defaults like page 1 and limit 10 for usability.",
            ],
          },
          {
            subtitleDescription: "Find and Populate Product",
            descriptions: [
              "Locate the product using findById and populate the ratings.user field with name and email for richer review display; 404 if missing.",
              "This enriches the data without additional queries.",
            ],
          },
          {
            subtitleDescription: "Filter and Sort Ratings",
            descriptions: [
              "Create a copy of the ratings array; apply filters for minRating and maxRating if specified to narrow down results.",
              "Split sortBy into field and order; validate against allowed fields like rating or createdAt, then sort the array in memory accordingly.",
            ],
          },
          {
            subtitleDescription: "Paginate and Format",
            descriptions: [
              "Determine total ratings count after filtering, then slice the array based on page and limit for pagination control.",
              "Map the sliced ratings to a clean format including _id, user details, rating, comment, and createdAt for client consumption.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Respond with JSON containing the formatted ratings and pagination metadata like total and totalPages for frontend navigation.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add deleteRating Function to productController.js",
        titleDescription:
          "Implement a function allowing users to remove their own rating from a product, adjusting review counts and averages. This empowers users to withdraw feedback if needed.",
        sections: [
          {
            subtitleDescription: "Define the deleteRating Function",
            descriptions: [
              "Add an async function named deleteRating, accepting req, res, next to manage the deletion workflow.",
              "Implement try-catch to handle exceptions like non-existent ratings or save failures.",
            ],
          },
          {
            subtitleDescription: "Find Product and Rating",
            descriptions: [
              "Retrieve the product with findById using the ID from params; return 404 if the product cannot be located.",
              "Use findIndex on ratings to get the position of the user's rating via req.user.id; 404 if no match is found.",
            ],
          },
          {
            subtitleDescription: "Remove and Update",
            descriptions: [
              "Remove the rating at the found index using splice to alter the array directly on the product document.",
              "Update numReviews to the new array length; recalculate averageRating or set to 0 if ratings are now empty.",
            ],
          },
          {
            subtitleDescription: "Save and Respond",
            descriptions: [
              "Call save on the product to commit the removal and updates to the database persistently.",
              "Send a 200 response with the modified product to confirm the deletion was successful.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Update productRoutes.js for Rating Routes",
        titleDescription:
          "Add new routes for all rating actions on products, securing user-specific ones with authMiddleware. This organizes endpoints like /:id/ratings for review management.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "In productRoutes.js, expand the import statement to include addRating, editRating, getProductRatings, and deleteRating from the controller file.",
            ],
          },
          {
            subtitleDescription: "Add Rating Routes",
            descriptions: [
              "Define a POST route for '/:id/ratings' protected by authMiddleware, linking to addRating for creating new reviews.",
              "Set up a PATCH route for '/:id/ratings' with authMiddleware and editRating to allow modifications to existing ratings.",
              "Add a GET route for '/:id/ratings' directly to getProductRatings, making it public for viewing without authentication.",
              "Create a DELETE route for '/:id/ratings' secured with authMiddleware, calling deleteRating for removal operations.",
            ],
          },
          {
            subtitleDescription: "Verify Export",
            descriptions: [
              "Double-check that the router instance is exported as default to ensure it can be mounted in the main server file.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Verify server.js Mounting",
        titleDescription:
          "Confirm that the updated product routes are properly mounted in the main server file to activate the new rating endpoints under /api/products base path.",
        sections: [
          {
            subtitleDescription: "Check Import and Use",
            descriptions: [
              "Open server.js and verify the import of productRoutes from the routes directory is present and unchanged.",
              "Ensure app.use('/api/products', productRoutes) is called after middleware setup to route all product-related requests correctly.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 7: Test POST /api/products/:id/ratings with Thunder Client",
        titleDescription:
          "Test the rating creation endpoint to verify authenticated users can add feedback, averages update correctly, and security measures work. This ensures the review system functions as expected.",
        sections: [
          {
            subtitleDescription: "Get User Token and Product ID",
            descriptions: [
              "Perform a login request to /api/auth/login endpoint to obtain a valid JWT accessToken for an authenticated user session.",
              "Query GET /api/products to retrieve a list and copy a valid product _id for use in the rating submission.",
            ],
          },
          {
            subtitleDescription: "Send POST Request",
            descriptions: [
              "In Thunder Client, set up a POST to http://localhost:5001/api/products/<id>/ratings, adding Authorization header with Bearer token.",
              'Provide a JSON body containing rating (e.g., 5) and optional comment like "Excellent product quality!".',
            ],
          },
          {
            subtitleDescription: "Check Success",
            descriptions: [
              "Expect a 201 Created status with the response including the product showing updated averageRating and numReviews incremented to 1.",
            ],
          },
          {
            subtitleDescription: "Test Errors",
            descriptions: [
              "Omit rating field: receive 400 with 'Rating is required' message to enforce input validation.",
              "Use invalid product ID: get 404 error indicating product not found.",
              "Attempt duplicate rating: 400 error for 'already rated' to prevent multiple submissions.",
              "No authentication token: 401 unauthorized access denial.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 8: Test PATCH /api/products/:id/ratings with Thunder Client",
        titleDescription:
          "Test editing an existing rating to confirm users can update their feedback and the product's average recalculates accurately afterward.",
        sections: [
          {
            subtitleDescription: "Use Existing Setup",
            descriptions: [
              "Reuse the same user accessToken and product ID from the previous add rating test for continuity.",
            ],
          },
          {
            subtitleDescription: "Send PATCH Request",
            descriptions: [
              "Configure a PATCH request to /api/products/<id>/ratings with the Bearer token in headers.",
              "Include JSON body with updated rating like 4 and a new comment if desired.",
            ],
          },
          {
            subtitleDescription: "Check Success",
            descriptions: [
              "Anticipate a 200 OK response containing the product with the revised averageRating reflecting the change.",
            ],
          },
          {
            subtitleDescription: "Test Errors",
            descriptions: [
              "If no prior rating exists: expect 404 'Rating not found for this user'.",
              "Without token: receive 401 error to enforce authentication.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 9: Test GET /api/products/:id/ratings with Thunder Client",
        titleDescription:
          "Test retrieving product ratings with various query parameters to ensure pagination, sorting, and filtering work for informative display to all visitors.",
        sections: [
          {
            subtitleDescription: "Send GET Request",
            descriptions: [
              "Create a GET request to /api/products/<id>/ratings adding queries like ?page=1&limit=5&sortBy=rating:desc&minRating=4.",
              "No authorization header required since this is a public read operation for reviews.",
            ],
          },
          {
            subtitleDescription: "Check Success",
            descriptions: [
              "Expect 200 OK with JSON including paginated ratings array, populated user info, and accurate pagination metadata.",
            ],
          },
          {
            subtitleDescription: "Test Errors",
            descriptions: [
              "Invalid product ID: returns 404 with 'Product not found' to handle bad requests gracefully.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 10: Test DELETE /api/products/:id/ratings with Thunder Client",
        titleDescription:
          "Test removing a rating to verify that user reviews can be deleted and the product's stats like average and count update correctly.",
        sections: [
          {
            subtitleDescription: "Send DELETE Request",
            descriptions: [
              "Set up a DELETE to /api/products/<id>/ratings including the Authorization Bearer token for user verification.",
            ],
          },
          {
            subtitleDescription: "Check Success",
            descriptions: [
              "Look for 200 response with product showing numReviews decreased and averageRating reset to 0 if no ratings remain.",
            ],
          },
          {
            subtitleDescription: "Test Errors",
            descriptions: [
              "No existing rating: 404 'Rating not found for this user'.",
              "Missing token: 401 unauthorized to protect the action.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Troubleshoot Common Issues",
        titleDescription:
          "Identify and resolve common problems that may arise with the new rating features, such as calculation errors or middleware issues.",
        sections: [
          {
            subtitleDescription: "Rating Not Updating Average",
            descriptions: [
              "Inspect the reduce function logic for summing ratings and ensure save is called after modifications to persist changes.",
            ],
          },
          {
            subtitleDescription: "Auth Issues",
            descriptions: [
              "Confirm authMiddleware correctly sets req.user.id from JWT token validation in the request pipeline.",
            ],
          },
          {
            subtitleDescription: "Pagination Errors",
            descriptions: [
              "Verify the slice method calculations for page and limit, and that defaults are applied when queries are omitted.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/6y7qx9?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom16,    videoLink: "",
  },

  {
    taskId: "ecom17",
    taskTitle: "Implement Cart Management Endpoints",
    introduction:
      "In this lesson, you’ll create a full cart management system for your e-commerce backend, allowing authenticated users to fetch or create their cart, add products, update quantities, remove items, or clear the cart entirely. You’ll build the cart controller with functions for these operations, secure routes with authentication middleware, and test them using Thunder Client. This extends the Cart model from task ecom15, ensuring secure, user-specific cart operations with stock validation and populated product details for a seamless shopping experience.",
    steps: [
      {
        stepTitle: "Step 1: Review Cart Model in Cart.js",
        titleDescription:
          "Understand the Cart model’s structure to ensure proper integration with controller logic, defining how user carts are stored and managed in MongoDB for efficient shopping.",
        sections: [
          {
            subtitleDescription: "Locate and Examine Cart.js",
            descriptions: [
              "Open server/models/Cart.js in your project to review the Mongoose schema defining cart documents.",
              "Note the user field with unique and index properties for fast, single-cart-per-user lookups in the database.",
            ],
          },
          {
            subtitleDescription: "Analyze CartItemSchema",
            descriptions: [
              "Check the embedded CartItemSchema with productId referencing the Product model, quantity (minimum 1), and addedAt timestamp for tracking.",
              "This sub-schema keeps cart items lightweight without separate IDs, ideal for nesting within the main cart document.",
            ],
          },
          {
            subtitleDescription: "Verify Pre-Save Hook",
            descriptions: [
              "Observe the pre-save hook that automatically updates the updatedAt field every time the cart is saved.",
              "This ensures timestamps reflect the latest changes without requiring manual updates in controller code.",
            ],
          },
          {
            subtitleDescription: "Confirm MongoDB Connection",
            descriptions: [
              "In server.js, verify mongoose.connect uses the MONGO_URI from your .env file to connect to MongoDB.",
              "Check server logs for 'MongoDB Connected Successfully' to confirm the database is accessible for Cart operations.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 2: Create getOrCreateCart Function in cartController.js",
        titleDescription:
          "Build a function to fetch a user’s cart or create an empty one using upsert, populating product details for the UI. This ensures users always have a cart to work with securely.",
        sections: [
          {
            subtitleDescription: "Create cartController.js",
            descriptions: [
              "In the server/controllers directory, create a new file named cartController.js to house cart-related logic.",
              "This organizes all cart functions in one place for maintainability.",
            ],
          },
          {
            subtitleDescription: "Define getOrCreateCart Function",
            descriptions: [
              "Add an async function named getOrCreateCart with req, res, next parameters to handle asynchronous MongoDB queries.",
              "Wrap the logic in a try-catch block to safely handle errors like database failures or invalid user data.",
            ],
          },
          {
            subtitleDescription: "Import Models",
            descriptions: [
              "Import the Cart model from '../models/Cart.js' to interact with cart documents in MongoDB.",
              "Import the Product model from '../models/Product.js' for future validations, such as stock checks in later functions.",
            ],
          },
          {
            subtitleDescription: "Find or Create Cart",
            descriptions: [
              "Use Cart.findOneAndUpdate to query for a cart matching req.user.id from auth middleware, ensuring user-specific access.",
              "Set $setOnInsert to initialize an empty items array if creating a new cart, with upsert: true to create if missing.",
            ],
          },
          {
            subtitleDescription: "Populate Product Details",
            descriptions: [
              "Chain populate to items.productId, selecting name, price, images, and stock fields to enrich the response with product data.",
              "Use options new: true and setDefaultsOnInsert: true to return the updated cart and apply schema defaults like updatedAt.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Return a 200 OK status with the populated cart in JSON format to provide the frontend with the user’s cart.",
              "Pass any errors to next for centralized error handling by the app’s middleware.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add addToCart Function to cartController.js",
        titleDescription:
          "Create a function to add a product to the user’s cart or increment its quantity, validating product existence and stock. This enables the core 'Add to Cart' functionality securely.",
        sections: [
          {
            subtitleDescription: "Append to cartController.js",
            descriptions: [
              "Open server/controllers/cartController.js and add the addToCart function below getOrCreateCart for logical organization.",
            ],
          },
          {
            subtitleDescription: "Define addToCart Function",
            descriptions: [
              "Create an async function named addToCart with req, res, next to handle database operations and potential errors.",
              "Use a try-catch block to catch issues like invalid inputs or database connection problems safely.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "Extract productId and quantity (defaulting to 1) from req.body to get the product and amount the user wants to add.",
              "Ensure productId is provided and quantity is at least 1; return a 400 error if validation fails.",
            ],
          },
          {
            subtitleDescription: "Verify Product Existence",
            descriptions: [
              "Query Product.findById with productId, selecting only the stock field to check if the product exists and has inventory.",
              "If the product is not found, return a 404 error to prevent adding non-existent items to the cart.",
            ],
          },
          {
            subtitleDescription: "Find User’s Cart",
            descriptions: [
              "Use Cart.findOne to locate the user’s cart by matching user field with req.user.id from auth middleware.",
              "If no cart exists (unlikely due to upsert), return a 404 error for robustness.",
            ],
          },
          {
            subtitleDescription: "Handle Existing or New Item",
            descriptions: [
              "Check if productId exists in cart.items using findIndex; if found, increment quantity; else, push a new item with addedAt timestamp.",
              "Validate total quantity against product stock; return a 400 error if insufficient to avoid overselling inventory.",
            ],
          },
          {
            subtitleDescription: "Save and Populate",
            descriptions: [
              "Save the cart with save to persist changes, triggering the pre-save hook to update the updatedAt field.",
              "Populate items.productId with name, price, images, and stock for a detailed response to the frontend.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Return a 200 OK status with the populated cart in JSON to confirm the addition to the client.",
              "Forward any errors to next for consistent error handling across the application.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 4: Add updateCartItemQty Function to cartController.js",
        titleDescription:
          "Implement a function to update a cart item’s quantity or remove it if set to 0, ensuring stock validation and populated data. This allows flexible cart adjustments by users.",
        sections: [
          {
            subtitleDescription: "Append to cartController.js",
            descriptions: [
              "Add updateCartItemQty to server/controllers/cartController.js below addToCart to maintain a clear function order.",
            ],
          },
          {
            subtitleDescription: "Define updateCartItemQty Function",
            descriptions: [
              "Define an async function named updateCartItemQty with req, res, next for handling async operations and errors.",
              "Enclose logic in a try-catch block to manage issues like invalid IDs or stock shortages safely.",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Input",
            descriptions: [
              "Extract productId and quantity from req.body; ensure productId exists and quantity is non-negative, else return 400 error.",
            ],
          },
          {
            subtitleDescription: "Verify Product and Stock",
            descriptions: [
              "Fetch the product by ID, selecting stock to confirm it exists and has enough inventory for the requested quantity.",
              "Return 404 if product is missing; return 400 if stock is insufficient to prevent overselling.",
            ],
          },
          {
            subtitleDescription: "Find and Update Cart",
            descriptions: [
              "Locate the user’s cart with Cart.findOne using req.user.id; return 404 if not found for safety.",
              "Find the item’s index in cart.items; if absent, return 404. Update quantity or remove item if quantity is 0 using splice.",
            ],
          },
          {
            subtitleDescription: "Save and Populate",
            descriptions: [
              "Save the cart to update the database, triggering the pre-save hook to refresh the updatedAt timestamp automatically.",
              "Populate items.productId with name, price, images, and stock for a complete client response.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Respond with 200 status and the updated, populated cart in JSON to reflect the changes made.",
              "Pass errors to next for centralized error handling and logging.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add removeFromCart Function to cartController.js",
        titleDescription:
          "Create a function to remove a specific item by productId or clear all items if no ID is provided, ensuring secure updates. This completes the cart CRUD functionality.",
        sections: [
          {
            subtitleDescription: "Append to cartController.js",
            descriptions: [
              "Add removeFromCart to server/controllers/cartController.js below updateCartItemQty to keep functions logically organized.",
            ],
          },
          {
            subtitleDescription: "Define removeFromCart Function",
            descriptions: [
              "Define an async function named removeFromCart with req, res, next to handle asynchronous operations and potential errors.",
              "Use a try-catch block to catch issues like invalid inputs or database connection failures.",
            ],
          },
          {
            subtitleDescription: "Extract Input",
            descriptions: [
              "Extract productId from req.body; it’s optional, as an empty body signals a request to clear all cart items.",
            ],
          },
          {
            subtitleDescription: "Find User’s Cart",
            descriptions: [
              "Use Cart.findOne with req.user.id to retrieve the user’s cart; return 404 if not found (rare due to upsert).",
            ],
          },
          {
            subtitleDescription: "Handle Removal",
            descriptions: [
              "If productId is provided, verify the item exists in cart.items using some; return 404 if not found.",
              "Remove the specific item with filter or set items to an empty array if no productId is provided to clear the cart.",
            ],
          },
          {
            subtitleDescription: "Save and Populate",
            descriptions: [
              "Save the cart to persist changes, letting the pre-save hook update the updatedAt timestamp automatically.",
              "Populate remaining items.productId with name, price, images, and stock for a detailed response.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Return a 200 status with the updated, populated cart to confirm the removal or clearing action.",
              "Forward errors to next for consistent error handling across the app.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Set Up cartRoutes.js for Cart Endpoints",
        titleDescription:
          "Create and configure cart routes with authMiddleware for secure access, adding GET, POST, PATCH, and DELETE routes. This connects controller logic to API endpoints.",
        sections: [
          {
            subtitleDescription: "Create cartRoutes.js",
            descriptions: [
              "In the server/routes directory, create a new file named cartRoutes.js to define all cart-related API routes.",
            ],
          },
          {
            subtitleDescription: "Import Dependencies",
            descriptions: [
              "Import express to create the router, getOrCreateCart, addToCart, updateCartItemQty, and removeFromCart from cartController.js.",
              "Import authMiddleware from '../middleware/authMiddleware.js' to secure routes with JWT authentication.",
            ],
          },
          {
            subtitleDescription: "Define Routes",
            descriptions: [
              "Create an Express router and apply authMiddleware globally with router.use to secure all cart endpoints.",
              "Add GET '/' route for getOrCreateCart, POST '/' for addToCart, PATCH '/' for updateCartItemQty, and DELETE '/' for removeFromCart.",
            ],
          },
          {
            subtitleDescription: "Export Router",
            descriptions: [
              "Export the router as default to allow mounting in server.js, enabling /api/cart endpoints.",
              "This ensures all cart routes are accessible and protected by authentication.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Verify server.js Route Mounting",
        titleDescription:
          "Ensure cart routes are mounted in the main server file to activate /api/cart endpoints for client requests. This integrates the cart system into the application.",
        sections: [
          {
            subtitleDescription: "Check Imports",
            descriptions: [
              "In server.js, verify the import of cartRoutes from './routes/cartRoutes.js' is correctly set up.",
              "This connects the cart routes to the Express application for routing.",
            ],
          },
          {
            subtitleDescription: "Confirm Mounting",
            descriptions: [
              "Ensure app.use('/api/cart', cartRoutes) is present after middleware like express.json in server.js.",
              "This makes endpoints like /api/cart available for GET, POST, PATCH, and DELETE requests.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test GET /api/cart with Thunder Client",
        titleDescription:
          "Test fetching or creating the user’s cart to verify upsert, population, and authentication. This ensures the cart is ready for frontend integration.",
        sections: [
          {
            subtitleDescription: "Prepare Prerequisites",
            descriptions: [
              "Send POST to http://localhost:5001/api/auth/login with valid email and password; copy the accessToken from the response.",
              "Start the server with 'cd server; npm start' to ensure the API is running.",
            ],
          },
          {
            subtitleDescription: "Send GET Request",
            descriptions: [
              "Create a GET request to http://localhost:5001/api/cart with Authorization: Bearer <accessToken> in headers.",
              "No body is required for this request, as it fetches or creates the cart.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect 200 OK with a cart object containing _id, user, items (empty for new carts), and updatedAt timestamp.",
              "If items exist from prior additions, verify populated product details (name, price, images, stock) and recent updatedAt.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Omit Authorization header: expect 401 with 'No token provided or invalid format'.",
              "Use invalid token: expect 403 with 'Invalid token' message.",
              "Tamper with JWT user data: expect potential 500 error if user ID mismatches database.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Test POST /api/cart with Thunder Client",
        titleDescription:
          "Test adding items to the cart to confirm product addition, quantity increments, stock validation, and populated responses. This verifies the core cart functionality.",
        sections: [
          {
            subtitleDescription: "Prepare Prerequisites",
            descriptions: [
              "Use the accessToken from login and get a product _id from GET /api/products; create a product via POST /api/products if needed (admin token).",
              "Ensure the server is running with 'cd server; npm start'.",
            ],
          },
          {
            subtitleDescription: "Send POST Request",
            descriptions: [
              'Create a POST request to http://localhost:5001/api/cart with Authorization header and JSON body like { "productId": "<id>", "quantity": 1 }.',
              "Repeat the request to test incrementing quantity of an existing item.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect 200 OK with cart containing the new item, populated product details, recent addedAt, and updatedAt timestamps.",
              "For repeated requests, verify quantity increments (e.g., to 2) and addedAt updates.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Omit productId: expect 400 with 'Valid productId and quantity required'.",
              "Use quantity < 1: expect 400 with same message.",
              "Use invalid productId: expect 404 with 'Product not found'.",
              "Request quantity exceeding stock: expect 400 with 'Insufficient stock'.",
              "No token: expect 401 with 'No token provided or invalid format'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Test PATCH /api/cart with Thunder Client",
        titleDescription:
          "Test updating cart item quantities or removing items by setting quantity to 0, ensuring stock checks and populated data. This confirms flexible cart management.",
        sections: [
          {
            subtitleDescription: "Prepare Prerequisites",
            descriptions: [
              "Use the accessToken from login and a product _id from GET /api/products.",
              "Add an item to the cart via POST /api/cart to ensure it exists for updating.",
            ],
          },
          {
            subtitleDescription: "Send PATCH Request",
            descriptions: [
              'Create a PATCH request to http://localhost:5001/api/cart with Authorization header and body like { "productId": "<id>", "quantity": 3 }.',
              'Test removal with { "productId": "<id>", "quantity": 0 }.',
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "For quantity update, expect 200 with cart showing updated quantity, refreshed addedAt, and populated product details.",
              "For quantity 0, expect 200 with item removed from items array and updatedAt refreshed.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Omit productId: expect 400 with 'Valid productId and quantity required'.",
              "Use negative quantity: expect 400 with same message.",
              "Use invalid productId: expect 404 with 'Product not found'.",
              "Use productId not in cart: expect 404 with 'Item not in cart'.",
              "Request quantity exceeding stock: expect 400 with 'Insufficient stock'.",
              "No token: expect 401 with 'No token provided or invalid format'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Test DELETE /api/cart with Thunder Client",
        titleDescription:
          "Test removing a specific item or clearing the entire cart, verifying updates and populated responses. This completes testing for robust cart CRUD operations.",
        sections: [
          {
            subtitleDescription: "Prepare Prerequisites",
            descriptions: [
              "Use the accessToken from login and a product _id from GET /api/products.",
              "Ensure the cart has at least one item added via POST /api/cart for testing removal.",
            ],
          },
          {
            subtitleDescription: "Send DELETE Request",
            descriptions: [
              "Create a DELETE request to http://localhost:5001/api/cart with Authorization header.",
              'Test specific removal with body { "productId": "<id>" }; test clearing with empty body {}.',
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "For specific removal, expect 200 with cart missing the specified item, populated remaining items, and updatedAt refreshed.",
              "For clearing, expect 200 with empty items array and updated timestamp.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "Use invalid productId: expect 404 with 'Item not in cart'.",
              "Use productId not in cart: expect 404 with same message.",
              "No token: expect 401 with 'No token provided or invalid format'.",
              "No cart (rare): expect 404 with 'Cart not found'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Troubleshoot Common Issues",
        titleDescription:
          "Resolve typical problems with cart endpoints, such as authentication failures, stock validation errors, or population issues, to ensure a smooth cart system.",
        sections: [
          {
            subtitleDescription: "Authentication Errors",
            descriptions: [
              "For 401 errors, ensure Authorization header uses 'Bearer <token>' and JWT_SECRET in .env matches the token’s signature.",
              "Verify authMiddleware sets req.user.id correctly from the decoded JWT token in the request pipeline.",
            ],
          },
          {
            subtitleDescription: "Stock Validation Issues",
            descriptions: [
              "For 400 'Insufficient stock', check Product.findById stock selection and ensure quantity comparisons are correct in controller logic.",
              "Confirm product stock is updated in MongoDB via admin endpoints if stock issues persist unexpectedly.",
            ],
          },
          {
            subtitleDescription: "Population Failures",
            descriptions: [
              "If populated fields like name, price, images, or stock are missing, verify populate syntax uses correct field paths.",
              "Ensure Product collection in MongoDB has valid entries matching productId references in cart items.",
            ],
          },
          {
            subtitleDescription: "Cart Not Found",
            descriptions: [
              "For 404 'Cart not found' (rare due to upsert), check Cart.findOne query uses req.user.id correctly.",
              "Confirm MongoDB connection is active and Cart model is registered properly in server.js.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/4lclrw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom17,    videoLink: "",
  },
  {
    taskId: "ecom18",
    taskTitle: "Enhance Authentication Security and Token Management",
    introduction:
      "In this lesson, you’ll enhance your e-commerce backend’s authentication system by adding input validation, rate limiting, and a refresh token mechanism. You’ll update the server setup with security middleware, improve the auth controller with validation and refresh token storage, and add a new RefreshToken model. Building on task ecom15’s authentication foundation, these changes secure user registration, login, and session management, ensuring robust protection against common vulnerabilities and improved user experience.",
    steps: [
      {
        stepTitle: "Step 1: Create RefreshToken Model in RefreshToken.js",
        titleDescription:
          "Build a new Mongoose model to store refresh tokens in MongoDB, enabling secure token rotation and session management. This ensures tokens are tracked and validated.",
        sections: [
          {
            subtitleDescription: "Create RefreshToken.js",
            descriptions: [
              "In the server/models directory, create a new file named RefreshToken.js to define the refresh token schema.",
            ],
          },
          {
            subtitleDescription: "Define Schema",
            descriptions: [
              "Import mongoose to create a schema for storing refresh tokens in MongoDB.",
              "Define a schema with user (ObjectId referencing User, required), token (required, unique string), and expiresAt (Date, defaulting to 7 days from creation).",
            ],
          },
          {
            subtitleDescription: "Export Model",
            descriptions: [
              "Export the schema as a Mongoose model named 'RefreshToken' to enable database operations for token storage and validation.",
            ],
          },
          {
            subtitleDescription: "Verify MongoDB Connection",
            descriptions: [
              "Ensure server.js includes mongoose.connect with your MONGO_URI from .env to connect to MongoDB.",
              "Check server logs for 'MongoDB Connected Successfully' to confirm database access for the new model.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add Helmet Middleware to server.js",
        titleDescription:
          "Integrate the Helmet middleware to secure HTTP headers, protecting against common web vulnerabilities. This enhances overall server security.",
        sections: [
          {
            subtitleDescription: "Install Helmet",
            descriptions: [
              "Run 'npm install helmet' in the server directory to add the Helmet package to your project dependencies.",
            ],
          },
          {
            subtitleDescription: "Update server.js Imports",
            descriptions: [
              "Open server/server.js and add an import for helmet from 'helmet' at the top with other imports.",
            ],
          },
          {
            subtitleDescription: "Apply Helmet Middleware",
            descriptions: [
              "Add app.use(helmet()) before other middleware like morgan and cors to set secure HTTP headers early in the request pipeline.",
              "This configures headers like Content-Security-Policy and X-XSS-Protection to mitigate attacks.",
            ],
          },
          {
            subtitleDescription: "Verify Middleware Order",
            descriptions: [
              "Ensure helmet is applied before cors, express.json, and routes to maximize security coverage across all requests.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Enhance Error Handling in server.js",
        titleDescription:
          "Upgrade the global error middleware to handle specific error types with detailed logging and user-friendly messages. This improves debugging and user feedback.",
        sections: [
          {
            subtitleDescription: "Locate Error Middleware",
            descriptions: [
              "In server/server.js, find the existing error middleware handling generic 500 errors.",
            ],
          },
          {
            subtitleDescription: "Add Detailed Logging",
            descriptions: [
              "Update console.error to include a timestamp, error message, and stack trace for better debugging.",
              "Use template literals to format the log as '[<ISO timestamp>] Error: <message>\nStack: <stack>'.",
            ],
          },
          {
            subtitleDescription: "Handle Specific Errors",
            descriptions: [
              "Add conditions to check for ValidationError (400, invalid input), UnauthorizedError (401, unauthorized access), and CastError (400, invalid ID format).",
              "Return specific status codes and messages for each error type to provide clear feedback to clients.",
            ],
          },
          {
            subtitleDescription: "Fallback to Generic Error",
            descriptions: [
              "Keep a fallback res.status(500).json for unhandled errors, ensuring all errors are caught and responded to appropriately.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add Input Validation to authController.js",
        titleDescription:
          "Integrate express-validator for register and login functions to enforce strict input rules. This prevents invalid data from reaching the database.",
        sections: [
          {
            subtitleDescription: "Install express-validator",
            descriptions: [
              "Run 'npm install express-validator' in the server directory to add the validation library to your project.",
            ],
          },
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "In server/controllers/authController.js, import body and validationResult from 'express-validator' for validation middleware.",
            ],
          },
          {
            subtitleDescription: "Refactor Register Function",
            descriptions: [
              "Convert register to an array, starting with validation middleware for name (not empty), email (valid format, normalized), and password (minimum 6 characters).",
              "In the handler, check validationResult; return 400 with the first error message if validation fails.",
            ],
          },
          {
            subtitleDescription: "Refactor Login Function",
            descriptions: [
              "Convert login to an array with validation middleware for email (valid format, normalized) and password (not empty).",
              "Check validationResult in the handler; return 400 with the first error message if inputs are invalid.",
            ],
          },
          {
            subtitleDescription: "Preserve Existing Logic",
            descriptions: [
              "Keep the existing logic for user creation, email checks, password hashing, and token generation unchanged after validation passes.",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 5: Add Refresh Token Functionality to authController.js",
        titleDescription:
          "Implement a refresh endpoint to issue new access and refresh tokens, storing refresh tokens in the database for validation. This enables secure session continuation.",
        sections: [
          {
            subtitleDescription: "Import RefreshToken Model",
            descriptions: [
              "In server/controllers/authController.js, import the RefreshToken model from '../models/RefreshToken.js' for token storage.",
            ],
          },
          {
            subtitleDescription: "Update generateTokens Function",
            descriptions: [
              "Make generateTokens async and add await RefreshToken.create to store the new refresh token with user ID in the database.",
              "Keep existing access and refresh token generation using jwt.sign with JWT_SECRET and JWT_REFRESH_SECRET.",
            ],
          },
          {
            subtitleDescription: "Create refresh Function",
            descriptions: [
              "Add an async function named refresh with req, res, next to handle token refresh requests.",
              "Extract refreshToken from req.cookies; return 401 if missing to enforce token presence.",
            ],
          },
          {
            subtitleDescription: "Validate Refresh Token",
            descriptions: [
              "Query RefreshToken.findOne to check if the token exists and is not expired; return 401 if invalid or expired.",
              "Verify the token with jwt.verify using JWT_REFRESH_SECRET and find the user by payload ID; return 401 if user not found.",
            ],
          },
          {
            subtitleDescription: "Issue New Tokens",
            descriptions: [
              "Delete the old refresh token with RefreshToken.deleteOne to enforce single-use tokens.",
              "Generate new access and refresh tokens using generateTokens, store the new refresh token, and set it in an httpOnly cookie.",
            ],
          },
          {
            subtitleDescription: "Send Response",
            descriptions: [
              "Return a 200 response with the new accessToken and user details (id, name, email, role, addresses).",
              "Pass errors to next for centralized error handling.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Rate Limiting to authRoutes.js",
        titleDescription:
          "Apply rate limiting to authentication routes to prevent brute-force attacks, enhancing security for register, login, and refresh endpoints.",
        sections: [
          {
            subtitleDescription: "Install express-rate-limit",
            descriptions: [
              "Run 'npm install express-rate-limit' in the server directory to add the rate-limiting middleware.",
            ],
          },
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "In server/routes/authRoutes.js, import rateLimit from 'express-rate-limit' and refresh from authController.js.",
            ],
          },
          {
            subtitleDescription: "Configure Rate Limiter",
            descriptions: [
              "Create an authLimiter with windowMs set to 15 minutes and max set to 100 requests per IP.",
              "Set a message for when the limit is exceeded to inform clients to try again later.",
            ],
          },
          {
            subtitleDescription: "Apply to Routes",
            descriptions: [
              "Add authLimiter middleware to POST /register, POST /login, and POST /refresh routes before their handlers.",
              "Keep GET /me and POST /logout unchanged, as they don’t need rate limiting.",
            ],
          },
          {
            subtitleDescription: "Verify Router Export",
            descriptions: [
              "Ensure the router is exported as default to mount in server.js, enabling the updated auth routes.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Verify server.js Route Mounting",
        titleDescription:
          "Confirm that auth routes are properly mounted in the main server file to ensure /api/auth endpoints are accessible with new security features.",
        sections: [
          {
            subtitleDescription: "Check Imports",
            descriptions: [
              "In server/server.js, verify the import of authRoutes from './routes/authRoutes.js' is correct and unchanged.",
            ],
          },
          {
            subtitleDescription: "Confirm Mounting",
            descriptions: [
              "Ensure app.use('/api/auth', authRoutes) is present after middleware like helmet and express.json in server.js.",
              "This activates endpoints like /api/auth/register, /login, and /refresh with the new features.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test POST /api/auth/register with Thunder Client",
        titleDescription:
          "Test the registration endpoint to verify input validation, token generation, and refresh token storage. This ensures secure user creation.",
        sections: [
          {
            subtitleDescription: "Prepare Test Setup",
            descriptions: [
              "Start the server with 'cd server; npm start' to ensure the API is running on port 5001.",
              "Open Thunder Client and set the base URL to http://localhost:5001.",
            ],
          },
          {
            subtitleDescription: "Send POST Request",
            descriptions: [
              'Create a POST request to http://localhost:5001/api/auth/register with JSON body like { "name": "Test User", "email": "test@example.com", "password": "secure123" }.',
              "No Authorization header is needed, as registration is public.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect 201 Created with accessToken, user details (id, name, email, role, addresses), and a refreshToken cookie set.",
              "Verify in MongoDB that a RefreshToken document exists with the user’s ID and token.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              'Invalid email: { "email": "invalid", "password": "secure123" } → 400 with \'Valid email is required\'.',
              'Short password: { "password": "short" } → 400 with \'Password must be at least 6 characters\'.',
              'Missing name: { "email": "test@example.com", "password": "secure123" } → 400 with \'Name is required\'.',
              "Duplicate email: Reuse existing email → 400 with 'Email already in use'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Test POST /api/auth/login with Thunder Client",
        titleDescription:
          "Test the login endpoint to confirm input validation, authentication, and token issuance with cookie storage. This verifies secure user access.",
        sections: [
          {
            subtitleDescription: "Prepare Test Setup",
            descriptions: [
              "Ensure a user exists in MongoDB (create via POST /api/auth/register if needed).",
              "Start the server and use Thunder Client with base URL http://localhost:5001.",
            ],
          },
          {
            subtitleDescription: "Send POST Request",
            descriptions: [
              'Create a POST request to http://localhost:5001/api/auth/login with body like { "email": "test@example.com", "password": "secure123" }.',
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect 200 OK with accessToken, user details, and a refreshToken cookie set in the response.",
              "Check MongoDB for a new RefreshToken document linked to the user’s ID.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              'Invalid email format: { "email": "invalid", "password": "secure123" } → 400 with \'Valid email is required\'.',
              'Missing password: { "email": "test@example.com" } → 400 with \'Password is required\'.',
              'Wrong credentials: { "email": "test@example.com", "password": "wrong" } → 401 with \'Invalid credentials\'.',
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Test POST /api/auth/refresh with Thunder Client",
        titleDescription:
          "Test the refresh endpoint to verify new token issuance, old token invalidation, and cookie updates. This ensures secure session continuation.",
        sections: [
          {
            subtitleDescription: "Prepare Test Setup",
            descriptions: [
              "Login via POST /api/auth/login to get a refreshToken cookie and store it.",
              "Ensure the server is running and MongoDB has the corresponding RefreshToken document.",
            ],
          },
          {
            subtitleDescription: "Send POST Request",
            descriptions: [
              "Create a POST request to http://localhost:5001/api/auth/refresh with the refreshToken cookie automatically sent.",
            ],
          },
          {
            subtitleDescription: "Check Success Response",
            descriptions: [
              "Expect 200 OK with a new accessToken, user details, and a new refreshToken cookie.",
              "Verify in MongoDB that the old refresh token is deleted and a new one is stored.",
            ],
          },
          {
            subtitleDescription: "Test Error Cases",
            descriptions: [
              "No refresh token: Clear cookies → 401 with 'No refresh token provided'.",
              "Invalid token: Use fake token in cookie → 401 with 'Invalid or expired refresh token'.",
              "Expired token: Set expiresAt to past date in MongoDB → 401 with same message.",
              "Non-existent user: Delete user but keep token → 401 with 'User not found'.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Test Rate Limiting with Thunder Client",
        titleDescription:
          "Test rate limiting on auth routes to ensure protection against excessive requests, verifying the 15-minute window and 100-request limit.",
        sections: [
          {
            subtitleDescription: "Prepare Test Setup",
            descriptions: [
              "Start the server and use Thunder Client to send requests to /api/auth/register, /login, or /refresh.",
            ],
          },
          {
            subtitleDescription: "Send Multiple Requests",
            descriptions: [
              "Send over 100 POST requests to /api/auth/register within 15 minutes from the same IP (use a script or rapid manual requests).",
              "Repeat for /api/auth/login and /api/auth/refresh to test each endpoint.",
            ],
          },
          {
            subtitleDescription: "Check Rate Limit Response",
            descriptions: [
              "After exceeding 100 requests, expect a 429 response with 'Too many requests, please try again later.'.",
            ],
          },
          {
            subtitleDescription: "Verify Non-Limited Routes",
            descriptions: [
              "Send multiple requests to GET /api/auth/me and POST /api/auth/logout; confirm they are not rate-limited and respond normally.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Troubleshoot Common Issues",
        titleDescription:
          "Address potential problems with the new auth features, such as validation errors, token issues, or rate-limiting misconfigurations, to ensure a secure system.",
        sections: [
          {
            subtitleDescription: "Validation Errors",
            descriptions: [
              "For 400 errors, check express-validator middleware syntax in authController.js for correct field checks (e.g., notEmpty, isEmail).",
              "Ensure validationResult is checked before processing requests to catch all validation failures.",
            ],
          },
          {
            subtitleDescription: "Refresh Token Issues",
            descriptions: [
              "For 401 'Invalid or expired refresh token', verify RefreshToken.findOne matches the cookie and expiresAt is future-dated.",
              "Check JWT_REFRESH_SECRET in .env matches the token generation and verification process.",
            ],
          },
          {
            subtitleDescription: "Rate Limiting Problems",
            descriptions: [
              "For unexpected 429 errors, confirm authLimiter settings (windowMs, max) in authRoutes.js and test with fewer requests.",
              "Ensure only /register, /login, and /refresh routes have authLimiter applied, not /me or /logout.",
            ],
          },
          {
            subtitleDescription: "Helmet Configuration",
            descriptions: [
              "If CORS or header issues arise, verify helmet is applied before cors in server.js to avoid conflicts.",
              "Check browser console for blocked requests and adjust helmet settings if needed for your frontend.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "Node.js Basics",
      "Express Routing",
      "MongoDB with Mongoose",
      "JWT Authentication",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/lfmdkg?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom18,    videoLink: "",
  },
  {
    taskId: "ecom19",
    taskTitle: "Set Up React Routing and Layout",
    introduction:
      "In this lesson, you’ll build the core structure of your e-commerce frontend using React Router for navigation, creating a responsive layout with a Navbar and Footer that wrap all pages. You’ll define routes for all key pages like Home, Products, Cart, Login, and Admin Dashboard, and implement conditional navigation based on user login and admin status. You’ll also configure Rspack’s devServer for client-side routing and use CSS modules for styling. This establishes a solid foundation for a modern single-page application with a consistent user interface.",
    steps: [
      {
        stepTitle: "Step 1: Configure Rspack devServer for Client-Side Routing",
        titleDescription:
          "Enable historyApiFallback in Rspack config to support React Router’s client-side routing. This ensures all routes are handled by the React app instead of returning 404 errors.",
        sections: [
          {
            subtitleDescription: "Open Rspack Config",
            descriptions: [
              "Navigate to the root of your project and open rspack.config.mjs to modify the development server settings.",
            ],
          },
          {
            subtitleDescription: "Add devServer Configuration",
            descriptions: [
              "Inside the exported configuration object, add a devServer property with historyApiFallback set to true.",
              "This tells Rspack to serve index.html for all non-file requests, allowing React Router to handle routing.",
            ],
          },
          {
            subtitleDescription: "Verify Configuration",
            descriptions: [
              "Ensure the devServer object is properly nested within the main config and that no other devServer settings conflict.",
              "This enables smooth navigation without page reloads in development.",
            ],
          },
          {
            subtitleDescription: "Restart Development Server",
            descriptions: [
              "Stop and restart your development server to apply the new configuration.",
              "Check the console for any warnings or errors related to the devServer setup.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Set Up React Router in App.jsx",
        titleDescription:
          "Initialize React Router with BrowserRouter and define all application routes using Routes and Route components. This creates the navigation structure for the entire app.",
        sections: [
          {
            subtitleDescription: "Install React Router",
            descriptions: [
              "Run 'npm install react-router-dom' in your project root to add routing capabilities to your React application.",
            ],
          },
          {
            subtitleDescription: "Import Router Components",
            descriptions: [
              "In src/App.jsx, import BrowserRouter as Router, Routes, and Route from 'react-router-dom' to set up routing.",
              "Also import your layout components: Navbar and Footer from their respective paths.",
            ],
          },
          {
            subtitleDescription: "Create Page Components",
            descriptions: [
              "Create placeholder components for all pages: HomePage, ProductListPage, ProductDetailPage, CartPage, CheckoutPage, LoginPage, RegisterPage, ProfilePage, OrderDetailPage, and AdminDashboard.",
              "Each should return a simple div with the page name for now; they’ll be fleshed out later.",
            ],
          },
          {
            subtitleDescription: "Structure App Component",
            descriptions: [
              "Wrap the entire app in Router, then create a div with class 'app-container' to contain the layout.",
              "Place Navbar at the top, Routes in the middle, and Footer at the bottom to create a consistent layout.",
            ],
          },
          {
            subtitleDescription: "Define All Routes",
            descriptions: [
              "Inside Routes, define Route elements for each path: '/' (Home), '/products' (Product List), '/products/:id' (Product Detail), '/cart' (Cart), '/checkout' (Checkout), '/login' (Login), '/register' (Register), '/profile' (Profile), '/orders/:id' (Order Detail), and '/admin/dashboard' (Admin).",
              "Use the element prop to specify which component renders for each route.",
            ],
          },
          {
            subtitleDescription: "Export App",
            descriptions: [
              "Export the App component as default to be used as the entry point of your application.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Build the Navbar Component",
        titleDescription:
          "Create a responsive navigation bar with conditional links based on user authentication and admin status. This provides intuitive navigation throughout the app.",
        sections: [
          {
            subtitleDescription: "Create Navbar Component",
            descriptions: [
              "In src/components, create Navbar.jsx to handle top navigation for all pages.",
            ],
          },
          {
            subtitleDescription: "Set Up CSS Modules",
            descriptions: [
              "Create Navbar.module.css in the same directory and define styles for navbar, container, logo, links, and active states.",
              "Import all styles with * as styles from './Navbar.module.css' in the component.",
            ],
          },
          {
            subtitleDescription: "Add Logo and Links",
            descriptions: [
              "Add a NavLink to '/' with class navbar__logo displaying 'E-Shop' as the brand name.",
              "Create an unordered list for navigation links with Products always visible.",
            ],
          },
          {
            subtitleDescription: "Implement Conditional Rendering",
            descriptions: [
              "Use temporary boolean variables isLoggedIn and isAdmin (to be replaced with state later) to control link visibility.",
              "Show Cart, Profile, and conditional Admin link when logged in; show Login and Register when not logged in.",
            ],
          },
          {
            subtitleDescription: "Style Active Links",
            descriptions: [
              "Use NavLink’s className callback to apply active styles when a route is active.",
              "Combine navbar__link and navbar__link--active classes for visual feedback on current page.",
            ],
          },
          {
            subtitleDescription: "Export Navbar",
            descriptions: [
              "Export the Navbar component as default to be imported in App.jsx.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Build the Footer Component",
        titleDescription:
          "Create a simple footer with navigation links and copyright information. This provides consistent branding and utility at the bottom of every page.",
        sections: [
          {
            subtitleDescription: "Create Footer Component",
            descriptions: [
              "In src/components, create Footer.jsx to display at the bottom of all pages.",
            ],
          },
          {
            subtitleDescription: "Set Up CSS Modules",
            descriptions: [
              "Create Footer.module.css and define styles for footer, container, links list, individual links, and copyright text.",
              "Import styles with * as styles from './Footer.module.css' in the component.",
            ],
          },
          {
            subtitleDescription: "Add Navigation Links",
            descriptions: [
              "Create a div with footer__links containing an unordered list with NavLink components to Home, Products, and Contact.",
              "Style each link with the footer__link class for consistency.",
            ],
          },
          {
            subtitleDescription: "Add Copyright",
            descriptions: [
              "Add a div with footer__copyright containing a paragraph with the current year using new Date().getFullYear().",
              "Include text like 'E-Shop. All rights reserved.' for branding.",
            ],
          },
          {
            subtitleDescription: "Export Footer",
            descriptions: [
              "Export the Footer component as default to be used in the main App layout.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Verify Application Structure",
        titleDescription:
          "Ensure the complete layout renders correctly with navigation and routing. This confirms the foundation is solid before adding page logic.",
        sections: [
          {
            subtitleDescription: "Check Component Imports",
            descriptions: [
              "In App.jsx, verify all page components and layout components (Navbar, Footer) are correctly imported from their paths.",
            ],
          },
          {
            subtitleDescription: "Test Navigation",
            descriptions: [
              "Start the development server and navigate to different routes using browser URL or Navbar links.",
              "Confirm each route displays the correct placeholder component and that Navbar/Footer remain visible.",
            ],
          },
          {
            subtitleDescription: "Verify Active States",
            descriptions: [
              "Click through navigation links and ensure the active link receives the navbar__link--active style.",
              "Check that conditional links (Login/Register vs Cart/Profile) display based on the isLoggedIn flag.",
            ],
          },
          {
            subtitleDescription: "Test historyApiFallback",
            descriptions: [
              "Enter a route directly in the browser URL (e.g., /products/123) and refresh the page.",
              "Confirm the app loads correctly without a 404 error, thanks to historyApiFallback in Rspack config.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Beginner",
    authorIndex: 0,
    prerequisites: [
      "React Basics",
      "React Router",
      "CSS Modules",
      "Rspack Configuration",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/5dlmr8?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom19,    videoLink: "",
  },
  {
    taskId: "ecom20",
    taskTitle: "Implement Product Card, List, Detail, and Home Pages",
    introduction:
      "In this comprehensive lesson, you’ll build the complete product browsing experience for your e-commerce frontend. You’ll start by seeding your database with 15 realistic products, fix critical backend routing issues, then create four key components: a reusable ProductCard with interactive hover effects, a powerful ProductListPage with real-time search, filters, and pagination, a detailed ProductDetailPage with image gallery and Add to Cart, and a welcoming HomePage with hero section and featured products. Every component uses CSS Modules for scoped styling, connects to your backend API, and follows your exact color palette for brand consistency. This lesson builds on your existing cart and authentication system, delivering a professional, responsive, and fully functional product experience from landing to purchase.",
    steps: [
      {
        stepTitle: "Step 1: Seed Database with 15 Sample Products",
        titleDescription:
          "Generate 15 realistic products with unique placeholder images using a seed script to populate your MongoDB database. This provides essential data for testing all product-related pages.",
        sections: [
          {
            subtitleDescription: "Create the Seed Script File",
            descriptions: [
              "In your server directory, create a new file named seedProducts.js to define the product data and insertion logic.",
              "This script will run once to populate your database with test data.",
            ],
          },
          {
            subtitleDescription: "Set Up Required Imports",
            descriptions: [
              "Import dotenv to load environment variables from your .env file.",
              "Import connectDB to establish the MongoDB connection using your MONGO_URI.",
              "Import the Product model from './models/Product.js' to interact with the products collection.",
            ],
          },
          {
            subtitleDescription: "Define the Product Data Array",
            descriptions: [
              "Create a constant array named products containing 15 product objects.",
              "Each object should include name, description, price (2 decimal places), stock, category, and images array.",
              "Use Picsum Photos with unique seed values (e.g., product1, product2) to generate distinct placeholder images.",
              "Include a variety of categories: Electronics, Home & Kitchen, Sports & Fitness, Fashion & Accessories, Health & Nutrition.",
            ],
          },
          {
            subtitleDescription: "Implement the Seed Function",
            descriptions: [
              "Create an async function named seedProducts to handle the database operations.",
              "Wrap the logic in a try-catch block to handle any connection or insertion errors.",
              "Call connectDB() to establish the database connection before proceeding.",
            ],
          },
          {
            subtitleDescription: "Clear Existing Products (Optional)",
            descriptions: [
              "Use Product.deleteMany({}) to remove all existing products from the collection.",
              "Log a message 'Cleared existing products' to confirm the operation.",
              "This step is optional but recommended for a clean test dataset.",
            ],
          },
          {
            subtitleDescription: "Insert the New Products",
            descriptions: [
              "Use Product.insertMany(products) to add all 15 products to the database in a single operation.",
              "Store the result in a variable and log the count of successfully created products.",
              "Exit the process with code 0 on success.",
            ],
          },
          {
            subtitleDescription: "Handle Errors and Exit",
            descriptions: [
              "In the catch block, log the error message for debugging.",
              "Exit the process with code 1 to indicate failure.",
              "This ensures the script stops cleanly on any issue.",
            ],
          },
          {
            subtitleDescription: "Run the Seed Script",
            descriptions: [
              "Open your terminal in the server directory.",
              "Execute the command: node seedProducts.js",
              "Verify in MongoDB Compass or the shell that 15 products now exist in the products collection.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Fix /api/products/categories Route Conflict",
        titleDescription:
          "Add a dedicated endpoint to fetch unique product categories and resolve the critical route conflict with /:id. This enables the category filter dropdown in your product list page.",
        sections: [
          {
            subtitleDescription: "Understand the Route Conflict",
            descriptions: [
              "The current GET /:id route in productRoutes.js intercepts /categories because it matches any string after /api/products/.",
              "This causes Product.findById('categories') to throw a CastError since 'categories' is not a valid ObjectId.",
            ],
          },
          {
            subtitleDescription: "Create the getCategories Controller Function",
            descriptions: [
              "Open server/controllers/productController.js where your product CRUD functions are defined.",
              "Add a new async function named getCategories that takes req, res, next parameters.",
              "Use a try-catch block to handle potential database errors.",
            ],
          },
          {
            subtitleDescription: "Query for Unique Categories",
            descriptions: [
              "Use Product.distinct('category') to retrieve all unique category values from the products collection.",
              "Filter out any empty strings and sort the array alphabetically for consistent display.",
              "Return the categories array in a JSON response with key 'categories'.",
            ],
          },
          {
            subtitleDescription: "Update productRoutes.js Import",
            descriptions: [
              "In server/routes/productRoutes.js, add getCategories to the import statement from productController.js.",
              "Ensure it’s included alongside getProducts, getProductById, and other functions.",
            ],
          },
          {
            subtitleDescription: "Add the /categories Route",
            descriptions: [
              "Add a GET route for '/categories' that calls getCategories.",
              "Place this route BEFORE the GET '/:id' route in the file.",
              "This is critical: static routes must come before dynamic parameter routes to avoid conflicts.",
            ],
          },
          {
            subtitleDescription: "Verify Route Order",
            descriptions: [
              "Confirm the route order in productRoutes.js: /categories first, then /:id.",
              "This ensures /api/products/categories hits the correct handler and /api/products/:id works for valid product IDs.",
            ],
          },
          {
            subtitleDescription: "Test the New Endpoint",
            descriptions: [
              "Send a GET request to http://localhost:5001/api/products/categories using Thunder Client or browser.",
              "Expect a 200 response with a JSON array of unique categories (e.g., ['Electronics', 'Home & Kitchen']).",
              "Test a valid product ID (e.g., /api/products/abc123) to confirm it still works without CastError.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Fix Pagination Data Access in ProductListPage",
        titleDescription:
          "Correct the frontend code to access totalPages from the nested pagination object in the backend response. This ensures pagination controls display and function correctly.",
        sections: [
          {
            subtitleDescription: "Identify the Data Structure Mismatch",
            descriptions: [
              "Open your browser’s DevTools and go to the Network tab.",
              "Reload the /products page and inspect the GET /api/products request response.",
              "Observe that totalPages is nested inside a pagination object, not at the root level.",
            ],
          },
          {
            subtitleDescription: "Locate the Incorrect Code",
            descriptions: [
              "In src/pages/ProductListPage.jsx, find the fetchProducts useEffect function.",
              "Locate the line: setTotalPages(data.totalPages || 1);",
              "This is incorrect because data.totalPages is undefined; the correct path is data.pagination.totalPages.",
            ],
          },
          {
            subtitleDescription: "Apply the Fix",
            descriptions: [
              "Replace the incorrect line with: setTotalPages(data.pagination?.totalPages || 1);",
              "Use optional chaining (?.) to safely access the nested property and avoid runtime errors.",
              "The || 1 provides a fallback if the value is missing.",
            ],
          },
          {
            subtitleDescription: "Verify the Fix",
            descriptions: [
              "Reload the /products page in your browser.",
              "Confirm that pagination controls (page numbers, Previous/Next) now appear when there are multiple pages of products.",
              "Click through pages to ensure the correct products load and the active page is highlighted.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Create Reusable ProductCard Component",
        titleDescription:
          "Build a ProductCard component to display a single product with image, name, rating, price, and interactive hover effects. This creates a consistent, reusable card used across your app.",
        sections: [
          {
            subtitleDescription: "Set Up Component Files",
            descriptions: [
              "In the src/components directory, create two new files: ProductCard.jsx and ProductCard.module.css.",
              "ProductCard.jsx will contain the React component; the CSS file will hold its scoped styles.",
            ],
          },
          {
            subtitleDescription: "Import Dependencies in ProductCard.jsx",
            descriptions: [
              "Import React for JSX rendering.",
              "Import Link from 'react-router-dom' to make the entire card clickable.",
              "Import all styles from './ProductCard.module.css' using the * as styles syntax for scoped class names.",
            ],
          },
          {
            subtitleDescription: "Define the ProductCard Component",
            descriptions: [
              "Create a functional component named ProductCard that receives a product prop.",
              "Destructure _id, name, price, images, averageRating (default 0), and numReviews (default 0) from the product object.",
            ],
          },
          {
            subtitleDescription: "Handle Product Image",
            descriptions: [
              "Create a constant imageUrl that selects the first image from the images array or uses '/placeholder.jpg' as a fallback.",
              "This prevents broken image icons if no image is available.",
            ],
          },
          {
            subtitleDescription: "Structure the Card with Link",
            descriptions: [
              "Wrap the entire card content in a Link component with to={`/products/${_id}`}.",
              "Apply the styles.card class to the Link for base card styling and hover effects.",
            ],
          },
          {
            subtitleDescription: "Build the Image Section",
            descriptions: [
              "Create a div with class styles.imageContainer to hold the product image.",
              "Add an img element with src={imageUrl}, alt={name}, class styles.image, and loading='lazy' for performance.",
            ],
          },
          {
            subtitleDescription: "Create the Content Section",
            descriptions: [
              "Add a div with class styles.content to hold the product information.",
              "Include an h3 with class styles.title for the product name, using text truncation for long names.",
            ],
          },
          {
            subtitleDescription: "Display Rating and Reviews",
            descriptions: [
              "Create a div with class styles.rating containing a stars container and review count.",
              "Use [...Array(5)].map to generate 5 star spans; apply styles.starFilled if the index is less than Math.floor(averageRating).",
              "Add a span with class styles.reviewCount showing `(${numReviews})` for the review count.",
            ],
          },
          {
            subtitleDescription: "Show the Price",
            descriptions: [
              "Add a div with class styles.price displaying the price formatted to 2 decimal places using toFixed(2).",
              "Use optional chaining (price?.toFixed(2)) to handle null/undefined prices safely.",
            ],
          },
          {
            subtitleDescription: "Add CSS Module Styles",
            descriptions: [
              "Create ProductCard.module.css with the provided styles for card layout, hover effects (lift, shadow, image zoom), text truncation, star ratings, and your color palette.",
              "Apply classes exactly as defined: .card, .imageContainer, .image, .content, .title, .rating, .stars, .star, .starFilled, .reviewCount, .price.",
            ],
          },
          {
            subtitleDescription: "Export the Component",
            descriptions: [
              "Export ProductCard as the default export to allow importing in other components like ProductListPage and HomePage.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Implement ProductListPage with Advanced Filtering",
        titleDescription:
          "Create a product listing page with real-time search, category dropdown, price range inputs, and pagination, using ProductCard in a responsive grid. This delivers a powerful browsing experience.",
        sections: [
          {
            subtitleDescription: "Create Page Files",
            descriptions: [
              "In src/pages, create ProductListPage.jsx for the component and ProductListPage.module.css for its styles.",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import React, useState, useEffect from 'react' for state and lifecycle management.",
              "Import useSearchParams from 'react-router-dom' to handle URL query parameters.",
              "Import styles and ProductCard for styling and product display.",
            ],
          },
          {
            subtitleDescription: "Initialize State Variables",
            descriptions: [
              "Use useSearchParams() to get searchParams and setSearchParams for URL manipulation.",
              "Create state for products, loading, error, totalPages, categories, and form inputs (search, category, minPrice, maxPrice).",
            ],
          },
          {
            subtitleDescription: "Read URL Parameters",
            descriptions: [
              "Extract current filter values from searchParams with fallbacks: search, category, minPrice, maxPrice, and page (default 1).",
              "Parse page as an integer for pagination calculations.",
            ],
          },
          {
            subtitleDescription: "Set Up Form State",
            descriptions: [
              "Initialize formData state with current URL values to keep form inputs in sync with the URL.",
            ],
          },
          {
            subtitleDescription: "Fetch Categories on Mount",
            descriptions: [
              "Use useEffect with an empty dependency array to fetch categories from /api/products/categories when the component mounts.",
              "Store the response in the categories state for the dropdown.",
            ],
          },
          {
            subtitleDescription: "Fetch Products on Filter Change",
            descriptions: [
              "Use useEffect with dependencies [search, category, minPrice, maxPrice, page] to fetch products whenever filters change.",
              "Build a URLSearchParams object with all active filters and page/limit (12).",
              "Call the /api/products endpoint, handle loading and error states, and update products and totalPages.",
            ],
          },
          {
            subtitleDescription: "Handle Form Input Changes",
            descriptions: [
              "Create handleInputChange to update formData state as the user types or selects options.",
              "This provides immediate visual feedback without updating the URL on every keystroke.",
            ],
          },
          {
            subtitleDescription: "Handle Form Submission",
            descriptions: [
              "Create handleSubmit to prevent default form behavior and update the URL with current form values.",
              "Reset the page to 1 when applying new filters to show results from the beginning.",
            ],
          },
          {
            subtitleDescription: "Implement Pagination Controls",
            descriptions: [
              "Create handlePageChange to update the page parameter in the URL.",
              "Disable Previous on page 1 and Next on the last page.",
            ],
          },
          {
            subtitleDescription: "Build the Page Layout",
            descriptions: [
              "Create a hero section with title 'All Products' and subtitle.",
              "Use a two-column flex layout: filters sidebar and product grid section.",
            ],
          },
          {
            subtitleDescription: "Design the Filters Form",
            descriptions: [
              "Create a form with search input, category select (populated from categories state), min/max price inputs, and Apply Filters button.",
              "Style inputs consistently with your design system.",
            ],
          },
          {
            subtitleDescription: "Render Product Grid",
            descriptions: [
              "Display loading message, error message, or empty state message as appropriate.",
              "Render a responsive CSS grid of ProductCard components for the current page of products.",
            ],
          },
          {
            subtitleDescription: "Add Pagination UI",
            descriptions: [
              "Show pagination controls only if totalPages > 1.",
              "Include Previous button, page number buttons (1 to totalPages), and Next button.",
              "Highlight the current page with an active style.",
            ],
          },
          {
            subtitleDescription: "Add CSS Module",
            descriptions: [
              "Create ProductListPage.module.css with the provided styles for hero, layout, filters, grid, states, pagination, and responsive breakpoints.",
              "Apply classes exactly as defined for a polished, consistent design.",
            ],
          },
          {
            subtitleDescription: "Update App.jsx Route",
            descriptions: [
              "Import ProductListPage in App.jsx.",
              "Add a Route with path='/products' and element={<ProductListPage />} inside the Routes component.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Implement ProductDetailPage with Add to Cart",
        titleDescription:
          "Create a detailed product view with image gallery, quantity selector, Add to Cart button, and toast notifications. This completes the product journey from discovery to purchase.",
        sections: [
          {
            subtitleDescription: "Create Page Files",
            descriptions: [
              "In src/pages, create ProductDetailPage.jsx and ProductDetailPage.module.css.",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import React, useState, useEffect, useParams, Link, styles, and ProductCard.",
              "useParams will extract the product ID from the URL.",
            ],
          },
          {
            subtitleDescription: "Initialize State",
            descriptions: [
              "Create state for product, loading, error, quantity (default 1), adding status, and toast notification.",
              "Toast will hold type (success/error) and message.",
            ],
          },
          {
            subtitleDescription: "Fetch Product on Mount",
            descriptions: [
              "Use useEffect with [id] dependency to fetch the product from /api/products/${id} when the component loads.",
              "Handle loading and error states; set product on success.",
            ],
          },
          {
            subtitleDescription: "Implement Add to Cart Logic",
            descriptions: [
              "Create handleAddToCart function to check stock, get accessToken from localStorage, and send POST to /api/cart.",
              "Show login toast if no token; show success/error toasts based on response.",
              "Reset quantity to 1 on success; auto-hide toast after 3 seconds.",
            ],
          },
          {
            subtitleDescription: "Build Breadcrumb Navigation",
            descriptions: [
              "Create a breadcrumb with links to Home and Products, showing the current product name.",
              "Style with your color palette for consistency.",
            ],
          },
          {
            subtitleDescription: "Create Image Gallery",
            descriptions: [
              "Display the main product image in a large container.",
              "Show up to 4 thumbnail images below if available.",
            ],
          },
          {
            subtitleDescription: "Display Product Information",
            descriptions: [
              "Show product name, rating stars, review count, price, description, and stock status.",
              "Include quantity selector with +/− buttons and input, bounded by stock.",
            ],
          },
          {
            subtitleDescription: "Add Toast Notifications",
            descriptions: [
              "Display a toast with animated slide-in/fade-out when toast state is set.",
              "Style success in green and error in red.",
            ],
          },
          {
            subtitleDescription: "Add Related Products Section",
            descriptions: [
              "Create a section titled 'Related Products' with a placeholder message 'Coming soon...'.",
              "This will be implemented in a future lesson.",
            ],
          },
          {
            subtitleDescription: "Add CSS Module",
            descriptions: [
              "Create ProductDetailPage.module.css with the provided styles for all elements including responsive breakpoints.",
              "Apply classes exactly as defined for a professional, interactive design.",
            ],
          },
          {
            subtitleDescription: "Update App.jsx Route",
            descriptions: [
              "Import ProductDetailPage in App.jsx.",
              "Add a Route with path='/products/:id' and element={<ProductDetailPage />}.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Implement HomePage with Hero and Featured Products",
        titleDescription:
          "Create a welcoming HomePage with a hero section and featured products grid using ProductCard. This serves as the landing page to showcase your store.",
        sections: [
          {
            subtitleDescription: "Create Page Files",
            descriptions: [
              "In src/pages, create HomePage.jsx and HomePage.module.css for the landing page and its styles.",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import React, useState, useEffect from 'react' for state and data fetching.",
              "Import Link from 'react-router-dom' for the Shop Now CTA.",
              "Import styles and ProductCard for styling and product display.",
            ],
          },
          {
            subtitleDescription: "Initialize State",
            descriptions: [
              "Create state for products, loading, and error to manage the featured products section.",
              "Initialize loading to true to show a loading state while fetching.",
            ],
          },
          {
            subtitleDescription: "Fetch Featured Products",
            descriptions: [
              "Use useEffect with empty dependency array to fetch 6 newest products on mount.",
              "Call /api/products?limit=6&sort=-createdAt to get the latest products.",
              "Handle loading and error states; store products in state.",
            ],
          },
          {
            subtitleDescription: "Build Hero Section",
            descriptions: [
              "Create a hero section with a gradient background, title 'Welcome to PLUG', subtitle, and a 'Shop Now' Link to /products.",
              "Style with your color palette for a bold, inviting entry point.",
            ],
          },
          {
            subtitleDescription: "Create Featured Products Section",
            descriptions: [
              "Add a section titled 'Featured Products' with a container.",
              "Display loading, error, or empty states as appropriate.",
              "Render a responsive grid of up to 6 ProductCard components for the fetched products.",
            ],
          },
          {
            subtitleDescription: "Add CSS Module",
            descriptions: [
              "Create HomePage.module.css with styles for container, hero section, featured section, grid, and state messages.",
              "Apply the provided styles for a clean, professional design.",
            ],
          },
          {
            subtitleDescription: "Update App.jsx Route",
            descriptions: [
              "Import HomePage in App.jsx.",
              "Add a Route with path='/' and element={<HomePage />} as the first route.",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Comprehensive Testing of All Product Pages",
        titleDescription:
          "Test the entire product browsing flow from home to list to detail to cart. This validates the complete user experience from landing to purchase.",
        sections: [
          {
            subtitleDescription: "Test Home Page",
            descriptions: [
              "Navigate to / and verify hero section with title, subtitle, and 'Shop Now' button.",
              "Confirm featured products grid shows 6 newest products with ProductCard.",
              "Test loading and error states by temporarily breaking the API call.",
            ],
          },
          {
            subtitleDescription: "Test Product List Page",
            descriptions: [
              "Navigate to /products and verify hero, filters, and product grid display.",
              "Test search, category, and price filters; verify URL updates and products filter correctly.",
              "Test combined filters and pagination functionality.",
            ],
          },
          {
            subtitleDescription: "Test Product Card Interactivity",
            descriptions: [
              "Hover over any product card; confirm lift, shadow, and image zoom effects.",
              "Click a card; verify navigation to the correct product detail page.",
            ],
          },
          {
            subtitleDescription: "Test Product Detail Page",
            descriptions: [
              "Verify breadcrumb, image gallery, product info, and stock status.",
              "Test quantity selector and Add to Cart with/without login.",
              "Confirm toast notifications for success, error, and login prompts.",
            ],
          },
          {
            subtitleDescription: "Test Responsive Design",
            descriptions: [
              "Resize browser to test mobile layout across all pages.",
              "Ensure navigation, filters, grids, and detail pages adapt smoothly.",
            ],
          },
          {
            subtitleDescription: "Test Error States",
            descriptions: [
              "Enter invalid product ID: expect 'Product not found'.",
              "Filter to no results: expect 'No products match'.",
              "Simulate server error: expect error message.",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate",
    authorIndex: 0,
    prerequisites: [
      "React Basics",
      "React Router",
      "CSS Modules",
      "Fetch API",
      "Thunder Client",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/wt5gws?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom20,    videoLink: "",
  },
  {
    taskId: "ecom21",
    taskTitle:
      "Complete Cart & Checkout System with Real-Time Sync, Validation & Order Placement",
    introduction:
      "In this complete lesson, you’ll build the final two critical pages of your e-commerce storefront: a fully interactive CartPage with real-time quantity updates and item removal, and a secure CheckoutPage with validated shipping form, VAT calculation, and order submission. Both pages sync directly with your authenticated backend cart and orders API. Features include toast notifications, loading states, form validation (including UK postcode regex), empty cart handling, and responsive design using CSS Modules and your brand palette. This delivers a seamless, professional end-to-end purchasing experience from cart to confirmed order.",
    steps: [
      {
        stepTitle: "Step 1: Create CartPage Skeleton & CSS Module",
        titleDescription:
          "Set up the CartPage component and its dedicated CSS Module with proper file structure and initial layout.",
        sections: [
          {
            subtitleDescription: "Create the Required Files",
            descriptions: [
              "In src/pages/, create CartPage.js and CartPage.module.css",
              "This keeps cart logic and styling fully encapsulated and reusable.",
            ],
          },
          {
            subtitleDescription: "Set Up Basic Imports and Component Structure",
            descriptions: [
              "Import React, useState, useEffect from 'react'",
              "Import Link from 'react-router-dom'",
              "Import all styles using * as styles from './CartPage.module.css'",
            ],
          },
          {
            subtitleDescription: "Define Initial State Variables",
            descriptions: [
              "cart: null → holds full cart object from backend",
              "loading: true → shows spinner on first load",
              "error: null → displays auth or server errors",
              "updating: null → tracks which item is being modified (for loading state)",
              "toast: null → controls success/error notifications",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Implement Authenticated Cart Fetching",
        titleDescription:
          "Fetch the user's cart from /api/cart with JWT token and handle all possible states.",
        sections: [
          {
            subtitleDescription: "Create the fetchCart Function",
            descriptions: [
              "Write an async function that reads accessToken from localStorage",
              "If no token → throw 'Please log in to view cart'",
              "Make GET request to http://localhost:5001/api/cart with Authorization: Bearer header",
            ],
          },
          {
            subtitleDescription: "Handle Success and Error Responses",
            descriptions: [
              "On 200 → setCart(data.cart)",
              "On error → setError(message), keep loading false",
              "Always set loading to false in finally block",
            ],
          },
          {
            subtitleDescription: "Trigger Fetch on Component Mount",
            descriptions: [
              "Use useEffect(() => { fetchCart() }, []) to load cart immediately when page opens",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Implement Real-Time Quantity Updates (PATCH)",
        titleDescription:
          "Allow users to increase/decrease quantity with instant UI feedback and backend sync.",
        sections: [
          {
            subtitleDescription: "Build the updateQuantity Handler",
            descriptions: [
              "Accept productId and newQty as parameters",
              "Block updates if newQty < 1",
              "Set updating(productId) to disable buttons during request",
            ],
          },
          {
            subtitleDescription: "Send PATCH Request to Backend",
            descriptions: [
              "Use PATCH /api/cart (or PUT — both acceptable)",
              "Send JSON body: { productId, quantity: newQty }",
              "Include Authorization header",
            ],
          },
          {
            subtitleDescription: "Update State and Show Toast",
            descriptions: [
              "On success → setCart(data.cart) and show green 'Cart updated' toast",
              "On error → show red toast with server message",
              "Always clear updating state and auto-hide toast after 3 seconds",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Implement Item Removal (DELETE)",
        titleDescription:
          "Let users remove items completely with confirmation feedback.",
        sections: [
          {
            subtitleDescription: "Create removeItem Function",
            descriptions: [
              "Accept productId, set updating(productId)",
              "Send DELETE /api/cart with { productId } in body",
            ],
          },
          {
            subtitleDescription: "Handle Response and UI Update",
            descriptions: [
              "On success → update cart state and show 'Item removed' toast",
              "On error → show error toast",
              "Auto-hide toast after 3 seconds",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Build Cart UI – Items List & Empty State",
        titleDescription:
          "Render cart items beautifully with image, name, price, controls, and responsive empty state.",
        sections: [
          {
            subtitleDescription: "Handle Loading, Error, and Empty States",
            descriptions: [
              "loading → show centered 'Loading cart...'",
              "error → show red error message",
              "empty cart → show 'Your cart is empty' with blue 'Continue Shopping' Link to /products",
            ],
          },
          {
            subtitleDescription: "Render Cart Items Grid",
            des杯: [
              "Map over cart.items",
              "Each item: flex row with image (linked), name (linked), price, quantity controls, remove button, line total",
              "Use fallback image if no images[0]",
            ],
          },
          {
            subtitleDescription: "Calculate and Display Totals",
            descriptions: [
              "subtotal = reduce(price × quantity)",
              "tax = subtotal × 0.08 (or 0.20 for VAT — we’ll adjust in Checkout)",
              "total = subtotal + tax",
              "Format all prices with .toFixed(2)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Build Order Summary Sidebar & Checkout Button",
        titleDescription:
          "Create sticky summary panel with subtotal, tax, total, and prominent checkout button.",
        sections: [
          {
            subtitleDescription: "Design Summary Panel",
            descriptions: [
              "Right column (320px wide on desktop)",
              "White background, subtle shadow, rounded corners",
              "Clear breakdown: Subtotal, Tax (8%), Total (bold)",
            ],
          },
          {
            subtitleDescription: "Add Proceed to Checkout Button",
            descriptions: [
              "Full-width button using #00b4d8 background",
              "Link to='/checkout' with hover effect (#0096c7)",
              "Text: 'Proceed to Checkout'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Create CheckoutPage Skeleton & Form State",
        titleDescription:
          "Set up CheckoutPage.js with full shipping form, validation state, and layout.",
        sections: [
          {
            subtitleDescription: "Create Files and Imports",
            descriptions: [
              "Create src/pages/CheckoutPage.js and CheckoutPage.module.css",
              "Import useState, useEffect, useNavigate",
              "Import styles",
            ],
          },
          {
            subtitleDescription: "Initialize Comprehensive Form State",
            descriptions: [
              "formData: fullName, email, address, city, postcode, country ('United Kingdom'), paymentMethod ('card')",
              "errors: {} → field-specific validation messages",
              "placing: false → disables button during submission",
              "toast: null",
            ],
          },
          {
            subtitleDescription: "Fetch Cart on Mount with Validation",
            descriptions: [
              "On mount → fetch cart",
              "If not logged in → 'Please log in'",
              "If cart empty → 'Cart is empty' error",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Implement Robust Form Validation",
        titleDescription:
          "Add real-time and submission-time validation with UK postcode regex and clear error display.",
        sections: [
          {
            subtitleDescription: "Write validateForm() Function",
            descriptions: [
              "Check fullName, address, city not empty",
              "Validate email with regex",
              "Validate UK postcode with /^[A-Z]{1,2}\\d{1,2}[A-Z]?\\s?\\d[A-Z]{2}$/i",
            ],
          },
          {
            subtitleDescription: "Real-Time Error Clearing",
            descriptions: [
              "In handleChange → clear errors[name] when user types",
              "Apply red border class only when error exists",
            ],
          },
          {
            subtitleDescription: "Display Inline Error Messages",
            descriptions: [
              "Below each invalid field, show red error text",
              "Example: 'Valid postcode required'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Implement Order Submission (POST /api/orders)",
        titleDescription:
          "Send complete order with items, shipping address, and payment method to backend.",
        sections: [
          {
            subtitleDescription: "Build handlePlaceOrder Function",
            descriptions: [
              "Prevent submission if validateForm() fails",
              "Set placing = true",
              "Construct order payload with cart.items mapped correctly",
            ],
          },
          {
            subtitleDescription: "Send Authenticated POST Request",
            descriptions: [
              "POST to /api/orders with full JSON body",
              "Include shippingAddress object and paymentMethod",
            ],
          },
          {
            subtitleDescription:
              "Handle Success → Redirect to Order Confirmation",
            descriptions: [
              "Show green 'Order placed!' toast",
              "After 1.5s → navigate(`/orders/${data.order._id}`)",
            ],
          },
        ],
      },
      {
        stepTitle:
          "Step 10: Design Checkout Layout with VAT & Responsive Summary",
        titleDescription:
          "Build beautiful two-column checkout with proper VAT (20%) and currency formatting.",
        sections: [
          {
            subtitleDescription: "Calculate Specific Totals",
            descriptions: [
              "subtotal = same as cart",
              "VAT = subtotal × 0.20",
              "total = subtotal + VAT",
              "Display with £ symbol and .toFixed(2)",
            ],
          },
          {
            subtitleDescription: "Build Responsive Two-Column Layout",
            descriptions: [
              "Left: shipping form with labels, inputs, postcode hint",
              "Right: sticky summary with item list, subtotal, VAT, bold total",
              "Stack vertically on tablets and below",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Final Integration, Routing & End-to-End Testing",
        titleDescription:
          "Connect everything and test the complete purchase journey like a pro.",
        sections: [
          {
            subtitleDescription: "Add Routes in App.jsx",
            descriptions: [
              "Import CartPage and CheckoutPage",
              "Add:",
              "<Route path='/cart' element={<CartPage />} />",
              "<Route path='/checkout' element={<CheckoutPage />} />",
            ],
          },
          {
            subtitleDescription: "Full End-to-End Flow Test",
            descriptions: [
              "Add items → /cart → update qty → remove → checkout",
              "Fill invalid form → see errors → fix → submit",
              "See success toast → land on order confirmation",
              "Check MongoDB → verify order saved with correct shipping address",
              "Test mobile → everything stacks and remains usable",
            ],
          },
          {
            subtitleDescription: "Final Polish Checklist",
            descriptions: [
              "All toasts animate and auto-dismiss",
              "Loading states prevent double actions",
              "Buttons disabled during API calls",
              "Responsive breakpoints: 992px and 600px",
              "Brand colors used consistently",
              "No console errors",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "React Hooks (useState, useEffect)",
      "React Router v6 (Link, useNavigate)",
      "CSS Modules",
      "REST API with JWT",
      "Form Validation & Regex",
      "Async/Await Error Handling",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/6s24fr?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom21,    videoLink: "",
  },
  {
    taskId: "ecom22",
    taskTitle:
      "Implement Authentication Context, Protected Routes & Cart Price Snapshots",
    introduction:
      "Transform your e-commerce application with a robust authentication system and solve the #1 cart crash that every developer faces. You'll build an AuthContext that manages user state globally, create a ProtectedRoute wrapper for secure pages, integrate real-time cart count tracking in the navbar, and implement professional price snapshots that prevent cart chaos when product prices change. You'll learn why item.price returns undefined, understand the difference between live product prices and frozen cart prices, and build a system that maintains customer trust through price stability.",
    steps: [
      {
        stepTitle: "Step 1: Understand the Cart Crash Problem",
        titleDescription:
          "Learn why your cart displays NaN and undefined errors, and understand the root cause before fixing it.",
        sections: [
          {
            subtitleDescription: "Identify the Symptom",
            descriptions: [
              "Navigate to your CartPage after adding items and observe NaN or undefined in prices",
              "Open browser console and look for errors related to price calculations",
              "Notice that item.price * item.quantity fails completely",
              "This is the most common e-commerce bug — you're not alone!",
            ],
          },
          {
            subtitleDescription: "Become a Detective: Debug Your Data",
            descriptions: [
              "Inside your cart items .map() loop, add a console.log to inspect the full item object",
              "Examine the structure: where does the price actually live?",
              "Discover that price is nested inside item.productId.price, not directly on item",
              "Understand that item.price returns undefined because that field doesn't exist yet",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Understand Why the Quick Fix Is Dangerous",
        titleDescription:
          "Learn the critical flaw in using live product prices and why it destroys customer trust.",
        sections: [
          {
            subtitleDescription: "The Hidden Time Bomb Scenario",
            descriptions: [
              "Imagine: Customer adds laptop to cart at £999 on Monday",
              "Shop owner changes product price to £799 on Wednesday for a sale",
              "Customer opens cart on Thursday — sees £799 instead of £999",
              "The price changed under their feet without consent!",
            ],
          },

          {
            subtitleDescription: "The Professional Principle",
            descriptions: [
              "Product price = live price tag in your store (can change anytime)",
              "Cart item price = receipt price (locked in when customer grabbed it)",
              "Think of it as taking a photograph of the price at the moment of adding",
              "This snapshot should remain stable until checkout is complete",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Design the Price Snapshot Solution",
        titleDescription:
          "Plan how to store price directly in cart items for stability and safety.",
        sections: [
          {
            subtitleDescription: "The Core Concept",
            descriptions: [
              "Instead of always referencing the product's current price, save a copy in the cart item",
              "When item is added, capture the product price at that exact moment",
              "Store this snapshot permanently with the cart item",
              "Frontend will use this stable price, not the live product price",
            ],
          },
          {
            subtitleDescription: "What Needs to Change",
            descriptions: [
              "Backend: Add price field to cart item schema",
              "Backend: Capture and save product price when adding items",
              "Backend: Update price when quantity changes (new customer action)",
              "Frontend: Use cart item's own price field instead of nested productId.price",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update Cart Schema to Store Price",
        titleDescription:
          "Modify your MongoDB Cart model to include a price field in each cart item.",
        sections: [
          {
            subtitleDescription: "Open Your Cart Model File",
            descriptions: [
              "Navigate to server/models/Cart.js",
              "Locate the CartItemSchema definition",
              "This schema defines what data each cart item can hold",
            ],
          },
          {
            subtitleDescription: "Add the Price Field",
            descriptions: [
              "Inside CartItemSchema, add a new price field",
              "Set type to Number for numerical operations",
              "Mark it as required: true — every item MUST have a price",
              "Add validation: min: 0 to prevent negative prices",
              "This field will store the snapshot price",
            ],
          },
          {
            subtitleDescription: "Understand the Impact",
            descriptions: [
              "Existing cart items won't have this field until you add/update them",
              "New items added after this change will include the price",
              "You may need to clear test carts or add migration logic for production",
              "The schema change enables the entire price snapshot system",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Capture Price When Adding New Items",
        titleDescription:
          "Update your addToCart controller to save the product price as a snapshot.",
        sections: [
          {
            subtitleDescription: "Locate the Add to Cart Logic",
            descriptions: [
              "Open server/controllers/cartController.js",
              "Find the addToCart function",
              "Identify where you fetch the product from the database",
            ],
          },
          {
            subtitleDescription: "Fetch Product Price",
            descriptions: [
              "When querying Product.findById(), ensure you select both 'stock' and 'price' fields",
              "You need the current price to create the snapshot",
              "Store the retrieved product in a variable for access",
            ],
          },
          {
            subtitleDescription: "Save Price with New Cart Items",
            descriptions: [
              "When pushing a new item to cart.items array, include three fields: productId, quantity, AND price",
              "Set price equal to product.price from your query",
              "Also set addedAt to Date.now() for tracking",
              "This captures the price at the exact moment of adding",
            ],
          },
          {
            subtitleDescription: "Update Price for Existing Items",
            descriptions: [
              "If item already exists in cart (incrementing quantity), update three fields",
              "Update quantity to the new total",
              "Update price to product.price (refresh snapshot since this is a new action)",
              "Update addedAt to Date.now()",
              "This ensures customers get current price when adding more units",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Update Price in Quantity Change Endpoint",
        titleDescription:
          "Ensure price snapshots refresh when users manually change quantities.",
        sections: [
          {
            subtitleDescription: "Locate Update Quantity Logic",
            descriptions: [
              "Still in cartController.js, find the updateCartItemQty function",
              "This handles when users change quantity via cart page controls",
              "Currently it only updates the quantity field",
            ],
          },
          {
            subtitleDescription: "Apply Same Price Update Pattern",
            descriptions: [
              "When quantity is changed (not removed), also refresh the price field",
              "Fetch the product to get current price",
              "Update cart.items[itemIndex].price = product.price",
              "This maintains price accuracy when users modify their cart",
            ],
          },
          {
            subtitleDescription: "Understand the Philosophy",
            descriptions: [
              "Price updates on customer actions (adding, changing qty) — this is fair",
              "Price NEVER updates silently in background — this maintains trust",
              "Each interaction is a new 'agreement' on price",
              "Customer always sees price at time of their last action",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Simplify Frontend to Use Cart Item Price",
        titleDescription:
          "Refactor CartPage and CheckoutPage to use the new stable price field.",
        sections: [
          {
            subtitleDescription: "Update Price Display",
            descriptions: [
              "Change all instances of item.productId.price to simply item.price",
              "Remove the nested access — price now lives directly on the item",
              "Use .toFixed(2) for proper currency formatting",
              "No more undefined errors!",
            ],
          },
          {
            subtitleDescription: "Update Line Total Calculations",
            descriptions: [
              "Change item.productId.price * item.quantity to item.price * item.quantity",
              "This calculation is now clean and straightforward",
              "Wrap in toFixed(2) for display purposes",
            ],
          },
          {
            subtitleDescription: "Update Subtotal Calculation",
            descriptions: [
              "Use reduce to sum all items",
              "For each item: add (item.price * item.quantity) to running total",
              "Start with initial value of 0",
              "Result is accurate subtotal based on snapshot prices",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Add Defensive Fallback Values",
        titleDescription:
          "Protect your app from crashes with safety fallbacks for missing or corrupted data.",
        sections: [
          {
            subtitleDescription: "The Defensive Coding Mindset",
            descriptions: [
              "Assume data can be messy — migrations, manual edits, bugs can corrupt data",
              "One bad record shouldn't crash entire cart page",
              "Always provide fallback values for critical calculations",
              "This is how professionals write production code",
            ],
          },
          {
            subtitleDescription: "Implement Price Fallbacks",
            descriptions: [
              "Before using item.price, create a const: price = item.price || 0",
              "If price is undefined, null, or 0, it defaults to 0",
              "Use this safe price variable in all calculations",
              "Display will show £0.00 instead of NaN",
            ],
          },
          {
            subtitleDescription: "Apply to All Price Operations",
            descriptions: [
              "Use fallbacks in price display, line totals, and subtotal calculations",
              "Consider also checking item.quantity with || 1 to prevent zero multiplication",
              "Log warnings when fallbacks are triggered so you can investigate",
              "Your cart page is now bulletproof",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Build Complete AuthContext System",
        titleDescription:
          "Create a centralized authentication context with user state, cart tracking, and session management.",
        sections: [
          {
            subtitleDescription: "Set Up File Structure and Imports",
            descriptions: [
              "Create src/context/AuthContext.js as your authentication hub",
              "Import createContext, useContext, useState, useEffect from React",
              "Create AuthContext using createContext() to establish the container",
              "Export a useAuth custom hook that uses useContext(AuthContext)",
              "Add error checking in useAuth: throw error if used outside AuthProvider",
              "This creates a safe, reusable hook pattern for accessing auth data",
            ],
          },
          {
            subtitleDescription:
              "Create AuthProvider Component with Core State",
            descriptions: [
              "Export AuthProvider component that accepts children prop",
              "Initialize three state variables with useState",
              "user state starts as null (holds user object when logged in)",
              "cartCount state starts as 0 (displays in navbar badge)",
              "loading state starts as true (prevents UI flicker during auth check)",
              "These three pieces represent your entire authentication system",
            ],
          },
          {
            subtitleDescription: "Build fetchCartCount Helper Function",
            descriptions: [
              "Create async function fetchCartCount that accepts token parameter",
              "Wrap everything in try-catch to prevent cart errors from breaking auth",
              "Make GET request to http://localhost:5001/api/cart with Bearer token",
              "Check if response.ok before proceeding with data extraction",
              "Parse response and use optional chaining: data.cart?.items?.reduce()",
              "Calculate total: (sum, i) => sum + i.quantity, starting from 0",
              "Add || 0 fallback for undefined/null carts",
              "Call setCartCount(count) to update state",
              "This gives you real-time cart badge numbers",
            ],
          },
          {
            subtitleDescription: "Create updateCartCount Public Function",
            descriptions: [
              "Build async function updateCartCount with no parameters",
              "Read token from localStorage.getItem('accessToken')",
              "If token exists, await fetchCartCount(token)",
              "If no token, do nothing (user logged out)",
              "This function will be exposed through context for CartPage to call",
              "Allows on-demand cart refresh after add/remove operations",
            ],
          },
          {
            subtitleDescription: "Implement Auto-Login with useEffect",
            descriptions: [
              "Use useEffect with empty dependency array [] to run once on mount",
              "Create nested async function loadAuth inside the effect",
              "Check for token in localStorage — if none exists, setLoading(false) and return",
              "Wrap API call in try-catch-finally block",
              "In try: fetch http://localhost:5001/api/auth/me with Bearer token",
              "If response.ok: extract user data, call setUser(data.user), then fetchCartCount",
              "If response not ok: clear both tokens from localStorage",
              "In catch: log error with console.error",
              "In finally: always call setLoading(false)",
              "Call loadAuth() at end of useEffect to execute it",
              "This automatically restores sessions on page refresh",
            ],
          },
          {
            subtitleDescription: "Build login and logout Functions",
            descriptions: [
              "Create async login function accepting authData, accessToken, remember parameters",
              "Save accessToken to localStorage immediately",
              "If remember is true AND authData.refreshToken exists, save refreshToken too",
              "Extract user with: authData.user || authData (handles both response formats)",
              "Call setUser(userData) to mark user as logged in",
              "Await fetchCartCount(accessToken) to populate navbar badge",
              "Create logout function (not async) with no parameters",
              "Remove both accessToken and refreshToken from localStorage",
              "Call setUser(null) and setCartCount(0) to clear all state",
              "These functions are called by AuthPage and Navbar components",
            ],
          },
          {
            subtitleDescription: "Construct and Return Context Provider",
            descriptions: [
              "Create value object with 8 properties",
              "Include state: user, cartCount, loading",
              "Include computed values: isLoggedIn (!!user), isAdmin (user?.role === 'admin')",
              "Include functions: login, logout, updateCartCount",
              "Return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>",
              "The Provider broadcasts all auth data to your entire app tree",
              "Any component can now call useAuth() to access this value object",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Create ProtectedRoute Component",
        titleDescription:
          "Build a reusable route wrapper that guards pages requiring authentication or admin access.",
        sections: [
          {
            subtitleDescription: "Set Up ProtectedRoute File",
            descriptions: [
              "Create src/components/ProtectedRoute.js",
              "Import Navigate from react-router-dom for redirects",
              "Import your useAuth hook to access authentication state",
              "This component will wrap protected route elements",
            ],
          },
          {
            subtitleDescription: "Implement Protection Logic",
            descriptions: [
              "Export ProtectedRoute component accepting children and adminOnly props",
              "Destructure { isLoggedIn, isAdmin, loading } from useAuth()",
              "If loading is true, return simple loading indicator (prevents redirect flash)",
              "If not logged in, return <Navigate to='/login' replace />",
              "If adminOnly is true and user is not admin, return <Navigate to='/' replace />",
              "Otherwise return children to render the protected component",
              "The replace prop prevents back button issues",
            ],
          },
          {
            subtitleDescription: "Understand the Flow",
            descriptions: [
              "Unauthenticated users trying to access /checkout get redirected to /login",
              "Non-admin users trying to access admin routes get sent home",
              "Loading state prevents premature redirects during auth check",
              "This is standard pattern for route protection in React apps",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Integrate AuthProvider and Update App Routes",
        titleDescription:
          "Wrap your application with AuthProvider and protect sensitive routes.",
        sections: [
          {
            subtitleDescription: "Update App.js Imports",
            descriptions: [
              "Import AuthProvider from './context/AuthContext'",
              "Import ProtectedRoute from './components/ProtectedRoute'",
              "Import AuthPage from './pages/AuthPage'",
              "Remove old LoginPage and RegisterPage placeholder components",
              "These imports give you auth infrastructure",
            ],
          },
          {
            subtitleDescription: "Wrap Application with AuthProvider",
            descriptions: [
              "Place <AuthProvider> as outer wrapper before <Router>",
              "Structure: <AuthProvider><Router>...all routes...</Router></AuthProvider>",
              "AuthProvider MUST wrap Router so all route components can access context",
              "This makes useAuth() available everywhere in your app",
            ],
          },
          {
            subtitleDescription: "Update Auth Routes",
            descriptions: [
              "Change /login route element to <AuthPage />",
              "Change /register route element to <AuthPage />",
              "AuthPage uses location.pathname to determine login vs register mode",
              "Both routes now point to same component with different behavior",
            ],
          },
          {
            subtitleDescription: "Protect Sensitive Routes",
            descriptions: [
              "Wrap /checkout element with ProtectedRoute: <ProtectedRoute><CheckoutPage /></ProtectedRoute>",
              "Consider protecting /profile with same pattern",
              "For admin routes, use: <ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>",
              "Test by trying to access these routes while logged out",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Refactor Navbar and AuthPage to Use Context",
        titleDescription:
          "Update existing components to consume auth context and remove hardcoded values.",
        sections: [
          {
            subtitleDescription: "Update Navbar Component",
            descriptions: [
              "Import useAuth hook and useNavigate from react-router-dom",
              "Destructure { isLoggedIn, isAdmin, cartCount, user, logout } from useAuth()",
              "Remove hardcoded const isLoggedIn = false and const isAdmin = false",
              "Create handleLogout function that calls logout() then navigate('/')",
              "Update Profile link text to: {user?.name || 'Profile'} for personalization",
              "Add cart badge: {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}",
              "Add Logout button in logged-in section: <button onClick={handleLogout}>Logout</button>",
              "Style logout button to match navbar design with className",
              "Navbar now dynamically reflects auth state",
            ],
          },
          {
            subtitleDescription: "Update AuthPage Component",
            descriptions: [
              "Change React import to: import { useState } from 'react'",
              "Import useAuth hook at top",
              "Destructure { login } from useAuth() in component body",
              "In handleSubmit success block, keep localStorage token saving",
              "After saving tokens, call: login(data, data.accessToken, formData.remember)",
              "This updates global auth state and fetches cart count",
              "Keep existing toast notification and navigation logic",
              "AuthPage now integrates with your auth system",
            ],
          },
          {
            subtitleDescription: "Test Authentication Flow",
            descriptions: [
              "Register new account — verify navbar shows user name",
              "Check that cart badge appears (might be 0)",
              "Add item to cart — watch badge update",
              "Click logout — confirm redirect and state cleared",
              "Refresh page — verify auto-login restores session",
              "Try accessing /checkout while logged out — should redirect",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Comprehensive End-to-End Testing",
        titleDescription:
          "Verify that all systems work together flawlessly across different scenarios.",
        sections: [
          {
            subtitleDescription: "Test Price Snapshot System",
            descriptions: [
              "Clear your MongoDB cart collection to start fresh",
              "Add product to cart and check database — price field should exist",
              "View cart page — prices display using item.price (no undefined)",
              "Manually change product price in database",
              "Refresh cart page — cart still shows original snapshot price",
              "This confirms price stability works correctly",
            ],
          },
          {
            subtitleDescription: "Test Authentication Persistence",
            descriptions: [
              "Login with 'Remember Me' checked",
              "Close browser completely and reopen",
              "Navigate to your app — should auto-login",
              "Check localStorage — both accessToken and refreshToken present",
              "Login without 'Remember Me' and close browser",
              "Reopen — should NOT auto-login (only accessToken saved, expires on session end)",
            ],
          },
          {
            subtitleDescription: "Test Protected Routes",
            descriptions: [
              "While logged out, try to visit /checkout directly",
              "Should redirect to /login immediately",
              "Login and try /checkout again — should work",
              "Test admin routes with regular user — should redirect to home",
              "Verify loading indicator shows briefly during auth check",
            ],
          },
          {
            subtitleDescription: "Test Cart Count Synchronization",
            descriptions: [
              "Login and note cart count is 0",
              "Add item — badge updates immediately",
              "Increase quantity — count increases",
              "Open cart in new tab — count matches",
              "Remove all items — badge disappears or shows 0",
              "Logout — badge disappears completely",
            ],
          },
          {
            subtitleDescription: "Test Error Scenarios",
            descriptions: [
              "Manually corrupt accessToken in localStorage",
              "Refresh page — app should clear bad token and show logged-out state",
              "Disconnect internet and try to login — error message appears",
              "Try to add item with corrupted cart data — fallback to 0 prevents crash",
              "Test with empty cart — no NaN errors in calculations",
              "All error states should be handled gracefully",
            ],
          },
          {
            subtitleDescription: "Test Mobile Responsiveness",
            descriptions: [
              "Resize browser to 600px width",
              "Navbar should stack vertically with all links accessible",
              "Cart badge should remain visible and properly positioned",
              "Logout button should be clickable on mobile",
              "CartPage and CheckoutPage should adapt to mobile layout",
              "All interactive elements should be touch-friendly",
            ],
          },
          {
            subtitleDescription: "Final Quality Checks",
            descriptions: [
              "Open browser console — no errors or warnings",
              "All prices formatted with two decimal places",
              "Loading states don't flicker or cause layout shift",
              "Toast notifications appear and dismiss smoothly",
              "All navigation links work correctly",
              "Test complete user journey: register → add to cart → checkout → logout",
              "Your e-commerce authentication system is production-ready!",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "React Context API & useContext",
      "React Hooks (useState, useEffect)",
      "React Router v6 (Navigate, useNavigate)",
      "JWT Token Management",
      "LocalStorage API",
      "MongoDB Schema Design",
      "Protected Route Patterns",
      "Debugging with Console Logs",
      "Understanding Data Snapshots",
      "Async/Await & Try-Catch",
      "Optional Chaining (?.) & Nullish Coalescing (||)",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/pslfzd?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom22,    videoLink: "",
  },
  {
    taskId: "ecom23",
    taskTitle:
      "Integrate Cart Count Sync & Build Profile, Order Detail, and Admin Dashboard Pages",
    introduction:
      "Complete your e-commerce application by integrating real-time cart count updates across the app and building three essential pages: a user profile with order history, a detailed order view, and a comprehensive admin dashboard. You'll ensure the navbar badge updates instantly when users modify their cart, create a profile page where users can edit their information and view past orders, build an order detail page with complete shipping and payment information, and develop an admin dashboard with stats, product management, order status updates, and user role management. This lesson ties together authentication, cart functionality, and user management into a cohesive, professional system.",
    steps: [
      {
        stepTitle: "Step 1: Sync Cart Count in CartPage",
        titleDescription:
          "Update CartPage to trigger cart count refresh in the navbar after quantity changes and item removal.",
        sections: [
          {
            subtitleDescription: "Import useAuth Hook",
            descriptions: [
              "Open src/pages/CartPage.js",
              "Add import statement: import { useAuth } from '../context/AuthContext'",
              "This gives you access to the updateCartCount function from your auth context",
            ],
          },
          {
            subtitleDescription: "Extract updateCartCount Function",
            descriptions: [
              "At the top of the CartPage component, before state declarations, add: const { updateCartCount } = useAuth()",
              "This destructures the updateCartCount function so you can call it after cart operations",
            ],
          },
          {
            subtitleDescription: "Call updateCartCount After Quantity Updates",
            descriptions: [
              "In the updateQuantity function, after successfully updating the cart (after setCart(data.cart)), add: updateCartCount()",
              "Place this call before setting the success toast",
              "This refreshes the navbar badge when users increase or decrease quantities",
            ],
          },
          {
            subtitleDescription: "Call updateCartCount After Item Removal",
            descriptions: [
              "In the removeItem function, after successfully removing the item (after setCart(data.cart)), add: updateCartCount()",
              "Place this call before setting the success toast",
              "This updates the navbar badge when users remove items from cart",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Sync Cart Count in ProductDetailPage",
        titleDescription:
          "Update ProductDetailPage to refresh the navbar cart count after adding items to cart.",
        sections: [
          {
            subtitleDescription: "Import useAuth Hook",
            descriptions: [
              "Open src/pages/ProductDetailPage.js",
              "Add import statement: import { useAuth } from '../context/AuthContext'",
              "This provides access to the updateCartCount function",
            ],
          },
          {
            subtitleDescription: "Extract updateCartCount Function",
            descriptions: [
              "At the top of ProductDetailPage component, add: const { updateCartCount } = useAuth()",
              "Place this before the useParams hook",
            ],
          },
          {
            subtitleDescription: "Call updateCartCount After Adding to Cart",
            descriptions: [
              "In the handleAddToCart function, after the successful API response (after setting success toast and resetting quantity), add: updateCartCount()",
              "Place this call right after setQuantity(1)",
              "This ensures the navbar badge updates immediately when users add products to their cart",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create ProfilePage Component Structure",
        titleDescription:
          "Build the ProfilePage component with file setup, imports, and state initialization.",
        sections: [
          {
            subtitleDescription: "Create Component Files",
            descriptions: [
              "In src/pages, create two files: ProfilePage.js and ProfilePage.module.css",
              "This page will display user information and order history",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import useState and useEffect from 'react'",
              "Import useAuth from '../context/AuthContext'",
              "Import styles: import * as styles from './ProfilePage.module.css'",
              "Import Link from 'react-router-dom' for navigation to order details",
            ],
          },
          {
            subtitleDescription: "Initialize State Variables",
            descriptions: [
              "Extract user from useAuth hook: const { user } = useAuth()",
              "Create profile state with useState containing name and email fields (both empty strings)",
              "Create orders state with useState as empty array",
              "Create loading state with useState(true)",
              "Create editing state with useState(false) to toggle edit mode",
              "Create saving state with useState(false) for save button",
              "Create error state with useState('')",
              "Create toast state with useState(null) for notifications",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Implement ProfilePage Data Fetching",
        titleDescription:
          "Load user profile data and order history when the page mounts.",
        sections: [
          {
            subtitleDescription: "Create loadData Function in useEffect",
            descriptions: [
              "Use useEffect with empty dependency array to run once on mount",
              "Create async function loadData inside useEffect",
              "Wrap logic in try-catch-finally block with setLoading(false) in finally",
            ],
          },
          {
            subtitleDescription: "Fetch User Profile",
            descriptions: [
              "Get token from localStorage.getItem('accessToken')",
              "Make GET request to http://localhost:5001/api/auth/me with Authorization header",
              "Parse response with await res.json()",
              "If response is ok, call setProfile with name and email from userData.user",
              "This populates the profile form with current user data",
            ],
          },
          {
            subtitleDescription: "Fetch User Orders",
            descriptions: [
              "Make GET request to http://localhost:5001/api/orders with Authorization header",
              "Parse response with await res.json()",
              "If response is ok, call setOrders(ordersData.orders || [])",
              "Use Promise.all to fetch both user data and orders concurrently for better performance",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In catch block, call setError('Failed to load profile')",
              "Call loadData() at the end of useEffect to execute the function",
              "This ensures data loads when component mounts",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Build ProfilePage Edit Functionality",
        titleDescription:
          "Implement profile editing with input handlers and save functionality.",
        sections: [
          {
            subtitleDescription: "Create handleChange Function",
            descriptions: [
              "Build handleChange function that accepts event parameter",
              "Destructure name and value from e.target",
              "Update profile state using setProfile with spread operator and computed property: { ...prev, [name]: value }",
              "This allows both name and email inputs to update the same state object",
            ],
          },
          {
            subtitleDescription: "Create handleSave Function",
            descriptions: [
              "Build async handleSave function",
              "Set setSaving(true) at start and setError('') to clear previous errors",
              "Get token from localStorage",
              "Make PATCH request to http://localhost:5001/api/users/profile",
              "Include Authorization header and Content-Type: application/json",
              "Send JSON body with profile data: JSON.stringify(profile)",
            ],
          },
          {
            subtitleDescription: "Handle Save Response",
            descriptions: [
              "Parse response data",
              "If not ok, throw error with data.message",
              "On success, show success toast: setToast({ type: 'success', message: 'Profile updated!' })",
              "Set editing to false to exit edit mode",
              "In catch block, setError with error message",
              "In finally block, setSaving(false) and auto-hide toast after 3 seconds",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Build ProfilePage UI Layout",
        titleDescription:
          "Create the complete UI with profile card, edit form, and order history table.",
        sections: [
          {
            subtitleDescription: "Add Loading and Error States",
            descriptions: [
              "If loading is true, return loading message with className={styles.loading}",
              "If error exists and not editing, return error message with className={styles.error}",
            ],
          },
          {
            subtitleDescription: "Create Page Container and Header",
            descriptions: [
              "Wrap everything in div with className={styles.container}",
              "Add h1 with className={styles.title} displaying 'My Profile'",
              "Create main section with className={styles.main}",
            ],
          },
          {
            subtitleDescription: "Build Profile Information Card",
            descriptions: [
              "Create div with className={styles.card}",
              "Add card header with title 'Personal Information' and Edit/Cancel button",
              "Button onClick toggles editing state: onClick={() => setEditing(!editing)}",
              "Button text changes based on editing state: {editing ? 'Cancel' : 'Edit'}",
            ],
          },
          {
            subtitleDescription: "Create Conditional Edit Form",
            descriptions: [
              "Use ternary: {editing ? <form> : <info>}",
              "In edit mode, show form with two input groups for name and email",
              "Each input has name attribute, value from profile state, and onChange={handleChange}",
              "Add error message display if error exists",
              "Add Save Changes button with disabled={saving} and onClick={handleSave}",
              "Button text: {saving ? 'Saving...' : 'Save Changes'}",
            ],
          },
          {
            subtitleDescription: "Create Info View Mode",
            descriptions: [
              "In non-editing mode, display profile info with className={styles.info}",
              "Show Name, Email, Role (from user?.role || 'Customer'), and Member since date",
              "Format date with: new Date(user?.createdAt || Date.now()).toLocaleDateString()",
            ],
          },
          {
            subtitleDescription: "Build Order History Section",
            descriptions: [
              "Create div with className={styles.ordersSection}",
              "Add h2 with 'Order History' title",
              "If orders.length === 0, show empty state with link to /products",
              "Otherwise, create table container with className={styles.tableContainer}",
            ],
          },
          {
            subtitleDescription: "Create Orders Table",
            descriptions: [
              "Build table with className={styles.table}",
              "Add thead with columns: Order ID, Date, Items, Total, Status, Action",
              "Map over orders array in tbody",
              "For each order, display: order ID (last 6 chars), formatted date, items count, total amount, status badge, and View link",
              "Status badge uses dynamic className: {`${styles.status} ${styles[order.status]}`}",
              "View link navigates to /orders/${order._id}",
            ],
          },
          {
            subtitleDescription: "Add Toast Notification",
            descriptions: [
              "At bottom of component, conditionally render toast if toast exists",
              "Use className: {`${styles.toast} ${styles[toast.type]}`}",
              "Display toast.message inside the div",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Create OrderDetailPage Component Structure",
        titleDescription:
          "Build the OrderDetailPage with file setup, imports, and state initialization.",
        sections: [
          {
            subtitleDescription: "Create Component Files",
            descriptions: [
              "In src/pages, create OrderDetailPage.js and OrderDetailPage.module.css",
              "This page displays complete details for a single order",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import useState and useEffect from 'react'",
              "Import useParams and Link from 'react-router-dom'",
              "Import styles: import * as styles from './OrderDetailPage.module.css'",
            ],
          },
          {
            subtitleDescription: "Initialize State and Extract Order ID",
            descriptions: [
              "Use useParams to extract id: const { id } = useParams()",
              "Create order state with useState(null)",
              "Create loading state with useState(true)",
              "Create error state with useState(null)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Implement OrderDetailPage Data Fetching",
        titleDescription:
          "Fetch and display complete order details including items, shipping, and payment info.",
        sections: [
          {
            subtitleDescription: "Create fetchOrder Function in useEffect",
            descriptions: [
              "Use useEffect with [id] dependency array to fetch when id changes",
              "Create async fetchOrder function inside useEffect",
              "Wrap logic in try-catch-finally with setLoading(false) in finally",
            ],
          },
          {
            subtitleDescription: "Fetch Order Data",
            descriptions: [
              "Set loading and error states at start",
              "Get token from localStorage, throw error if missing",
              "Make GET request to http://localhost:5001/api/orders/${id} with Authorization header",
              "Parse response with await res.json()",
              "If not ok, throw error with message",
              "On success, call setOrder(data.order)",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In catch block, setError(err.message)",
              "Call fetchOrder() at end of useEffect to execute",
              "This loads order details when page mounts or id changes",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Build OrderDetailPage UI Layout",
        titleDescription:
          "Create the complete order detail view with items, summary, and shipping information.",
        sections: [
          {
            subtitleDescription: "Add Loading and Error States",
            descriptions: [
              "If loading, return loading message",
              "If error, return error message",
              "If no order, return 'Order not found' message",
            ],
          },
          {
            subtitleDescription: "Calculate Order Totals",
            descriptions: [
              "Calculate subtotal using reduce: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)",
              "Calculate tax: order.totalAmount - subtotal",
              "These will be displayed in the summary section",
            ],
          },
          {
            subtitleDescription: "Create Page Header",
            descriptions: [
              "Wrap in div with className={styles.container}",
              "Add header div with back link to /profile and page title 'Order Details'",
              "Back link should have ← arrow and className={styles.backLink}",
            ],
          },
          {
            subtitleDescription: "Build Order Info Card",
            descriptions: [
              "Create info card showing Order ID (last 8 chars) and formatted date",
              "Add status badge with dynamic className based on order.status",
              "Capitalize first letter of status for display",
            ],
          },
          {
            subtitleDescription: "Create Two-Column Layout",
            descriptions: [
              "Create main div with className={styles.main}",
              "This will hold items section on left and summary/address on right",
            ],
          },
          {
            subtitleDescription: "Build Items Section",
            descriptions: [
              "Create section with title 'Items Ordered'",
              "Map over order.items array",
              "For each item, display: image, product name, quantity, price per unit, and line total",
              "Use optional chaining for productId data: item.productId?.name",
              "Provide fallback values: item.name || 'Product no longer available'",
              "Handle case where product might be deleted but order still has item data",
            ],
          },
          {
            subtitleDescription: "Build Summary Card",
            descriptions: [
              "Create summary section showing subtotal, tax (20%), and total",
              "Display payment method from order.paymentMethod",
              "Format all prices with toFixed(2) and £ symbol",
            ],
          },
          {
            subtitleDescription: "Build Shipping Address Card",
            descriptions: [
              "Create address card with title 'Shipping Address'",
              "Display full name, address, city, postcode, country, and email",
              "Access from order.shippingAddress object",
              "Format each field on separate lines for readability",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Create AdminDashboard Component Structure",
        titleDescription:
          "Build the admin dashboard with file setup, imports, and state for managing the entire platform.",
        sections: [
          {
            subtitleDescription: "Create Component Files",
            descriptions: [
              "In src/pages, create AdminDashboard.js and AdminDashboard.module.css",
              "This will be the central control panel for administrators",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import useState and useEffect from 'react'",
              "Import useAuth from '../context/AuthContext'",
              "Import styles: import * as styles from './AdminDashboard.module.css'",
            ],
          },
          {
            subtitleDescription: "Initialize State Variables",
            descriptions: [
              "Extract user from useAuth: const { user } = useAuth()",
              "Create activeTab state with useState('overview') for tab navigation",
              "Create stats state with useState({ products: 0, orders: 0, revenue: 0, users: 0 })",
              "Create products state with useState([])",
              "Create orders state with useState([])",
              "Create users state with useState([])",
              "Create loading state with useState(true)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Implement AdminDashboard Data Fetching",
        titleDescription:
          "Fetch all admin data including stats, products, orders, and users concurrently.",
        sections: [
          {
            subtitleDescription: "Create fetchData Function in useEffect",
            descriptions: [
              "Use useEffect with empty dependency array to run once on mount",
              "Create async fetchData function inside useEffect",
              "Wrap in try-catch-finally with setLoading(false) in finally",
            ],
          },
          {
            subtitleDescription: "Fetch All Admin Data Concurrently",
            descriptions: [
              "Get token from localStorage",
              "Use Promise.all to fetch 4 endpoints simultaneously: stats, products, orders, and users",
              "Stats endpoint: http://localhost:5001/api/admin/stats",
              "Products endpoint: http://localhost:5001/api/products?limit=100",
              "Orders endpoint: http://localhost:5001/api/orders",
              "Users endpoint: http://localhost:5001/api/users",
              "All requests should include Authorization header with Bearer token",
            ],
          },
          {
            subtitleDescription: "Parse and Store Responses",
            descriptions: [
              "Use Promise.all again to parse all responses: await Promise.all([...res.json()])",
              "Destructure results: [statsData, productsData, ordersData, usersData]",
              "Update state: setStats(statsData), setProducts(productsData.products || []), setOrders(ordersData.orders || []), setUsers(usersData.users || [])",
              "In catch block, log error with console.error",
              "Call fetchData() at end of useEffect",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Build AdminDashboard Action Handlers",
        titleDescription:
          "Create functions to handle order status updates and user role management.",
        sections: [
          {
            subtitleDescription: "Create handleStatusChange Function",
            descriptions: [
              "Build async function accepting orderId and newStatus parameters",
              "Wrap in try-catch block",
              "Get token from localStorage",
              "Make PATCH request to http://localhost:5001/api/orders/${orderId}/status",
              "Include Authorization header and Content-Type: application/json",
              "Send JSON body: { status: newStatus }",
              "On success, update orders state: map through orders and update the matching order's status",
              "In catch, show alert: 'Failed to update status'",
            ],
          },
          {
            subtitleDescription: "Create handleToggleAdmin Function",
            descriptions: [
              "Build async function accepting userId and currentRole parameters",
              "Wrap in try-catch block",
              "Get token from localStorage",
              "Make PATCH request to http://localhost:5001/api/users/${userId}/role",
              "Include Authorization header and Content-Type: application/json",
              "Send JSON body with toggled role: { role: currentRole === 'admin' ? 'user' : 'admin' }",
              "On success, update users state: map through users and update the matching user's role",
              "In catch, show alert: 'Failed to update role'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Build AdminDashboard UI - Header and Tabs",
        titleDescription:
          "Create the dashboard header, welcome message, and tab navigation system.",
        sections: [
          {
            subtitleDescription: "Add Loading State",
            descriptions: [
              "If loading is true, return loading message with className={styles.loading}",
            ],
          },
          {
            subtitleDescription: "Create Dashboard Header",
            descriptions: [
              "Wrap everything in div with className={styles.container}",
              "Add h1 with 'Admin Dashboard' title and className={styles.title}",
              "Add welcome paragraph showing user name: Welcome back, <strong>{user?.name}</strong>",
            ],
          },
          {
            subtitleDescription: "Build Tab Navigation",
            descriptions: [
              "Create div with className={styles.tabs}",
              "Map over array: ['overview', 'products', 'orders', 'users']",
              "For each tab, create button with onClick={() => setActiveTab(tab)}",
              "Apply conditional className: activeTab === tab ? styles.tabActive : styles.tab",
              "Capitalize tab text: tab.charAt(0).toUpperCase() + tab.slice(1)",
              "This creates a 4-tab navigation system",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 14: Build AdminDashboard Overview Tab",
        titleDescription:
          "Create the statistics overview with product, order, revenue, and user counts.",
        sections: [
          {
            subtitleDescription: "Create Overview Tab Content",
            descriptions: [
              "Use conditional rendering: {activeTab === 'overview' && <div>...</div>}",
              "Create grid container with className={styles.grid}",
            ],
          },
          {
            subtitleDescription: "Build Stat Cards",
            descriptions: [
              "Create 4 stat cards, each with className={styles.statCard}",
              "First card: Total Products with {stats.products}",
              "Second card: Total Orders with {stats.orders}",
              "Third card: Revenue with £{stats.revenue?.toFixed(2) || '0.00'}",
              "Fourth card: Users with {stats.users}",
              "Each card has h3 title and p with className={styles.statNumber} for the value",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 15: Build AdminDashboard Products Tab",
        titleDescription:
          "Create the products management table showing all products with details.",
        sections: [
          {
            subtitleDescription: "Create Products Tab Content",
            descriptions: [
              "Use conditional rendering: {activeTab === 'products' && <div>...</div>}",
              "Create section div with className={styles.section}",
              "Add h2 showing 'Products ({products.length})' count",
            ],
          },
          {
            subtitleDescription: "Build Products Table",
            descriptions: [
              "Create table container with className={styles.tableContainer}",
              "Build table with className={styles.table}",
              "Add thead with columns: Name, Price, Stock, Category",
              "Map over products array in tbody",
              "For each product, display name, price (formatted with toFixed(2)), stock, and category",
              "This gives admins a quick overview of all products",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 16: Build AdminDashboard Orders Tab",
        titleDescription:
          "Create the orders management table with status update dropdowns.",
        sections: [
          {
            subtitleDescription: "Create Orders Tab Content",
            descriptions: [
              "Use conditional rendering: {activeTab === 'orders' && <div>...</div>}",
              "Create section div with className={styles.section}",
              "Add h2 showing 'Orders ({orders.length})' count",
            ],
          },
          {
            subtitleDescription: "Build Orders Table",
            descriptions: [
              "Create table with columns: ID, Date, Customer, Total, Status, Action",
              "Map over orders array",
              "Display: order ID (last 6 chars), formatted date, customer name from shippingAddress.fullName, total amount",
              "For Status column, create select dropdown with value={o.status}",
              "Add onChange handler: onChange={(e) => handleStatusChange(o._id, e.target.value)}",
              "Include 5 options: pending, processing, shipped, delivered, cancelled",
              "Add View button with className={styles.viewBtn}",
              "This allows admins to update order statuses directly from the table",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 17: Build AdminDashboard Users Tab",
        titleDescription:
          "Create the users management table with role toggle functionality.",
        sections: [
          {
            subtitleDescription: "Create Users Tab Content",
            descriptions: [
              "Use conditional rendering: {activeTab === 'users' && <div>...</div>}",
              "Create section div with className={styles.section}",
              "Add h2 showing 'Users ({users.length})' count",
            ],
          },
          {
            subtitleDescription: "Build Users Table",
            descriptions: [
              "Create table with columns: Name, Email, Role, Action",
              "Map over users array",
              "Display: user name, email, and role",
              "For Action column, create button with onClick={() => handleToggleAdmin(u._id, u.role)}",
              "Apply conditional className: u.role === 'admin' ? styles.demoteBtn : styles.promoteBtn",
              "Button text: {u.role === 'admin' ? 'Demote' : 'Make Admin'}",
              "This allows admins to promote users to admin or demote admins to regular users",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 18: Update App Routes for New Pages",
        titleDescription:
          "Add route definitions for ProfilePage and OrderDetailPage, protect them with authentication.",
        sections: [
          {
            subtitleDescription: "Update App.js Imports",
            descriptions: [
              "Open src/App.js",
              "Change placeholder component line to: import ProfilePage from './pages/ProfilePage'",
              "Change placeholder component line to: import OrderDetailPage from './pages/OrderDetailPage'",
              "AdminDashboard remains as a placeholder component for now",
            ],
          },
          {
            subtitleDescription: "Protect Profile Route",
            descriptions: [
              "Find the /profile route in your Routes component",
              "Wrap the ProfilePage element with ProtectedRoute",
              "Structure should be: <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />",
              "This ensures only logged-in users can access their profile",
            ],
          },
          {
            subtitleDescription: "Protect Order Detail Route",
            descriptions: [
              "Find the /orders/:id route in your Routes component",
              "Wrap the OrderDetailPage element with ProtectedRoute",
              "Structure should be: <Route path='/orders/:id' element={<ProtectedRoute><OrderDetailPage /></ProtectedRoute>} />",
              "This allows only logged-in users to view their order details",
            ],
          },
          {
            subtitleDescription: "Verify Route Order",
            descriptions: [
              "Ensure all routes are inside the Routes component",
              "Verify ProtectedRoute wraps both ProfilePage and OrderDetailPage",
              "AdminDashboard route remains without protection for now",
              "All routes should be properly closed with /> or matching closing tags",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 19: Test Cart Count Synchronization",
        titleDescription:
          "Verify that the navbar cart badge updates in real-time across all cart operations.",
        sections: [
          {
            subtitleDescription: "Test Add to Cart",
            descriptions: [
              "Navigate to any product detail page",
              "Click 'Add to Cart' button",
              "Watch the navbar cart badge - it should update immediately",
              "Badge number should increase by the quantity added",
              "Test adding multiple quantities at once",
            ],
          },
          {
            subtitleDescription: "Test Quantity Updates in Cart",
            descriptions: [
              "Navigate to /cart page",
              "Click + button to increase quantity of any item",
              "Watch navbar badge increase immediately",
              "Click - button to decrease quantity",
              "Watch navbar badge decrease immediately",
              "Verify badge stays in sync with actual cart items",
            ],
          },
          {
            subtitleDescription: "Test Item Removal",
            descriptions: [
              "In cart page, click 'Remove' button on an item",
              "Watch navbar badge decrease by that item's quantity",
              "Remove all items and verify badge disappears or shows 0",
              "All cart operations should reflect instantly in navbar",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 20: Test ProfilePage Functionality",
        titleDescription:
          "Verify profile editing, order history display, and navigation work correctly.",
        sections: [
          {
            subtitleDescription: "Test Profile Access and Display",
            descriptions: [
              "Login and navigate to /profile",
              "Verify your name, email, role, and member since date display correctly",
              "Check that data matches your account information",
              "Test accessing /profile while logged out - should redirect to login",
            ],
          },
          {
            subtitleDescription: "Test Profile Editing",
            descriptions: [
              "Click 'Edit' button",
              "Form should appear with current name and email",
              "Change name or email",
              "Click 'Save Changes'",
              "Verify success toast appears",
              "Confirm changes are saved (refresh page and check)",
              "Test 'Cancel' button to exit edit mode without saving",
            ],
          },
          {
            subtitleDescription: "Test Order History",
            descriptions: [
              "If you have orders, verify they appear in the table",
              "Check that all columns display correctly: ID, Date, Items, Total, Status",
              "Click 'View' link on any order",
              "Should navigate to /orders/{orderId}",
              "If no orders, verify empty state message with link to products page",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 21: Test OrderDetailPage Display",
        titleDescription:
          "Verify complete order information displays correctly with all details.",
        sections: [
          {
            subtitleDescription: "Test Order Information",
            descriptions: [
              "Navigate to an order detail page from profile",
              "Verify order ID, date, and status badge display correctly",
              "Check that back link to profile works",
              "Status should be color-coded appropriately",
            ],
          },
          {
            subtitleDescription: "Test Items Display",
            descriptions: [
              "Verify all ordered items appear in the items section",
              "Check that images, product names, quantities, and prices display",
              "Confirm line totals calculate correctly (price × quantity)",
              "Test with orders that have products that may be deleted (should show fallback text)",
            ],
          },
          {
            subtitleDescription: "Test Summary and Shipping",
            descriptions: [
              "Verify subtotal, tax (20%), and total amounts are correct",
              "Check payment method displays",
              "Verify shipping address shows all fields: name, address, city, postcode, country, email",
              "All information should be properly formatted and readable",
            ],
          },
          {
            subtitleDescription: "Test Protected Access",
            descriptions: [
              "Logout and try to access an order detail URL directly",
              "Should redirect to login page",
              "Login and verify you can access the order details again",
              "This confirms ProtectedRoute is working correctly",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 22: Test AdminDashboard Functionality",
        titleDescription:
          "Verify all admin features work correctly including stats, management, and role updates.",
        sections: [
          {
            subtitleDescription: "Test Admin Dashboard Access",
            descriptions: [
              "Login with an admin account",
              "Navigate to /admin/dashboard",
              "Verify dashboard loads with placeholder text for now",
              "Check that welcome message shows admin name",
              "Note: Full admin functionality will be tested once complete implementation is done",
            ],
          },
          {
            subtitleDescription: "Test Overview Tab",
            descriptions: [
              "Verify all 4 stat cards display with correct numbers",
              "Check that products, orders, revenue, and users counts are accurate",
              "Revenue should be formatted with 2 decimal places and £ symbol",
            ],
          },
          {
            subtitleDescription: "Test Products Tab",
            descriptions: [
              "Click 'Products' tab",
              "Verify table shows all products",
              "Check that name, price, stock, and category columns display correctly",
              "Confirm product count in header matches table rows",
            ],
          },
          {
            subtitleDescription: "Test Orders Tab and Status Updates",
            descriptions: [
              "Click 'Orders' tab",
              "Verify all orders appear in table",
              "Test status dropdown - select a different status for an order",
              "Order status should update immediately in the table",
              "Refresh page and verify status persists in database",
              "Test all status options: pending, processing, shipped, delivered, cancelled",
            ],
          },
          {
            subtitleDescription: "Test Users Tab and Role Management",
            descriptions: [
              "Click 'Users' tab",
              "Verify all users appear with name, email, and role",
              "Click 'Make Admin' on a regular user",
              "Verify role updates to 'admin' immediately",
              "Button should change to 'Demote'",
              "Click 'Demote' to change back to 'user'",
              "Refresh page and verify changes persist",
            ],
          },
          {
            subtitleDescription: "Test Tab Navigation",
            descriptions: [
              "Click through all 4 tabs: overview, products, orders, users",
              "Verify active tab is highlighted",
              "Confirm content changes appropriately for each tab",
              "Check that tab state persists when clicking around",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 23: Final Integration Testing",
        titleDescription:
          "Test complete user journeys and verify all pages work together seamlessly.",
        sections: [
          {
            subtitleDescription: "Test Complete User Flow",
            descriptions: [
              "Start as logged out user",
              "Register new account",
              "Browse products and add items to cart (watch badge update)",
              "Go to cart, update quantities (watch badge sync)",
              "Proceed to checkout and place order",
              "Visit profile page and verify order appears in history",
              "Click to view order details and verify all information is correct",
            ],
          },
          {
            subtitleDescription: "Test Admin Workflow",
            descriptions: [
              "Login as admin user",
              "Access admin dashboard",
              "Check stats to see new order appears in counts",
              "Go to orders tab and find the new order",
              "Update its status to 'processing'",
              "Go to users tab and verify user count increased",
              "Optionally promote new user to admin and verify role changes",
            ],
          },
          {
            subtitleDescription: "Test Error Scenarios",
            descriptions: [
              "Try accessing /profile while logged out (should redirect to login)",
              "Try accessing /orders/:id while logged out (should redirect to login)",
              "Test with invalid order ID in URL",
              "Verify error messages display appropriately",
              "Test profile save with invalid data (if validation exists)",
            ],
          },
          {
            subtitleDescription: "Verify Data Consistency",
            descriptions: [
              "Check that cart count matches actual items in cart",
              "Verify order totals in profile match order detail page",
              "Confirm admin stats match actual counts in database",
              "Check that all price calculations are correct with snapshots",
              "Ensure no console errors appear during any operations",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "React Hooks (useState, useEffect)",
      "React Router v6 (useParams, Link)",
      "Context API & useContext",
      "Protected Routes Pattern",
      "Async/Await & Promise.all",
      "Array Methods (map, reduce, filter)",
      "Conditional Rendering",
      "Form Handling",
      "JWT Authentication",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/zrprps?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom23,    videoLink: "",
  },
  {
    taskId: "ecom24",
    taskTitle: "Fix Admin Dashboard: Creating Missing Backend API Endpoints",
    introduction:
      "Your Admin Dashboard is broken - it shows a JSON parsing error because the frontend is calling API endpoints that don't exist in the backend. Your task is to create the missing endpoints: a stats endpoint for dashboard statistics, a route to list all users, and a route to update user roles. You'll also need to fix the frontend to call the correct endpoints.",
    steps: [
      {
        stepTitle: "Step 1: Create Admin Routes File",
        titleDescription:
          "Create a new route file for admin-specific endpoints.",
        sections: [
          {
            subtitleDescription: "Create the File",
            descriptions: [
              "In server/routes folder, create a new file called adminRoutes.js",
              "This file will hold all admin-only endpoints",
            ],
          },
          {
            subtitleDescription: "Set Up Imports",
            descriptions: [
              "Import express from 'express'",
              "Import authMiddleware and adminMiddleware from '../middleware/authMiddleware.js'",
              "Import User model from '../models/User.js'",
              "Import Order model from '../models/Order.js'",
              "Import Product model from '../models/Product.js'",
            ],
          },
          {
            subtitleDescription: "Create Router with Global Protection",
            descriptions: [
              "Create an Express router using express.Router()",
              "Use router.use() to apply both authMiddleware and adminMiddleware to ALL routes",
              "This way you don't need to add middleware to each route individually",
              "Export the router at the bottom of the file",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Build the Stats Endpoint",
        titleDescription:
          "Create GET /stats endpoint that returns dashboard statistics.",
        sections: [
          {
            subtitleDescription: "Create the Route Handler",
            descriptions: [
              "Add a GET route for '/stats'",
              "Use async handler function with req, res, next parameters",
              "Wrap all logic in try-catch block",
            ],
          },
          {
            subtitleDescription: "Query the Database",
            descriptions: [
              "Use Promise.all to run three queries at once for better performance",
              "First query: count all products using Product.countDocuments()",
              "Second query: fetch all orders using Order.find() - you need the actual data to calculate revenue",
              "Third query: count all users using User.countDocuments()",
              "Destructure results into three variables: products, orders, users",
            ],
          },
          {
            subtitleDescription: "Calculate Revenue",
            descriptions: [
              "Use the reduce method on the orders array",
              "Sum up the totalAmount field from each order",
              "Handle cases where totalAmount might be undefined using || 0",
            ],
          },
          {
            subtitleDescription: "Return the Response",
            descriptions: [
              "Use res.json() to return an object with four properties",
              "Include: products (count), orders (use orders.length), revenue, and users (count)",
              "In catch block, pass the error to next()",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Add getAllUsers Function",
        titleDescription:
          "Create a controller function to fetch all users for the admin dashboard.",
        sections: [
          {
            subtitleDescription: "Open User Controller",
            descriptions: [
              "Open server/controllers/userController.js",
              "You'll add a new function after the existing ones",
            ],
          },
          {
            subtitleDescription: "Create the Function",
            descriptions: [
              "Create new exported async function called getAllUsers",
              "It should accept req, res, next as parameters",
              "Wrap logic in try-catch block",
            ],
          },
          {
            subtitleDescription: "Implement the Logic",
            descriptions: [
              "Use User.find() to query all users from database",
              "Chain .select('-password') to exclude password field - this is important for security!",
              "Return response using res.json() with users wrapped in an object: { users }",
              "In catch block, pass error to next()",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add updateUserRole Function",
        titleDescription:
          "Create a controller function to change a user's role between 'user' and 'admin'.",
        sections: [
          {
            subtitleDescription: "Create the Function",
            descriptions: [
              "In userController.js, create new exported async function called updateUserRole",
              "Accept req, res, next as parameters",
              "Wrap logic in try-catch block",
            ],
          },
          {
            subtitleDescription: "Extract and Validate Role",
            descriptions: [
              "Extract role from req.body using destructuring",
              "Check if role is valid - it should be either 'user' or 'admin'",
              "Use array includes() method for validation",
              "If invalid, return 400 status with message 'Invalid role'",
              "Don't forget the return keyword to stop further execution!",
            ],
          },
          {
            subtitleDescription: "Update the User",
            descriptions: [
              "Use User.findByIdAndUpdate() to update the user",
              "First argument: req.params.id (user ID from URL)",
              "Second argument: object with the new role value",
              "Third argument: { new: true } to return the updated document",
              "Chain .select('-password') to exclude password from response",
            ],
          },
          {
            subtitleDescription: "Handle Response",
            descriptions: [
              "Check if user was found - if not, return 404 with message 'User not found'",
              "If successful, return the updated user with res.json({ user })",
              "In catch block, pass error to next()",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Update User Routes",
        titleDescription: "Add routes for the new controller functions.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open server/routes/userRoutes.js",
              "Find the import statement from userController",
              "Add getAllUsers and updateUserRole to the destructured imports",
            ],
          },
          {
            subtitleDescription: "Add Get All Users Route",
            descriptions: [
              "Add a GET route for '/' path",
              "Protect it with both authMiddleware and adminMiddleware (use array syntax)",
              "Call getAllUsers as the handler",
              "This creates the GET /api/users endpoint",
            ],
          },
          {
            subtitleDescription: "Add Update Role Route",
            descriptions: [
              "Add a PATCH route for '/:id/role' path",
              "Protect it with both authMiddleware and adminMiddleware",
              "Call updateUserRole as the handler",
              "This creates the PATCH /api/users/:id/role endpoint",
            ],
          },
          {
            subtitleDescription: "Check Route Order",
            descriptions: [
              "Make sure GET '/' comes BEFORE GET '/:id' in your routes",
              "Express matches routes top-to-bottom",
              "If /:id comes first, Express will try to find a user with empty ID",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Register Admin Routes in Server",
        titleDescription:
          "Mount the admin routes in server.js so Express knows they exist.",
        sections: [
          {
            subtitleDescription: "Import Admin Routes",
            descriptions: [
              "Open server/server.js",
              "Add import for adminRoutes from './routes/adminRoutes.js'",
              "Place it with the other route imports",
            ],
          },
          {
            subtitleDescription: "Mount the Routes",
            descriptions: [
              "Use app.use() to mount adminRoutes",
              "Set the path to '/api/admin'",
              "This means '/stats' in adminRoutes becomes '/api/admin/stats'",
              "Place this with the other app.use() route declarations",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Fix Frontend API Calls",
        titleDescription:
          "Update AdminDashboard.js to call the correct endpoints.",
        sections: [
          {
            subtitleDescription: "Open AdminDashboard Component",
            descriptions: [
              "Open client/src/pages/AdminDashboard.js",
              "Find the useEffect hook that fetches data",
            ],
          },
          {
            subtitleDescription: "Fix Orders Endpoint",
            descriptions: [
              "Find the fetch call for orders in the Promise.all",
              "Change the URL from /api/orders to /api/orders/all",
              "The /api/orders endpoint only returns the current user's orders",
              "The /api/orders/all endpoint returns ALL orders (what admin needs)",
            ],
          },
          {
            subtitleDescription: "Fix Status Update Endpoint",
            descriptions: [
              "Find the handleStatusChange function",
              "Check the fetch URL - it should be /api/orders/${orderId}",
              "Remove /status from the end if present",
              "The PATCH /:id endpoint accepts status in the request body",
            ],
          },
          {
            subtitleDescription: "Fix Status Dropdown Values",
            descriptions: [
              "Find the status select dropdown in the orders table",
              "Open your Order model (server/models/Order.js) and check the status enum values",
              "Make sure dropdown option values match EXACTLY - including spelling",
              "Common mistake: 'canceled' vs 'cancelled' - check your schema!",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Test Your Implementation",
        titleDescription: "Verify everything works correctly.",
        sections: [
          {
            subtitleDescription: "Restart the Server",
            descriptions: [
              "Stop your backend server (Ctrl+C)",
              "Restart it with npm run dev or node server.js",
              "Check for any error messages during startup",
            ],
          },
          {
            subtitleDescription: "Test Dashboard Loading",
            descriptions: [
              "Login as an admin user",
              "Navigate to the Admin Dashboard page",
              "Open browser console (F12) and check for errors",
              "Verify the Overview tab shows correct statistics",
            ],
          },
          {
            subtitleDescription: "Test Products Tab",
            descriptions: [
              "Click on Products tab",
              "Verify all products from database appear in the table",
              "Check that the count matches the Overview stat",
            ],
          },
          {
            subtitleDescription: "Test Orders Tab",
            descriptions: [
              "Click on Orders tab",
              "Verify ALL orders appear (not just your own)",
              "Test changing an order's status using the dropdown",
              "Refresh the page and confirm the status change persisted",
            ],
          },
          {
            subtitleDescription: "Test Users Tab",
            descriptions: [
              "Click on Users tab",
              "Verify all registered users appear",
              "Test the 'Make Admin' button on a regular user",
              "Test the 'Demote' button on an admin user",
              "Careful: don't demote yourself!",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Node.js & Express basics",
      "MongoDB with Mongoose (models, queries, async/await)",
      "Express Router & middleware usage",
      "JWT authentication & protected routes",
      "Understanding admin-only middleware",
      "Promise.all for concurrent DB queries",
      "Basic React hooks (useState, useEffect)",
      "Fetching data with fetch/Axios in React",
      "Reading & updating existing route/controller files",
      "Environment variables & server restart workflow",
      "Using browser dev tools to debug API errors",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/4v8clr?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom24,    videoLink: "",
  },
  {
    taskId: "ecom25",
    taskTitle:
      "Enhance ProductDetailPage: Image Gallery Selection and Customer Reviews",
    introduction:
      "In this lesson, you'll enhance the ProductDetailPage with two major features: a clickable image gallery that allows users to select which product image to display, and a complete customer review system. Users will be able to submit reviews with ratings and comments, and view all existing reviews for a product. You'll also refactor the add-to-cart functionality to use the fetchWithAuth helper for cleaner authenticated requests.",
    steps: [
      {
        stepTitle: "Step 1: Update useAuth Imports",
        titleDescription:
          "Extract additional values from the AuthContext for user info and authenticated requests.",
        sections: [
          {
            subtitleDescription: "Update the useAuth Destructuring",
            descriptions: [
              "Find the line where you destructure from useAuth()",
              "Currently it only extracts updateCartCount",
              "Add 'user' - you'll need this to check if someone is logged in before showing the review form",
              "Add 'fetchWithAuth' - this helper automatically adds the auth token to requests",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add New State Variables",
        titleDescription:
          "Create state for image selection and review functionality.",
        sections: [
          {
            subtitleDescription: "Add Selected Image State",
            descriptions: [
              "Create a new state variable called selectedImage",
              "Initialize it to 0 (first image in the array)",
              "This will track which thumbnail the user has clicked",
            ],
          },
          {
            subtitleDescription: "Add Review Form State",
            descriptions: [
              "Create a new state variable called reviewForm",
              "Initialize it as an object with two properties: rating (default 5) and comment (empty string)",
              "This will store the user's review input before submission",
            ],
          },
          {
            subtitleDescription: "Add Submitting State",
            descriptions: [
              "Create a new state variable called submitting",
              "Initialize it to false",
              "This will disable the submit button while a review is being posted",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Implement Clickable Image Gallery",
        titleDescription:
          "Update the image gallery so users can click thumbnails to change the main image.",
        sections: [
          {
            subtitleDescription: "Update Main Image Source",
            descriptions: [
              "Find the main product image in the gallery section",
              "Change the src from product.images[0] to product.images[selectedImage]",
              "Keep the fallback to '/placeholder.jpg' for when no image exists",
            ],
          },
          {
            subtitleDescription: "Update Thumbnails Mapping",
            descriptions: [
              "Find where you map over product.images for thumbnails",
              "Remove the .slice(0, 4) limit - show all thumbnails",
              "Add an onClick handler to each thumbnail that calls setSelectedImage(i)",
              "The 'i' is the index from the map function",
            ],
          },
          {
            subtitleDescription: "Add Active Thumbnail Styling",
            descriptions: [
              "Add conditional className to each thumbnail",
              "If the index matches selectedImage, add an 'active' style class",
              "Use template literal or classnames: styles.thumb plus styles.thumbActive when active",
              "You'll need to add thumbActive styles in your CSS module",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Refactor Add to Cart with fetchWithAuth",
        titleDescription:
          "Update handleAddToCart to use the fetchWithAuth helper instead of manual token handling.",
        sections: [
          {
            subtitleDescription: "Replace Manual Fetch with fetchWithAuth",
            descriptions: [
              "In handleAddToCart, find the fetch call to /api/cart",
              "Replace the regular fetch() with fetchWithAuth()",
              "Remove the Authorization header - fetchWithAuth adds it automatically",
              "Keep the method, Content-Type header, and body as they are",
            ],
          },
          {
            subtitleDescription: "Simplify Token Check",
            descriptions: [
              "You can keep the token check for showing the 'Please log in' message",
              "Or rely on fetchWithAuth to handle unauthorized responses",
              "The error handling in the catch block will still work",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Create Review Submit Handler",
        titleDescription:
          "Build the function that submits a new review to the backend.",
        sections: [
          {
            subtitleDescription: "Create handleReviewSubmit Function",
            descriptions: [
              "Create a new async function called handleReviewSubmit",
              "It should accept an event parameter (e) for form submission",
              "Call e.preventDefault() to stop the form from refreshing the page",
            ],
          },
          {
            subtitleDescription: "Implement Submit Logic",
            descriptions: [
              "Wrap logic in try-catch-finally block",
              "Set submitting to true at the start",
              "Use fetchWithAuth to POST to /api/products/${id}/ratings",
              "Set Content-Type header to 'application/json'",
              "Send reviewForm as the JSON body",
            ],
          },
          {
            subtitleDescription: "Handle Response",
            descriptions: [
              "Parse the response with await res.json()",
              "If response is not ok, throw an error with data.message",
              "On success, update the product state with data.product (includes new review)",
              "Reset reviewForm to initial values (rating: 5, comment: '')",
              "Show a success toast message",
            ],
          },
          {
            subtitleDescription: "Handle Errors and Cleanup",
            descriptions: [
              "In catch block, show error toast with err.message",
              "In finally block, set submitting back to false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Build Review Form UI",
        titleDescription:
          "Create the form that allows logged-in users to submit reviews.",
        sections: [
          {
            subtitleDescription: "Create Reviews Section",
            descriptions: [
              "Inside the product info div, add a new section for reviews",
              "Give it className={styles.reviews}",
              "Add an h2 with text 'Customer Reviews'",
            ],
          },
          {
            subtitleDescription: "Add Conditional Review Form",
            descriptions: [
              "Only show the form if user exists (is logged in)",
              "Use: {user && ( <form>...</form> )}",
              "Set onSubmit to handleReviewSubmit",
              "Give the form className={styles.reviewForm}",
            ],
          },
          {
            subtitleDescription: "Create Rating Dropdown",
            descriptions: [
              "Add a div with a label 'Rating:'",
              "Create a select dropdown with value={reviewForm.rating}",
              "Add onChange that updates reviewForm.rating (remember to convert to number with +e.target.value)",
              "Map over [5, 4, 3, 2, 1] to create options",
              "Each option should display the number with 'star' or 'stars' text",
            ],
          },
          {
            subtitleDescription: "Create Comment Textarea",
            descriptions: [
              "Add a textarea with value={reviewForm.comment}",
              "Add onChange that updates reviewForm.comment",
              "Add placeholder text like 'Share your experience...'",
              "Set rows to 4 for reasonable height",
            ],
          },
          {
            subtitleDescription: "Create Submit Button",
            descriptions: [
              "Add a submit button with type='submit'",
              "Disable it when submitting is true",
              "Show 'Submitting...' text when submitting, otherwise 'Submit Review'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Display Existing Reviews",
        titleDescription: "Show all customer reviews below the review form.",
        sections: [
          {
            subtitleDescription: "Handle Empty Reviews State",
            descriptions: [
              "After the form, check if product.ratings.length === 0",
              "If empty, show a paragraph with 'No reviews yet. Be the first!'",
              "Use conditional rendering with ternary or && operator",
            ],
          },
          {
            subtitleDescription: "Create Reviews List Container",
            descriptions: [
              "If reviews exist, create a div with className={styles.reviewList}",
              "Map over product.ratings array",
              "Each review needs a unique key - use the index or review._id if available",
            ],
          },
          {
            subtitleDescription: "Build Individual Review Card",
            descriptions: [
              "Create a div for each review with className={styles.review}",
              "Add a header div containing the reviewer name and star rating",
              "Display r.user?.name with fallback to 'Anonymous'",
              "Show filled stars (★) for the rating and empty stars (☆) for remaining",
              "Use string repeat method: '★'.repeat(r.rating) and '☆'.repeat(5 - r.rating)",
            ],
          },
          {
            subtitleDescription: "Display Review Content",
            descriptions: [
              "Add a paragraph for the comment text",
              "Show r.comment or '(No comment)' if empty",
              "Add a small element showing the date",
              "Format the date using: new Date(r.createdAt).toLocaleDateString()",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Add CSS Styles for New Features",
        titleDescription:
          "Add the necessary styles for thumbnail selection and reviews.",
        sections: [
          {
            subtitleDescription: "Add Thumbnail Active Style",
            descriptions: [
              "Open ProductDetailPage.module.css",
              "Add a .thumbActive class with a visible border or outline",
              "This highlights which thumbnail is currently selected",
            ],
          },
          {
            subtitleDescription: "Add Reviews Section Styles",
            descriptions: [
              "Add .reviews style for the section container",
              "Add .reviewForm with appropriate spacing",
              "Style the form inputs (select, textarea, button)",
            ],
          },
          {
            subtitleDescription: "Add Review Card Styles",
            descriptions: [
              "Add .reviewList for the container",
              "Add .review for individual review cards with border or background",
              "Add .reviewHeader for the name and stars row",
              "Add .reviewRating for the star display",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Test the New Features",
        titleDescription:
          "Verify image selection and review system work correctly.",
        sections: [
          {
            subtitleDescription: "Test Image Gallery",
            descriptions: [
              "Navigate to a product with multiple images",
              "Click on different thumbnails",
              "Verify the main image changes to match the clicked thumbnail",
              "Check that the active thumbnail has visible styling",
            ],
          },
          {
            subtitleDescription: "Test Review Form Visibility",
            descriptions: [
              "Log out and view a product page",
              "Verify the review form is NOT visible",
              "Log in and refresh the product page",
              "Verify the review form now appears",
            ],
          },
          {
            subtitleDescription: "Test Review Submission",
            descriptions: [
              "Select a star rating from the dropdown",
              "Enter a comment in the textarea",
              "Click Submit Review",
              "Verify success toast appears",
              "Verify your review appears in the reviews list",
              "Verify the form resets after successful submission",
            ],
          },
          {
            subtitleDescription: "Test Review Display",
            descriptions: [
              "Check that all reviews show correct star ratings",
              "Verify reviewer names display (or 'Anonymous')",
              "Check that dates are formatted correctly",
              "Try submitting another review - you should get an error (already reviewed)",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Basic React hooks (useState, useEffect, useContext)",
      "Using React Context to manage global state and access AuthContext values (user, fetchWithAuth)",
      "Handling forms and input changes in React (select, textarea)",
      "Making authenticated API POST requests using a helper function (fetchWithAuth)",
      "Handling success and error responses with toast notifications",
      "Conditional rendering in JSX (e.g., hiding a form when a user is not logged in)",
      "Mapping arrays to create UI lists (for thumbnails and reviews)",
      "Applying conditional CSS classes for active state styling",
      "Understanding the product data structure (images and ratings arrays)",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/xzq98n?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom25,    videoLink: "",
  },
  {
    taskId: "ecom26",
    taskTitle:
      "Fix Checkout Flow: Field Mapping, Auth Handling, Cart & Stock Management",
    introduction:
      "In this lesson, you'll fix several issues in the checkout and order flow. The problems include field name mismatches between frontend and backend, invalid payment method enum values, missing token refresh handling, and post-order cleanup. By the end, users will be able to successfully place orders with proper validation, automatic cart clearing, and accurate stock management.",
    steps: [
      {
        stepTitle: "Step 1: Fix Shipping Address Field Name in CheckoutPage",
        titleDescription:
          "The backend expects 'street' but frontend sends 'address', causing 400 Bad Request errors even when the form is filled correctly.",
        sections: [
          {
            subtitleDescription: "Update the shippingAddress Object Key",
            descriptions: [
              "Open client/src/pages/CheckoutPage.js",
              "Find the handlePlaceOrder function",
              "Locate the shippingAddress object inside JSON.stringify",
              "Find the property that uses formData.address",
              "Change the KEY (left side) from 'address' to 'street'",
              "Keep the VALUE (right side) as formData.address",
              "The backend orderController.js validates for shippingAddress.street, so the key must match",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Fix Postal Code Field Name Mismatch",
        titleDescription:
          "The Order model schema uses 'postalCode' but frontend sends 'postcode', causing the value to not be saved or displayed.",
        sections: [
          {
            subtitleDescription:
              "Update the shippingAddress Object Key in CheckoutPage",
            descriptions: [
              "In the same handlePlaceOrder function in CheckoutPage.js",
              "Find the property that uses formData.postcode",
              "Change the KEY from 'postcode' to 'postalCode'",
              "Keep the VALUE as formData.postcode",
            ],
          },
          {
            subtitleDescription: "Update the Display in OrderDetailPage",
            descriptions: [
              "Open client/src/pages/OrderDetailPage.js",
              "Find the Shipping Address section in the JSX",
              "Locate where the postcode is displayed from order.shippingAddress",
              "Change the property access from 'postcode' to 'postalCode'",
              "This matches the field name in the Order model schema",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Fix Payment Method Enum Value",
        titleDescription:
          "The Order model only accepts 'stripe', 'paypal', or 'cod' as payment methods, but frontend sends 'card' which causes a Mongoose ValidationError.",
        sections: [
          {
            subtitleDescription: "Update Default Payment Method in State",
            descriptions: [
              "In CheckoutPage.js, find the useState for formData",
              "Locate the paymentMethod property",
              "Change the default value from 'card' to 'stripe'",
              "The value 'stripe' represents card payments and is valid in the enum",
            ],
          },
          {
            subtitleDescription: "Update the Radio Button Value",
            descriptions: [
              "Find the payment method radio button in the JSX",
              "Change the value attribute from 'card' to 'stripe'",
              "Update the checked condition to compare with 'stripe'",
              "Keep the label text as 'Credit/Debit Card' for user-friendly display",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add fetchWithAuth to CheckoutPage",
        titleDescription:
          "Replace plain fetch() with fetchWithAuth() to handle token expiry during checkout, preventing random 401 errors.",
        sections: [
          {
            subtitleDescription: "Import fetchWithAuth from AuthContext",
            descriptions: [
              "Find the useAuth hook usage in CheckoutPage.js",
              "Add fetchWithAuth to the destructured values",
              "This wrapper automatically refreshes expired tokens and retries requests",
            ],
          },
          {
            subtitleDescription: "Update Cart Fetch in useEffect",
            descriptions: [
              "Find the useEffect that fetches the cart",
              "Replace the regular fetch() call with fetchWithAuth()",
              "Remove the manual Authorization header",
              "fetchWithAuth adds the token automatically",
            ],
          },
          {
            subtitleDescription: "Update Order POST in handlePlaceOrder",
            descriptions: [
              "In handlePlaceOrder, find the fetch call for creating orders",
              "Replace fetch() with fetchWithAuth()",
              "Remove the Authorization header from the headers object",
              "Keep method, Content-Type header, and body unchanged",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add fetchWithAuth to OrderDetailPage",
        titleDescription:
          "Apply the same token refresh handling to the order detail page for consistent auth behavior.",
        sections: [
          {
            subtitleDescription: "Import and Use fetchWithAuth",
            descriptions: [
              "Open client/src/pages/OrderDetailPage.js",
              "Add fetchWithAuth to the useAuth destructuring",
              "Find the useEffect that fetches the order by ID",
              "Replace fetch() with fetchWithAuth()",
              "Remove the manual Authorization header",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Import Cart Model in Order Controller",
        titleDescription:
          "Add access to the Cart model so we can clear the user's cart after an order is placed.",
        sections: [
          {
            subtitleDescription: "Add Cart Model Import",
            descriptions: [
              "Open server/controllers/orderController.js",
              "Find the existing imports at the top (Product and Order)",
              "Add a new import for the Cart model from '../models/Cart.js'",
              "This gives the controller access to manipulate cart data",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Add Stock Validation Before Creating Order",
        titleDescription:
          "Prevent overselling by checking if all products have sufficient stock before processing the order.",
        sections: [
          {
            subtitleDescription:
              "Loop Through Items and Find Matching Products",
            descriptions: [
              "In the createOrder function, find where dbProducts are fetched from the database",
              "After the check for dbProducts.length, add a for...of loop to iterate through the items array",
              "Inside the loop, use the find() method on dbProducts to locate the matching product",
              "Compare each product's _id (converted to string with toString()) against item.productId",
              "Store the result in a variable called dbProduct",
            ],
          },
          {
            subtitleDescription: "Check Stock and Return Error if Insufficient",
            descriptions: [
              "Add an if statement to check if dbProduct.stock is less than item.quantity",
              "If stock is insufficient, return a 400 status response",
              "Use a template literal for the error message: `Insufficient stock for ${dbProduct.name}. Available: ${dbProduct.stock}`",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Add Stock Decrement After Order is Saved",
        titleDescription:
          "Reduce product stock quantities after a successful order to maintain accurate inventory.",
        sections: [
          {
            subtitleDescription: "Create Stock Decrement Loop",
            descriptions: [
              "In createOrder, find the line where order.save() is called",
              "After the save, add a loop through the items array",
              "For each item, use Product.findByIdAndUpdate",
              "Use the $inc operator to decrement stock",
              "Pass a negative quantity to subtract: { stock: -item.quantity }",
              "The $inc operator is atomic and prevents race conditions",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Add Cart Clearing After Order is Saved",
        titleDescription:
          "Empty the user's cart in the database after successful order placement.",
        sections: [
          {
            subtitleDescription: "Clear Cart Items",
            descriptions: [
              "After the stock decrement loop in createOrder",
              "Use Cart.findOneAndUpdate to find the user's cart",
              "Query by user ID: { user: req.user.id }",
              "Use $set operator to set items to an empty array",
              "This removes all items from the cart in the database",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Update Navbar Cart Count After Order",
        titleDescription:
          "Refresh the cart count in the UI immediately after placing an order so the navbar shows accurate data.",
        sections: [
          {
            subtitleDescription: "Add updateCartCount to useAuth",
            descriptions: [
              "In CheckoutPage.js, find the useAuth destructuring",
              "Add updateCartCount to the destructured values",
              "This function fetches the cart and updates the count in state",
            ],
          },
          {
            subtitleDescription: "Call updateCartCount After Successful Order",
            descriptions: [
              "In handlePlaceOrder, find the success handling section",
              "This is after checking if the response is ok",
              "Call updateCartCount() with await before showing the success toast",
              "This fetches the now-empty cart and updates the navbar badge to 0",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Test the Complete Checkout Flow",
        titleDescription:
          "Verify all fixes work together for a smooth checkout experience.",
        sections: [
          {
            subtitleDescription: "Test Form Submission",
            descriptions: [
              "Add items to cart and navigate to checkout",
              "Fill in all shipping address fields with valid data",
              "Use a valid UK postcode format like 'SW1A 1AA'",
              "Click 'Place Order' and verify success toast appears",
              "Verify redirect to order detail page",
            ],
          },
          {
            subtitleDescription: "Test Order Detail Display",
            descriptions: [
              "On the order detail page, check the Shipping Address section",
              "Verify street address displays correctly",
              "Verify postal code displays correctly",
              "Verify payment method shows 'stripe'",
            ],
          },
          {
            subtitleDescription: "Test Cart Clearing",
            descriptions: [
              "After placing order, check the navbar cart badge",
              "It should show 0 or disappear entirely",
              "Navigate to cart page and verify it's empty",
            ],
          },
          {
            subtitleDescription: "Test Stock Decrement",
            descriptions: [
              "Note a product's stock before ordering",
              "Place an order for that product",
              "Check the product in admin dashboard or database",
              "Stock should be reduced by the quantity ordered",
            ],
          },
          {
            subtitleDescription: "Test Token Refresh",
            descriptions: [
              "Log in and add items to cart",
              "Go to checkout page and wait more than 1 minute",
              "Fill out form and click 'Place Order'",
              "Order should succeed without 401 Unauthorized error",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Basic React hooks (useState, useEffect, useContext)",
      "Using AuthContext to access user, fetchWithAuth, and updateCartCount",
      "Handling controlled form inputs and preparing JSON request bodies",
      "Making authenticated API requests with fetchWithAuth",
      "Understanding React Router pages and updating UI based on API responses",
      "Basic Node.js/Express controller editing (reading and modifying functions)",
      "Importing and using Mongoose models (Order, Product, Cart)",
      "Familiarity with Mongoose schema fields and validation rules",
      "Performing MongoDB updates with $inc and $set operators",
      "General understanding of checkout flow: cart, checkout page, order creation, order detail",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/xdsxlg?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom26,    videoLink: "",
  },
  {
    taskId: "ecom27",
    taskTitle: "Admin Dashboard: Product Management with Add, Edit, and Delete",
    introduction:
      "In this lesson, you'll enhance the Admin Dashboard with complete product management. Currently the Products tab only displays products - you'll add the ability to create new products, edit existing ones, and delete products. This includes building modal forms, form validation, toast notifications, and CRUD operations.",
    steps: [
      {
        stepTitle: "Step 1: Add New State Variables",
        titleDescription:
          "Add 9 new state variables for managing products, modals, and feedback.",
        sections: [
          {
            subtitleDescription: "Add Categories and Modal States",
            descriptions: [
              "Add 'categories' state - initialize as empty array (will store product categories)",
              "Add 'showProductModal' state - initialize as false (controls modal visibility)",
              "Add 'editingProduct' state - initialize as null (stores product being edited)",
            ],
          },
          {
            subtitleDescription: "Add Form States",
            descriptions: [
              "Add 'productForm' state - initialize as object with: name, description, price, stock, category, images (all empty strings)",
              "Add 'productFormErrors' state - initialize as empty object (stores validation errors)",
            ],
          },
          {
            subtitleDescription: "Add Loading and Feedback States",
            descriptions: [
              "Add 'savingProduct' state - false (tracks save in progress)",
              "Add 'deleteConfirm' state - null (stores product awaiting delete confirmation)",
              "Add 'deleting' state - false (tracks delete in progress)",
              "Add 'toast' state - null (stores toast notification data)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create showToast Helper Function",
        titleDescription:
          "Build a reusable function to display temporary notifications.",
        sections: [
          {
            subtitleDescription: "Implement showToast",
            descriptions: [
              "Create function called showToast that takes 'type' and 'message' parameters",
              "Set toast state to an object with type and message",
              "Use setTimeout to set toast back to null after 3000ms (3 seconds)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update useEffect to Fetch Categories",
        titleDescription:
          "Add categories fetching alongside existing data fetching.",
        sections: [
          {
            subtitleDescription: "Add Categories to Promise.all",
            descriptions: [
              "Find the Promise.all with statsRes, productsRes, ordersRes, usersRes",
              "Add a fifth fetch call: fetchWithAuth to /api/products/categories",
              "Name it categoriesRes",
            ],
          },
          {
            subtitleDescription: "Parse and Store Categories",
            descriptions: [
              "In the second Promise.all, add categoriesRes.json()",
              "Destructure categoriesData from results",
              "Call setCategories with categoriesData.categories (fallback to empty array)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Create resetProductForm Function",
        titleDescription:
          "Build function to clear the form back to initial state.",
        sections: [
          {
            subtitleDescription: "Implement resetProductForm",
            descriptions: [
              "Create function called resetProductForm (no parameters)",
              "Set productForm back to initial values (all empty strings)",
              "Set productFormErrors to empty object",
              "Set editingProduct to null",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Create openAddProduct Function",
        titleDescription:
          "Build function to open the modal for adding a new product.",
        sections: [
          {
            subtitleDescription: "Implement openAddProduct",
            descriptions: [
              "Create function called openAddProduct (no parameters)",
              "Call resetProductForm() to ensure form is clean",
              "Set showProductModal to true",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Create openEditProduct Function",
        titleDescription:
          "Build function to open the modal with existing product data.",
        sections: [
          {
            subtitleDescription: "Implement openEditProduct",
            descriptions: [
              "Create function called openEditProduct that takes 'product' parameter",
              "Set editingProduct to the passed product",
              "Set productForm with the product's data",
              "For images: join the array with ', ' to make comma-separated string",
              "For price and stock: convert to string using .toString() or template literal",
              "Use fallback empty strings for missing values (e.g., product.name || '')",
              "Clear productFormErrors",
              "Set showProductModal to true",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Create closeProductModal Function",
        titleDescription: "Build function to close the modal and clean up.",
        sections: [
          {
            subtitleDescription: "Implement closeProductModal",
            descriptions: [
              "Create function called closeProductModal (no parameters)",
              "Set showProductModal to false",
              "Call resetProductForm() to clean up",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Create handleProductFormChange Function",
        titleDescription: "Build function to handle input changes in the form.",
        sections: [
          {
            subtitleDescription: "Implement handleProductFormChange",
            descriptions: [
              "Create function that takes event parameter (e)",
              "Destructure name and value from e.target",
              "Update productForm: use spread operator and set [name]: value",
              "If there's an existing error for this field, clear it from productFormErrors",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Create validateProductForm Function",
        titleDescription: "Build function to validate form before submission.",
        sections: [
          {
            subtitleDescription: "Implement Validation Logic",
            descriptions: [
              "Create function called validateProductForm (no parameters)",
              "Create empty errors object",
              "Check if name is empty after trim - add error: 'Name is required'",
              "Check if description is empty after trim - add error: 'Description is required'",
              "Check if price is empty, isNaN, or negative - add error: 'Valid price is required'",
              "Check if stock is empty string, isNaN, or negative - add error: 'Valid stock quantity is required'",
              "Set productFormErrors to errors object",
              "Return true if Object.keys(errors).length === 0, otherwise false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Create handleSaveProduct Function",
        titleDescription:
          "Build the main function that creates or updates products.",
        sections: [
          {
            subtitleDescription: "Set Up the Function",
            descriptions: [
              "Create async function called handleSaveProduct (no parameters)",
              "First line: call validateProductForm() - if returns false, return early",
              "Wrap remaining code in try-catch-finally",
            ],
          },
          {
            subtitleDescription: "Prepare Product Data",
            descriptions: [
              "Set savingProduct to true",
              "Convert images string to array: split by comma, trim each item, filter out empty strings",
              "Create productData object with: name (trimmed), description (trimmed), price (parseFloat), stock (parseInt), category (trimmed), images (the array)",
            ],
          },
          {
            subtitleDescription: "Make the API Request",
            descriptions: [
              "Declare 'res' variable outside if/else",
              "If editingProduct exists: PATCH to /api/products/${editingProduct._id}",
              "If new product: POST to /api/products",
              "Both need: method, Content-Type header, JSON stringified productData as body",
              "Parse response: const data = await res.json()",
              "If !res.ok: throw new Error(data.message || 'Failed to save product')",
            ],
          },
          {
            subtitleDescription: "Update State on Success",
            descriptions: [
              "If editingProduct: update products array using map - replace matching product with data.product",
              "If new product: add data.product to beginning of products array, increment stats.products",
              "If category exists and not in categories array: add it to categories",
              "Show success toast with appropriate message",
              "Call closeProductModal()",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In catch: call showToast('error', err.message)",
              "In finally: set savingProduct to false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Create handleDeleteProduct Function",
        titleDescription:
          "Build function that deletes a product after confirmation.",
        sections: [
          {
            subtitleDescription: "Implement handleDeleteProduct",
            descriptions: [
              "Create async function that takes productId parameter",
              "Wrap in try-catch-finally",
              "Set deleting to true",
            ],
          },
          {
            subtitleDescription: "Make Delete Request",
            descriptions: [
              "Use fetchWithAuth to DELETE /api/products/${productId}",
              "If !res.ok: parse response and throw error with message",
            ],
          },
          {
            subtitleDescription: "Update State on Success",
            descriptions: [
              "Filter deleted product out of products array",
              "Decrement stats.products by 1",
              "Show success toast",
              "Set deleteConfirm to null",
            ],
          },
          {
            subtitleDescription: "Handle Errors",
            descriptions: [
              "In catch: show error toast",
              "In finally: set deleting to false",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Update Products Tab Header",
        titleDescription: "Add a header with the Add Product button.",
        sections: [
          {
            subtitleDescription: "Modify Products Section",
            descriptions: [
              "Find the products tab section (activeTab === 'products')",
              "Wrap the h2 in a div with className={styles.sectionHeader}",
              "Add a button next to h2: onClick calls openAddProduct, text '+ Add Product'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Update Products Table",
        titleDescription:
          "Add image column, stock styling, and action buttons.",
        sections: [
          {
            subtitleDescription: "Update Table Headers",
            descriptions: [
              "Add 'Image' as first th",
              "Change last th from 'Category' to 'Actions' (keep Category before it)",
            ],
          },
          {
            subtitleDescription: "Add Image Cell",
            descriptions: [
              "Add first td with img tag",
              "src: p.images?.[0] with fallback to '/placeholder.jpg'",
              "Add className for thumbnail styling",
            ],
          },
          {
            subtitleDescription: "Add Stock Status Styling",
            descriptions: [
              "Wrap stock number in a span",
              "Add conditional className: stockGood if > 10, stockLow if > 0, stockOut if 0",
            ],
          },
          {
            subtitleDescription: "Add Actions Cell",
            descriptions: [
              "Add td with className={styles.actions}",
              "Add Edit button: onClick calls openEditProduct(p)",
              "Add Delete button: onClick sets deleteConfirm to p",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 14: Build Product Modal",
        titleDescription: "Create the add/edit product modal form.",
        sections: [
          {
            subtitleDescription: "Create Modal Structure",
            descriptions: [
              "After the users tab section, add conditional render: {showProductModal && (...)}",
              "Create overlay div with onClick={closeProductModal}",
              "Create inner modal div with onClick={(e) => e.stopPropagation()} to prevent closing when clicking inside",
            ],
          },
          {
            subtitleDescription: "Build Modal Header",
            descriptions: [
              "Add div with modalHeader class",
              "Add h2: show 'Edit Product' if editingProduct, else 'Add New Product'",
              "Add close button (×) that calls closeProductModal",
            ],
          },
          {
            subtitleDescription: "Build Form Fields",
            descriptions: [
              "Create formGroup for name: text input with name='name', value from productForm, onChange handler",
              "Create formGroup for description: textarea",
              "Create formRow with two formGroups: price (number input) and stock (number input)",
              "Create formGroup for category: text input with datalist for autocomplete",
              "Create formGroup for images: textarea with placeholder explaining comma-separated URLs",
              "For each field: add conditional error class and error message display",
            ],
          },
          {
            subtitleDescription: "Build Modal Footer",
            descriptions: [
              "Add Cancel button: onClick={closeProductModal}, disabled={savingProduct}",
              "Add Save button: onClick={handleSaveProduct}, disabled={savingProduct}",
              "Save text: 'Saving...' if savingProduct, 'Update Product' if editing, 'Create Product' if new",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 15: Build Delete Confirmation Modal",
        titleDescription: "Create confirmation dialog for delete actions.",
        sections: [
          {
            subtitleDescription: "Create Confirmation Modal",
            descriptions: [
              "After product modal, add: {deleteConfirm && (...)}",
              "Create overlay that sets deleteConfirm to null onClick",
              "Create inner confirmModal div with stopPropagation",
            ],
          },
          {
            subtitleDescription: "Add Confirmation Content",
            descriptions: [
              "Add h3: 'Delete Product'",
              "Add paragraph: 'Are you sure you want to delete \"[deleteConfirm.name]\"? This action cannot be undone.'",
              "Add confirmActions div with Cancel and Delete buttons",
              "Cancel: sets deleteConfirm to null, disabled when deleting",
              "Delete: calls handleDeleteProduct(deleteConfirm._id), shows 'Deleting...' when deleting",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 16: Add Toast Notification",
        titleDescription:
          "Render toast messages at the bottom of the component.",
        sections: [
          {
            subtitleDescription: "Add Toast UI",
            descriptions: [
              "Before closing container div, add: {toast && (...)}",
              "Create div with combined className: styles.toast and styles[toast.type]",
              "Display toast.message as content",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 17: Test Your Implementation",
        titleDescription: "Verify all product management features work.",
        sections: [
          {
            subtitleDescription: "Test Add Product",
            descriptions: [
              "Click '+ Add Product' - modal should open with empty form",
              "Submit empty form - validation errors should appear",
              "Fill all required fields and submit - product should appear in table",
            ],
          },
          {
            subtitleDescription: "Test Edit Product",
            descriptions: [
              "Click Edit on a product - modal should open with data pre-filled",
              "Modify fields and save - table should show updated data",
            ],
          },
          {
            subtitleDescription: "Test Delete Product",
            descriptions: [
              "Click Delete - confirmation modal should appear",
              "Click Cancel - modal closes, product remains",
              "Click Delete again, confirm - product removed from table",
            ],
          },
        ],
      },
    ],

    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Proficiency with React hooks (useState, useEffect, useContext)",
      "Handling asynchronous operations (async/await, try-catch, Promise.all)",
      "Building and managing controlled forms with validation and error display",
      "Making authenticated CRUD API requests (GET, POST, PATCH, DELETE)",
      "Immutably updating state arrays (map, filter, spread operator)",
      "Conditional rendering for modals, overlays, and dynamic UI",
      "Event handling (stopPropagation, input changes, form submission)",
      "Creating reusable helper functions (e.g., toasts, timeouts)",
      "Working with JSON data and array transformations",
      "Styling dynamic states (loading, errors, conditional classes)",
      "Experience with admin dashboards, tabbed interfaces, and data tables",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/p7cffd?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom27,    videoLink: "",
  },
  {
    taskId: "ecom28",
    taskTitle: "Fixing Stale User Data Bug: Dependency Array Updates",
    introduction:
      "In this lesson, you'll fix a bug where user-specific data persists incorrectly when switching between accounts. If User A logs out and User B logs in, pages like Profile, Cart, Checkout, Orders, and Admin Dashboard may still show User A's data. You'll fix this by stabilizing fetchWithAuth with useCallback and adding user to dependency arrays across multiple components.",
    steps: [
      {
        stepTitle: "Step 1: Stabilize fetchWithAuth in AuthContext",
        titleDescription:
          "Wrap fetchWithAuth in useCallback to make it stable across renders.",
        sections: [
          {
            subtitleDescription: "Import useCallback",
            descriptions: [
              "Open client/src/context/AuthContext.js",
              "Find the React import at the top of the file",
              "Add useCallback to the existing destructured imports from 'react'",
            ],
          },
          {
            subtitleDescription: "Wrap fetchWithAuth Function",
            descriptions: [
              "Find the fetchWithAuth function definition inside AuthProvider",
              "Wrap the entire async function with useCallback()",
              "Pass an empty dependency array [] as the second argument to useCallback",
              "The function body remains completely unchanged",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Fix Stale Data in ProfilePage",
        titleDescription:
          "Add user dependency so profile data refreshes when accounts switch.",
        sections: [
          {
            subtitleDescription: "Extract user from useAuth",
            descriptions: [
              "Open client/src/pages/ProfilePage.js",
              "Find the useAuth() destructuring near the top of the component",
              "Add 'user' to the destructured values alongside fetchWithAuth",
            ],
          },
          {
            subtitleDescription: "Update the useEffect",
            descriptions: [
              "Find the useEffect that calls loadData()",
              "Add a guard clause as the first line inside the useEffect: return early if user is falsy",
              "Find the dependency array at the end of the useEffect",
              "Add user to the dependency array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Fix Stale Data in CartPage",
        titleDescription:
          "Add user dependency so cart contents refresh when accounts switch.",
        sections: [
          {
            subtitleDescription: "Extract user from useAuth",
            descriptions: [
              "Open client/src/pages/CartPage.js",
              "Find the useAuth() destructuring",
              "Add 'user' to the destructured values",
            ],
          },
          {
            subtitleDescription: "Update the useEffect",
            descriptions: [
              "Find the useEffect that calls fetchCart()",
              "Add a guard clause to return early if user is falsy",
              "Add user to the dependency array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Fix Stale Data in CheckoutPage",
        titleDescription:
          "Add user dependency so checkout shows correct cart for payment.",
        sections: [
          {
            subtitleDescription: "Extract user from useAuth",
            descriptions: [
              "Open client/src/pages/CheckoutPage.js",
              "Find the useAuth() destructuring",
              "Add 'user' to the destructured values",
            ],
          },
          {
            subtitleDescription: "Update the useEffect",
            descriptions: [
              "Find the useEffect that fetches cart data",
              "Add a guard clause to return early if user is falsy",
              "Add user to the dependency array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Fix Stale Data in OrderDetailPage",
        titleDescription:
          "Add user dependency to refresh order details when accounts switch.",
        sections: [
          {
            subtitleDescription: "Extract user from useAuth",
            descriptions: [
              "Open client/src/pages/OrderDetailPage.js",
              "Find the useAuth() destructuring",
              "Add 'user' to the destructured values",
            ],
          },
          {
            subtitleDescription: "Update the useEffect",
            descriptions: [
              "Find the useEffect that fetches the order",
              "Add a guard clause to return early if user is falsy",
              "The current dependency array contains id",
              "Add user to the dependency array alongside id",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Fix Stale Data in AdminDashboard",
        titleDescription:
          "Add user dependency so admin data refreshes on account switch.",
        sections: [
          {
            subtitleDescription: "Verify user is Extracted from useAuth",
            descriptions: [
              "Open client/src/pages/AdminDashboard.js",
              "Find the useAuth() destructuring",
              "Confirm 'user' is included in the destructured values",
              "If not present, add it",
            ],
          },
          {
            subtitleDescription: "Update the useEffect",
            descriptions: [
              "Find the useEffect that calls fetchData()",
              "Add a guard clause to return early if user is falsy",
              "Add user to the dependency array",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test the Stale Data Fixes",
        titleDescription:
          "Verify all pages correctly refresh data when switching accounts.",
        sections: [
          {
            subtitleDescription: "Test Profile Page",
            descriptions: [
              "Log in as User A and navigate to the profile page",
              "Note User A's name and email",
              "Log out and log in as User B",
              "Navigate to the profile page",
              "Verify User B's information displays, not User A's",
            ],
          },
          {
            subtitleDescription: "Test Cart Page",
            descriptions: [
              "Log in as User A and add some items to cart",
              "Navigate to the cart page and note the items",
              "Log out and log in as User B",
              "Navigate to the cart page",
              "Verify User B's cart displays, not User A's items",
            ],
          },
          {
            subtitleDescription: "Test Checkout Page",
            descriptions: [
              "Log in as User A with items in cart",
              "Navigate to the checkout page",
              "Log out and log in as User B who has different cart items",
              "Navigate to the checkout page",
              "Verify User B's cart items display for checkout",
            ],
          },
          {
            subtitleDescription: "Test Order Detail Page",
            descriptions: [
              "Log in as User A and view one of their orders",
              "Copy the URL",
              "Log out and log in as User B",
              "Paste the URL to try viewing User A's order",
              "Verify you get an error or redirect, not User A's order details",
            ],
          },
          {
            subtitleDescription: "Test Admin Dashboard",
            descriptions: [
              "Log in as Admin A and view the admin dashboard",
              "Note the welcome message shows Admin A's name",
              "Log out and log in as Admin B",
              "Navigate to the admin dashboard",
              "Verify welcome message shows Admin B's name",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Strong understanding of React hooks (useEffect, useContext, useCallback)",
      "Knowledge of React dependency arrays and effect re-run behavior",
      "Understanding of stale closures and how they occur in React",
      "Experience with context providers and consuming context via custom hooks",
      "Making authenticated API requests from React components",
      "Handling user authentication state (login, logout, user switching)",
      "Using guard clauses to prevent effects from running with invalid state",
      "Debugging state-related bugs across multiple React pages",
      "Working with memoized functions to prevent unnecessary re-renders",
      "Understanding component lifecycle behavior in function components",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/t3mjm2?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom28,    videoLink: "",
  },
  {
    taskId: "ecom29",
    taskTitle: "Migrate to React-Toastify: Professional Toast Notifications",
    introduction:
      "In this lesson, you'll replace your custom toast notification implementation with react-toastify, the most popular toast library for React. React-toastify provides better animations, accessibility, customization options, and reduces code duplication across components. You'll set up a global ToastContainer, create reusable toast utilities, update all components that use toasts, and clean up the old toast CSS.",
    steps: [
      {
        stepTitle: "Step 1: Install React-Toastify",
        titleDescription: "Add the react-toastify package to your project.",
        sections: [
          {
            subtitleDescription: "Install the Package",
            descriptions: [
              "Open your terminal in the client directory",
              "Run: npm install react-toastify",
              "This installs the library and its CSS styles",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Set Up ToastContainer in App.js",
        titleDescription:
          "Add the global ToastContainer component that renders all toasts.",
        sections: [
          {
            subtitleDescription: "Import ToastContainer and CSS",
            descriptions: [
              "Open client/src/App.jsx (or App.js)",
              "Import ToastContainer from 'react-toastify'",
              "Import the CSS file: 'react-toastify/dist/ReactToastify.css'",
            ],
          },
          {
            subtitleDescription: "Add ToastContainer Component",
            descriptions: [
              "Add the ToastContainer component inside your JSX",
              "Place it after the Footer component but before the closing tags",
              "Configure the position prop to 'bottom-right'",
              "Set autoClose to 3000 milliseconds",
              "Set hideProgressBar to false",
              "Set newestOnTop to true",
              "Set closeOnClick to true",
              "Set pauseOnFocusLoss to true",
              "Set draggable to true",
              "Set pauseOnHover to true",
              "Set theme to 'colored' for colored backgrounds based on toast type",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create Toast Utility File",
        titleDescription:
          "Create centralized helper functions for consistent toast styling.",
        sections: [
          {
            subtitleDescription: "Create the Utility File",
            descriptions: [
              "Create a new file: client/src/utils/toast.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Create showSuccess Function",
            descriptions: [
              "Export a function called showSuccess that takes a message parameter",
              "Call toast.success() with the message",
              "Pass an options object with position, autoClose, hideProgressBar, closeOnClick, pauseOnHover, and draggable settings",
            ],
          },
          {
            subtitleDescription: "Create showError Function",
            descriptions: [
              "Export a function called showError that takes a message parameter",
              "Call toast.error() with the message",
              "Use slightly longer autoClose time (4000ms) for errors so users have time to read them",
            ],
          },
          {
            subtitleDescription: "Create showInfo and showWarning Functions",
            descriptions: [
              "Export a showInfo function that calls toast.info()",
              "Export a showWarning function that calls toast.warn()",
              "Use similar configuration as the other functions",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update AdminDashboard Component",
        titleDescription:
          "Replace custom toast implementation with react-toastify.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/AdminDashboard.js",
              "Import toast from 'react-toastify' at the top",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State and Function",
            descriptions: [
              "Find and delete the toast state variable: useState(null)",
              "Find and delete the showToast helper function",
              "This function set toast state and used setTimeout to clear it",
            ],
          },
          {
            subtitleDescription: "Replace showToast Calls",
            descriptions: [
              "Find all calls to showToast('success', message)",
              "Replace with toast.success(message)",
              "Find all calls to showToast('error', message)",
              "Replace with toast.error(message)",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find the toast JSX at the bottom of the component return",
              "Delete the conditional rendering block that displays the toast",
              "This was the div with className styles.toast",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Update AuthPage Component",
        titleDescription: "Replace custom toast in the authentication page.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/AuthPage.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State",
            descriptions: [
              "Find and delete the toast state variable",
              "Find and delete the setTimeout that clears the toast",
            ],
          },
          {
            subtitleDescription: "Replace setToast Calls",
            descriptions: [
              "Find setToast({ type: 'success', message: ... })",
              "Replace with toast.success(message)",
              "Find setToast({ type: 'error', message: ... })",
              "Replace with toast.error(message)",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find and delete the toast div at the bottom of the return",
              "Remove the conditional rendering for toast display",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Update CartPage Component",
        titleDescription: "Replace custom toast in the cart page.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/CartPage.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State",
            descriptions: [
              "Find and delete the toast state variable",
              "Find and delete any setTimeout calls that clear the toast",
            ],
          },
          {
            subtitleDescription: "Replace setToast Calls",
            descriptions: [
              "Find all setToast calls in updateQuantity function",
              "Replace success toasts with toast.success()",
              "Replace error toasts with toast.error()",
              "Do the same for removeItem function",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find and delete the toast rendering JSX at the bottom",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Update CheckoutPage Component",
        titleDescription: "Replace custom toast in the checkout page.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/CheckoutPage.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State",
            descriptions: [
              "Find and delete the toast state variable",
              "Find and delete the setTimeout cleanup",
            ],
          },
          {
            subtitleDescription: "Replace setToast Calls",
            descriptions: [
              "Find setToast in handlePlaceOrder function",
              "Replace with toast.success() for success messages",
              "Replace with toast.error() for error messages",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find and delete the toast JSX at the bottom of the component",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Update ProductDetailPage Component",
        titleDescription: "Replace custom toast in the product detail page.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/ProductDetailPage.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State",
            descriptions: [
              "Find and delete the toast state variable",
              "Find and delete setTimeout calls that clear the toast",
            ],
          },
          {
            subtitleDescription: "Replace setToast Calls",
            descriptions: [
              "Find setToast calls in handleAddToCart function",
              "Replace with toast.success() and toast.error()",
              "Find setToast calls in handleReviewSubmit function",
              "Replace with toast.success() and toast.error()",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find and delete the toast JSX near the bottom of the return",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Update ProfilePage Component",
        titleDescription: "Replace custom toast in the profile page.",
        sections: [
          {
            subtitleDescription: "Update Imports",
            descriptions: [
              "Open client/src/pages/ProfilePage.js",
              "Import toast from 'react-toastify'",
            ],
          },
          {
            subtitleDescription: "Remove Old Toast State",
            descriptions: [
              "Find and delete the toast state variable",
              "Find and delete the setTimeout cleanup",
            ],
          },
          {
            subtitleDescription: "Replace setToast Calls",
            descriptions: [
              "Find setToast in handleSave function",
              "Replace with toast.success() for profile update success",
            ],
          },
          {
            subtitleDescription: "Remove Toast JSX",
            descriptions: [
              "Find and delete the toast JSX at the bottom of the component",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Clean Up Old Toast CSS",
        titleDescription:
          "Remove the now-unused custom toast styles from CSS modules.",
        sections: [
          {
            subtitleDescription: "Clean AdminDashboard CSS",
            descriptions: [
              "Open client/src/pages/AdminDashboard.module.css",
              "Find and delete the .toast class",
              "Find and delete the .success class",
              "Find and delete the .error class",
              "Delete the @keyframes slideIn animation if only used by toast",
            ],
          },
          {
            subtitleDescription: "Clean AuthPage CSS",
            descriptions: [
              "Open client/src/pages/AuthPage.module.css",
              "Delete .toast, .success, and .error classes",
            ],
          },
          {
            subtitleDescription: "Clean CartPage CSS",
            descriptions: [
              "Open client/src/pages/CartPage.module.css",
              "Delete .toast, .success, and .error classes",
            ],
          },
          {
            subtitleDescription: "Clean CheckoutPage CSS",
            descriptions: [
              "Open client/src/pages/CheckoutPage.module.css",
              "Delete .toast, .success, and .error classes",
            ],
          },
          {
            subtitleDescription: "Clean ProductDetailPage CSS",
            descriptions: [
              "Open client/src/pages/ProductDetailPage.module.css",
              "Delete .toast, .success, and .error classes",
            ],
          },
          {
            subtitleDescription: "Clean ProfilePage CSS",
            descriptions: [
              "Open client/src/pages/ProfilePage.module.css",
              "Delete .toast, .success, and .error classes",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Fix Duplicate React Instance Error (If Needed)",
        titleDescription:
          "Resolve the 'Invalid hook call' error caused by multiple React copies.",
        sections: [
          {
            subtitleDescription: "Identify the Problem",
            descriptions: [
              "If you see 'Invalid hook call' error in console after installing react-toastify",
              "This is caused by react-toastify bundling its own React instance",
              "Multiple React copies break hooks because they use different internal state",
            ],
          },
          {
            subtitleDescription: "Update Rspack Config (If Using Rspack)",
            descriptions: [
              "Open rspack.config.js in your client directory",
              "Import join from 'node:path' at the top",
              "Find the resolve section in the config",
              "Add an alias property to the resolve object",
              "Set react alias to point to your node_modules/react",
              "Set react-dom alias to point to your node_modules/react-dom",
              "Use join(__dirname, 'node_modules/react') format",
              "This forces all packages to use your single React instance",
            ],
          },
          {
            subtitleDescription: "Alternative: Clean Reinstall",
            descriptions: [
              "Delete the node_modules folder",
              "Delete package-lock.json file",
              "Run npm ls react to check for duplicates",
              "Run npm install to reinstall all dependencies",
            ],
          },
          {
            subtitleDescription: "Verify React Versions Match",
            descriptions: [
              "Open package.json",
              "Ensure react and react-dom have matching versions",
              "Both should be the same version like ^18.2.0",
              "Ensure react-toastify version is compatible with your React version",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Test Toast Notifications",
        titleDescription:
          "Verify all toast notifications work correctly across the application.",
        sections: [
          {
            subtitleDescription: "Test Authentication Toasts",
            descriptions: [
              "Go to the login page and log in successfully",
              "Verify a success toast appears at bottom-right",
              "Try logging in with wrong credentials",
              "Verify an error toast appears",
              "Test registration with valid and invalid data",
            ],
          },
          {
            subtitleDescription: "Test Cart Toasts",
            descriptions: [
              "Add an item to cart from product detail page",
              "Verify success toast appears",
              "Go to cart page and update item quantity",
              "Verify 'Cart updated' toast appears",
              "Remove an item from cart",
              "Verify 'Item removed' toast appears",
            ],
          },
          {
            subtitleDescription: "Test Checkout Toasts",
            descriptions: [
              "Complete a checkout process",
              "Verify 'Order placed!' toast appears on success",
              "Try submitting with invalid form data",
              "Verify validation error toasts appear",
            ],
          },
          {
            subtitleDescription: "Test Product Review Toasts",
            descriptions: [
              "Submit a product review",
              "Verify 'Review added!' toast appears",
              "Try submitting a second review for same product",
              "Verify error toast about already reviewed appears",
            ],
          },
          {
            subtitleDescription: "Test Profile Toasts",
            descriptions: [
              "Update your profile information",
              "Verify 'Profile updated!' toast appears",
            ],
          },
          {
            subtitleDescription: "Test Admin Dashboard Toasts",
            descriptions: [
              "Log in as admin and go to dashboard",
              "Create a new product",
              "Verify success toast appears",
              "Edit a product",
              "Verify 'Product updated successfully!' toast appears",
              "Delete a product",
              "Verify 'Product deleted successfully!' toast appears",
            ],
          },
          {
            subtitleDescription: "Verify Toast Behavior",
            descriptions: [
              "Confirm toasts appear in bottom-right corner",
              "Confirm toasts auto-dismiss after 3 seconds",
              "Confirm clicking a toast dismisses it immediately",
              "Confirm toasts can be dragged",
              "Confirm success toasts are green and error toasts are red",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Strong understanding of React hooks (useState, useEffect, useContext, useCallback)",
      "Comfort working with async JavaScript (async/await, try-catch, Promise.all)",
      "Experience building ecommerce flows (cart, checkout, orders)",
      "Making authenticated API requests and handling API errors",
      "Handling backend-driven data (products, orders, users)",
      "Understanding the frontend ↔ backend request/response lifecycle",
      "Validating critical business logic on the server (payments, totals, order status)",
      "Transforming array data (map, filter, reduce) for order calculations",
      "Managing loading, success, and error states in transactional flows",
      "Implementing user feedback with toast notifications (React Toastify)",
      "Conditional rendering based on async state and business rules",
      "Debugging network and payment-related issues using logs and responses",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/798628?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom29,    videoLink: "",
  },
  {
    taskId: "ecom30",
    taskTitle: "Complete Security Audit: Protecting Your E-Commerce Backend",
    introduction:
      "In this lesson, you'll implement industry-standard security protections for your e-commerce backend. You'll add security headers with Helmet.js, implement rate limiting, prevent NoSQL injection attacks, protect against HTTP parameter pollution, add request size limits, configure environment-based CORS, hash refresh tokens, implement safe error handling, and add MongoDB ObjectId validation. These protections defend against common attacks like XSS, clickjacking, brute-force, and database injection.",
    steps: [
      {
        stepTitle: "Step 1: Install Security Dependencies",
        titleDescription:
          "Install the npm packages needed for security protections.",
        sections: [
          {
            subtitleDescription: "Install Helmet and HPP",
            descriptions: [
              "Open your terminal in the server directory",
              "Run: npm install helmet hpp",
              "Helmet adds security HTTP headers automatically",
              "HPP prevents HTTP Parameter Pollution attacks",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Add Security Headers with Helmet",
        titleDescription:
          "Configure Helmet to set important HTTP security headers.",
        sections: [
          {
            subtitleDescription: "Import Helmet",
            descriptions: [
              "Open server/server.js",
              "Add the helmet import at the top with your other imports",
            ],
          },
          {
            subtitleDescription: "Add Helmet Middleware",
            descriptions: [
              "Add Helmet as the FIRST middleware after creating the Express app",
              "Security headers should be set before any other processing happens",
              "Configure contentSecurityPolicy with custom directives",
              "Set defaultSrc to only allow resources from your own domain",
              "Set scriptSrc to allow scripts from your domain and Stripe (for payments)",
              "Set styleSrc to allow styles from your domain, inline styles, and Google Fonts",
              "Set fontSrc to allow fonts from your domain and Google Fonts",
              "Set imgSrc to allow images from your domain, data URLs, Pexels, and Picsum",
              "Set frameSrc to allow frames from your domain and Stripe",
              "Set connectSrc to allow connections to your own domain",
              "Set objectSrc to 'none' to block plugins",
              "Set crossOriginEmbedderPolicy to false to allow external images",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Implement Global Rate Limiting",
        titleDescription: "Add rate limiting to protect all routes from abuse.",
        sections: [
          {
            subtitleDescription: "Import Rate Limit",
            descriptions: [
              "You already have express-rate-limit installed from authRoutes",
              "Import rateLimit from 'express-rate-limit' in server.js",
            ],
          },
          {
            subtitleDescription: "Create Global Rate Limiter",
            descriptions: [
              "Create a globalLimiter using rateLimit()",
              "Set windowMs to 15 minutes (15 * 60 * 1000)",
              "Set max to 500 requests per window per IP",
              "Set message to a JSON object with an error message",
              "Set standardHeaders to true to return rate limit info in headers",
              "Set legacyHeaders to false to disable deprecated headers",
              "Apply the globalLimiter with app.use() after Helmet",
            ],
          },
          {
            subtitleDescription:
              "Create Strict Rate Limiter for Sensitive Routes",
            descriptions: [
              "Create a strictLimiter with the same windowMs but max of 50",
              "Apply strictLimiter to /api/orders route",
              "Apply strictLimiter to /api/users route",
              "This limits sensitive operations more aggressively",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Prevent MongoDB Query Injection",
        titleDescription:
          "Create custom middleware to sanitize requests and prevent NoSQL injection.",
        sections: [
          {
            subtitleDescription: "Create Sanitize Helper Function",
            descriptions: [
              "In server.js, create a function called sanitize that takes an object parameter",
              "Return early if the object is null or not an object type",
              "Loop through all keys in the object using a for...in loop",
              "If a key starts with '$' or contains '.', delete that key from the object",
              "If the value of a key is an object, recursively call sanitize on it",
              "This removes MongoDB operators that attackers could inject",
            ],
          },
          {
            subtitleDescription: "Create Sanitize Request Middleware",
            descriptions: [
              "Create a middleware function called sanitizeRequest with req, res, next parameters",
              "Call sanitize() on req.body",
              "Call sanitize() on req.params",
              "Call next() to continue to the next middleware",
              "Apply this middleware with app.use() after the body parsers",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Prevent HTTP Parameter Pollution",
        titleDescription:
          "Add HPP middleware to handle duplicate query parameters safely.",
        sections: [
          {
            subtitleDescription: "Import and Configure HPP",
            descriptions: [
              "Import hpp at the top of server.js",
              "Add app.use(hpp()) after your sanitization middleware",
              "Configure hpp with a whitelist option",
              "Add 'category' and 'images' to the whitelist array",
              "These parameters are allowed to be arrays for filtering purposes",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Request Size Limits",
        titleDescription:
          "Limit payload sizes to prevent denial-of-service attacks.",
        sections: [
          {
            subtitleDescription: "Update Body Parser Limits",
            descriptions: [
              "Find your existing express.json() middleware in server.js",
              "Add a limit option set to '10kb'",
              "Find your existing express.urlencoded() middleware",
              "Add a limit option set to '10kb'",
              "This blocks attackers from sending huge payloads to crash your server",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Configure Environment-Based CORS",
        titleDescription:
          "Make CORS configuration dynamic based on environment variables.",
        sections: [
          {
            subtitleDescription: "Create Allowed Origins Array",
            descriptions: [
              "Find your existing CORS configuration in server.js",
              "Create an allowedOrigins array before the cors() middleware",
              "Include process.env.CLIENT_URL as the first element",
              "Include 'http://localhost:8080' as a fallback for local development",
              "Chain .filter(Boolean) to remove any undefined values",
            ],
          },
          {
            subtitleDescription: "Update CORS Configuration",
            descriptions: [
              "Replace the static origin string with a function",
              "The function takes origin and callback parameters",
              "If origin is falsy, call callback(null, true) to allow requests without origin",
              "If allowedOrigins includes the origin, call callback(null, true)",
              "Otherwise, call callback with a new Error for rejected origins",
              "Add methods option with an array: GET, POST, PATCH, DELETE, OPTIONS",
              "Add allowedHeaders option with an array: Content-Type, Authorization",
              "Keep credentials set to true",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Hash Refresh Tokens in Database",
        titleDescription:
          "Store hashed refresh tokens instead of plain text for security.",
        sections: [
          {
            subtitleDescription: "Import Crypto Module",
            descriptions: [
              "Open server/controllers/AuthController.js",
              "Import crypto from 'crypto' at the top of the file",
            ],
          },
          {
            subtitleDescription: "Update generateTokens Function",
            descriptions: [
              "Find the generateTokens function",
              "After creating the refreshToken with jwt.sign(), create a hashed version",
              "Use crypto.createHash('sha256') to create a hash object",
              "Chain .update(refreshToken) to add the token data",
              "Chain .digest('hex') to get the hexadecimal hash string",
              "Store this hashed version in the hashedToken variable",
              "Update the RefreshToken.create() call to store hashedToken instead of refreshToken",
              "Keep returning the unhashed refreshToken to the client",
              "Optionally increase accessToken expiry from 1m to 15m for better UX",
            ],
          },
          {
            subtitleDescription: "Update refresh Function",
            descriptions: [
              "Find the refresh function",
              "After extracting refreshToken from req.cookies, hash it the same way",
              "Use crypto.createHash('sha256').update(refreshToken).digest('hex')",
              "Store in a hashedToken variable",
              "Update RefreshToken.findOne() to search for the hashedToken",
              "Update any RefreshToken.deleteOne() calls to use hashedToken",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Implement Safe Error Handling",
        titleDescription:
          "Create secure error handling that hides sensitive details in production.",
        sections: [
          {
            subtitleDescription: "Remove Old Error Handler",
            descriptions: [
              "Find your current error handler at the bottom of server.js",
              "Delete the entire app.use() block that catches errors",
              "It should be the one with (err, req, res, next) parameters",
            ],
          },
          {
            subtitleDescription: "Add 404 Handler",
            descriptions: [
              "After all your route definitions, add a new middleware",
              "This middleware only has (req, res) parameters - no err parameter",
              "Send a 404 status with a JSON message 'Route not found'",
              "This catches requests to routes that don't exist",
            ],
          },
          {
            subtitleDescription: "Add Global Error Handler",
            descriptions: [
              "After the 404 handler, add an error-handling middleware",
              "This middleware has four parameters: err, req, res, next",
              "Log the error with timestamp, message, stack, path, and method",
              "Use console.error with a formatted string including new Date().toISOString()",
              "Extract statusCode from err.status or err.statusCode, defaulting to 500",
            ],
          },
          {
            subtitleDescription: "Add Environment-Based Response Logic",
            descriptions: [
              "Check if process.env.NODE_ENV equals 'production'",
              "In production: check if err.isOperational is true",
              "If operational, return the actual error message to the client",
              "If not operational, return a generic 'Something went wrong' message",
              "In development: return both message and stack for debugging",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Create AppError Utility Class",
        titleDescription:
          "Create a custom error class for operational errors that are safe to show users.",
        sections: [
          {
            subtitleDescription: "Create the AppError File",
            descriptions: [
              "Create a new file: server/utils/AppError.js",
              "Create a class called AppError that extends Error",
              "The constructor takes message and statusCode parameters",
              "Call super(message) to set the error message",
              "Set this.statusCode to the statusCode parameter",
              "Set this.status to the statusCode parameter",
              "Set this.isOperational to true",
              "Call Error.captureStackTrace(this, this.constructor)",
              "Export the class as default",
            ],
          },
          {
            subtitleDescription: "Usage in Controllers (Optional)",
            descriptions: [
              "Import AppError in controllers where you want user-friendly errors",
              "Throw new AppError('Product not found', 404) for expected errors",
              "These messages will show in production because isOperational is true",
              "Regular errors thrown without AppError will show generic message",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Add MongoDB ObjectId Validation",
        titleDescription:
          "Create middleware to validate MongoDB ObjectIds in route parameters.",
        sections: [
          {
            subtitleDescription: "Create validateId Middleware",
            descriptions: [
              "Create a new file: server/middleware/validateId.js",
              "Import mongoose at the top",
              "Export a function called validateObjectId with req, res, next parameters",
              "Extract id from req.params",
              "Check if id exists AND is not a valid ObjectId using mongoose.Types.ObjectId.isValid()",
              "If invalid, return 400 status with message 'Invalid ID format'",
              "Otherwise call next() to continue",
            ],
          },
          {
            subtitleDescription: "Apply to Product Routes",
            descriptions: [
              "Open server/routes/productRoutes.js",
              "Import validateObjectId from the middleware file",
              "Add validateObjectId as the first middleware for GET /:id route",
              "Add validateObjectId for PATCH /:id route",
              "Add validateObjectId for DELETE /:id route",
              "Add validateObjectId for POST /:id/ratings route",
              "Add validateObjectId for PATCH /:id/ratings route",
              "Add validateObjectId for GET /:id/ratings route",
              "Add validateObjectId for DELETE /:id/ratings route",
            ],
          },
          {
            subtitleDescription: "Apply to Order Routes",
            descriptions: [
              "Open server/routes/orderRoutes.js",
              "Import validateObjectId from the middleware file",
              "Add validateObjectId to GET /:id route",
              "Add validateObjectId to PATCH /:id route",
              "Add validateObjectId to DELETE /:id route",
            ],
          },
          {
            subtitleDescription: "Apply to User Routes",
            descriptions: [
              "Open server/routes/userRoutes.js",
              "Import validateObjectId from the middleware file",
              "Add validateObjectId to GET /:id route",
              "Add validateObjectId to PATCH /:id/role route",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Test Security Implementations",
        titleDescription:
          "Verify all security protections are working correctly.",
        sections: [
          {
            subtitleDescription: "Test Security Headers",
            descriptions: [
              "Start your server and make any request",
              "Check response headers in browser DevTools or Postman",
              "Verify X-Content-Type-Options header is present",
              "Verify X-Frame-Options header is present",
              "Verify Content-Security-Policy header is present",
            ],
          },
          {
            subtitleDescription: "Test Rate Limiting",
            descriptions: [
              "Make many rapid requests to any endpoint",
              "Verify you get 429 Too Many Requests after exceeding the limit",
              "Check that RateLimit-Remaining header decreases with each request",
            ],
          },
          {
            subtitleDescription: "Test MongoDB Injection Prevention",
            descriptions: [
              "Try sending a login request with password as an object containing $gt operator",
              "Verify the request fails or the operator is stripped",
              "The malicious query should not bypass authentication",
            ],
          },
          {
            subtitleDescription: "Test Request Size Limits",
            descriptions: [
              "Try sending a request with a very large JSON body (over 10kb)",
              "Verify you get a 413 Payload Too Large error",
            ],
          },
          {
            subtitleDescription: "Test ObjectId Validation",
            descriptions: [
              "Try accessing /api/products/invalid-id",
              "Verify you get 400 Bad Request with 'Invalid ID format' message",
              "Try accessing /api/products/123 (too short)",
              "Verify you get the same validation error",
            ],
          },
          {
            subtitleDescription: "Test Error Handling",
            descriptions: [
              "Set NODE_ENV to production and trigger an error",
              "Verify the response shows generic 'Something went wrong' message",
              "Set NODE_ENV to development and trigger the same error",
              "Verify the response includes the actual error message and stack trace",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Solid understanding of Express.js middleware and routing",
      "Experience building RESTful APIs with Node.js and Express",
      "Familiarity with MongoDB and Mongoose (schemas, queries, ObjectId)",
      "Working knowledge of JWT authentication (access and refresh tokens)",
      "Understanding of cookies and secure HTTP-only cookie configuration",
      "Basic knowledge of common web security vulnerabilities (XSS, CSRF, injection, rate limiting)",
      "Experience using npm packages and configuring middleware (e.g., cors, express.json)",
      "Comfortable modifying Express app setup in a main server file (server.js)",
      "Ability to create and use custom middleware functions",
      "Understanding of environment variables and NODE_ENV (development vs production)",
      "Experience handling errors in Express (error-handling middleware)",
      "Familiarity with Postman or browser DevTools for testing headers and responses",
      "Basic cryptography concepts (hashing with SHA-256, why plain-text tokens are insecure)",
      "Debugging server-side code and reading server logs effectively",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/xl4njv?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom30,    videoLink: "",
  },
  {
    taskId: "ecom31",
    taskTitle: "Integrate Stripe Payments: Complete Checkout Flow",
    introduction:
      "In this lesson, you'll integrate Stripe payment processing into your e-commerce application. You'll set up the Stripe SDK on both frontend and backend, create a payment controller with PaymentIntent flow, build a secure card input form component, and update the checkout page to handle real payments. This replaces the mock payment flow with actual credit card processing.",
    steps: [
      {
        stepTitle: "Step 1: Install Stripe Dependencies",
        titleDescription:
          "Add the required Stripe packages to frontend and backend.",
        sections: [
          {
            subtitleDescription: "Install Frontend Stripe Packages",
            descriptions: [
              "Open terminal in the client directory",
              "Run: npm install @stripe/react-stripe-js @stripe/stripe-js",
              "@stripe/stripe-js is the core Stripe.js library",
              "@stripe/react-stripe-js provides React components for Stripe Elements",
            ],
          },
          {
            subtitleDescription: "Verify Backend Stripe Package",
            descriptions: [
              "Open terminal in the server directory",
              "The stripe package should already be installed",
              "If not, run: npm install stripe",
            ],
          },
          {
            subtitleDescription: "Downgrade React Version (If Needed)",
            descriptions: [
              "Stripe React components work best with React 18.2.0",
              "Open client/package.json",
              "Change react version from ^19.1.0 to 18.2.0",
              "Change react-dom version from ^19.1.0 to 18.2.0",
              "Delete node_modules and package-lock.json in client folder",
              "Run npm install in client folder",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Configure Stripe API Keys",
        titleDescription:
          "Add Stripe secret and publishable keys to environment variables.",
        sections: [
          {
            subtitleDescription: "Get Stripe API Keys",
            descriptions: [
              "Go to dashboard.stripe.com and log in or create an account",
              "Navigate to Developers > API Keys",
              "Copy your Publishable key (starts with pk_test_)",
              "Copy your Secret key (starts with sk_test_)",
              "For testing, use the test mode keys",
            ],
          },
          {
            subtitleDescription: "Add Keys to Backend .env",
            descriptions: [
              "Open server/.env file",
              "Add: STRIPE_SECRET_KEY=sk_test_your_secret_key_here",
              "Add: STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret (optional for now)",
            ],
          },
          {
            subtitleDescription: "Add Key to Frontend Environment",
            descriptions: [
              "The publishable key needs to be available in the frontend",
              "Open client/rspack.config.js",
              "Add environment variable handling for STRIPE_PUBLISHABLE_KEY",
              "Alternatively, you can hardcode the test publishable key temporarily",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Create Payment Controller",
        titleDescription:
          "Build the backend controller to handle Stripe PaymentIntents.",
        sections: [
          {
            subtitleDescription:
              "Create the Controller File and Set Up Imports",
            descriptions: [
              "Create new file: server/controllers/paymentController.js",
              "Import Stripe from the 'stripe' package",
              "Import your Order model from '../models/Order.js'",
              "Import your Cart model from '../models/Cart.js'",
              "Initialize Stripe by calling it as a function with your secret key",
              "Access the key from process.env.STRIPE_SECRET_KEY",
            ],
          },
          {
            subtitleDescription: "Create createPaymentIntent Function - Setup",
            descriptions: [
              "Export an async function called createPaymentIntent with req, res, next parameters",
              "Wrap all logic in a try-catch block",
              "In catch, call next(error) to pass errors to the error handler",
              "Extract items and shippingAddress from req.body using destructuring",
            ],
          },
          {
            subtitleDescription:
              "Create createPaymentIntent Function - Calculate Total",
            descriptions: [
              "Calculate subtotal by reducing items array",
              "For each item, multiply price by quantity and sum them",
              "Calculate VAT at 20% of subtotal",
              "Calculate total by adding subtotal and VAT",
              "Convert total to pence by multiplying by 100 and rounding",
              "Stripe requires amounts in smallest currency unit (pence for GBP)",
            ],
          },
          {
            subtitleDescription:
              "Create createPaymentIntent Function - Create Intent",
            descriptions: [
              "Call stripe.paymentIntents.create() with an options object",
              "Set amount to your calculated amount in pence",
              "Set currency to 'gbp'",
              "Set automatic_payment_methods.enabled to true",
              "Add metadata object with userId from req.user.id",
              "Store the result in a variable called paymentIntent",
            ],
          },
          {
            subtitleDescription:
              "Create createPaymentIntent Function - Return Response",
            descriptions: [
              "Send a JSON response with status 200",
              "Include clientSecret from paymentIntent.client_secret",
              "Include paymentIntentId from paymentIntent.id",
              "The frontend needs clientSecret to confirm the payment",
            ],
          },
          {
            subtitleDescription:
              "Create confirmPayment Function - Setup and Validation",
            descriptions: [
              "Export an async function called confirmPayment with req, res, next parameters",
              "Wrap all logic in a try-catch block",
              "Extract paymentIntentId, items, shippingAddress, paymentMethod from req.body",
              "Call stripe.paymentIntents.retrieve() with the paymentIntentId",
              "Store result in a variable called paymentIntent",
            ],
          },
          {
            subtitleDescription:
              "Create confirmPayment Function - Verify Payment Status",
            descriptions: [
              "Check if paymentIntent.status equals 'succeeded'",
              "If not succeeded, return 400 status with message 'Payment not completed'",
              "Only create the order if payment was actually successful",
            ],
          },
          {
            subtitleDescription:
              "Create confirmPayment Function - Calculate Order Totals",
            descriptions: [
              "Calculate subtotal from items array (same as before)",
              "Calculate VAT at 20%",
              "Calculate total by adding subtotal and VAT",
            ],
          },
          {
            subtitleDescription:
              "Create confirmPayment Function - Create Order",
            descriptions: [
              "Use Order.create() to create a new order document",
              "Set user to req.user.id",
              "Set items by mapping the items array to include productId, quantity, price",
              "Set shippingAddress from the request body",
              "Set paymentMethod from the request body",
              "Set paymentStatus to 'paid'",
              "Set orderStatus to 'processing'",
              "Set subtotal, tax, and total from your calculations",
              "Set stripePaymentIntentId to the paymentIntentId",
            ],
          },
          {
            subtitleDescription:
              "Create confirmPayment Function - Clear Cart and Respond",
            descriptions: [
              "After creating the order, clear the user's cart",
              "Use Cart.findOneAndUpdate() to find the user's cart",
              "Set items to an empty array",
              "Send JSON response with the created order",
            ],
          },
          {
            subtitleDescription: "Create stripeWebhook Function (Optional)",
            descriptions: [
              "Export an async function called stripeWebhook with req, res parameters",
              "Get the signature from req.headers['stripe-signature']",
              "Get the webhook secret from process.env.STRIPE_WEBHOOK_SECRET",
              "Wrap in try-catch for signature verification errors",
              "Call stripe.webhooks.constructEvent with req.body, signature, and secret",
              "Switch on event.type to handle different events",
              "For 'payment_intent.succeeded', you can log or process the event",
              "Return res.json({ received: true }) to acknowledge",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Create Payment Routes",
        titleDescription: "Set up the Express routes for payment endpoints.",
        sections: [
          {
            subtitleDescription: "Create the Routes File",
            descriptions: [
              "Create new file: server/routes/paymentRoutes.js",
              "Import express and create a router using express.Router()",
              "Import createPaymentIntent, confirmPayment, stripeWebhook from the payment controller",
              "Import authMiddleware from '../middleware/authMiddleware.js'",
            ],
          },
          {
            subtitleDescription: "Define the Routes",
            descriptions: [
              "Add POST route for '/create-payment-intent' with authMiddleware and createPaymentIntent",
              "Add POST route for '/confirm-payment' with authMiddleware and confirmPayment",
              "Add POST route for '/webhook' with express.raw({ type: 'application/json' }) and stripeWebhook",
              "The webhook route must NOT use authMiddleware - Stripe calls it directly",
              "The webhook needs express.raw() to get the raw body for signature verification",
              "Export the router as default",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Register Payment Routes in Server",
        titleDescription: "Add the payment routes to the main server file.",
        sections: [
          {
            subtitleDescription: "Update server.js Imports",
            descriptions: [
              "Open server/server.js",
              "Add import for paymentRoutes from './routes/paymentRoutes.js'",
              "Place it with the other route imports at the top",
            ],
          },
          {
            subtitleDescription: "Update dotenv Import (Optional Cleanup)",
            descriptions: [
              "You can simplify the dotenv setup",
              "Replace: import dotenv from 'dotenv'; and dotenv.config();",
              "With single line: import 'dotenv/config';",
              "This is cleaner and does the same thing",
            ],
          },
          {
            subtitleDescription: "Register the Payment Route",
            descriptions: [
              "Find the Routes section in server.js",
              "Add: app.use('/api/payment', paymentRoutes);",
              "Place it after the other route registrations",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Create StripePaymentForm Component",
        titleDescription: "Build the React component for secure card input.",
        sections: [
          {
            subtitleDescription: "Create Component File and Imports",
            descriptions: [
              "Create new file: client/src/components/StripePaymentForm.js",
              "Import useState from 'react'",
              "Import CardNumberElement, CardExpiryElement, CardCvcElement from '@stripe/react-stripe-js'",
              "Import useStripe, useElements from '@stripe/react-stripe-js'",
              "Import the CSS module (you'll create this next)",
            ],
          },
          {
            subtitleDescription: "Define Component Function and Props",
            descriptions: [
              "Create a functional component called StripePaymentForm",
              "It receives destructured props: clientSecret, onSuccess, onError, total, shippingAddress",
              "clientSecret is the PaymentIntent secret needed to confirm payment",
              "onSuccess is a callback function to call when payment succeeds",
              "onError is a callback function to call when payment fails",
              "total is the order total to display on the button",
              "shippingAddress contains billing details for the payment",
            ],
          },
          {
            subtitleDescription: "Initialize Stripe Hooks and State",
            descriptions: [
              "Call useStripe() and store in a variable called stripe",
              "Call useElements() and store in a variable called elements",
              "Create state variable 'processing' with useState, initialized to false",
              "Create state variable 'cardBrand' with useState, initialized to null",
              "processing tracks if payment is in progress",
              "cardBrand stores detected card type (visa, mastercard, etc.)",
            ],
          },
          {
            subtitleDescription:
              "Create handleSubmit Function - Initial Checks",
            descriptions: [
              "Create an async function called handleSubmit that receives event 'e'",
              "Call e.preventDefault() to prevent form submission",
              "Check if stripe, elements, or clientSecret are falsy",
              "If any are missing, return early - Stripe isn't ready yet",
              "Set processing to true to disable the button",
            ],
          },
          {
            subtitleDescription:
              "Create handleSubmit Function - Confirm Payment",
            descriptions: [
              "Wrap the payment logic in a try-catch block",
              "Call await stripe.confirmCardPayment() with clientSecret as first argument",
              "Pass a second argument object with payment_method property",
              "Inside payment_method, set card to elements.getElement(CardNumberElement)",
              "Add billing_details object with name, email, and address from shippingAddress",
              "For address, include line1 (street), city, postal_code, and country ('GB')",
              "Destructure error and paymentIntent from the result",
            ],
          },
          {
            subtitleDescription: "Create handleSubmit Function - Handle Result",
            descriptions: [
              "After confirmCardPayment, check if error exists",
              "If error, call onError(error.message) and set processing to false, then return",
              "Check if paymentIntent.status equals 'succeeded'",
              "If succeeded, call onSuccess(paymentIntent.id)",
              "In the catch block, call onError with a generic message",
              "Also set processing to false in the catch block",
            ],
          },
          {
            subtitleDescription: "Create Element Styling Options Object",
            descriptions: [
              "Create a constant called elementOptions",
              "It should have a style property with base and invalid nested objects",
              "In base, set fontSize to '16px'",
              "Set fontFamily to a system font stack",
              "Set fontSmoothing to 'antialiased'",
              "Set color to a dark color like '#1a1a1a'",
              "Add '::placeholder' property with color for placeholder text",
              "In invalid, set color and iconColor to a red color for errors",
            ],
          },
          {
            subtitleDescription: "Create handleCardChange Function",
            descriptions: [
              "Create a function called handleCardChange that receives event",
              "Check if event.brand exists",
              "If it does, call setCardBrand with event.brand",
              "This function will be passed to CardNumberElement's onChange",
              "Stripe fires this event as user types, providing detected card brand",
            ],
          },
          {
            subtitleDescription: "Create getCardIcon Helper Function",
            descriptions: [
              "Create a function called getCardIcon",
              "Create an object mapping brand names to display text",
              "Include visa, mastercard, amex, discover as keys",
              "Values can be emoji + brand name like '💳 Visa'",
              "Return the matching icon or null if brand not recognized",
            ],
          },
          {
            subtitleDescription: "Build JSX - Form Container and Header",
            descriptions: [
              "Return a form element with onSubmit={handleSubmit}",
              "Apply the form class from your CSS module",
              "Add a div for secure header with lock icon SVG and 'Secure Payment' text",
              "The lock icon shows users the connection is secure",
            ],
          },
          {
            subtitleDescription: "Build JSX - Card Number Input",
            descriptions: [
              "Create a div container for all card inputs with cardGroup class",
              "Add an inputWrapper div for the card number field",
              "Add a label with text 'Card Number'",
              "Create a div with cardInputContainer class",
              "Add CardNumberElement component inside",
              "Pass options={elementOptions} for styling",
              "Pass className for additional styling",
              "Pass onChange={handleCardChange} to detect card brand",
              "After the element, conditionally render card brand if detected",
              "Check cardBrand exists and is not 'unknown' before showing",
            ],
          },
          {
            subtitleDescription: "Build JSX - Expiry and CVC Row",
            descriptions: [
              "Create a div with row class for side-by-side layout",
              "Add first inputWrapper for expiry",
              "Include label 'Expiry' and CardExpiryElement with elementOptions",
              "Add second inputWrapper for CVC",
              "Include label 'CVC' and CardCvcElement with elementOptions",
            ],
          },
          {
            subtitleDescription: "Build JSX - Submit Button",
            descriptions: [
              "Add a button with type='submit'",
              "Apply submitButton class",
              "Set disabled to true if stripe is falsy OR processing is true",
              "For button content, use ternary operator",
              "If processing, show a span with spinner class",
              "If not processing, show 'Pay £' followed by total with toFixed(2)",
              "Handle case where total might be undefined with fallback '0.00'",
            ],
          },
          {
            subtitleDescription: "Build JSX - Card Logos and Footer",
            descriptions: [
              "Add a div with cardLogos class",
              "Add three img elements for Visa, Mastercard, and Amex logos",
              "Use Stripe's hosted SVG URLs for the card logos",
              "Add a paragraph with 'Powered by' text",
              "Style the word 'Stripe' with emphasis",
            ],
          },
          {
            subtitleDescription: "Export the Component",
            descriptions: [
              "Export the component as default at the bottom of the file",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Create StripePaymentForm CSS",
        titleDescription: "Style the payment form component.",
        sections: [
          {
            subtitleDescription: "Create the CSS Module File",
            descriptions: [
              "Create new file: client/src/components/StripePaymentForm.module.css",
            ],
          },
          {
            subtitleDescription: "Add Form and Header Styles",
            descriptions: [
              "Style .form with padding and max-width",
              "Style .secureHeader with flexbox, align items center, add gap",
              "Style .lockIcon with width and height around 20px",
            ],
          },
          {
            subtitleDescription: "Add Input Container Styles",
            descriptions: [
              "Style .cardGroup with margin-bottom for spacing",
              "Style .inputWrapper with margin-bottom",
              "Style .label with display block, margin-bottom, font-weight",
              "Style .cardInputContainer with border, padding, border-radius, background",
              "Style .stripeInput to fill container width",
              "Style .cardBrand for the detected card icon display",
            ],
          },
          {
            subtitleDescription: "Add Row and Button Styles",
            descriptions: [
              "Style .row with CSS grid, two columns, and gap",
              "Style .submitButton with full width, padding, background color, border-radius",
              "Add cursor pointer and remove border",
              "Add hover state with slightly darker background",
              "Add disabled state with reduced opacity and not-allowed cursor",
            ],
          },
          {
            subtitleDescription: "Add Spinner Animation",
            descriptions: [
              "Style .spinner as a small circular element",
              "Use border with transparent sides except one",
              "Add border-radius 50% for circle",
              "Add animation that rotates 360 degrees",
              "Create @keyframes for the spin animation",
            ],
          },
          {
            subtitleDescription: "Add Footer Styles",
            descriptions: [
              "Style .cardLogos with flexbox, center alignment, gap",
              "Set img max-height around 24-30px",
              "Style .poweredBy with smaller font, center alignment",
              "Style .stripeLogo with font-weight bold",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Update AuthContext for Refresh Token",
        titleDescription:
          "Fix the refreshAccessToken function to send token in request body.",
        sections: [
          {
            subtitleDescription: "Update refreshAccessToken Function",
            descriptions: [
              "Open client/src/context/AuthContext.js",
              "Find the refreshAccessToken function",
              "At the start of the function, get refreshToken from localStorage",
              "Check if refreshToken is null or undefined",
              "If no refreshToken exists, return null immediately (user didn't check 'remember me')",
              "In the fetch call, add headers object with 'Content-Type': 'application/json'",
              "Add body property with JSON.stringify({ refreshToken })",
              "Keep the rest of the function logic the same",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Update CheckoutPage Imports",
        titleDescription:
          "Add Stripe imports and initialize Stripe in the CheckoutPage.",
        sections: [
          {
            subtitleDescription: "Add New Imports",
            descriptions: [
              "Open client/src/pages/CheckoutPage.js",
              "Import Elements from '@stripe/react-stripe-js'",
              "Import loadStripe from '@stripe/stripe-js'",
              "Import StripePaymentForm from '../components/StripePaymentForm'",
            ],
          },
          {
            subtitleDescription: "Initialize Stripe Promise",
            descriptions: [
              "OUTSIDE the component function (at the top of the file after imports)",
              "Create a constant called stripePromise",
              "Assign it the result of calling loadStripe() with your publishable key",
              "Use process.env.STRIPE_PUBLISHABLE_KEY or hardcode test key for now",
              "This must be outside the component to avoid recreating on each render",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Add Payment State Variables to CheckoutPage",
        titleDescription:
          "Add state for managing the payment flow in the checkout.",
        sections: [
          {
            subtitleDescription: "Add Client Secret State",
            descriptions: [
              "In client/src/pages/CheckoutPage.js",
              "Find the existing useState declarations near the top of the component",
              "Add a new state variable called clientSecret",
              "Initialize it to null",
              "This will store the PaymentIntent client secret returned from your backend",
            ],
          },
          {
            subtitleDescription: "Add Payment Intent ID State",
            descriptions: [
              "Add another state variable called paymentIntentId",
              "Initialize it to null",
              "This stores the PaymentIntent ID for confirming the order after payment",
            ],
          },
          {
            subtitleDescription: "Add Show Payment Form State",
            descriptions: [
              "Add a state variable called showPaymentForm",
              "Initialize it to false",
              "This controls whether the payment modal overlay is visible",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Create Payment Handler Functions in CheckoutPage",
        titleDescription:
          "Replace the old order placement with Stripe payment flow.",
        sections: [
          {
            subtitleDescription: "Rename and Refactor handlePlaceOrder",
            descriptions: [
              "In client/src/pages/CheckoutPage.js",
              "Find the existing handlePlaceOrder function",
              "Rename it to handleProceedToPayment",
              "This function will now create a PaymentIntent instead of creating an order",
            ],
          },
          {
            subtitleDescription:
              "Update handleProceedToPayment - Keep Validation",
            descriptions: [
              "Keep the validateForm() check at the start",
              "If validation fails, return early as before",
            ],
          },
          {
            subtitleDescription:
              "Update handleProceedToPayment - Change API Endpoint",
            descriptions: [
              "In the try block, set placing to true",
              "Change the fetchWithAuth URL from '/api/orders' to '/api/payment/create-payment-intent'",
              "Keep the method as 'POST'",
              "Keep the Content-Type header",
            ],
          },
          {
            subtitleDescription:
              "Update handleProceedToPayment - Modify Request Body",
            descriptions: [
              "Update the body to only send items and shippingAddress",
              "Remove paymentMethod from the body for now",
              "Map items the same way as before (productId, quantity, price)",
              "Send shippingAddress with fullName, email, street, city, postalCode, country",
            ],
          },
          {
            subtitleDescription:
              "Update handleProceedToPayment - Handle Response",
            descriptions: [
              "Parse the response as JSON",
              "Check if response is not ok and throw error if so",
              "Extract clientSecret and paymentIntentId from the response data",
              "Call setClientSecret with data.clientSecret",
              "Call setPaymentIntentId with data.paymentIntentId",
              "Call setShowPaymentForm(true) to display the payment modal",
            ],
          },
          {
            subtitleDescription:
              "Update handleProceedToPayment - Error and Finally",
            descriptions: [
              "In the catch block, show error toast with the error message",
              "In the finally block, set placing back to false",
              "Remove any navigation or order creation code - that moves to payment success",
            ],
          },
          {
            subtitleDescription: "Create handlePaymentSuccess Function - Setup",
            descriptions: [
              "Create a new async function called handlePaymentSuccess",
              "It receives one parameter: confirmedPaymentIntentId",
              "This function is called by StripePaymentForm when payment succeeds",
            ],
          },
          {
            subtitleDescription:
              "Create handlePaymentSuccess Function - Confirm Order",
            descriptions: [
              "Wrap logic in try-catch block",
              "Make a POST request to '/api/payment/confirm-payment' using fetchWithAuth",
              "Set Content-Type header to 'application/json'",
              "Send paymentIntentId (the confirmedPaymentIntentId parameter)",
              "Send items mapped with productId, quantity, price",
              "Send shippingAddress with all address fields from formData",
              "Send paymentMethod from formData",
            ],
          },
          {
            subtitleDescription:
              "Create handlePaymentSuccess Function - Handle Response",
            descriptions: [
              "Parse the response as JSON",
              "If response not ok, throw error with data.message",
              "On success, clear the cart by calling setCart({ items: [] })",
              "Call updateCartCount() to refresh the cart badge in header",
              "Show success toast with message like 'Payment successful! Order placed.'",
            ],
          },
          {
            subtitleDescription:
              "Create handlePaymentSuccess Function - Navigate",
            descriptions: [
              "Use setTimeout to delay navigation slightly (1500ms)",
              "Navigate to the order detail page using data.order._id",
              "In the catch block, show error toast with the error message",
            ],
          },
          {
            subtitleDescription: "Create handlePaymentError Function",
            descriptions: [
              "Create a simple function called handlePaymentError",
              "It receives errorMessage as a parameter",
              "Call toast.error(errorMessage) to display the error to user",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Update Checkout JSX with Payment Modal",
        titleDescription: "Add the payment form modal to the checkout page.",
        sections: [
          {
            subtitleDescription: "Update the Place Order Button",
            descriptions: [
              "In client/src/pages/CheckoutPage.js",
              "Find the 'Place Order' button in the summary section",
              "It should be near the bottom inside the summary div",
              "Change onClick from handlePlaceOrder to handleProceedToPayment",
              "Change the button text from 'Place Order' to 'Proceed to Payment'",
              "Change the loading text from 'Placing Order...' to 'Processing...'",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Conditional Wrapper",
            descriptions: [
              "After the 'Proceed to Payment' button (still inside the summary div)",
              "Add conditional rendering using: {showPaymentForm && clientSecret && ( ... )}",
              "This ensures modal only shows when we have the clientSecret from backend",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Overlay Container",
            descriptions: [
              "Inside the conditional, create a div with className={styles.paymentFormOverlay}",
              "This creates the dark semi-transparent background",
              "The overlay should cover the entire screen",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Content Container",
            descriptions: [
              "Inside the overlay, create a div with className={styles.paymentFormContainer}",
              "This is the white box that holds the payment form",
              "It should be centered on the screen",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Close Button",
            descriptions: [
              "Inside the container, add a button for closing the modal",
              "Apply className={styles.closeBtn}",
              "Set onClick to an arrow function that calls setShowPaymentForm(false)",
              "Add aria-label='Close payment form' for accessibility",
              "Use × character as the button content",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Heading",
            descriptions: [
              "Add an h2 element with text 'Complete Payment'",
              "This tells users what they need to do",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - Elements Provider",
            descriptions: [
              "Add the Elements component from @stripe/react-stripe-js",
              "Pass stripe={stripePromise} as a prop",
              "Pass options={{ clientSecret }} as a prop",
              "The Elements component provides Stripe context to child components",
            ],
          },
          {
            subtitleDescription: "Add Payment Modal - StripePaymentForm",
            descriptions: [
              "Inside the Elements component, add StripePaymentForm",
              "Pass clientSecret={clientSecret}",
              "Pass onSuccess={handlePaymentSuccess}",
              "Pass onError={handlePaymentError}",
              "Pass total={total} (the calculated order total)",
              "Pass shippingAddress as an object with: fullName, email, street, city, postalCode",
              "Map these from formData: fullName, email, address (as street), city, postcode (as postalCode)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Add Payment Modal CSS to CheckoutPage",
        titleDescription: "Style the payment form overlay and container.",
        sections: [
          {
            subtitleDescription: "Add Overlay Styles",
            descriptions: [
              "Open client/src/pages/CheckoutPage.module.css",
              "Add .paymentFormOverlay class",
              "Set position to fixed",
              "Set top, left, right, bottom all to 0 to cover viewport",
              "Set background to semi-transparent black (e.g., rgba(0, 0, 0, 0.5))",
              "Use display flex with justify-content and align-items center",
              "Set z-index high (e.g., 1000) to appear above other content",
            ],
          },
          {
            subtitleDescription: "Add Container Styles",
            descriptions: [
              "Add .paymentFormContainer class",
              "Set background to white",
              "Set max-width around 450px",
              "Set width to 90% for mobile responsiveness",
              "Add padding (e.g., 2rem)",
              "Add border-radius for rounded corners",
              "Set position relative (needed for close button positioning)",
              "Add box-shadow for depth effect",
            ],
          },
          {
            subtitleDescription: "Add Close Button Styles",
            descriptions: [
              "Add .closeBtn class",
              "Set position to absolute",
              "Set top and right to small values (e.g., 1rem)",
              "Remove background and border",
              "Set font-size large (e.g., 1.5rem)",
              "Add cursor pointer",
              "Add hover state with color change",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 14: Configure Rspack for Environment Variables",
        titleDescription:
          "Make Stripe publishable key available in the frontend build.",
        sections: [
          {
            subtitleDescription: "Update Rspack Config",
            descriptions: [
              "Open client/rspack.config.js",
              "Import rspack from '@rspack/core' if not already done",
              "In the plugins array, add new rspack.DefinePlugin({})",
              "Inside DefinePlugin, define 'process.env.STRIPE_PUBLISHABLE_KEY'",
              "Set it to JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY) for production",
              "Or JSON.stringify your test key directly for development",
            ],
          },
          {
            subtitleDescription: "Alternative: Hardcode for Development",
            descriptions: [
              "For quick testing, you can hardcode the publishable key in CheckoutPage.js",
              "Replace process.env.STRIPE_PUBLISHABLE_KEY with your pk_test_... key",
              "Remember to use environment variables for production",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 15: Test the Payment Flow",
        titleDescription:
          "Verify the complete Stripe integration works correctly.",
        sections: [
          {
            subtitleDescription: "Test Adding Items to Cart",
            descriptions: [
              "Start both frontend and backend servers",
              "Log in to your account",
              "Add some products to your cart",
              "Navigate to the cart page and verify items",
            ],
          },
          {
            subtitleDescription: "Test Checkout Form",
            descriptions: [
              "Click Checkout or navigate to /checkout",
              "Fill in all shipping address fields",
              "Verify form validation works for invalid inputs",
              "Click 'Proceed to Payment'",
            ],
          },
          {
            subtitleDescription: "Test Payment Modal",
            descriptions: [
              "Verify the payment modal appears with Stripe card inputs",
              "Verify the close button dismisses the modal",
              "Click Proceed to Payment again to reopen",
            ],
          },
          {
            subtitleDescription: "Test Successful Payment",
            descriptions: [
              "Use Stripe test card number: 4242 4242 4242 4242",
              "Use any future expiry date (e.g., 12/34)",
              "Use any 3-digit CVC (e.g., 123)",
              "Click the Pay button",
              "Verify success toast appears",
              "Verify redirect to order detail page",
              "Verify cart is cleared",
            ],
          },
          {
            subtitleDescription: "Test Failed Payment",
            descriptions: [
              "Use Stripe test card for decline: 4000 0000 0000 0002",
              "Attempt payment",
              "Verify error message appears",
              "Verify you can retry with a different card",
            ],
          },
          {
            subtitleDescription: "Verify in Stripe Dashboard",
            descriptions: [
              "Go to dashboard.stripe.com",
              "Navigate to Payments section",
              "Verify successful payments appear with correct amounts",
              "Check payment metadata contains order info",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Completed implementation of user authentication with JWT (access and refresh tokens)",
      "Working cart system with add/remove items and persistence tied to user",
      "Existing checkout page with shipping address form and mock order placement",
      "Familiarity with MongoDB/Mongoose models (e.g., User, Product, Cart, Order schemas)",
      "Experience creating Express controllers, routes, and protected endpoints",
      "Solid understanding of async/await, try-catch error handling in Node.js",
      "Knowledge of React component structure, props, and custom hooks",
      "Proficiency with React state management (useState, useEffect)",
      "Experience building forms in React with validation and submission handling",
      "Understanding of fetching data from backend APIs in React (fetch or axios)",
      "Basic knowledge of CSS modules or scoped styling in React components",
      "Familiarity with environment variables in both client and server (.env files)",
      "Comfortable working with third-party libraries via npm install",
      "Awareness of secure practices for handling API keys (never expose secret keys in frontend)",
      "Basic understanding of payment processing concepts (e.g., client-secret flow, PCI compliance)",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/xl4njv?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom31,    videoLink: "",
  },
  {
    taskId: "ecom32",
    taskTitle: "Deploy React Frontend to Netlify",
    introduction:
      "In this lesson, you'll deploy your React frontend to Netlify. You'll learn how to configure environment variables for production, create a dynamic API configuration that works in both development and production, set up Netlify build settings, and handle React Router with proper redirect rules. By the end, your frontend will be live on the internet and ready to connect to your backend.",
    steps: [
      {
        stepTitle: "Step 1: Understand Frontend Deployment",
        titleDescription:
          "Learn how your local frontend setup differs from production.",
        sections: [
          {
            subtitleDescription: "Local Development vs Production",
            descriptions: [
              "When developing locally, your frontend runs on localhost (e.g., http://localhost:8080)",
              "Your frontend talks to http://localhost:5001 to reach your backend",
              "In production, your frontend will live on Netlify's servers",
              "You'll get a URL like https://myshop.netlify.app",
              "The backend will be on a completely different server (we'll deploy that in the next lesson)",
            ],
          },
          {
            subtitleDescription: "What Needs to Change",
            descriptions: [
              "Frontend must know where to find the backend in production (not localhost)",
              "Hardcoded localhost URLs won't work once deployed",
              "We need a way to switch URLs between development and production automatically",
              "Environment variables solve this problem elegantly",
            ],
          },
          {
            subtitleDescription: "Why Netlify for Frontend",
            descriptions: [
              "Netlify is optimized for static files (HTML, CSS, JS) - perfect for React",
              "React apps are 'built' into static files that don't need a server to run",
              "Netlify offers free hosting with automatic HTTPS",
              "It can automatically redeploy when you push to GitHub",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Create API Configuration File",
        titleDescription: "Create a central place to store your backend URL.",
        sections: [
          {
            subtitleDescription: "Why a Config File",
            descriptions: [
              "Currently you have http://localhost:5001 hardcoded in many files",
              "Instead of changing every single file, create ONE file that holds the URL",
              "All other files will read from this one place",
              "This makes it easy to switch between development and production",
            ],
          },
          {
            subtitleDescription: "Create the Config File",
            descriptions: [
              "Create new folder: client/src/config/",
              "Create new file: client/src/config/api.js",
              "Export a constant called API_URL",
              "Use process.env.API_URL to read from environment variables",
              "Add fallback to http://localhost:5001 for local development",
              "The fallback uses OR operator: process.env.API_URL || 'http://localhost:5001'",
            ],
          },
          {
            subtitleDescription: "How the Config Works",
            descriptions: [
              "process.env.API_URL reads the API_URL from environment variables",
              "In production (Netlify), this will be your backend URL",
              "If no environment variable exists (local development), it falls back to localhost",
              "This single line handles both environments automatically",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Update Rspack Configuration",
        titleDescription:
          "Tell Rspack to include the API_URL environment variable in the build.",
        sections: [
          {
            subtitleDescription: "Why Update Rspack Config",
            descriptions: [
              "By default, environment variables are NOT included in frontend code (security)",
              "We must explicitly tell Rspack which variables to include",
              "DefinePlugin replaces variables at BUILD TIME",
              "When Netlify builds your app, it replaces process.env.API_URL with the actual URL",
            ],
          },
          {
            subtitleDescription: "Add API_URL to DefinePlugin",
            descriptions: [
              "Open client/rspack.config.js",
              "Find the plugins array",
              "Locate the rspack.DefinePlugin section",
              "Add a new property for process.env.API_URL",
              "Use JSON.stringify(process.env.API_URL) as the value",
              "JSON.stringify is needed because we're injecting a string value into code",
            ],
          },
          {
            subtitleDescription: "Install dotenv as Dev Dependency",
            descriptions: [
              "Your rspack.config.js imports dotenv/config at the top",
              "This package must be in your client dependencies",
              "Open terminal in the client folder",
              "Run: npm install dotenv --save-dev",
              "Without this, the build will fail on Netlify with 'Cannot find package dotenv'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Update All Files with Hardcoded URLs",
        titleDescription:
          "Replace localhost:5001 with the dynamic API_URL in all files.",
        sections: [
          {
            subtitleDescription: "Find All Hardcoded URLs",
            descriptions: [
              "Search your entire client/src folder for localhost:5001",
              "In VS Code: Use Ctrl+Shift+F (or Cmd+Shift+F) to search all files",
              "Make a list of every file that needs updating",
            ],
          },
          {
            subtitleDescription: "Update AuthContext.js",
            descriptions: [
              "Open client/src/context/AuthContext.js",
              "Import API_URL from '../config/api' at the top",
              "Find every fetch() call with hardcoded localhost URL",
              "Replace 'http://localhost:5001/api/...' with `${API_URL}/api/...`",
              "Use template literals (backticks) for string interpolation",
              "Add API_URL to the context value object so other components can use it",
            ],
          },
          {
            subtitleDescription: "Update Page Components",
            descriptions: [
              "For pages that use AuthContext, destructure API_URL from useAuth()",
              "Example: const { API_URL, user } = useAuth();",
              "For pages that don't use AuthContext, import API_URL directly from config/api",
              "Update all fetch URLs to use template literals with API_URL",
              "Common files to update: HomePage.js, ProductsPage.js, CartPage.js, CheckoutPage.js",
              "Also check: LoginPage.js, RegisterPage.js, OrdersPage.js, AdminDashboard.js",
            ],
          },
          {
            subtitleDescription: "Pattern for Updating URLs",
            descriptions: [
              "Before: fetch('http://localhost:5001/api/products')",
              "After: fetch(`${API_URL}/api/products`)",
              "The backticks and ${} syntax is JavaScript template literals",
              "This allows you to insert variables into strings",
              "Make sure to update ALL occurrences in each file",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Create Netlify Configuration File",
        titleDescription: "Tell Netlify how to build and serve your React app.",
        sections: [
          {
            subtitleDescription: "Why a Netlify Config File",
            descriptions: [
              "Netlify needs to know what command builds your app",
              "Netlify needs to know where the built files are located",
              "React Router needs special handling for client-side routing",
              "Without proper config, page refreshes will show 404 errors",
            ],
          },
          {
            subtitleDescription: "Create netlify.toml",
            descriptions: [
              "Create new file: client/netlify.toml",
              "Add [build] section with command and publish settings",
              "Set command to 'npm run build'",
              "Set publish to 'dist' (where Rspack outputs built files)",
              "Note: publish is relative to base directory, so just 'dist' not 'client/dist'",
            ],
          },
          {
            subtitleDescription: "Add Redirect Rule for React Router",
            descriptions: [
              "Add [[redirects]] section to netlify.toml",
              "Set from to '/*' to match any URL path",
              "Set to to '/index.html' to always serve the main HTML file",
              "Set status to 200 (serve content, not redirect)",
            ],
          },
          {
            subtitleDescription: "Why the Redirect Rule Matters",
            descriptions: [
              "React is a Single Page Application (SPA)",
              "When someone visits yoursite.com/products/123, Netlify looks for that file",
              "But that file doesn't exist - React handles routing in JavaScript",
              "The redirect rule says: for ANY path, serve index.html and let React handle it",
              "Without this rule, refreshing any page except home shows 404 error",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Push Code to GitHub",
        titleDescription:
          "Make your code available online for Netlify to access.",
        sections: [
          {
            subtitleDescription: "Why GitHub",
            descriptions: [
              "Netlify pulls code from Git repositories",
              "GitHub is the standard way to host code for deployment",
              "It enables automatic redeployment when you push new changes",
              "Netlify can watch your repo and deploy on every push",
            ],
          },
          {
            subtitleDescription: "Initialize and Push (If New Repo)",
            descriptions: [
              "If you haven't already, initialize git: git init",
              "Add all files: git add .",
              "Commit your changes: git commit -m 'Prepare for deployment'",
              "Create a new repository on GitHub",
              "Add remote: git remote add origin https://github.com/username/repo.git",
              "Push to GitHub: git push -u origin main",
            ],
          },
          {
            subtitleDescription: "Push Updates (If Existing Repo)",
            descriptions: [
              "Stage your changes: git add .",
              "Commit with a message: git commit -m 'Add deployment configuration'",
              "Push to GitHub: git push",
              "Verify files appear correctly on GitHub website",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Deploy to Netlify",
        titleDescription: "Set up your React app on Netlify's platform.",
        sections: [
          {
            subtitleDescription: "Create New Site",
            descriptions: [
              "Go to app.netlify.com and log in",
              "Click 'Add new site'",
              "Select 'Import an existing project'",
              "Click 'GitHub' to connect your repository",
            ],
          },
          {
            subtitleDescription: "Select Repository",
            descriptions: [
              "Find and select your repository from the list",
              "If you don't see it, click 'Configure Netlify on GitHub'",
              "Grant access to the specific repository",
              "Return and select the repository",
            ],
          },
          {
            subtitleDescription: "Configure Build Settings",
            descriptions: [
              "Set Base directory to 'client' (your frontend folder)",
              "Set Build command to 'npm run build'",
              "Set Publish directory to 'dist' (NOT 'client/dist')",
              "Since base is 'client', publish is relative to that",
              "Leave Functions directory empty (not using Netlify functions)",
            ],
          },
          {
            subtitleDescription: "Add Environment Variables",
            descriptions: [
              "Click 'Add environment variables' section",
              "Add API_URL with your backend URL (you'll get this after deploying backend)",
              "For now, you can leave it empty or add a placeholder",
              "Add STRIPE_PUBLISHABLE_KEY with your Stripe publishable key (pk_test_...)",
              "Variable names must match exactly what's in your rspack.config.js",
            ],
          },
          {
            subtitleDescription: "Deploy Site",
            descriptions: [
              "Click 'Deploy site'",
              "Wait for the build to complete (1-3 minutes)",
              "Watch the build logs for any errors",
              "Once deployed, copy your Netlify URL (e.g., https://random-name.netlify.app)",
              "You can customize the URL in Site settings > Domain management",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Troubleshoot Common Netlify Issues",
        titleDescription:
          "Identify and fix common frontend deployment problems.",
        sections: [
          {
            subtitleDescription: "Build Fails: Cannot Find Package dotenv",
            descriptions: [
              "Error: Cannot find package 'dotenv'",
              "Your rspack.config.js imports dotenv but it's not in dependencies",
              "Run: npm install dotenv --save-dev in the client folder",
              "Commit and push the updated package.json",
              "Netlify will automatically rebuild",
            ],
          },
          {
            subtitleDescription: "Build Fails: npm build vs npm run build",
            descriptions: [
              "Error: Command failed with exit code 1: npm build",
              "The correct command is 'npm run build' not 'npm build'",
              "Go to Site configuration > Build & deploy > Build settings",
              "Change Build command from 'npm build' to 'npm run build'",
            ],
          },
          {
            subtitleDescription: "Build Succeeds But Site Shows Errors",
            descriptions: [
              "If site loads but API calls fail, check environment variables",
              "Go to Site configuration > Environment variables",
              "Verify API_URL is set correctly with https:// and no trailing slash",
              "After adding/changing variables, trigger a new deploy",
              "Go to Deploys > Trigger deploy > Clear cache and deploy site",
            ],
          },
          {
            subtitleDescription: "Still Calling localhost After Deploy",
            descriptions: [
              "This means API_URL isn't being injected during build",
              "Check that API_URL is in Netlify environment variables",
              "Check that rspack.config.js has API_URL in DefinePlugin",
              "Clear browser cache: Ctrl+Shift+R or open in incognito window",
              "Trigger fresh deploy with 'Clear cache and deploy site'",
            ],
          },
          {
            subtitleDescription: "Page Refresh Shows 404 Error",
            descriptions: [
              "This happens when netlify.toml redirect rule is missing",
              "Create client/netlify.toml with the redirect rule",
              "The rule should redirect /* to /index.html with status 200",
              "Commit, push, and wait for automatic redeploy",
            ],
          },
          {
            subtitleDescription: "Browser Cache Issues",
            descriptions: [
              "Sometimes your browser caches the old JavaScript files",
              "Even after Netlify deploys new version, browser uses cached files",
              "Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)",
              "Or open site in incognito/private window",
              "Or clear browser cache in DevTools > Right-click refresh > Empty cache and hard reload",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Prepare for Backend Connection",
        titleDescription: "Get ready to connect your frontend to the backend.",
        sections: [
          {
            subtitleDescription: "What You Have Now",
            descriptions: [
              "Your frontend is deployed and accessible via Netlify URL",
              "But it can't fetch data yet because backend isn't deployed",
              "API calls will fail with connection errors",
              "This is expected - we'll fix it in the next lesson",
            ],
          },
          {
            subtitleDescription: "Save Your Netlify URL",
            descriptions: [
              "Copy your Netlify URL (e.g., https://your-site.netlify.app)",
              "You'll need this when deploying the backend",
              "The backend needs to know your frontend URL for CORS",
              "Keep this URL handy for the next lesson",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Completed implementation of user authentication with JWT (access and refresh tokens)",
      "Working cart system with add/remove items and persistence tied to user",
      "Existing checkout page with shipping address form and mock order placement",
      "Familiarity with MongoDB/Mongoose models (e.g., User, Product, Cart, Order schemas)",
      "Experience creating Express controllers, routes, and protected endpoints",
      "Solid understanding of async/await, try-catch error handling in Node.js",
      "Knowledge of React component structure, props, and custom hooks",
      "Proficiency with React state management (useState, useEffect)",
      "Experience building forms in React with validation and submission handling",
      "Understanding of fetching data from backend APIs in React (fetch or axios)",
      "Basic knowledge of CSS modules or scoped styling in React components",
      "Familiarity with environment variables in both client and server (.env files)",
      "Comfortable working with third-party libraries via npm install",
      "Awareness of secure practices for handling API keys (never expose secret keys in frontend)",
      "Basic understanding of payment processing concepts (e.g., client-secret flow, PCI compliance)",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/dw9ytw?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom32,    videoLink: "",
  },
  {
    taskId: "ecom33",
    taskTitle: "Deploy Express Backend to Render + Configure MongoDB Atlas",
    introduction:
      "In this lesson, you'll deploy your Express/Node.js backend to Render and configure MongoDB Atlas for production access. You'll learn how to set up environment variables for your server, configure MongoDB network access to allow connections from Render, troubleshoot common deployment issues, and connect your frontend and backend together. By the end, your full-stack application will be live and fully functional.",
    steps: [
      {
        stepTitle: "Step 1: Understand Backend Deployment",
        titleDescription:
          "Learn how your local backend setup differs from production.",
        sections: [
          {
            subtitleDescription: "Local Development vs Production",
            descriptions: [
              "When developing locally, your backend runs on localhost:5001",
              "It connects to MongoDB Atlas from your computer's IP address",
              "In production, your backend will live on Render's servers",
              "You'll get a URL like https://myshop-api.onrender.com",
              "Render's servers have different IP addresses than your computer",
            ],
          },
          {
            subtitleDescription: "What Needs to Change",
            descriptions: [
              "Backend must accept requests from your Netlify frontend URL (CORS)",
              "MongoDB Atlas must allow connections from Render's IP addresses",
              "Environment variables must be configured on Render",
              "The server must use the PORT that Render provides",
            ],
          },
          {
            subtitleDescription: "Why Render for Backend",
            descriptions: [
              "Render runs actual servers - perfect for Node.js/Express",
              "Unlike Netlify, it can execute server-side code continuously",
              "It offers a free tier suitable for learning and small projects",
              "It automatically handles HTTPS and deployment from GitHub",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Verify Backend is Production Ready",
        titleDescription:
          "Check that your Express server is configured for deployment.",
        sections: [
          {
            subtitleDescription: "Check PORT Configuration",
            descriptions: [
              "Open server/server.js",
              "Find where PORT is defined",
              "It should read from process.env.PORT with a fallback",
              "Correct: const PORT = process.env.PORT || 5001",
              "Render automatically sets the PORT environment variable",
              "Your server must use this variable, not a hardcoded port",
            ],
          },
          {
            subtitleDescription: "Check CORS Configuration",
            descriptions: [
              "Find the cors() middleware setup in server.js",
              "It should read allowed origins from process.env.CLIENT_URL",
              "This allows your Netlify frontend to make requests",
              "Include localhost as fallback for local development",
              "Use .filter(Boolean) to remove undefined values from the array",
            ],
          },
          {
            subtitleDescription: "Check Error Handling",
            descriptions: [
              "Find your error handling middleware",
              "In production, avoid sending stack traces to users",
              "Check for process.env.NODE_ENV === 'production'",
              "Send generic error messages in production",
              "Send detailed errors only in development",
            ],
          },
          {
            subtitleDescription: "Verify Package.json Scripts",
            descriptions: [
              "Open server/package.json",
              "Ensure you have a 'start' script that runs your server",
              "It should be: 'start': 'node server.js'",
              "Do NOT use nodemon for the start script (it's for development)",
              "Nodemon is a devDependency and may not install in production",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Check for Monorepo Dependency Issues",
        titleDescription:
          "Ensure all required packages are in server/package.json.",
        sections: [
          {
            subtitleDescription: "Why This Matters",
            descriptions: [
              "Locally, Node.js looks for packages in parent folders too",
              "If you ran npm install in the root folder, packages get 'hoisted'",
              "Your server might find packages in a parent node_modules folder",
              "On Render, only packages in server/package.json are installed",
              "Missing packages will cause 'Cannot find module' errors",
            ],
          },
          {
            subtitleDescription: "Remove file:.. Dependencies",
            descriptions: [
              "Open server/package.json",
              "Look for any dependencies with 'file:..' as the value",
              "Example: 'ecom': 'file:..'",
              "This links to the parent folder which won't exist on Render",
              "Remove these lines from package.json",
              "Run: npm uninstall package-name to remove properly",
            ],
          },
          {
            subtitleDescription: "Test for Missing Dependencies",
            descriptions: [
              "Delete server/node_modules folder completely",
              "Run: npm install in the server folder",
              "Run: npm start to test if server starts",
              "If it fails with 'Cannot find module X', install that package",
              "Run: npm install package-name",
              "Repeat until server starts successfully",
            ],
          },
          {
            subtitleDescription: "Common Missing Packages",
            descriptions: [
              "express-rate-limit is often missing",
              "dotenv might be missing",
              "Any package you use but forgot to install in server folder",
              "Check all imports at the top of server.js",
              "Verify each imported package is in package.json dependencies",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Fix Case Sensitivity Issues",
        titleDescription: "Ensure file names match import statements exactly.",
        sections: [
          {
            subtitleDescription: "Why Case Sensitivity Matters",
            descriptions: [
              "Windows and Mac file systems are case-insensitive",
              "AuthRoutes.js and authRoutes.js are treated as the same file locally",
              "Linux (used by Render) is case-sensitive",
              "They are completely different files on Linux",
              "Mismatched cases cause 'Cannot find module' errors on deployment",
            ],
          },
          {
            subtitleDescription: "Check Your File Names",
            descriptions: [
              "Run: git ls-files server/routes/ to see exact file names",
              "Compare with import statements in server.js",
              "Example: import authRoutes from './routes/authRoutes.js'",
              "If file is AuthRoutes.js but import says authRoutes.js, it will fail",
              "Check all route files, controller files, and middleware files",
            ],
          },
          {
            subtitleDescription: "Rename Files Using Git",
            descriptions: [
              "Use git mv to rename files (ensures git tracks the change)",
              "Example: git mv server/routes/AuthRoutes.js server/routes/authRoutes.js",
              "Commit the change: git commit -m 'Fix case sensitivity'",
              "Push to GitHub: git push",
              "Do NOT just rename in file explorer - git might not notice on Mac/Windows",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Export API_URL from AuthContext",
        titleDescription:
          "Make API_URL available to all components through the context.",
        sections: [
          {
            subtitleDescription: "The Problem",
            descriptions: [
              "Many components destructure API_URL from useAuth() like: const { API_URL } = useAuth()",
              "But if API_URL isn't in the context value object, it will be undefined",
              "When API_URL is undefined, fetch calls become fetch('undefined/api/products')",
              "This hits your Netlify frontend URL instead of your Render backend",
              "You'll see HTML responses instead of JSON data, causing parsing errors",
            ],
          },
          {
            subtitleDescription: "Check Your AuthContext Value Object",
            descriptions: [
              "Open client/src/context/AuthContext.js",
              "Find the value object near the bottom of the AuthProvider component",
              "Check if API_URL is included in the object",
              "If it's missing, components using const { API_URL } = useAuth() will get undefined",
            ],
          },
          {
            subtitleDescription: "Add API_URL to Context Value",
            descriptions: [
              "At the top of AuthContext.js, import API_URL from the config file",
              "Add: import { API_URL } from '../config/api';",
              "Find the value object in the AuthProvider component",
              "Add API_URL to the value object alongside other exports",
              "The value object should include: user, cartCount, loading, isLoggedIn, isAdmin, login, logout, updateCartCount, fetchWithAuth, and API_URL",
            ],
          },
          {
            subtitleDescription: "Two Approaches for Components",
            descriptions: [
              "Approach 1 (Recommended): Export API_URL from AuthContext as described above",
              "Then components can use: const { API_URL, user } = useAuth()",
              "This is cleaner when multiple components already use this pattern",
              "Approach 2: Import API_URL directly in each component",
              "Add: import { API_URL } from '../config/api'; at top of each file",
              "Use Approach 2 for components that don't need other auth values",
            ],
          },
          {
            subtitleDescription: "Check All Affected Components",
            descriptions: [
              "Search your codebase for: API_URL } = useAuth()",
              "Common files that might have this pattern: CartPage.js, CheckoutPage.js, OrderDetailPage.js, ProductDetailPage.js, ProfilePage.js",
              "Either ensure AuthContext exports API_URL, or change these to direct imports",
              "Be consistent - pick one approach and use it throughout",
            ],
          },
          {
            subtitleDescription: "How to Spot This Issue",
            descriptions: [
              "Open browser DevTools > Network tab",
              "Look at failing API requests",
              "If the URL shows 'undefined/api/...' instead of 'https://your-api.onrender.com/api/...'",
              "Then API_URL is undefined in that component",
              "Check the Console tab - you might see JSON parsing errors because HTML was returned",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Configure MongoDB Atlas Network Access",
        titleDescription:
          "Allow your Render server to connect to your database.",
        sections: [
          {
            subtitleDescription: "Why Network Access Matters",
            descriptions: [
              "MongoDB Atlas blocks connections from unknown IP addresses by default",
              "Your local computer's IP is probably whitelisted from initial setup",
              "Render's servers have different IP addresses",
              "Without whitelisting, you'll get 'Could not connect to any servers' error",
            ],
          },
          {
            subtitleDescription: "Access Network Settings",
            descriptions: [
              "Go to cloud.mongodb.com and log in",
              "Select your project",
              "In the left sidebar, find the Security section",
              "Click on 'Database & Network Access'",
              "Click on the 'Network Access' tab",
            ],
          },
          {
            subtitleDescription: "Allow Access from Anywhere",
            descriptions: [
              "Click 'Add IP Address' button",
              "Click 'Allow Access from Anywhere'",
              "This adds 0.0.0.0/0 which means any IP address can connect",
              "Click 'Confirm' to save",
              "Wait 1-2 minutes for changes to propagate",
            ],
          },
          {
            subtitleDescription: "Why Allow from Anywhere is OK",
            descriptions: [
              "Render's free tier uses shared IP addresses that can change",
              "You cannot whitelist a specific IP because it's not static",
              "Your database is still protected by username/password authentication",
              "For production apps with sensitive data, use paid tier with static IPs",
              "For learning and testing, 0.0.0.0/0 is acceptable",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Push Code to GitHub",
        titleDescription:
          "Make your code available online for Render to access.",
        sections: [
          {
            subtitleDescription: "Commit All Changes",
            descriptions: [
              "Stage your changes: git add .",
              "Commit with a message: git commit -m 'Prepare backend for deployment'",
              "Push to GitHub: git push",
              "Verify files appear correctly on GitHub website",
              "Check that the server folder and all its contents are visible",
            ],
          },
          {
            subtitleDescription: "Verify Important Files",
            descriptions: [
              "Check server/package.json exists on GitHub",
              "Check server/server.js exists on GitHub",
              "Check all route files in server/routes/ are present",
              "Check all controller files in server/controllers/ are present",
              "Make sure no sensitive files like .env are pushed (should be in .gitignore)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 8: Deploy to Render",
        titleDescription: "Set up your Express server on Render's platform.",
        sections: [
          {
            subtitleDescription: "Create New Web Service",
            descriptions: [
              "Go to render.com and log in to your dashboard",
              "Click the 'New +' button in the top right",
              "Select 'Web Service' from the dropdown",
              "This creates a server that runs continuously",
            ],
          },
          {
            subtitleDescription: "Connect GitHub Repository",
            descriptions: [
              "Click 'Connect GitHub' (or GitLab if you use that)",
              "Authorize Render to access your repositories if prompted",
              "Find and select your repository from the list",
              "If you don't see it, click 'Configure' to grant access",
            ],
          },
          {
            subtitleDescription: "Configure Basic Settings",
            descriptions: [
              "Set Name to something like 'your-app-api' (becomes part of URL)",
              "Set Region closest to your users (e.g., Frankfurt for EU)",
              "Set Branch to 'main' (or your default branch)",
              "Set Root Directory to 'server' (your backend folder)",
              "Set Runtime/Language to 'Node'",
            ],
          },
          {
            subtitleDescription: "Set Build and Start Commands",
            descriptions: [
              "Set Build Command to 'npm install'",
              "This installs all dependencies before starting",
              "Set Start Command to 'npm start'",
              "Do NOT include 'npm run build' - backend doesn't need building",
              "Do NOT use 'npm run dev' - that's for development with nodemon",
            ],
          },
          {
            subtitleDescription: "Select Instance Type",
            descriptions: [
              "Select the Free instance type for testing",
              "Free tier is fine for learning and development",
              "Note: Free instances 'spin down' after 15 minutes of inactivity",
              "First request after sleep takes 30+ seconds (cold start)",
              "For production apps, consider $7/month Starter tier",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 9: Add Environment Variables to Render",
        titleDescription: "Configure all the secrets your backend needs.",
        sections: [
          {
            subtitleDescription: "Access Environment Variables",
            descriptions: [
              "Click 'Advanced' to expand additional options",
              "Find the 'Environment Variables' section",
              "Click 'Add Environment Variable' for each variable",
              "These replace your local .env file in production",
            ],
          },
          {
            subtitleDescription: "Add Database Connection",
            descriptions: [
              "Add variable: MONGO_URI",
              "Value: Your MongoDB Atlas connection string",
              "Example: mongodb+srv://username:password@cluster.mongodb.net/dbname",
              "Get this from MongoDB Atlas > Connect > Connect your application",
              "Make sure to replace <password> with your actual database password",
            ],
          },
          {
            subtitleDescription: "Add Authentication Secrets",
            descriptions: [
              "Add variable: JWT_SECRET",
              "Value: A long random string for signing access tokens",
              "Add variable: JWT_REFRESH_SECRET",
              "Value: A different long random string for refresh tokens",
              "Use the same values from your local .env file",
              "These must match or existing tokens won't work",
            ],
          },
          {
            subtitleDescription: "Add Payment and App Config",
            descriptions: [
              "Add variable: STRIPE_SECRET_KEY",
              "Value: Your Stripe secret key (sk_test_... or sk_live_...)",
              "Add variable: NODE_ENV",
              "Value: production",
              "Add variable: CLIENT_URL",
              "Value: Your Netlify URL (e.g., https://your-site.netlify.app)",
              "CLIENT_URL is crucial for CORS - without it, frontend requests will be blocked",
            ],
          },
          {
            subtitleDescription: "Important Notes on Values",
            descriptions: [
              "Do NOT add PORT - Render sets this automatically",
              "No quotes around values - just paste them directly",
              "CLIENT_URL must have https:// but NO trailing slash",
              "Correct: https://myshop.netlify.app",
              "Wrong: myshop.netlify.app or https://myshop.netlify.app/",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 10: Deploy and Verify",
        titleDescription: "Launch your backend and check it's working.",
        sections: [
          {
            subtitleDescription: "Start Deployment",
            descriptions: [
              "Click 'Create Web Service'",
              "Render will start cloning your repo and building",
              "Watch the build logs for any errors",
              "Build usually takes 2-5 minutes",
            ],
          },
          {
            subtitleDescription: "Check Build Logs for Errors",
            descriptions: [
              "If you see 'Cannot find module', a package is missing from package.json",
              "If you see 'Cannot find package', same issue - install the package",
              "If you see file path errors, check case sensitivity of file names",
              "Fix errors locally, commit, push, and Render will auto-rebuild",
            ],
          },
          {
            subtitleDescription: "Verify Successful Deployment",
            descriptions: [
              "Once deployed, you'll see a URL like https://your-app.onrender.com",
              "Visit the URL in your browser",
              "You should see 'Server is running!' message",
              "Check Render logs - you should see 'MongoDB Connected' message",
              "If MongoDB fails, double-check Atlas network access settings",
            ],
          },
          {
            subtitleDescription: "Copy Your Render URL",
            descriptions: [
              "Copy the full URL (e.g., https://your-app-api.onrender.com)",
              "You'll need this for the next step",
              "This URL is where your frontend will send API requests",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 11: Connect Frontend and Backend",
        titleDescription:
          "Update both platforms to communicate with each other.",
        sections: [
          {
            subtitleDescription: "Add API_URL to Netlify",
            descriptions: [
              "Go to your Netlify dashboard",
              "Click on your site",
              "Go to Site configuration > Environment variables",
              "Add or update API_URL variable",
              "Set value to your Render URL (e.g., https://your-app-api.onrender.com)",
              "Include https:// but NO trailing slash",
            ],
          },
          {
            subtitleDescription: "Redeploy Netlify",
            descriptions: [
              "After adding/changing environment variables, you must redeploy",
              "Go to Deploys tab",
              "Click 'Trigger deploy' dropdown",
              "Select 'Clear cache and deploy site'",
              "This ensures the new API_URL is baked into the build",
            ],
          },
          {
            subtitleDescription: "Verify CLIENT_URL on Render",
            descriptions: [
              "Go back to your Render dashboard",
              "Click on your web service",
              "Go to the 'Environment' tab",
              "Verify CLIENT_URL matches your exact Netlify URL",
              "If you need to change it, Render will automatically redeploy",
            ],
          },
          {
            subtitleDescription: "How the Connection Works",
            descriptions: [
              "Frontend (Netlify) has API_URL pointing to Render",
              "Backend (Render) has CLIENT_URL pointing to Netlify",
              "Frontend makes API requests to Render URL",
              "Backend accepts requests from Netlify URL (CORS)",
              "Both must match exactly for everything to work",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 12: Troubleshoot Common Render Issues",
        titleDescription:
          "Identify and fix common backend deployment problems.",
        sections: [
          {
            subtitleDescription: "Cannot Find Module Errors",
            descriptions: [
              "Error: Cannot find module 'express-rate-limit'",
              "This means the package isn't in server/package.json",
              "Locally, Node.js might find it in a parent node_modules folder",
              "Fix: Run npm install package-name in the server folder",
              "Commit and push - Render will auto-rebuild",
            ],
          },
          {
            subtitleDescription: "Case Sensitivity Errors",
            descriptions: [
              "Error: Cannot find module './routes/authRoutes.js'",
              "But the file exists as 'AuthRoutes.js' (different case)",
              "Linux is case-sensitive, Windows/Mac are not",
              "Fix: Use git mv to rename the file",
              "Example: git mv AuthRoutes.js authRoutes.js",
              "Commit and push the change",
            ],
          },
          {
            subtitleDescription: "MongoDB Connection Failed",
            descriptions: [
              "Error: Could not connect to any servers in your MongoDB Atlas cluster",
              "This is almost always an IP whitelist issue",
              "Go to MongoDB Atlas > Security > Network Access",
              "Click 'Add IP Address' > 'Allow Access from Anywhere'",
              "Wait 1-2 minutes, then redeploy on Render",
            ],
          },
          {
            subtitleDescription: "CORS Errors in Browser",
            descriptions: [
              "Error in browser console: Access blocked by CORS policy",
              "Check CLIENT_URL in Render matches your exact Netlify URL",
              "URLs must match exactly including https://",
              "No trailing slash at the end",
              "After fixing, Render will auto-redeploy",
            ],
          },
          {
            subtitleDescription: "Environment Variable Issues",
            descriptions: [
              "If features don't work (auth, payments), check env vars",
              "Go to Render > Your service > Environment",
              "Verify all variables are set with correct values",
              "Common issues: typos in variable names, missing values",
              "JWT_SECRET must match what you used locally or tokens won't work",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 13: Understand Why Local Works But Deploy Fails",
        titleDescription:
          "Learn why your app works locally but breaks in production.",
        sections: [
          {
            subtitleDescription: "Dependency Hoisting in Monorepos",
            descriptions: [
              "Your project has both client and server folders in one repo (monorepo)",
              "If you ran npm install in the root folder, packages get 'hoisted'",
              "Node.js looks for packages in parent node_modules folders too",
              "Your server might find express-rate-limit in a parent folder",
              "But Render only has the server folder - no parent to check",
            ],
          },
          {
            subtitleDescription: "The file:.. Dependency Problem",
            descriptions: [
              "If package.json has something like 'ecom': 'file:..'",
              "This links to the parent folder and shares its dependencies",
              "Works locally because parent folder exists",
              "Fails on Render because parent folder doesn't exist",
              "Always remove file:.. dependencies before deploying",
            ],
          },
          {
            subtitleDescription: "Case Sensitivity Summary",
            descriptions: [
              "Windows and Mac: AuthRoutes.js = authRoutes.js (same file)",
              "Linux (Render): AuthRoutes.js ≠ authRoutes.js (different files)",
              "Your code works locally because your OS doesn't care about case",
              "It fails on Render because Linux is strict about exact names",
            ],
          },
          {
            subtitleDescription: "How to Catch Issues Early",
            descriptions: [
              "Delete node_modules and run fresh npm install",
              "If server fails to start locally after fresh install, you found a missing dependency",
              "Use: git ls-files to see exact file names git is tracking",
              "Test your code in a Linux environment if possible (Docker, WSL, etc.)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 14: Test Your Full Application",
        titleDescription: "Verify everything works correctly in production.",
        sections: [
          {
            subtitleDescription: "Test Backend Directly",
            descriptions: [
              "Visit your Render URL in a browser",
              "You should see 'Server is running!' message",
              "Check Render logs for 'MongoDB Connected' message",
              "If you see errors in logs, address them before continuing",
            ],
          },
          {
            subtitleDescription: "Test Frontend Loading",
            descriptions: [
              "Visit your Netlify URL",
              "The homepage should load without errors",
              "Open browser DevTools (F12) and check Console tab",
              "Look for any error messages, especially CORS or network errors",
            ],
          },
          {
            subtitleDescription: "Test API Connectivity",
            descriptions: [
              "Check that products load on the homepage",
              "If products don't load, check Network tab in DevTools",
              "Verify requests go to your Render URL, not localhost",
              "Check for CORS errors in the Console",
            ],
          },
          {
            subtitleDescription: "Test Authentication Flow",
            descriptions: [
              "Try registering a new account",
              "Try logging in with existing credentials",
              "Verify the user stays logged in after page refresh",
              "Test logout functionality",
            ],
          },
          {
            subtitleDescription: "Test Full User Journey",
            descriptions: [
              "Add items to cart",
              "Proceed to checkout",
              "Complete a test payment (use Stripe test card 4242 4242 4242 4242)",
              "Verify order appears in your orders page",
              "Check that cart is cleared after purchase",
            ],
          },
          {
            subtitleDescription: "Understand Cold Starts",
            descriptions: [
              "Render free tier 'spins down' after 15 minutes of inactivity",
              "First request after sleep takes 30+ seconds",
              "This is normal behavior for free tier",
              "Your site isn't broken - just waking up",
              "For always-on service, consider $7/month Starter tier",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Working Express.js backend with routes, controllers, and server.js configured",
      "MongoDB Atlas account with a cluster and connection string ready",
      "GitHub account with your project repository pushed",
      "Completed frontend deployed to Netlify (from previous lesson)",
      "Basic Git knowledge (add, commit, push, and familiarity with git mv)",
      "Understanding of environment variables and .env files in Node.js",
      "Familiarity with npm commands (install, uninstall) and package.json structure",
      "React Context API basics (specifically useAuth pattern if used in your app)",
      "Comfort using browser DevTools (Network and Console tabs) for debugging",
      "Knowledge of CORS concept and why cross-origin requests need configuration",
      "JWT authentication implemented (if your app uses access/refresh tokens)",
      "Stripe account with test API keys (if your app includes payments)",
    ],
    completed: false,
    codesandboxUrl: "/notavailable",
img: ecom33,    videoLink: "",
  },
  {
    taskId: "ecom34",
    taskTitle: "Add Order Detail Modal to Admin Dashboard",
    introduction:
      "In this lesson, you'll add an order detail modal to the Admin Dashboard. Currently, the View button in the orders table does nothing. You'll make it functional by displaying a modal with complete order information including date, status, customer address, ordered items, and total amount. This follows the same modal pattern you already use for products.",
    steps: [
      {
        stepTitle: "Step 1: Add Selected Order State",
        titleDescription: "Create state to track which order is being viewed.",
        sections: [
          {
            subtitleDescription: "Add the State Variable",
            descriptions: [
              "Open client/src/pages/AdminDashboard.js",
              "Find the existing state declarations near the top of the component",
              "Add a new state variable called selectedOrder",
              "Initialize it to null",
              "When set to an order object, the modal will display that order's details",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 2: Connect the View Button",
        titleDescription:
          "Make the View button open the modal with the selected order.",
        sections: [
          {
            subtitleDescription: "Add onClick Handler",
            descriptions: [
              "Find the orders table in the activeTab === 'orders' section",
              "Locate the View button inside the table body map",
              "Add an onClick handler to the button",
              "The handler should call setSelectedOrder with the current order (o)",
              "This passes the entire order object to the modal",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 3: Build the Order Modal Structure",
        titleDescription:
          "Create the modal overlay and container using existing styles.",
        sections: [
          {
            subtitleDescription: "Add Conditional Modal Wrapper",
            descriptions: [
              "Go to the bottom of the component, after the deleteConfirm modal",
              "Add conditional rendering: {selectedOrder && ( ... )}",
              "Create the outer overlay div with styles.modalOverlay",
              "Add onClick to the overlay that sets selectedOrder to null (closes modal)",
            ],
          },
          {
            subtitleDescription: "Create Modal Container",
            descriptions: [
              "Inside the overlay, add a div with styles.modal",
              "Add onClick with e.stopPropagation() to prevent closing when clicking inside",
            ],
          },
          {
            subtitleDescription: "Create Modal Header",
            descriptions: [
              "Add a div with styles.modalHeader",
              "Add h2 showing 'Order #' followed by selectedOrder._id.slice(-6)",
              "This shows the last 6 characters of the order ID",
              "Add a close button with × character and styles.modalClose",
              "Set onClick to close the modal by setting selectedOrder to null",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 4: Add Order Information to Modal Body",
        titleDescription: "Display the order details inside the modal.",
        sections: [
          {
            subtitleDescription: "Create Modal Body Container",
            descriptions: ["After the header, add a div with styles.modalBody"],
          },
          {
            subtitleDescription: "Add Date Paragraph",
            descriptions: [
              "Add a paragraph element",
              "Include a strong tag with text 'Date:'",
              "After the strong tag, display selectedOrder.createdAt",
              "Wrap it in new Date() and call toLocaleDateString()",
            ],
          },
          {
            subtitleDescription: "Add Status Paragraph",
            descriptions: [
              "Add another paragraph",
              "Include a strong tag with text 'Status:'",
              "Display selectedOrder.status",
            ],
          },
          {
            subtitleDescription: "Add Customer Paragraph",
            descriptions: [
              "Add a paragraph with strong tag 'Customer:'",
              "Display selectedOrder.shippingAddress.fullName",
            ],
          },
          {
            subtitleDescription: "Add Address Paragraph",
            descriptions: [
              "Add a paragraph with strong tag 'Address:'",
              "Display the address and city from selectedOrder.shippingAddress",
              "Separate address and city with a comma",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 5: Add Items List to Modal",
        titleDescription:
          "Display the ordered items with quantities and prices.",
        sections: [
          {
            subtitleDescription: "Add Items Header",
            descriptions: [
              "Add an h4 element with text 'Items'",
              "Add inline style for margin-top to create spacing from the info above",
            ],
          },
          {
            subtitleDescription: "Create Items List",
            descriptions: [
              "Add a ul element for the items list",
              "Map over selectedOrder.items array",
              "Use optional chaining (?.) in case items is undefined",
              "Use idx (index) as the key for each list item",
            ],
          },
          {
            subtitleDescription: "Build Each List Item",
            descriptions: [
              "For each item, create an li element",
              "Display: item.name × item.quantity — £(line total)",
              "Calculate line total by multiplying item.price by item.quantity",
              "Format the price with toFixed(2)",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 6: Add Total and Footer",
        titleDescription: "Display the order total and add a close button.",
        sections: [
          {
            subtitleDescription: "Add Total Paragraph",
            descriptions: [
              "After the items list, add a paragraph",
              "Add inline style for margin-top to create spacing",
              "Include a strong tag with text 'Total:'",
              "Display £ followed by selectedOrder.totalAmount.toFixed(2)",
            ],
          },
          {
            subtitleDescription: "Add Modal Footer",
            descriptions: [
              "After modalBody, add a div with styles.modalFooter",
              "Add a button with styles.cancelBtn",
              "Set onClick to close the modal by setting selectedOrder to null",
              "Button text should be 'Close'",
            ],
          },
        ],
      },
      {
        stepTitle: "Step 7: Test the Order Modal",
        titleDescription: "Verify the modal works correctly.",
        sections: [
          {
            subtitleDescription: "Test Opening and Content",
            descriptions: [
              "Start your development server",
              "Log in as an admin and go to the dashboard",
              "Click on the Orders tab",
              "Click the View button on any order",
              "Verify the modal opens with the correct order details",
              "Check that date, status, customer, and address display correctly",
              "Verify items list shows all ordered items with correct calculations",
            ],
          },
          {
            subtitleDescription: "Test Closing the Modal",
            descriptions: [
              "Click the × button in the header - modal should close",
              "Open the modal again",
              "Click the Close button in the footer - modal should close",
              "Open the modal again",
              "Click outside the modal on the dark overlay - modal should close",
            ],
          },
        ],
      },
    ],
    taskType: "Ecommerce",
    difficulty: "Intermediate → Advanced",
    authorIndex: 0,
    prerequisites: [
      "Completed Admin Dashboard layout with tabs (including Orders tab)",
      "Orders table already rendering data from the backend",
      "Express.js backend with orders API endpoint implemented",
      "MongoDB orders collection containing order documents",
      "Orders data includes items, shippingAddress, status, totalAmount, and createdAt fields",
      "Admin authentication and protected dashboard route already working",
      "React state and event handling basics (useState, onClick)",
      "Familiarity with conditional rendering in React",
      "Existing modal implementation in the project (e.g. product modal) to reuse styles and patterns",
      "Basic understanding of mapping arrays in JSX",
      "Comfort using browser DevTools to inspect state and console errors",
    ],
    completed: false,
    codesandboxUrl:
      "https://codesandbox.io/embed/q9pqc8?view=editor+%2B+preview&module=%2Fsrc%2FApp.js",
img: ecom33,    videoLink: "",
  },
];
