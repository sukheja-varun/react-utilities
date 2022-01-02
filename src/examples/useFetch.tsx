import React, { useEffect, useState } from 'react';
import useFetch from '../utilities/hooks/useFetch';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function useFetchExample() {
  const [searchId, setSearchId] = useState<string>();
  const { data, error, status, isLoading } = useFetch<Photo>(
    `https://jsonplaceholder.typicode.com/photos/${searchId}`
  );

  useEffect(() => {
    if (data) {
      console.log('data==>', data);
    }
    if (error) {
      console.log('error==>', error);
    }
  }, [status, data, error]);

  return (
    <div>
      <div>
        <label htmlFor="search">Enter Number: </label>
        <input
          type="number"
          id="search"
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      <br />
      {isLoading && <span>Loading...</span>}
      {data && <img src={data.thumbnailUrl} alt={data.title} />}
      {error && <span>Failed to fetch image</span>}
    </div>
  );
}
