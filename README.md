# MiniMart

A clean, minimal web application for online shopping built with Next.js and Express.js.

## Description

MiniMart is a modern e-commerce web application featuring a responsive design, user authentication, and product management. The application provides a seamless shopping experience with a focus on simplicity and usability.

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd minimart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Express.js backend server**
   ```bash
   npm run server
   ```
   The server will start on http://localhost:3001

4. **Start the Next.js development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

5. **Alternative: Run both servers simultaneously**
   ```bash
   npm run dev:all
   ```

## Route List

### Public Routes
- `/` - Landing page with hero, features, and product showcase
- `/items` - Browse all available items
- `/items/[id]` - View detailed information about a specific item
- `/login` - User authentication page

### Protected Routes
- `/add-item` - Add new items to the store (requires authentication)

## Implemented Features

### Frontend Features
- **Landing Page**: Complete homepage with 7 sections (Hero, Features, Categories, Popular Products, Why MiniMart, Testimonials, Call to Action)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Item Browsing**: Grid layout displaying items with images, names, descriptions, and prices
- **Item Details**: Detailed view with product information and actions
- **User Authentication**: Cookie-based login system with protected routes
- **Add Item Form**: Authenticated users can add new products
- **Toast Notifications**: User feedback for actions and errors
- **Navigation**: Dynamic navbar showing different options based on auth state

### Backend Features
- **RESTful API**: Express.js server with CORS enabled
- **Data Persistence**: JSON file-based storage for items
- **CRUD Operations**: Create, Read operations for items
- **Error Handling**: Proper HTTP status codes and error messages
- **Initial Data**: Pre-populated with sample products

### Design Features
- **Minimal UI**: Clean, professional design with plenty of white space
- **Color Scheme**: Primary blue (#2563eb), secondary gray (#64748b), accent yellow (#f59e0b)
- **Typography**: Clear, readable fonts with proper hierarchy
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices

## Authentication and Data Handling

### Authentication
- **Mock Login System**: Uses hardcoded credentials for demonstration
  - Email: `admin@gmail.com`
  - Password: `123456`
- **Cookie Storage**: Authentication state stored in browser cookies (7-day expiry)
- **Route Protection**: Middleware checks for auth cookies on protected routes
- **Automatic Redirects**: Unauthenticated users redirected to login page

### Data Management
- **Backend Storage**: Items stored in `server/data.json` file
- **API Endpoints**:
  - `GET /items` - Retrieve all items
  - `GET /items/:id` - Retrieve specific item
  - `POST /items` - Create new item (requires name, description, price)
- **Data Validation**: Server validates required fields and data types
- **Error Handling**: Graceful handling of missing data and server errors

## Technology Stack

- **Frontend**: Next.js 15 (App Router), React 18, JavaScript
- **Styling**: Tailwind CSS
- **Backend**: Express.js, Node.js
- **Authentication**: Cookie-based with js-cookie
- **Notifications**: React Hot Toast
- **HTTP Client**: Fetch API
- **Development**: Concurrently for running multiple servers

## Project Structure

```
minimart/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Landing page
│   ├── login/             # Login page
│   ├── items/             # Items listing and details
│   └── add-item/          # Add item form (protected)
├── components/            # Reusable React components
│   ├── Navbar.js         # Navigation component
│   └── Footer.js         # Footer component
├── server/               # Express.js backend
│   ├── index.js         # Server entry point
│   └── data.json        # Items data storage
└── README.md            # Project documentation
```

## Getting Started

1. Follow the installation steps above
2. Visit http://localhost:3000 to see the landing page
3. Browse items at http://localhost:3000/items
4. Login with admin@gmail.com / 123456 to access protected features
5. Add new items through the authenticated interface

The application is ready for development, testing, and demonstration purposes.