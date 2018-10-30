import React from 'react'

import style from './styles.scss'

class Wait4Me extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={style.spinner}>
        <div className={style.rect1} />
        <div className={style.rect2} />
        <div className={style.rect3} />
        <div className={style.rect4} />
        <div className={style.rect5} />
      </div>
    )
  }
}

Wait4Me.propTypes = {

}

export default Wait4Me
