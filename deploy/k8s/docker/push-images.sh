#!/bin/bash

docker push $1.azurecr.io/eshop/webspa:linux-latest
docker push $1.azurecr.io/eshop/webhooks.api:linux-latest
docker push $1.azurecr.io/eshop/basket.api:linux-latest
docker push $1.azurecr.io/eshop/identity.api:linux-latest
docker push $1.azurecr.io/eshop/catalog.api:linux-latest
docker push $1.azurecr.io/eshop/ordering.api:linux-latest
docker push $1.azurecr.io/eshop/webmvc:linux-latest
docker push $1.azurecr.io/eshop/webhooks.client:linux-latest
docker push $1.azurecr.io/eshop/payment.api:linux-latest
docker push $1.azurecr.io/eshop/ordering.signalrhub:linux-latest
docker push $1.azurecr.io/eshop/webshoppingagg:linux-latest
docker push $1.azurecr.io/eshop/ordering.backgroundtasks:linux-latest
docker push $1.azurecr.io/eshop/mobileshoppingagg:linux-latest
docker push $1.azurecr.io/eshop/webstatus:linux-latest
