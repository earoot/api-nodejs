#! /bin/bash
echo "Archivo Deploy SH"
ls
echo "abajo"
ls $CODEBUILD_SRC_DIR/
npm install -g serverless
serverless deploy --stage dev --package $CODEBUILD_SRC_DIR/target/dev -v -r us-east-2
