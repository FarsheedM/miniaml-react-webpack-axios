#!/usr/bin/bash

helm upgrade \
	--dry-run \
	--install \
	--cleanup-on-fail \
	--force \
	--wait \
	--set-string image.repository="frontend-demo" \
	frontend-demo ./helm/frontend-demo

mkdir -p artifacts/helm

helm template \
	--output-dir artifacts/helm \
	frontend-demo ./helm/frontend-demo

