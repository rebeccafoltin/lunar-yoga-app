#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="1b226c86d26a6544f0fb7af289e777ab"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
