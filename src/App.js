import React from 'react'
import moment from 'moment'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'


// FIX leaflet's default icon path problems with webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const styles = {
  mapContainer: {
    height: '100%',
    width: '100%',
    zIndex: '1',
  },
  timelineContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: '2',
    background: '#fff',
  }
}

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }, { id: 3, title: 'group 3' }, { id: 4, title: 'group 4' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
    canMove: false,
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
    canMove: false,
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
    canMove: false,
  },
  {
    id: 4,
    group: 3,
    title: 'item 4',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
    canMove: false,
  },
  {
    id: 5,
    group: 4,
    title: 'item 5',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
    canMove: false,
  }
]

function App() {
  return (
    <>
      <LeafletMap center={[51.505, -0.09]} style={styles.mapContainer} minZoom={4} maxZoom={6} zoom={4} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
      <div style={styles.timelineContainer}>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    </>
  )
}

export default App;
