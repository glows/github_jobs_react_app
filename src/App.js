import React, {useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
// import './App.css';

function App() {
  const [params, useParams] = useState({})
  const [page, usePage] = useState(1)


  const {jobs, loading, error} = useFetchJobs(params, page)
  return (
    <Container>
      <h1>Github Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, try Refreshing.</h1>}
      
      {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
    </Container>
  );
}

export default App;
