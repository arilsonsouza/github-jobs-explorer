import packageJson from '../../package.json';

const initialState = {
    enviroment: process.env.NODE_ENV,
    name: packageJson.name,
    version: packageJson.version,
    paginationRange: 5,
    rowsPerPage: 5    
}

const appReducer = (state = initialState) => state

export default appReducer;