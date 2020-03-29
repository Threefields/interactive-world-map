import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, NarrativeDrawer, ThemeWrapper } from './components'
import 'leaflet/dist/leaflet.css'

import 'typeface-roboto'

import L from 'leaflet'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'

import { data } from './data'

// FIX leaflet's default icon path problems with webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flex: '1 1',
    flexFlow: 'column',
    overflow: 'auto',
  },
  mapContainer: {
    flex: 1,
  },
  timelineContainer: {
    flex: 1,
    background: '#fff',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <ThemeWrapper>
      <div className={classes.root}>
        <AppBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <LeafletMap center={[51.505, -0.09]} className={classes.mapContainer} minZoom={4} maxZoom={6} zoom={4} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </LeafletMap>
          <div classes={classes.timelineContainer}>
            <Timeline
              groups={data.groups}
              items={data.items}
              defaultTimeStart={moment().add(-12, 'hour')}
              defaultTimeEnd={moment().add(12, 'hour')}
            />
          </div>
        </main>
        <NarrativeDrawer />
      </div>
    </ThemeWrapper>
  )
}

export default App
