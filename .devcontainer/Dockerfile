# Set the Node.js version you want to use. You can change this in docker-compose.yml.
ARG NODE_VERSION=18
# Use the base image for Node.js development from Microsoft's repository.
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${NODE_VERSION}

# Choose between 'hugo' (standard) or 'hugo_extended' (extended) version of Hugo.
ARG VARIANT=hugo_extended
# Choose either 'latest' or a specific version number for Hugo.
ARG VERSION=latest

# Install necessary tools and dependencies, and download Hugo.
# Download and extract the specified version of Hugo.
# Move Hugo executable to /usr/bin/ to make it globally accessible.
RUN apt-get update && apt-get install -y ca-certificates openssl git curl && \
    rm -rf /var/lib/apt/lists/* && \
    case ${VERSION} in \
    latest) \
    export VERSION=$(curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4)}') ;;\
    esac && \
    echo ${VERSION} && \
    wget -O ${VERSION}.tar.gz https://github.com/gohugoio/hugo/releases/download/v${VERSION}/${VARIANT}_${VERSION}_Linux-64bit.tar.gz && \
    tar xf ${VERSION}.tar.gz && \
    mv hugo /usr/bin/hugo

# Expose the port that the Hugo development server will use.
EXPOSE 1313

# [Optional] Uncomment this section to install additional OS packages you may want.
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install more global Node.js packages.
# RUN sudo -u node npm install -g <your-package-list-here>
