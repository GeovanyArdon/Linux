pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/GeovanyArdon/Linux.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t geovanyardon/dockerepo:v1 -f Dockerfile .'
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo 'Deploying to AWS...'
                // Aquí puedes agregar los comandos de despliegue necesarios
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
