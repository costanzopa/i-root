# i-root

## Working on It. Look at Develop branch!

See the diagram below:

<!-- Hack to center the image in GitHub -->
<p align="center">
  <img src="infra/arch/i-root-doc-Architecture Design.jpg" alt="Architecture diagram" width="65%"/>
</p>

## Getting Started

- git clone https://github.com/costanzopa/i-root.git

### Prerequisites

- Install docker [https://docs.docker.com/docker-for-windows/install/]
- Install Kubernetes [https://kubernetes.io/docs/tasks/tools/install-kubectl/]
- Install Skaffold [https://skaffold.dev/]

## Installation

- Make sure that you have running kubernetes.
- Install ingress-nginx [https://kubernetes.github.io/ingress-nginx/deploy/]

- Docker for mac:

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.34.1/deploy/static/provider/cloud/deploy.yaml`

- Host File Setup

  -- MacOs/Linux /etc/hosts

  -- Windows C:\Windows\System32\Drivers\etc\hosts

Add the following line

`127.0.0.1 iroot.dev`

- Create jwt secret

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=YOUR_JWT_SECRET_SIGN`

## Development

### Run

`skaffold dev`
