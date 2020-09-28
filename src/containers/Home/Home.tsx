import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Searchbar, Filters, JobsList, Pagination } from '../../components';

import { JobService } from '../../services/JobService';
import { setJobs } from '../../actions';
import { rootState, apiParams } from '../../types';

import './home.scss'

const Home = () => {
    const [params, setParams] = useState<apiParams>({});

    const [currentPage, setCurrentPage] = useState<any>(1);
    const [collectionLength, setCollectionLength] = useState(0);
    
    const jobs = useSelector((state: rootState) => state.job.jobs);
    const paginationRange = useSelector((state: rootState) => state.app.paginationRange);
    const rowsPerPage = useSelector((state: rootState) => state.app.rowsPerPage);    

    const dispatch = useDispatch();

    const fetchJobs = async () => {
        try {
            const { data } = await JobService.fetchJobs(params);
            dispatch(setJobs(data));            
        } catch (error) {
            
        }
    };    

    useEffect(() => {
        setCollectionLength(jobs.length);
    }, [jobs]);

    useEffect(() => {
        fetchJobs();  
    }, [params]);

    return (    
        <div className='home'>
            <Searchbar
                handleSubmit={description => setParams({...params, description})}
            />
            <div className='flex flex-wrap py-2'>
                <div className='filter_wrapper'>
                    <Filters
                        handleFilter={filters =>  setParams({...params, ...filters})} 
                    />
                </div>
                <div className="jobs flex flex-col">
                    <JobsList jobs={jobs.slice((rowsPerPage  * (currentPage - 1)), rowsPerPage * currentPage)}/>
                
                {(collectionLength > rowsPerPage) && 
                    <div className="pagination_wrapper w-full flex justify-end">                        
                        <Pagination
                            currentPage={currentPage}
                            collectionLength={collectionLength}
                            paginationRange={paginationRange}
                            rowsPerPage={rowsPerPage}                            
                            handleChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                }
                </div>
            </div>
        </div>
    );
};
export default Home