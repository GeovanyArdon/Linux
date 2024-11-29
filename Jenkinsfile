pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/GeovanyArdon/Linux.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('geovanyardon/dockerepo:v1', '-f Dockerfile .')
                }
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker run --rm geovanyardon/dockerepo:v1 npm test -- --watchAll=false'
            }
        }

        stage('Deploy to AWS') {
            steps {
                script {
                    echo 'Autenticando en Docker Hub...'
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        echo 'Subiendo imagen a Docker Hub...'
                        docker.image('geovanyardon/dockerepo:v1').push('v1')
                        echo 'Imagen subida correctamente.'
                    }

                    echo 'Deteniendo y eliminando contenedor anterior (si existe)...'
                    sh '''
                    CONTAINER_ID=$(docker ps -q -f "publish=3002")
                    if [ -n "$CONTAINER_ID" ]; then
                        echo "Deteniendo el contenedor con puerto 3002..."
                        docker stop $CONTAINER_ID
                        docker rm $CONTAINER_ID
                    fi
                    '''

                    echo 'Descargando e iniciando contenedor desde Docker Hub...'
                    sh 'docker pull geovanyardon/dockerepo:v1'
                    sh 'docker run -d -p 3002:3000 geovanyardon/dockerepo:v1'
                    echo 'Contenedor desplegado correctamente.'
                }
            }
        }
    }
}
