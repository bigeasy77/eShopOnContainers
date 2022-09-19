#!/bin/bash

docker tag eshop/webspa:linux-latest $1.azurecr.io/eshop/webspa:linux-latest
docker tag eshop/webhooks.api:linux-latest $1.azurecr.io/eshop/webhooks.api:linux-latest
docker tag eshop/basket.api:linux-latest $1.azurecr.io/eshop/basket.api:linux-latest
docker tag eshop/identity.api:linux-latest $1.azurecr.io/eshop/identity.api:linux-latest
docker tag eshop/catalog.api:linux-latest $1.azurecr.io/eshop/catalog.api:linux-latest
docker tag eshop/ordering.api:linux-latest $1.azurecr.io/eshop/ordering.api:linux-latest
docker tag eshop/webmvc:linux-latest $1.azurecr.io/eshop/webmvc:linux-latest
docker tag eshop/webhooks.client:linux-latest $1.azurecr.io/eshop/webhooks.client:linux-latest
docker tag eshop/payment.api:linux-latest $1.azurecr.io/eshop/payment.api:linux-latest
docker tag eshop/ordering.signalrhub:linux-latest $1.azurecr.io/eshop/ordering.signalrhub:linux-latest
docker tag eshop/webshoppingagg:linux-latest $1.azurecr.io/eshop/webshoppingagg:linux-latest
docker tag eshop/ordering.backgroundtasks:linux-latest $1.azurecr.io/eshop/ordering.backgroundtasks:linux-latest
docker tag eshop/mobileshoppingagg:linux-latest $1.azurecr.io/eshop/mobileshoppingagg:linux-latest
docker tag eshop/webstatus:linux-latest $1.azurecr.io/eshop/webstatus:linux-latest
