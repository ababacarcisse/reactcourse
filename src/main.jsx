import React from 'react'
import ReactDOM from 'react-dom/client'


class Application extends React.Component {
  render() {
    return <div>
      <h1>Voici le composant en class </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum at explicabo quaerat? Ab, ullam magnam. Voluptatibus voluptas earum corporis dolorum minima, suscipit, eaque doloremque delectus quos magnam, dolorem temporibus.</p>
      </div>
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Application/>)