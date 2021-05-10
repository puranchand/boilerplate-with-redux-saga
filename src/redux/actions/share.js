import * as type from '../types';

export function getShareData(data = []) {
    return {
        type: type.GET_SHARE_DATA,
        payload: data
    }
}