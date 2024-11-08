import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import argocdLogo from './assets/argocd.svg'
import dotnetLogo from './assets/dotnet.svg'
import kafkaLogo from './assets/kafka.png'
import kubernetesLogo from './assets/kubernetes.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
        <>
            <h1>Zachary Falkner</h1>
            <div>
                <p>Senior Software Engineer</p>
                <p>Master&#39;s of Science in Computer Science</p>
                <div>
                    <a className="contact-link" href="https://github.com/falkzach" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a className="contact-link" href="mailto:falkzach+portfolio@gmail.com" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGoogle} /> Gmail
                    </a>
                    <a className="contact-link" href="https://www.linkedin.com/in/falkzach" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a className="contact-link" href="https://www.linkedin.com/in/falkzach" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faFile} /> Resume
                    </a>
                </div>
                <h2>Full stack, polyglot, cloud native practitioner</h2>
                <div>
                    <a href="https://kafka.apache.org" rel="noopener noreferrer" target="_blank">
                        <img src={kafkaLogo} className="logo kafka" alt="Kafka logo"/>
                    </a>
                    <a href="https://dotnet.microsoft.com" rel="noopener noreferrer" target="_blank">
                        <img src={dotnetLogo} className="logo dotnet" alt="dotnet logo"/>
                    </a>
                    <a href="https://kubernetes.io" rel="noopener noreferrer" target="_blank">
                        <img src={kubernetesLogo} className="logo kubernetes" alt="Kubernetes logo"/>
                    </a>
                    <a href="https://argo-cd.readthedocs.io" rel="noopener noreferrer" target="_blank">
                        <img src={argocdLogo} className="logo argocd" alt="Argo CD logo"/>
                    </a>
                    <a href="https://react.dev" rel="noopener noreferrer" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                    <a href="https://vite.dev" rel="noopener noreferrer" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                </div>
            </div>

        </>
    )
}

export default App
