#!/bin/bash

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f ../nginx-ingress/local-cm.yaml
kubectl apply -f ../helm/aks-httpaddon-cfg.yaml