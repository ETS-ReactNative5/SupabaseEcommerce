import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pb-12 md:pb-20">
                <div
                  className="relative bg-success rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                  data-aos="zoom-y-out"
                >
                  <div
                    className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                    aria-hidden="true"
                  ></div>

                  <div className="relative flex flex-col lg:flex-row justify-between items-center">
                    <div className="text-center lg:text-left lg:max-w-xl">
                      <h6 className="text-gray-600 text-3xl font-medium mb-2">
                        Sign-up for the early access!{" "}
                      </h6>
                      <p className="text-gray-100 text-lg mb-6">
                        SuperbaseEcommerce improves and streamlines your
                        shopping experience.. !
                      </p>
                      <form className="w-full lg:w-auto">
                        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-xl lg:mx-0">
                          <input
                            type="email"
                            className="w-full appearance-none bg-purple-100 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                            placeholder="Enter your email…"
                            aria-label="Enter your email…"
                          />
                          <a
                            className="btn text-white bg-info hover:bg-success shadow"
                            href="#"
                          >
                            Sign-Up!
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t-2 border-solid">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link
                href="#"
                className="flex justify-center items-center text-blue-400 hover:text-gray-900 bg-blue-100 hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current "
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="#"
                className="flex justify-center items-center text-white hover:text-gray-900 bg-black hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
          </ul>

          <div className="flex-shrink-0 mr-2">
            <Link href="/" className="block" aria-label="SuperbaseEcommerce">
              <img
                className="object-cover h-20 w-full"
                src="https://user-images.githubusercontent.com/37651620/159121520-fe42bbf1-a2af-4baf-bdd8-7efad8523202.png"
                alt="SupabaseEcommerce"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;