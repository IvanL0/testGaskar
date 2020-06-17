import React from 'react'

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons'

const menu = [
  {name: 'Задачии и работы', count: 3},
  {name: 'Проекты'},
  {name: 'Календарь'},
  {name: 'Задачии и работы', dropdown: true},
]

class Menu extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      selectedElem: null,
    }
  }
  
  handleFocus = (i) => {
    this.setState({selectedElem: i})
  }
  
  render(){
    const { selectedElem } = this.state
    
    return(
      <div className='menu'>
        <div className='menuHeader'>
          
        </div>
        <div className='menuContent'>
          <ul>
            {
              menu.map((item, i) => (
                <li 
                  key={i}
                  className='menuRow' 
                  style={{
                    borderLeft: selectedElem === i ? '6px solid #9c27b0' : null,
                    backgroundColor: selectedElem === i ? '#2f0d58' : null,
                  }}
                  tabIndex={1} 
                  onFocus={(e) => this.handleFocus(i)}
                >
                  {
                    item.count ? 
                    <a className='menuCountRow'>
                      <div className='menuRowText'>
                        <FontAwesomeIcon 
                          icon={faThLarge} 
                          style={{color: '#fff'}}
                        />
                        <p>{item.name}</p>
                      </div>
                      <p className='menuRowCount'>{item.count}</p>
                    </a> :
                    item.dropdown ?
                    <a className='menuDropdownRow'>
                      <div className='menuRowText'>
                        <FontAwesomeIcon 
                          icon={faThLarge} 
                          style={{color: '#fff'}}
                        />
                        <p>{item.name}</p>
                      </div>
                      <FontAwesomeIcon 
                        icon={faSortDown} 
                        style={{color: '#fff'}}
                      />
                    </a> :
                    <a className='menuRowText'>
                      <FontAwesomeIcon 
                        icon={faThLarge} 
                        style={{color: '#fff'}}
                      />
                      <p>{item.name}</p>
                    </a>
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect()(Menu)