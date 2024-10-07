<img height="100px" width="100px" src="https://github.com/devlotfi/webetu-progres/blob/main/github-assets/logo.svg">

# 📜 Webetu Progres (API Docs) {Unofficial}
The goal of this repository is to do an analysis of how the webetu progress app works, and try to document its corresponding backend API

**NOTE:**
- This repository is unofficial and is not always up to date with the official API
- This repository was only made for educational purposes
- The documentation may not cover all endpoints or can lack type definitions due to empty server responses
- Using the api from a browser requires setting up a proxy server to bypass CORS limitations. an example proxy implementation is integrated into the docs app to make swagger UI work


# 📌 Contents
- [Tech stack](#-tech-stack)
- [Project setup](#-running-the-project-locally)
- [App info](#-running-the-project-locally)

# 💻 Tech stack

The project uses nestjs's openAPI capabilities to generate a typed openAPI schema
which can be used in the swagger UI or to generate Postman docs. In addition it can be used to generate a typed api client in frontend apps

<img src="https://skillicons.dev/icons?i=nestjs,typescript&perline=5" />

# 🌐 Running the project locally 

## Requirements
- NodeJS
- Yarn

To run the docs locally you need to clone the repo and install dependencies. Then run the nestjs app found in the /docs folder
After that make sure to select the proxied url in the servers dropdown for the requests to work 

Docs url: [http://localhost:3000/api](http://localhost:3000/api)

## Preview
<img src="https://github.com/devlotfi/webetu-progres/blob/main/github-assets/swagger-docs.png">

# 📱 App info
After decompiling the apk and analysing the resulting code we made a few concusions:

The app was build using Expo (React Native)

We also notices references to the following packages:
- expo-vector-icons
- react-native-ratings
- popup-ui
- react-native-dropdown-select-list
- react-native-clipboard


