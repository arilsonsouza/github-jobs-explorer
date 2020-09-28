import Service from './Service';

import { apiParams, jobProperties } from '../types';

export class JobService extends Service {
    static fetchJobs(params: apiParams = {}){
        return this.$axios.get('/positions.json', { params })
    }
}