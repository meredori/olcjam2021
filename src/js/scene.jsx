import React from 'react'
import Introduction from './scenes/introduction';

class Scene extends React.Component {
    render() {
        return <div className="container">
        <div className="row">
          <div className="col justify-content-center">
            <Introduction />
          </div>
        </div>
      </div>
    }
}

export default Scene;