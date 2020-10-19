
# Resume React Page 

To deploy the app as tester:
```bashrc
npm start
```

Follow the steps to deploy the React app in Firebase:
```bashrc
# Create the build files
npm run build

# Install the firebase tools with npm
npm install -g firebase-tools

# Login to Firebase
firebase login

# Create a new project. Follow the steps given in the CLI, choosing "Hosting"
firebase init

# Deploy to Firebase
firebase deploy
```