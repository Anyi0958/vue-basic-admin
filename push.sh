#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'push'
git push -f "https://github.com.cnpmjs.org/Anyi0958/vue-basic-admin.git" master
git push -f "https://gitee.com/anitt/vue-basic-admin.git" master
exec /bin/bash

