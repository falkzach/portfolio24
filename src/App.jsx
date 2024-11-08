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
                <p>
                    <a href="https://github.com/falkzach" target="_blank">
                        <span className="fa fa-github btn-secondary"></span>GitHub
                    </a>
                    <a href="mailto:falkzach+portfolio@gmail.com" target="_blank">
                        <span className="fa fa-google"></span>Gmail
                    </a>
                    <a href="https://www.linkedin.com/in/falkzach" target="_blank">
                        <span className="fa fa-linkedin"></span>LinkedIn
                    </a>
                    <a href="https://www.linkedin.com/in/falkzach" target="_blank">
                        <span className="fa fa-linkedin"></span>Resume
                    </a>
                </p>
                <h2>Full stack, polyglot, cloud native practitioner</h2>
                <div>
                    <a href="https://kafka.apache.org" target="_blank">
                        <img src={kafkaLogo} className="logo kafka" alt="Kafka logo"/>
                    </a>
                    <a href="https://dotnet.microsoft.com" target="_blank">
                        <img src={dotnetLogo} className="logo dotnet" alt="dotnet logo"/>
                    </a>
                    <a href="https://kubernetes.io" target="_blank">
                        <img src={kubernetesLogo} className="logo kubernetes" alt="Kubernetes logo"/>
                    </a>
                    <a href="https://argo-cd.readthedocs.io" target="_blank">
                        <img src={argocdLogo} className="logo argocd" alt="Argo CD logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                </div>
            </div>

        </>
    )
}

export default App
