import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import DataLoader from './DataLoader';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';
import BackToTopBtn from './BackToTopBtn';

const Results = () => {
  const { view, data, loading } = useContext(rickMortyContext);

  if (view === 'character') {
    return (
      <main className='main'>
        <h4 className='main__title'>
          Displaying:{' '}
          {view[0].toUpperCase() + view.substring(1).toLowerCase() + 's'}
        </h4>
        {loading && <DataLoader />}
        {data && <Characters data={data} />}
        <BackToTopBtn />
      </main>
    );
  } else if (view === 'location') {
    return (
      <main className='main'>
        <h4 className='main__title'>
          Displaying:{' '}
          {view[0].toUpperCase() + view.substring(1).toLowerCase() + 's'}
        </h4>
        {loading && <DataLoader />}
        {data && <Locations data={data} />}
        <BackToTopBtn />
      </main>
    );
  } else if (view === 'episode') {
    return (
      <main className='main'>
        <h4 className='main__title'>
          Displaying:{' '}
          {view[0].toUpperCase() + view.substring(1).toLowerCase() + 's'}
        </h4>
        {loading && <DataLoader />}
        {data && <Episodes data={data} />}
        <BackToTopBtn />
      </main>
    );
  }
};

export default Results;
