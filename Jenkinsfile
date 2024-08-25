pipeline {
    agent any

    environment {
        DOCKER_HOST = "tcp://docker:2376"
        DOCKER_TLS_VERIFY = "1"
        DOCKER_CERT_PATH = "/certs/client"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build and Deploy with Docker Compose') {
            steps {
                script {
                    // Install Docker Compose if not available
                    sh 'docker-compose --version || apk add --no-cache docker-compose'

                    // Run Docker Compose to build and deploy services
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }

    post {
        always {
            // Cleanup Docker Compose services
            sh 'docker-compose down'
        }
    }
}