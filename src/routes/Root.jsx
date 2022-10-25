import Nav from '../components/Nav';
import Signup from '../routes/auth/Signup';
import Login from '../routes/auth/Login';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';

// hooks
import { useAuthContext } from '../hooks/useAuthContext';

// libraries
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Root() {
  const { user, authIsReady } = useAuthContext();
  return (
    <main className="grid my-0 mx-0 max-w-screen text-center place-items-center bg-gradient-to-b from-stone-100 to-gray-200">
      {authIsReady && (
        <>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/services"
              element={user ? <Services /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/login" />}
            />

            <Route
              path="/contact"
              element={user ? <Contact /> : <Navigate to="/login" />}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </>
      )}
    </main>
  );
}
