import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (query) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: query,
                    location: 'warszawa'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('');
    }
        , []);

    return [searchApi, results, errorMessage]
}