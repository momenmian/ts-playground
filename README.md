# Character Extraction & Story Generation App

## Overview
The **Character Extraction & Story Generation App**  allows users to upload text files, extract characters, and generate stories based on those characters. This application utilizes AI to process the text and create engaging narratives where each character plays a defined role based on their attributes, such as name, description, and personality.

## Features
- **Text File Upload**: Upload a `.txt` file containing a story, book, or any similar content.
- **Character Extraction**: Automatically extract characters from the uploaded file, including their names, descriptions, and personalities.
- **AI-Powered Story Generation**: Generate stories based on the extracted characters using AI models like GPT-4.
- **Real-Time Story Streaming**: Stories are streamed in real-time as they are generated.
- **Structured Output**: Extracted characters are displayed in a table format, including their name, description, and personality.
- **Story Role Summary**: A brief summary of each character’s role in the generated story is provided at the end.

## Tech Stack
- **Next.js**: For building the web interface and handling server-side API requests.
- **React**: To create interactive and dynamic UI components.
- **TypeScript**: Provides type safety and enhances code quality.
- **OpenAI API**: Used for AI-driven character extraction and story generation.
- **Tailwind CSS**: For styling and creating a responsive design.
- **Node.js**: Server environment to run the application.
- **FileReader API**: Used to handle file uploads and read `.txt` file content.

## Prerequisites
To run this project, ensure you have the following:

- A valid OpenAI API key to access AI models.
- **Node.js** installed (v14.x or higher).
- **npm** or **yarn** to manage dependencies.

## Setup and Installation

1. Clone the Story Telling App repository:
   ```
   git clone https://github.com/momenmian/story-telling-app
   ```

2. Navigate to the project directory:
   ```
   cd story-telling-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   OPENAI_API_BASE=http://127.0.0.1:5000/v1
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.