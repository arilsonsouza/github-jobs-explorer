import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Searchbar, Filters, JobsList } from '../../components';

import { JobService } from '../../services/JobService';
import { setJobs } from '../../actions';
import { rootState } from '../../types';

import './home.scss'

const Home = () => {
    const jobs = useSelector((state: rootState) => state.job.jobs);

    const dispatch = useDispatch();

    const fetchJobs = async () => {
        try {
            const { data } = await JobService.fetchJobs();
            dispatch(setJobs(data));
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchJobs();  
    }, [])

    return (    
        <div className='home'>
            <Searchbar/>
            <div className='flex flex-wrap py-2'>
                <div className='filter_wrapper'>
                    <Filters/>
                </div>
                <div className="jobs">
                    <JobsList jobs={jobs}/>
                </div>
            </div>
        </div>
    );
};
export default Home