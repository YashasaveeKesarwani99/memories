import React from 'react'
import { Container } from '@material-ui/core'
//import {useDispatch} from 'react-redux'
import {BrowserRouter,Switch, Route} from 'react-router-dom'

// import { getPosts } from './actions/posts'
// import Posts from './components/Posts/Posts'
// import Form from './components/Form/Form'
// import useStyles from './styles'
import Navbar from '../../client/src/components/Navbar/Navbar'
import Home from './components/Home/Home' 
import Auth from './components/Auth/Auth'

const App = ()=>{
    
    return(
        <BrowserRouter>
        <Container maxWidth='lg'>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
            </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default App;