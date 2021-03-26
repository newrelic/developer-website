import { useContext } from 'react';
import DropdownContext from './Context';

const useDropdown = () => useContext(DropdownContext);

export default useDropdown;
