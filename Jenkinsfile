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

        stage('Deploy') {
    steps {
        script {
            echo "Autenticando en Docker Hub..."
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                echo "Subiendo imagen a Docker Hub..."
                docker.image('geovanyardon/dockerepo:v1').push('v1')
                echo "Imagen subida correctamente."
            }

            echo "Descargando e iniciando contenedor desde Docker Hub..."
            sh 'docker pull geovanyardon/dockerepo:v1'
            //sh 'docker run -d -p 80:80 geovanyardon/dockerepo:v1'
            
            echo "Contenedor desplegado correctamente."
        }
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
