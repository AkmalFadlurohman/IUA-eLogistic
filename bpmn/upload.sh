curl -w "\n" \
-H "Accept: application/json" \
-F "deployment-name=shipping-service" \
-F "enable-duplicate-filtering=true" \
-F "deploy-changed-only=true" \
-F "shipping-service.bpmn=@shipping-service.bpmn" \
http://localhost:9001/engine-rest/deployment/create

curl -w "\n" \
-H "Accept: application/json" \
-F "deployment-name=storage-service" \
-F "enable-duplicate-filtering=true" \
-F "deploy-changed-only=true" \
-F "storage-service.bpmn=@storage-service.bpmn" \
http://localhost:9001/engine-rest/deployment/create

curl -w "\n" \
-H "Accept: application/json" \
-F "deployment-name=supply-service" \
-F "enable-duplicate-filtering=true" \
-F "deploy-changed-only=true" \
-F "supply-service.bpmn=@supply-service.bpmn" \
http://localhost:9001/engine-rest/deployment/create

curl -w "\n" \
-H "Accept: application/json" \
-F "deployment-name=dummy-payment" \
-F "enable-duplicate-filtering=true" \
-F "deploy-changed-only=true" \
-F "dummy-payment.bpmn=@dummy-payment.bpmn" \
http://localhost:9001/engine-rest/deployment/create