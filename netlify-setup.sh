#!/usr/bin/env bash

# Check if we're running in a Netlify environment
# See https://www.netlify.com/docs/continuous-deployment/#environment-variables
if [ ! -z "${DEPLOY_PRIME_URL}" ]; then

    # Init .ssh dir and expand $SSH_KEY
    mkdir -p ~/.ssh
    # echo -e "${SSH_KEY//_/\\n}" > ~/.ssh/id_rsa
    echo -e ${SSH_KEY} | base64 --decode > ~/.ssh/id_rsa

    chmod og-rwx ~/.ssh/id_rsa
    ssh-add ~/.ssh/id_rsa
    # Uncomment to debug
    ls -la ~/.ssh    
    cat ~/.ssh/id_rsa

    # Add host keys, comment out if not needed
    ssh-keyscan -H github.com >> ~/.ssh/known_hosts
    # ssh-keyscan -H bitbucket.org >> ~/.ssh/known_hosts

fi;