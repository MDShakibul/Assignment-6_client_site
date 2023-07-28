const RootLayout = ({ children }) => {
  return (
    <>
      <div className="navbar bg-emerald-400">
        <div className="container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Categoru</a>
                  <ul className="p-2">
                    <li>
                      <a>CPU / Processor</a>
                    </li>
                    <li>
                      <a>Motherboard</a>
                    </li>
                    <li>
                      <a>RAM</a>
                    </li>
                    <li>
                      <a>Power Supply Unit</a>
                    </li>
                    <li>
                      <a>Storage Device</a>
                    </li>
                    <li>
                      <a>Monitor</a>
                    </li>
                    <li>
                      <a>Others</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>PC Builder</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">PC Shop</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2 w-44">
                    <li>
                      <a>CPU / Processor</a>
                    </li>
                    <li>
                      <a>Motherboard</a>
                    </li>
                    <li>
                      <a>RAM</a>
                    </li>
                    <li>
                      <a>Power Supply Unit</a>
                    </li>
                    <li>
                      <a>Storage Device</a>
                    </li>
                    <li>
                      <a>Monitor</a>
                    </li>
                    <li>
                      <a>Others</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>PC Builder</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="min-h-screen">{children}</div>

      <div className="bg-emerald-400">
        <div className="container mx-auto">
          <footer className="footer p-10 text-base-content">
            <div>
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
