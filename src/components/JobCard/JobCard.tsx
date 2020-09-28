import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { jobProperties } from '../../types';
import { humanizeDate } from '../../helpers';
import './job_card.scss';

const JobCard = ({ job }: { job: jobProperties}) => {
    const {
        id, type,
        created_at, company,
        location, title,
        company_logo
    } = job;

    return (
        <Link to={`/jobs/${id}`} className='job_card flex'>            
            <div
                className="company_logo"
            >
                { company_logo ? 
                    <img
                        src={company_logo}
                        alt={title}
                    /> :
                    <div className='not-found-img flex justify-center align-center'>
                        <span>not found</span>
                    </div>
                }
            </div>
            <div className="job_card_details w-full flex flex-col justify-between">
                <strong className="job_company_name">
                    {company }
                </strong>
                <p className="job_title">{title}</p>

                <div className="job_details flex justify-between">
                    <span className='job_type flex align-center'>{type}</span>
                    <div className="job_infos_container flex justify-between">
                        <span className='job_info flex align-center'>
                            <i className="material-icons md-dark md-inactive">public</i> <span className='job_info_location'>{location}</span>
                        </span>
                       
                        <span className='job_info flex align-center'>
                            <i className="material-icons md-dark md-inactive">access_time</i> {humanizeDate(created_at)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

JobCard.propTypes = {
    job: PropTypes.object
}

export default JobCard;