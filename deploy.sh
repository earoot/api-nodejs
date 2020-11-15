#! /bin/bash
echo "Archivo Deploy SH"
ls
npm install -g serverless
serverless deploy --stage dev
