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
                    // Ejecutar test.js y fallar el pipeline si el número no es 10
                    def result = sh(script: 'node test.js', returnStatus: true)

                    // Si el código de salida es distinto de 0, el test falló
                    if (result != 0) {
                        error "Test failed: El número no es 10."
                    }
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
