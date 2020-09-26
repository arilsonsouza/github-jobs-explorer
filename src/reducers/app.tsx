import packageJson from '../../package.json';

const initialState = {
    enviroment: process.env.NODE_ENV,
    name: packageJson.name,
    version: packageJson.version
}

const appReducer = (state = initialState) => state

export default appReducer;