import React, { useEffect, useState } from 'react';


function PokemonCard({ url, name }) {
  const [urlInfo,setUrlInfo] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setUrlInfo(data);
    });
  }, []);

  console.log(urlInfo);

  return (
   
    <div>
      {urlInfo.name}
    </div>
  );
}

export { PokemonCard };
