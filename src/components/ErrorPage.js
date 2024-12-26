import {useRouteError} from "react-router"

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <div className="text-lg font-bold">Oops!!!</div>
      <div className="text-md font-bold">{err.status} - {err.statusText}</div>
      <div className="text-sm font-bold">{err.error?.message}</div>
    </div>
  )
}
export default ErrorPage;
