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

        
        stage('Run JS Test') {
            steps {
                script {
                    // Ejecutar test.js y marcar el pipeline como fallido si lanza un error
                    sh 'node test.js'  // Asegúrate de que test.js esté en el repositorio
                }
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
