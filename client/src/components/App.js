import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import history from '../history'


const ErrorPage = () => {
  return <div>Error 404 </div>
}

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header className=""/>
            <Switch>
              <Route exact path="/" component={StreamList}/>
              <Route exact path="/streams/new" component={StreamCreate}/>
              <Route exact path="/streams/edit/:id" component={StreamEdit}/>
              <Route exact path="/streams/delete" component={StreamDelete}/>
              <Route exact path="/streams/show" component={StreamShow}/>
              <Route exact path="*" component={ErrorPage}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


export default App