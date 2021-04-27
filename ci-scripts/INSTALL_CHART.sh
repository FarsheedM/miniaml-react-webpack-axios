#!/usr/bin/bash

helm upgrade \
 	--install \
	--cleanup-on-fail \
	--force \
	--wait \
	--debug \
	--set-string image.repository="frontend-demo" \
	frontend-demo ./helm/frontend-demo
