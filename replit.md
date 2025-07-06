# Wiggle - Pet Products E-commerce Application

## Overview

Wiggle is a full-stack e-commerce application for pet products built with React, Express, and PostgreSQL. The application features a modern, responsive design with authentication, shopping cart functionality, wishlist management, and a content management system for blogs. It uses a monorepo structure with shared TypeScript types and follows modern web development practices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: React Context API for cart and authentication state
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL storage

### Database Schema
The application uses a comprehensive schema with the following main entities:
- **Users**: Authentication and profile management
- **Categories**: Product categorization
- **Products**: Main product catalog with images, pricing, and inventory
- **Reviews**: Customer reviews and ratings
- **Orders**: Order management and history
- **Cart Items**: Shopping cart persistence
- **Wishlist**: User wishlist functionality
- **Blog Posts**: Content management for articles and tips
- **Sessions**: Authentication session storage

## Key Components

### Authentication System
- **Provider**: Replit Auth with OpenID Connect
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Protection**: Route-level authentication middleware
- **User Management**: Automatic user creation and profile management

### Shopping Cart
- **Persistence**: Database-backed cart items for authenticated users
- **State Management**: React Context with reducer pattern
- **Operations**: Add, update, remove, and clear cart functionality
- **Integration**: Seamless integration with product catalog

### Product Management
- **Catalog**: Full product catalog with categories and search
- **Filtering**: Category-based and search-based filtering
- **Reviews**: Customer review system with ratings
- **Inventory**: Stock management and availability tracking

### Content Management
- **Blog System**: Full blog functionality with posts and categories
- **SEO**: Slug-based URLs for better search optimization
- **Rich Content**: Support for images and formatted content

## Data Flow

### Authentication Flow
1. User initiates login via Replit Auth
2. OpenID Connect handles authentication
3. Session created and stored in PostgreSQL
4. User profile synchronized with database
5. Frontend receives authentication state

### Shopping Cart Flow
1. User adds product to cart
2. Cart context dispatches action
3. API call persists cart item to database
4. Local state updated with optimistic updates
5. Cart total recalculated

### Product Discovery Flow
1. User browses categories or searches
2. API fetches filtered products from database
3. Results displayed with pagination
4. Product details loaded on-demand

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database
- **Connection**: WebSocket-based connection for serverless environments
- **Migrations**: Drizzle Kit for schema management

### Authentication
- **Replit Auth**: OAuth provider integration
- **OpenID Connect**: Standard authentication protocol
- **Session Management**: PostgreSQL-backed session storage

### UI Components
- **Shadcn/UI**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **Vite**: Build tool with HMR and optimizations
- **TypeScript**: Static typing across the entire stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Environment**: Replit development environment
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Database**: Development database with seeding scripts

### Production
- **Frontend**: Static build served by Express
- **Backend**: Bundled with ESBuild for Node.js
- **Database**: Production PostgreSQL with connection pooling
- **Assets**: Static assets served from CDN (Unsplash for images)

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Session encryption key
- `REPLIT_DOMAINS`: Allowed domains for authentication
- `ISSUER_URL`: OpenID Connect issuer URL

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 06, 2025. Initial setup