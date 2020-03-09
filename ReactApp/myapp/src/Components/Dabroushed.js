import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

import queryString from 'query-string';


export default class SearchBox extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  }
 constructor(props) {
        super()
        this.state = { search: queryString.parse(props.location.search).search }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleSubmit(event) {
        event.preventDefault()
        const query = queryString.parse(this.props.location.search)
        if(this.state.search) {
          query.search = this.state.search
        } else {
          delete query.search
        }
        const string = queryString.stringify(query)
        const history = createBrowserHistory()
        this.props.history.push({
          pathname: ('/search/product'),
          search: string ? `?${string}` : ''
        })
      
        window.location.reload();
      
      }

      
      handleChange(event) {
        this.setState({ search: event.target.value })
      }
    
      render() {
        const { search } = this.state
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="Search..."
              value={search}
              onChange={this.handleChange}
            
              />
          

          </form>
        )
      }
    }
    
   
