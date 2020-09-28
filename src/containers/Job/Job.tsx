import React, { useEffect, useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Loading } from '../../components';
import { JobService } from '../../services/JobService';

import { matchProperties, jobProperties } from '../../types';
import { humanizeDate } from '../../helpers';

import './job.scss';

const Job = ({ match, history }: { match: matchProperties, history: any }) => {
    const [job, setJob] = useState<jobProperties>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchJobDetails = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await JobService.fetchJobDetails(match.params.id);            
            setJob(data);
        } catch (error) {
            
        }finally {
            setIsLoading(false);
        }

    }, [match]);

    const goBack = () => {
        history.goBack();
    }

    const renderJob = () => (
        job ? 
            <div className='job_container flex flex-col flex-1'>  
                <div className='job_title flex'>
                    <h1>{job.title}</h1>
                    <span className='flex justify-center align-center'>{job.type}</span>
                </div>
                <span className="job_create_at flex align-center">
                    <i className="material-icons md-dark md-inactive">access_time</i> {humanizeDate(job.created_at)}
                </span>

                <div className="job_company_info flex">
                    <img src={job.company_logo} alt={job.company} className='job_company_logo'/>

                    <div className="job_company_details flex flex-col justify-between">
                        <h2 className="job_company_name">{job.company}</h2>
                        <span className='job_company_location flex align-center'>
                        <i className="material-icons md-dark md-inactive">public</i>{job.location}
                        </span>
                    </div>
                </div>

                <div className="job_description" dangerouslySetInnerHTML={{ __html: job.description }}></div>
            </div> :
            <div></div>

    );
    useEffect(() => {
        fetchJobDetails();
    }, [fetchJobDetails])

    return (
        <main className='w-full flex flex-wrap' >
            <div className="sidebar flex flex-col">
                <button
                    onClick={goBack}
                    className="go-back flex align-center">
                    <i className="material-icons">arrow_right_alt</i>
                    Back to search 
                </button>
                {job && 
                    <div className="how_to_apply">
                        <h5>How to Apply</h5>
                        <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
                    </div> 
                }
            </div>
            {isLoading ? <Loading/> : renderJob()}
        </main>
    );
};

export default withRouter(Job);