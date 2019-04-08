pipeline {
    agent { docker { image 'node' } }
    
    stages {
        stage('Config') {
            steps {
                sh 'npm install'
                sh 'npm -v'
                sh 'nodejs -v'
            }	
		}

        stage('Test') {
            steps {
                sh 'npm test'
            }
		}
    }
    
    post { 
        always { 
            cleanWs()
        }
    }
} 