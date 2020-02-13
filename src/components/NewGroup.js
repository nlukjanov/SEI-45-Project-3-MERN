import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../lib/authHelper'
import ImageUpload from './ImageUpload'

class NewGroup extends Component {
  state = {
    group: {
      name: '',
      description: '',
      imageURL: '',
      isPrivate: false
    }
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    const newValue = type === 'checkbox' ? checked : value
    this.setState({
      ...this.state,
      group: { ...this.state.group, [name]: newValue }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/groups/', this.state.group, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/')
      // this.props.history.push(`/api/groups/${res.data._id}`)
    } catch (error) {
      console.log(error.res)
    }
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <form
              onSubmit={this.handleSubmit}
              className='column is-6 is-offset-3'
            >
              <h2 className='title'>Create New Group</h2>
              <div className='field'>
                <label className='label'>Name your group</label>
                <div className='control'>
                  <input
                    className='input'
                    placeholder='Name'
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.group.name}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='Description'
                    name='description'
                    onChange={this.handleChange}
                    value={this.state.group.description}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Upload Group Image</label>
                <div className='control'>
                  <ImageUpload
                    handleChange={this.handleChange}
                    fieldName='imageURL'
                    labelClassName='my-class'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Private Group?</label>
                <div className='control'>
                  <input
                    name='isPrivate'
                    type='checkbox'
                    checked={this.state.group.isPrivate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <button
                  type='submit'
                  className='button is-fullwidth is-warning'
                >
                  Make my group!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default NewGroup
