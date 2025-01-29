# Campaign Submission Tracker

A comprehensive platform for influencers to manage their campaign submissions and track performance metrics. This system enables influencers to view ongoing campaigns, submit content, and monitor their engagement metrics in real-time.


## Usage

-   To create a new campaign, navigate to the "Create Campaign" page, fill out the form, and submit.
-   To update or delete a campaign, navigate to the campaign's detail page and use the provided options.
-   Once you login it save your account with profile picture 
-  Responsivensess

## Environment Variables

-   `GOOGLE_ID`: Your Google client ID for authentication.
-   `GOOGLE_CLIENT_SECRET`: Your Google client secret for authentication.
-   `MONGODB_URI`: Your MongoDB connection string.
-   `NEXTAUTH_URL`: The URL of your Next.js application.
-   `NEXTAUTH_URL_INTERNAL`: The internal URL of your Next.js application.
-   `NEXTAUTH_SECRET`: A secret used by NextAuth.js to encrypt session data.

### Backend API Endpoints

#### Campaign Management
```javascript
GET /api/campaigns
- Fetches all campaigns posted 
- Query campaigns in any specific word 
```

```javascript
POST /api/campaigns/:campaignId/submissions
- Submits new content for a specific campaign
- Validates submission against campaign requirements
```

```javascript
GET /api/campaigns/:campaignId/metrics
- Includes engagement data and submission history
- Supports Hashtag and names  filtering
```

## Tech Stack

### Frontend
- Next.js 13+ with App Router
- React for UI components
- TailwindCSS for styling
- ShadcN UI for component library
- React Query for state management

### Backend
- Node.js
- MongoDB for data storage
- Express.js for API routing
- Google for authentication

## Project Structure

```
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.js
│   │   ├── prompt
│   │   │   ├── [id]
│   │   │   │   └── route.js
│   │   │   ├── new
│   │   │   │   └── route.js
│   │   │   └── route.js
│   │   └── users
│   │       └── [id]
│   │           └── posts
│   │               └── route.js
│   ├── create-prompt
│   │   └── page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   ├── profile
│   │   ├── [id]
│   │   │   └── page.jsx
│   │   ├── loading.jsx
│   │   └── page.jsx
│   └── update-prompt
│       └── page.jsx
├── components
│   ├── Feed.jsx
│   ├── Form.jsx
│   ├── Nav.jsx
│   ├── Profile.jsx
│   ├── PromptCard.jsx
│   └── Provider.jsx
├── jsconfig.json
├── models
│   ├── prompt.js
│   └── user.js
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   └── assets
│       ├── icons
│       │   ├── copy.svg
│       │   ├── link.svg
│       │   ├── loader.svg
│       │   ├── menu.svg
│       │   └── tick.svg
│       └── images
│           ├── grid.svg
│           ├── logo.svg
│           └── logo-text.svg
├── README.md
├── styles
│   └── globals.css
├── tailwind.config.js
└── utils
    └── database.js
```



## Setup Instructions

1. Clone the repository:
```bash
## Installation

git  clone  https://github.com/your-username/campaign-management.git

cd  campaign-management
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local


```


4. Configure environment variables:
```
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

5. Run development server:
```bash
npm run dev
```
![Screenshot from 2025-01-29 10-53-46](https://github.com/user-attachments/assets/d1eee3e3-da03-4ed2-80e3-ad797519b0b6)


https://github.com/user-attachments/assets/3725a32b-b30f-495d-8e09-5ecfdd0465d2

![Screenshot from 2025-01-29 10-54-35](https://github.com/user-attachments/assets/26d36420-5747-4c19-a392-4f97496a6ab5)


![Screenshot from 2025-01-29 10-54-44](https://github.com/user-attachments/assets/96b230f3-5ee6-43eb-aa3c-0775f503fe1e)




