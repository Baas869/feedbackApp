import Card from "../shared/Card"
import { Link } from "react-router-dom"
function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About This Project</h1>
            <p>This a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>

        </div>
    </Card>
  )
}

export default AboutPage
