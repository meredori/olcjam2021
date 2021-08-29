import React from 'react'
import WordAnimate from './animations/word-animate'

class Scene extends React.Component {
    render() {
        return <div className="container">
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <WordAnimate word="Wake up..." />
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    }
}

export default Scene;