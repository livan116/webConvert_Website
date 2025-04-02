import { useState } from 'react';
// import image from '../../assets/img/all-images/blog-img1.png'
const SearchComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <div
        className="container-fluid help d-flex flex-column align-items-center justify-content-center p-4 position-relative"
        style={{ minHeight: "200px" }}
      >
        {/* Small decorative element in top left */}
        {/* <img
          src=""
          alt="Decorative element"
          className="position-absolute start-0 top-0 z-0 "
        /> */}

        {/* Hero Title */}
        <h1
          className="display-4 text-white fw-light mb-4 mt-2 text-center"
          style={{ textTransform: "uppercase", letterSpacing: "2px" }}
        >
          Hi, how can we help?
        </h1>

        {/* Search Form */}
        <div className="w-100 mx-auto" style={{ maxWidth: "40rem" }}>
          <div className="d-flex">
            {/* Dropdown Button */}
            <button
              id="dropdown-button"
              onClick={toggleDropdown}
              className="btn btn-light rounded-end d-flex align-items-center justify-content-between px-3 py-2"
              type="button"
              style={{ width: "250px", borderRight: "1px solid #dee2e6" }}
            >
              <span>All categories</span>
              <svg
                className="ms-2"
                style={{ width: "12px", height: "12px" }}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="position-absolute z-3 bg-white rounded shadow-sm"
                style={{ width: "160px", marginTop: "45px" }}
              >
                <ul className="list-unstyled py-2 m-0">
                  <li>
                    <button
                      type="button"
                      className="d-inline-flex bg-white text-dark  w-100 px-3 py-2 hover-bg-light"
                    >
                      Category 1
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="d-inline-flex bg-white text-dark w-100 px-3 py-2 hover-bg-light"
                    >
                      Category 2
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="d-inline-flex bg-white text-dark w-100 px-3 py-2 hover-bg-light"
                    >
                      Category 3
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="d-inline-flex bg-white text-dark w-100 px-3 py-2 hover-bg-light"
                    >
                      Category 4
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Search Input */}
            <div className="position-relative w-100">
              <input
                type="search"
                id="search-dropdown"
                className="form-control p-2 w-100 border-0 rounded"
                style={{
                  height: "100%",
                  borderRadius: "0",
                  paddingRight: "50px",
                }}
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="btn btn-primary position-absolute top-0 end-0 h-100 rounded-end"
                style={{ width: "50px" }}
              >
                <svg
                  style={{ width: "20px", height: "20px" }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="visually-hidden">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SearchComponent;