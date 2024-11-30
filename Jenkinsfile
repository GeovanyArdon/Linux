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
                docker.build('geovanyardon/dockerepo:v1', '-f Dockerfile .')
    
            }
        }

        
        stage('Deploy to AWS') {
            steps {
                echo 'Deploying to AWS...'
    
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
