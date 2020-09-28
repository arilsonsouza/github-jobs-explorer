import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Searchbar, Filters, JobsList, Pagination, Loading } from '../../components';

import { JobService } from '../../services/JobService';
import { setJobs } from '../../actions';
import { rootState, apiParams } from '../../types';

import './home.scss'

const Home = () => {
    const [params, setParams] = useState<apiParams>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<any>(1);
    const [collectionLength, setCollectionLength] = useState(0);
    
    const jobs = useSelector((state: rootState) => state.job.jobs);
    const paginationRange = useSelector((state: rootState) => state.app.paginationRange);
    const rowsPerPage = useSelector((state: rootState) => state.app.rowsPerPage);    

    const dispatch = useDispatch();

    const fetchJobs = useCallback(async () =>{
        try {
            setIsLoading(true);
            const { data } = await JobService.fetchJobs(params);
            dispatch(setJobs(data));
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, params])

    useEffect(() => {
        setCollectionLength(jobs.length);
    }, [jobs]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs, params]);

    const renderJobs = () => (
        collectionLength > 0 ?
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
            </div> :
            <div className="no-results-found flex justify-start flex-col align-center">
                <span className="sad-face" data-v-e3be1a56="">:(</span>
                <p>Ooops... We couldn't find any jobs.</p>
            </div>

    )

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
                {isLoading ? <Loading/> : renderJobs()}
            </div>
        </div>
    );
};
export default Home