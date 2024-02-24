import React from 'react';

const Pagination = ({ prevPageUrl, nextPageUrl, setCurrentPageUrl }) => {
  return (
    <div className="pagination">
      {prevPageUrl && <button onClick={() => setCurrentPageUrl(prevPageUrl)}>Previous</button>}
      {nextPageUrl && <button onClick={() => setCurrentPageUrl(nextPageUrl)}>Next</button>}
    </div>
  );
};

export default Pagination;
