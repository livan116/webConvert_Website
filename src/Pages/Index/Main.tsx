import React, { useEffect } from 'react'

const Main = () => {

  useEffect(() => {
    document.body.classList.add('homepage1-body');

    return () => {
      document.body.classList.remove('homepage1-body');
    };
  }, []);

  return (
    <React.Fragment>
      {/* <h1>Main</h1> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
      {/* <i className="fa-solid fa-arrow-right"></i> */}
    </React.Fragment>
  )
}

export default Main