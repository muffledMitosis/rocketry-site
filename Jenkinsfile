pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "nextjs-cicd-docker"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         script {
        //             docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").inside {
        //                 sh 'npm run test'
        //             }
        //         }
        //     }
        // }

        stage('Deploy') {
            steps {
                script {
                    // Update the docker-compose file with the new image tag
                    sh "sed -i 's|${DOCKER_IMAGE}:.*|${DOCKER_IMAGE}:${DOCKER_TAG}|' docker-compose.yml"
                    
                    // Deploy using docker-compose
                    sh 'docker compose up -d'
                }
            }
        }
    }

    post {
        always {
            // Clean up old images
            sh "docker image prune -f"
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}