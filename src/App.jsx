import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div>
              <a
                  href="https://vite.dev"
                  target="_blank"
              >
                  <img
                      src={viteLogo}
                      className="logo"
                      alt="Vite logo"
                  />
              </a>
              <a
                  href="https://react.dev"
                  target="_blank"
              >
                  <img
                      src={reactLogo}
                      className="logo react"
                      alt="React logo"
                  />
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
          <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              id="map"
          >
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                  <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          </MapContainer>
      </>
  )
}

export default App
