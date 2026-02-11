#!/bin/bash

set -e

# Start both versions
./serve-build.main.sh &
./serve-build.tailwind.sh &
