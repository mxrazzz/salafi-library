# Salafi Islamic Library Frontend

This project is a frontend application for the Salafi Islamic Library, built using React, Vite, TypeScript, and several modern libraries and tools. The application aims to provide users with access to a collection of Islamic books and scholars, along with search functionality.

## Features

- **Responsive Design**: The application is styled using Tailwind CSS, ensuring a responsive and modern user interface.
- **Animations**: Framer Motion is used to add smooth animations and transitions throughout the application.
- **Data Fetching**: React Query is utilized for efficient data fetching and state management, allowing for a seamless user experience.
- **Component Library**: Storybook is integrated for developing and testing UI components in isolation.
- **Custom Hooks**: The application includes custom hooks for managing book and scholar data, as well as search functionality.

## Project Structure

```
salafi-library-frontend
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── public
├── .storybook
├── .dockerignore
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── Dockerfile
├── docker-compose.yml
├── index.html
├── jest.config.js
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd salafi-library-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```
This will start the application on `http://localhost:3000`.

### Building for Production

To build the application for production, run:
```
npm run build
```

### Running with Docker

To run the application using Docker, use the following command:
```
docker-compose up --build
```

### Running Tests

To run tests, use:
```
npm test
```

### Storybook

To run Storybook for component development, use:
```
npm run storybook
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.