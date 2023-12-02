import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Card from './components/shared/Card'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStart from "./components/FeedbackStart"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

import AboutIconlink from './components/AboutIconlink'


import Post from './components/Post'

function App(){


    

    
    return (
        <FeedbackProvider>  
            <Router>
                <Header  />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStart />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about'  element={<AboutPage />}/>
                        <Route path='/post/*'  element={<Post />}/>
                    </Routes>
                        {/* <Card>
                            <NavLink to='/' activeClassName='active'>
                                Home
                            </NavLink>
                            <NavLink to='/about' activeClassName='active'>
                                About
                            </NavLink>
                        </Card> */}
                        <AboutIconlink />
                </div>
            </Router>
        </FeedbackProvider>  
        
        
    )
}

export default App