import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import "./PageNotFound.css"

export const PageNotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className='page-not-found-container flex flex-col w-full  max-w-prose h-[calc(100vh-200px)] justify-center items-center'>
      <div className='not-found-box flex flex-col p-6 items-center justify-center gap-2 rounded-xl bg-[#f6f8fa] w-full'>
        <FontAwesomeIcon icon={faSearch} className='fa-3x mb-2' />

        <div className='flex flex-col items-center'>
          <h4 className='mt-3 text-xl'>Page not found</h4>
          <span className='text-lg text-gray-400'>{pathname}</span>
        </div>
      </div>
    </div>
  );
};
