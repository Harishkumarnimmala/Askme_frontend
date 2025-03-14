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

1. Create conda environment
```
conda create env_name python==3.11
conda activate env_name
```

2. Clone the repo
```sh
git clone https://github.com/your-org/askme-frontend.git
cd askme-frontend
````

3. Install npm
```
npm install
````

4. Start the app
```
npm start   
```

(or)

### To run the application using Docker

# To run docker image 

docker compose down
docker compose build --no-cache
docker compose up -d

# For kubernets just build image and load into minicube directly instead of docker hub

# First download minicube according to OS

# Build the Docker image using your existing Dockerfile
docker build -t frontend:latest .

# Load the image into Minikube
minikube image load frontend:latest

# Now create deployment and service yaml files and then use below commands to deploy

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Now lets create a configmap file to store env variable as we have in our docker compose file 

# After creating yaml file update also deployment file to add configmap there and then deploy using below commands 

kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml  # Update deployment with ConfigMap

# Now just enable ingress controller in order to expose our app with good url using below command

minikube addons enable ingress

# After enable ingress just create ingress.yaml file and deploy using below command

kubectl apply -f ingress.yaml

# Add an Entry to /etc/hosts
Since frontend.local is not a real domain, we must map it to Minikube’s IP using below command

echo "$(minikube ip) frontend.local" | sudo tee -a /etc/hosts

# That's it now go and check at http://localhost:3000/ in browser 

# If not working go stop and start minikube using below commands 

minikube stop
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f configmap.yaml
kubectl apply -f ingress.yaml
















