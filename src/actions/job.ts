import { jobConstants } from '../constants';

export const setJobs = (jobs: any) => ({
    type: jobConstants.SET_JOBS,
    payload: jobs
});