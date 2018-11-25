if [ $# != 1 ]; then
    echo "Command: ./elog.sh [start|stop|upload-bpmn]"
else
    if [ $1 == "start" ]; then
        echo "Starting e-Logistik..."
        docker network create --driver bridge elogistik-net
        cd entity-services && ./start.sh
        cd ../web-services && ./start.sh
        cd ../task-services && ./start.sh
    elif [ $1 == "stop" ]; then
        echo "Stopping e-Logistik..."
        docker stop \
        elogistik-entity-svc \
        elogistik-web-svc \
        elogistik-task-svc \
        elogistik-worker-svc
    elif [ $1 == "upload-bpmn" ]; then
        echo "Uploading BPMN to Camunda..."
        cd bpmn && ./upload.sh
    else
        echo "Command: ./elog.sh [start|stop]"
    fi
fi
