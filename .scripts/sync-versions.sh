#!/bin/bash
set -e

VERSIONS_FILE=".mise.toml"

if [ ! -f "$VERSIONS_FILE" ]; then
    echo "[ERROR] $VERSIONS_FILE not found."
    exit 1
fi

# Extract a "key = "value"" entry from the [tools] table in .mise.toml.
read_version() {
    grep -E "^$1[[:space:]]*=" "$VERSIONS_FILE" | sed -E "s/^$1[[:space:]]*=[[:space:]]*\"([^\"]+)\".*/\1/"
}

NODE_VERSION=$(read_version node)
HUGO_VERSION=$(read_version hugo)
GO_VERSION=$(read_version go)

for name_value in "node:$NODE_VERSION" "hugo:$HUGO_VERSION" "go:$GO_VERSION"; do
    if [ -z "${name_value#*:}" ]; then
        echo "[ERROR] Could not find '${name_value%%:*}' version in $VERSIONS_FILE."
        exit 1
    fi
done

echo "[INFO] Syncing versions from $VERSIONS_FILE..."
echo "  Node: $NODE_VERSION"
echo "  Hugo: $HUGO_VERSION"
echo "  Go: $GO_VERSION"

# Update .devcontainer/Dockerfile
# NOTE: the devcontainer base image (mcr.microsoft.com/devcontainers/javascript-node)
# is only published per Node major version (e.g. "24"), never per exact patch
# version, so only the major version is used for its ARG NODE_VERSION.
echo "[INFO] Updating .devcontainer/Dockerfile..."
NODE_MAJOR_VERSION="${NODE_VERSION%%.*}"
sed -i "s/^ARG NODE_VERSION=.*/ARG NODE_VERSION=$NODE_MAJOR_VERSION/" .devcontainer/Dockerfile
sed -i "s/^ARG HUGO_VERSION=.*/ARG HUGO_VERSION=$HUGO_VERSION/" .devcontainer/Dockerfile
sed -i "s/^ARG GO_VERSION=.*/ARG GO_VERSION=$GO_VERSION/" .devcontainer/Dockerfile

# Update netlify.toml
# NOTE: patterns are anchored to start-of-line (with optional leading
# whitespace) because "GO_VERSION = " is a substring of "HUGO_VERSION = ",
# so an unanchored `s/GO_VERSION = .*/.../ ` also clobbers the HUGO_VERSION line.
echo "[INFO] Updating netlify.toml..."
sed -i "s/^\([[:space:]]*\)NODE_VERSION = .*/\1NODE_VERSION = \"$NODE_VERSION\"/" netlify.toml
sed -i "s/^\([[:space:]]*\)HUGO_VERSION = .*/\1HUGO_VERSION = \"$HUGO_VERSION\"/" netlify.toml
sed -i "s/^\([[:space:]]*\)GO_VERSION = .*/\1GO_VERSION = \"$GO_VERSION\"/" netlify.toml

# Update .devcontainer/devcontainer.json
echo "[INFO] Updating .devcontainer/devcontainer.json..."
sed -i "s/\"golang\": \"[^\"]*\"/\"golang\": \"$GO_VERSION\"/" .devcontainer/devcontainer.json

echo "[SUCCESS] Versions synced successfully!"
