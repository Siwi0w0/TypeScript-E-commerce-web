import { useRouteError } from "react-router-dom";
// give access to the error

function ErrorElement() {
  const error = useRouteError();
  console.log(error);
    return(
      <div>
        <h4 className='font-bold text-4xl'>There was an error!</h4>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
}

export default ErrorElement;