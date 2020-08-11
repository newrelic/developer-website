import { useContext } from 'react';
import PageLayout from '../components/PageLayout';

const usePageLayout = () => useContext(PageLayout.Context);

export default usePageLayout;
