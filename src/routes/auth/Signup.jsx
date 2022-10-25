import { useEffect, useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';

//libraries
import { Link } from 'react-router-dom';

//style & assets
import googleIcon from '../../assets/google-icon.svg';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [validCredentials, setValidCredentials] = useState(false);
  const { signup, isPending, error } = useSignup();
  const { signInWithGoogle, emailRegex } = useLogin();

  const handleSignup = (e) => {
    e.preventDefault();
    if (validCredentials) {
      signup(email, password);
    }
  };

  useEffect(() => {
    setValidCredentials(
      emailRegex.test(email) &&
        password.length >= 6 &&
        password === verifyPassword
    );
  }, [email, password, verifyPassword]);

  return (
    <section className="grid my-0 mx-auto max-w-screen p-1 text-center place-items-center">
      <header className="relative pt-8 pb-6 mt-2">
        <div className="container mx-auto px-2">
          <p className="font-bold text-4xl">
            auth<span className="font-light">Template</span>
          </p>
        </div>
      </header>

      <div className="w-full px-4 mx-auto mt-1 pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-slate-800 text-sm font-bold">Signup with</h6>
            </div>
            <div className="text-center">
              <button
                className="bg-white active:bg-gray-50 text-gray-700 font-normal px-28 py-2 rounded outline-none focus:outline-none mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
                type="button"
                onClick={signInWithGoogle}
              >
                <img className="w-5 mr-1" src={googleIcon} />
                Sign up with Google{' '}
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-slate-800 text-center mb-3 font-bold">
              <small>Or signup with credentials</small>
            </div>
            <form>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-800 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-slate-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-800 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-slate-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-800 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Verify Password
                </label>
                <input
                  type="password"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-slate-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Verify Password"
                />
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <span className="ml-2 text-sm font-semibold text-slate-800">
                    Already have an account?{' '}
                    <Link
                      to={'/login'}
                      className="text-sky-800 hover:text-sky-600"
                    >
                      Login here
                    </Link>
                    .
                  </span>
                </label>
              </div>
              <div className="text-center mt-6">
                {!isPending && (
                  <button
                    className={`${
                      validCredentials
                        ? 'bg-slate-800'
                        : 'bg-slate-400 cursor-not-allowed'
                    } text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                    type="button"
                    onClick={handleSignup}
                    disabled={!validCredentials}
                  >
                    {' '}
                    Signup{' '}
                  </button>
                )}

                {isPending && (
                  <button
                    className="bg-slate-400 text-slate-100 text-sm font-bold uppercase px-6 py-3 rounded outline-none mr-1 mb-1 w-full ease-linear"
                    disabled
                  >
                    {' '}
                    Loading...{' '}
                  </button>
                )}
                {error && <p>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="relative pt-8 pb-6 mt-2">
        <div className="container mx-auto px-2">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <div className="text-slate-800 font-semibold py-1">
                <p className="font-bold mb-4 text-lg">
                  auth<span className="font-light">Template</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
