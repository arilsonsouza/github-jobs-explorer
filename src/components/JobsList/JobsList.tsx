import React from 'react';
import PropTypes from 'prop-types';

import { JobCard } from '../';
import { jobProperties } from '../../types';

const JobsList = ({ jobs }: {jobs: jobProperties[]}) => {
    return (
        <div className="jobs">
            {jobs.map((job, index) => <JobCard job={job} key={index}/>)}
        </div>
    );
};

JobsList.propTypes = {
    jobs: PropTypes.array.isRequired
}

export default JobsList;