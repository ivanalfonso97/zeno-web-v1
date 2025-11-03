# Zeno Web

A modern web application built with React, TypeScript, and Vite, featuring real-time chat capabilities and Google Calendar integration.

## Motivation

Zeno Web is designed to provide an intelligent chat interface with integrated productivity tools. The application combines conversational AI with calendar management to help users streamline their workflow in a single, cohesive platform. Built with modern web technologies, it prioritizes performance, user experience, and maintainability.

Key features include:
- Real-time streaming chat interface with AI assistant
- Google Calendar integration for seamless scheduling
- Dark mode support with theme persistence
- Responsive design for mobile and desktop
- Type-safe development with TypeScript
- Modern authentication and private routing

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zeno-web-v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Development

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

### Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── chat/        # Chat-related components
│   ├── elements/    # Form inputs and basic elements
│   └── layout/      # Layout components (Navbar, Sidebar, etc.)
├── features/        # Feature-specific modules
├── layouts/         # Page layout templates
├── lib/             # Utilities and API clients
├── pages/           # Page components
│   ├── auth/        # Authentication pages
│   └── integrations/# Integration pages
├── routes/          # Routing configuration
└── styles/          # Global styles
```

### Key Technologies

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **React Hook Form + Zod** - Form handling and validation
- **Tailwind CSS** - Utility-first styling
- **Bootstrap Icons** - Icon library

## Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a new branch for your feature or bugfix:
```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them with clear, descriptive messages:
```bash
git commit -m "feature: add new chat feature"
```

4. Push to your fork:
```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request against the `main` branch

### Development Guidelines

- Follow the existing code style and conventions
- Write type-safe TypeScript code
- Run `npm run lint` before committing to ensure code quality
- Test your changes thoroughly in both light and dark modes
- Ensure responsive design works on mobile and desktop
- Keep components modular and reusable
- Add comments for complex logic

### Commit Message Format

Use conventional commit messages:
- `feature: description` - New features
- `bug: description` - Bug fixes
- `docs: description` - Documentation changes
- `style: description` - Code style changes (formatting, etc.)
- `refactor: description` - Code refactoring
- `test: description` - Adding or updating tests
- `chore: description` - Maintenance tasks

### Code Review Process

All contributions go through code review. Please be patient and responsive to feedback. We aim to review pull requests within a few days.

### Questions or Issues?

- Open an issue for bugs or feature requests
- Check existing issues before creating a new one
- Provide as much context as possible when reporting bugs

---

Built with React + TypeScript + Vite
