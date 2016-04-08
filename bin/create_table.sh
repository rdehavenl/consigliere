#!/bin/bash

REGION=${1:-"ap-southeast-2"}
CONSIGLIERE_TABLE=consigliere

echo "checking if $CONSIGLIERE_TABLE exists... $REGION"

DESC_CONSIGLIERE=$(aws --region ${REGION} dynamodb describe-table --table-name $CONSIGLIERE_TABLE)
if [[ $? == 0 ]]; then
    DESCRIBED_TABLE=$(echo $DESC_CONSIGLIERE | jq --raw-output .Table.TableName)
    if [[ $DESCRIBED_TABLE == $CONSIGLIERE_TABLE ]]; then
        echo "The $CONSIGLIERE_TABLE table exists"
    else
        echo "The $CONSIGLIERE_TABLE table does not exist."
    fi
else
    echo "$CONSIGLIERE_TABLE does not exist, creating..."
    aws --region ${REGION} dynamodb create-table --table-name $CONSIGLIERE_TABLE \
        --key-schema AttributeName=accountNumber,KeyType=HASH AttributeName=accountName,KeyType=RANGE \
        --attribute-definitions AttributeName=accountNumber,AttributeType=S AttributeName=accountName,AttributeType=S \
        --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

    if [[ $? == 0 ]]; then
        echo "The table, $CONSIGLIERE_TABLE, was created in the $REGION region."
    else
        echo "The $CONSIGLIERE_TABLE table creation in the $REGION region failed."
    fi
fi

