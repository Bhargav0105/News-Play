
import './App.css';

import React, { Component } from 'react'
import News from './components/news';
import Navbar from './components/navbar';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  ApiKey=process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='maroon'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="general" category="general" pageSize={6}/>} />
            <Route exact path='/business' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="business" category="business" pageSize={6}/>} />
            <Route exact path='/entertainment' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={6}/>} />
            <Route exact path='/health' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="health" category="health" pageSize={6}/>} />
            <Route exact path='/science' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="science" category="science" pageSize={6}/>} />
            <Route exact path='/sports' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="sports" category="sports" pageSize={6}/>} />
            <Route exact path='/techonology' element={<News apiKey={this.ApiKey} setProgress={this.setProgress} key="technology" category="technology" pageSize={6}/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
