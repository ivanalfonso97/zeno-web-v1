# 📘 AI Chat Assistant App Implementation Plan (Vite + React + Tailwind CSS)

## ✅ PHASE 1: Project Setup

### 🔧 1.1 Scaffold Vite + React + Tailwind Project
- [x] Create project with `npm create vite@latest` (`react-ts` template).
- [x] Install Tailwind CSS with PostCSS and Autoprefixer.
- [x] Configure `tailwind.config.js` and `index.css` with base styles.
- [x] Enable absolute path imports via `tsconfig.json`.

### 🧩 1.2 Directory Structure

/src
/components # Reusable UI components
/pages # Page-level components
/layouts # Layout wrappers (e.g. with sidebar)
/features # Feature-specific logic (auth, chat, integrations)
/lib # API clients, utils
/hooks # Custom hooks
/stores # State management
/routes # Route config
main.tsx
App.tsx

---

## 🔐 PHASE 2: Authentication (Email + Password)

### 🔑 2.1 Auth Backend Setup
- [x] Use Supabase/Firebase/Custom Express for basic auth.
- [x] Endpoints:
  - `POST /signup`
  - `POST /login`
  - `GET /me` (check auth state)
- [ ] Return a JWT or session token.

### 🧑‍💻 2.2 Auth Frontend UI
- [ ] `LoginPage` and `SignupPage`
- [ ] Form validation via `react-hook-form` + `zod`
- [ ] Store token in `localStorage` on login
- [ ] Redirect to `/chat` on success

### 🔐 2.3 Auth Guards
- [ ] Create `PrivateRoute` HOC or context hook
- [ ] Show loader while validating auth
- [ ] Redirect unauthorized users to `/login`

---

## 💬 PHASE 3: Chat UI + Streaming

### 📡 3.1 Setup Chat UI
- [ ] Create `ChatPage` with:
  - Chat history view
  - Input field + submit button
  - Loading indicator

### 🔌 3.2 Chat Backend Connection
- [ ] Use WebSocket or SSE for real-time message streaming
  - `POST /chat/start`
  - `GET /chat/stream`
- [ ] Maintain `messages[]` state

### 🔄 3.3 Streaming UX
- [ ] Append streamed tokens to last message
- [ ] Auto-scroll to bottom
- [ ] Display typing indicator

---

## 🗓️ PHASE 4: Integrations (Google Calendar)

### 🌐 4.1 OAuth Flow
- [ ] Setup Google Cloud Project
- [ ] Backend endpoint:
  - `GET /auth/google` (redirect URL)
  - `GET /auth/google/callback`
- [ ] Exchange code → token, store refresh/access tokens

### 📅 4.2 Google Calendar API
- [ ] Call:
  - `GET /calendar/events`
- [ ] Fetch and display upcoming 5 events

### 🧑‍💻 4.3 UI
- [ ] `IntegrationsPage`:
  - "Connect Google" button
  - Event list UI
- [ ] Handle expired tokens

---

## 🧭 PHASE 5: Navigation + Layout

### 📚 5.1 Sidebar
- [ ] `Sidebar` component with links:
  - Chat
  - Integrations
  - Logout
- [ ] Display chat history

### 🧱 5.2 Layout Architecture
- [ ] `SidebarLayout.tsx` wraps all protected routes
- [ ] Use React Router v6 nested routes

---

## 🧪 PHASE 6: Testing + Polish

### ✅ 6.1 Auth & Routing
- [ ] Validate login/signup flow
- [ ] Check auth-protected route access
- [ ] Test logout behavior

### 💻 6.2 Chat Experience
- [ ] Input validation
- [ ] Handle empty input, connection loss

### 📅 6.3 Google Integration
- [ ] Validate connection, token expiration
- [ ] Display "no events" gracefully

### 🧼 6.4 UX Polish
- [ ] Add loading skeletons
- [ ] Responsive layout
- [ ] Toasts for errors/success (e.g. `react-hot-toast`)

---

## 📦 Tech Stack Recap

| Feature        | Stack                             |
|----------------|-----------------------------------|
| Frontend       | Vite + React + TypeScript + Tailwind |
| Auth           | Supabase / Firebase / JWT         |
| LLM Streaming  | SSE / WebSocket                   |
| Calendar       | Google OAuth + Calendar API       |

---

## 🔄 Suggested Next Steps

- Generate the Vite + React + Tailwind starter code
- Build `/chat` page with real-time LLM message streaming
