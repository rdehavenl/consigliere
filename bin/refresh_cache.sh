#!/bin/bash

if [[ ! -f env_vars ]]; then
    echo "We need the env_vars file with the Redis endpoint! Exiting"
    exit 1
fi

source env_vars
NODE_CONFIG_DIR=src/config npm run refresh_cache
