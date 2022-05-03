#!/bin/bash

API="http://localhost:4741"
URL_PATH="/change-password"
OLDPW="ilovecurl"
NEWPW="ihatecurl"
TOKEN="24fce8d3a005a95faf74f43de42e04f5"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo