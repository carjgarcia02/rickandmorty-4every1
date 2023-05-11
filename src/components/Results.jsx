import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import DataLoader from './DataLoader';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';

const Results = () => {
  const { view, data, loading } = useContext(rickMortyContext);

  if (view === 'character') {
    return (
      <main className='main'>
        {loading && <DataLoader />}
        {data && <Characters data={data} />}
      </main>
    );
  } else if (view === 'location') {
    return (
      <main className='main'>
        {loading && <DataLoader />}
        {data && <Locations data={data} />}
      </main>
    );
  } else if (view === 'episode') {
    return (
      <main className='main'>
        {loading && <DataLoader />}
        {data && <Episodes data={data} />}
      </main>
    );
  }
};

export default Results;
