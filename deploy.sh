#! /bin/bash
echo "Archivo Deploy SH"
npm install -g serverless
serverless deploy --stage $env --package \   $CODEBUILD_SRC_DIR/target/dev -v -r us-east-2
