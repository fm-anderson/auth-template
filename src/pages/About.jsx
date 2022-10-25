import { useAuthContext } from '../hooks/useAuthContext';

export default function About() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {' '}
      {authIsReady && (
        <>
          <div className="grid my-56 mx-auto text-center place-items-center">
            <h1 className="font-semibold text-5xl pb-10 text-teal-900">
              About Page
            </h1>
            <p className="font-light text-lg pb-5 text-gray-800">
              This is a projected route. You can see this page because you're
              logged in as
            </p>
            <p className="font-light text-lg text-gray-800">{user.email}.</p>
          </div>
        </>
      )}{' '}
    </>
  );
}
