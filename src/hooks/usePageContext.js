import { useContext } from 'react';
import { PageContext } from '../components/PageContext';

const usePageContext = () => useContext(PageContext);

export default usePageContext;
