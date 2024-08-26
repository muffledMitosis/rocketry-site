pipeline {
	agent {
		docker {image 'node:20.14.0'}
	}
	stages {
		stage('test') {
			steps {
				sh 'node --version'
			}
		}
	}
}