import moment from 'moment'

import { data as mockData } from './mock-data.json'
import './countries.geo.json'

let data = {}

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

data.groups = groups
data.items = items

export { data }