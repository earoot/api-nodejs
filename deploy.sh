#! /bin/bash
echo "Archivo Deploy SH"
npm install -g serverless
serverless deploy --stage dev
