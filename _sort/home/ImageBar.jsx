import React from 'react'

// TODO - Convert this to an infinite scroll
// References: https://medium.com/netscape/a-react-infinite-scroll-slider-c0643fa9e5eb
// Repo: https://www.npmjs.com/package/react-film

import BasicFilm from 'react-film';

const ImageBar = () => {
  return (
    <BasicFilm
      height={350}
      showDots={false}
      showFlipper={false}
      showScrollBar={false}
    >
      <img alt="Cat 01" src="https://via.placeholder.com/500x350" />
      <img alt="Cat 02" src="https://via.placeholder.com/500x350" />
      <img alt="Cat 03" src="https://via.placeholder.com/500x350" />
      <img alt="Cat 03" src="https://via.placeholder.com/500x350" />
      <img alt="Cat 03" src="https://via.placeholder.com/500x350" />
      <img alt="Cat 03" src="https://via.placeholder.com/500x350/000/000" />
    </BasicFilm>
  )
}

export default ImageBar
