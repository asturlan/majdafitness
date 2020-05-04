import pages from '../constants/pages';

const getConfig = page => {
    return pages[page];
};

export default getConfig;
