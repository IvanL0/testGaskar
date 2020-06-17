import React from 'react'

import { connect } from 'react-redux'
import Header from './Elements/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faList, faTh, faCalendar, faUser, faRubleSign } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Elements/Avatar'

class Main extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      selectedTab: 0,
    }
  }
  
  setTab = (value) => {
    this.setState({selectedTab: value})
  }

  render(){
    const { selectedTab } = this.state
    
    return(
      <div className='main'>
        <Header />
        <div className='appBar'>
          <p>ПРОЕКТЫ</p>
        </div>
        <div className='mainContent'>
          <div className='mainTabs'>
            <div 
              className='mainTabsTitle'
              style={{
                borderBottom: selectedTab === 0 ? '4px solid #7b1fa2' : null
              }}
              onClick={() => this.setTab(0)}
            >
              <p>Список пректов</p>
            </div>
            <div 
              className='mainTabsTitle'
              style={{
                borderBottom: selectedTab === 1 ? '4px solid #7b1fa2' : null
              }}
              onClick={() => this.setTab(1)}
            >
              <p>Дорожные карты</p>
            </div>
          </div>
          <div className='mainHeader'>
            <p>СПИСОК ПРОЕКТОВ</p>
            <div className='mainHeaderButton'>
              Добавить проект
            </div>
          </div>
          <div className='mainTable'>
            <div className='mainTableFilter'>
              <div style={{marginRight: '10px'}}>
                <FontAwesomeIcon icon={faTh} style={{fontSize: '18px', cursor: 'pointer', color: '#464646'}}/>
              </div>
              <div style={{marginRight: '10px'}}>
                <FontAwesomeIcon icon={faList} style={{fontSize: '18px', cursor: 'pointer', color: '#464646'}}/>
              </div>
            </div>
            <div className='mainTableBody'>
              <div className='mainTableBodyCell'>
                <div className='mainTableBodyCellImage'>
                  <img />
                  <p className='mainTableBodyCellImageType'>Медицина</p>
                  <p className='mainTableBodyCellImageTitle'>Hadassah Medical</p>
                  <p className='mainTableBodyCellImageStatus'>Строится</p>
                </div>
                <div className='mainTableBodyCellBody'>
                  <div className='mainTableBodyCellBodyTitle'>
                    <p>Терапевтический корпус</p>
                  </div>
                  <div className='mainTableBodyCellBodyInfo'>
                    <div className='mainTableBodyCellBodyInfoRow'>
                      <FontAwesomeIcon icon={faCalendar} style={{color: '#464646'}}/>
                      <p>08.04.2019 - 31.01.2021 гг.</p>
                    </div>
                    <div className='mainTableBodyCellBodyInfoRow'>
                      <FontAwesomeIcon icon={faUser} style={{color: '#464646'}}/>
                      <p>Денис Конев</p>
                    </div>
                    <div className='mainTableBodyCellBodyInfoRow'>
                      <FontAwesomeIcon icon={faRubleSign} style={{color: '#464646'}}/>
                      <p>Просолим Лимитед</p>
                    </div>
                  </div>
                </div>  
                <div className='mainTableBodyCellFooter'>
                  <div className='mainTableBodyCellFooterContacts'>
                    <Avatar size={'30px'}/>
                    <Avatar size={'30px'}/>
                    <Avatar size={'30px'}/>
                  </div>
                  <FontAwesomeIcon 
                    icon={faCircleNotch} 
                    spin 
                    color={'#8bc34a'}
                    style={{
                      fontSize: '20px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default connect()(Main)