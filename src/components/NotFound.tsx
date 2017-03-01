import { Link } from 'react-router';
import * as React from 'react';

const NotFound = () => {
  return (<div><h1>Page Not Found</h1>
       <p><Link to='/'>Home</Link></p>
    </div>);
};

export default NotFound;