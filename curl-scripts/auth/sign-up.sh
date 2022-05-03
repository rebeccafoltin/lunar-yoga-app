#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-up"
EMAIL="curlycurl@curl.com"
PASSWORD="ilovecurl"
FIRSTNAME="curl"
LASTNAME="curlson"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "firstname": "'"${FIRSTNAME}"'",
      "lastname": "'"${LASTNAME}"'",
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
