import { filterConstants } from '../constants';

export const setIsFullTime = (isFullTime: boolean) => ({
    type: filterConstants.SET_IS_FULL_TIME,
    payload: isFullTime
})

export const setSelectedLocation = (location: string) => ({
    type: filterConstants.SET_SELECTED_LOCATION,
    payload: location
})