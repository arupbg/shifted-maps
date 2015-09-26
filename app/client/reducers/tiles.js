import { Map } from 'immutable';
import { REQUEST_TILES, QUEUE_TILE_REQUEST, RECEIVE_TILE } from '../actions/tiles';

function clearRequests(state) {
  return state.set('requests', Map());
}

function addRequest(state, place, request) {
  return state.setIn(['requests', place.id], request);
}

function addTile(state, place, tile, zoom) {
  return state.withMutations(function(state) {
    state.deleteIn(['requests', place.id]);
    state.setIn([zoom, place.id], tile);
  });
}

export default function tiles(state = Map(), action) {
  switch (action.type) {
    case REQUEST_TILES:
      return clearRequests(state);

    case QUEUE_TILE_REQUEST:
      return addRequest(state, action.place, action.request);

    case RECEIVE_TILE:
      return addTile(state, action.place, action.tile, action.zoom);

    default:
      return state;
  }
}