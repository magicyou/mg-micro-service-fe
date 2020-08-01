import axios from '@/utils/request';

const UrlObj = {
    getVesselListUrl: '/shipowner/pc/report/vesselIdList'
};

/**
 * 获取船报筛选条件
 * @author Bruce Lee
 * @date 2020-06-05
 * @param {any} parameter
 * @returns {any}
 */
export const VesselList = (parameter) => {
    return axios.request(
        {
            url: UrlObj.getVesselListUrl,
            params : parameter,
            method: 'get'
        }
    )
};




