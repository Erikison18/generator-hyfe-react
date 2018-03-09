const initialState = {
  pending: true,
  logged: true,
  radarChart: {}
}

/**
 * @description 图表reducers
 * @param {object} state state数据
 * @param {object} action action
 * @return {object} 新的state对象
 */
const radarChartReducer = (state = initialState, action) => {
  if(action.type === 'RADAR_CHART_REQUEST') {
    return Object.assign({}, state, {
      pending: false
    })
  }

  if(action.type === 'RADAR_CHART_SUCCESS') {
    return Object.assign({}, state, {
      radarChart: action.radarChart,
      pending: false,
      logged: true
    })
  }

  if(action.type === 'RADAR_CHART_FAILED') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  
  return state
}

export default radarChartReducer
