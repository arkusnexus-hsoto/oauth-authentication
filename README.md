# Google Authentication with Node.js

This project is a basic Node.js application that uses the `google-auth-library` to authenticate users via Google. It allows you to obtain access tokens and access user profile information.

## Requirements

- Node.js (v12 or higher)
- npm (v6 or higher)
- A Google account and a project in Google Cloud Console with OAuth 2.0 credentials.

## Installation

1. Clone this repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add your Google credentials:

   ```plaintext
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   GOOGLE_REDIRECT=your_redirect_uri
   ```

   Make sure the redirect URI is configured in the Google Cloud Console.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`.

3. Click the link to authenticate with Google. You will be redirected to the Google sign-in page.

4. After signing in, you will receive a token containing your user information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
