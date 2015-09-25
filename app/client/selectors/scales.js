const scaleSelector = state => state.scales;

export const placeStrokeWidthRangeScaleSelector = state => state.scales.get('placeStrokeWidthRangeScale');

export const placeRadiusRangeScaleSelector = state => state.scales.get('placeRadiusRangeScale');

export const connectionStrokeWidthRangeScaleSelector = state => state.scales.get('connectionStrokeWidthRangeScale');

export default scaleSelector;