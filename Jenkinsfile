pipeline {
    agent { docker { image 'node' } }
    
    stages {
        stage('Start Notification') {
            steps {
                slackSend message: "Iniciando testes automatizados API. Job: '${env.JOB_NAME}'. Branch '${env.GIT_BRANCH}' :pray:"
            }	
        }
        
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

        success {
            slackSend color:"good", message: "Testes finalizados com sucesso! <${env.BUILD_URL}> :sunglasses:"
        }

        failure {
            slackSend color:"danger", message: "Testes finalizados com erro! <${env.BUILD_URL}> :rage:"
        }
    }
} 