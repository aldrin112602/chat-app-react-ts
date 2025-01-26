const config = {
  apiUrl: import.meta.env.VITE_APP_API_URL || "",

  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",

  googleProjectId: import.meta.env.VITE_GOOGLE_PROJECT_ID || "",

  googleAuthUri: import.meta.env.VITE_GOOGLE_AUTH_URI || "",

  googleTokenUri: import.meta.env.VITE_GOOGLE_TOKEN_URI || "",

  googleAuthProviderCertUrl:
    import.meta.env.VITE_GOOGLE_AUTH_PROVIDER_CERT_URL || "",

  googleClientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || "",

  // Github 
  githubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID || "",

  githubClientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET || "",
};

export default config;
