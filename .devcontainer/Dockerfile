# Set the Node.js version to match Netlify build environment.
ARG NODE_VERSION=22
# Use the base image for Node.js development from Microsoft's repository.
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${NODE_VERSION}

# Choose between 'hugo' (standard) or 'hugo_extended' (extended) version of Hugo.
ARG VARIANT=hugo_extended
ARG HUGO_VERSION=0.162.1
ARG GO_VERSION=1.26.3

# Install necessary tools and dependencies, and download Hugo.
# Download and extract the specified version of Hugo.
# Move Hugo executable to /usr/bin/ to make it globally accessible.
RUN apt-get update && apt-get install -y ca-certificates openssl git curl && \
    rm -rf /var/lib/apt/lists/* && \
    echo "Installing Hugo ${HUGO_VERSION}..." && \
    wget -q -O ${HUGO_VERSION}.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${VARIANT}_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    tar xf ${HUGO_VERSION}.tar.gz && \
    mv hugo /usr/bin/hugo && \
    rm ${HUGO_VERSION}.tar.gz

# Install specific Go version to match Netlify build environment.
RUN apt-get update && apt-get install -y wget && \
    echo "Installing Go ${GO_VERSION}..." && \
    wget -q https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz -O go.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go.tar.gz && \
    rm go.tar.gz && \
    /usr/local/go/bin/go version && \
    rm -rf /var/lib/apt/lists/*

# Expose the port that the Hugo development server will use.
EXPOSE 1313

# [Optional] Uncomment this section to install additional OS packages you may want.
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install more global Node.js packages.
# RUN sudo -u node npm install -g <your-package-list-here>