# Askme_frontend
This repository contains frontend code for Ask me chatbot 

# AskMe Chatbot - Frontend

## Overview
This repository contains the frontend code for the **AskMe Chatbot**, deployed as an **Azure Container App**.

## Features
- Interactive UI for chatbot communication
- Real-time API integration with the backend
- Secure authentication and authorization
- Responsive and scalable design

## Tech Stack
- **React.js** (Frontend framework)
- **Tailwind CSS** (Styling)
- **Axios** (API requests)
- **Docker** (Containerization)
- **Azure Container App** (Deployment)

## Deployment Flow
1. **Code Push**: Developers push frontend changes to GitHub.
2. **CI/CD Pipeline**: GitHub Actions builds the Docker image and pushes it to **DockerHub**.
3. **Terraform Infrastructure**: Terraform provisions Azure resources.
4. **Deployment to Azure**: The Docker image is deployed as an **Azure Container App**.

## How to Run Locally
```sh
git clone https://github.com/your-org/askme-frontend.git
cd askme-frontend
npm install
npm start
