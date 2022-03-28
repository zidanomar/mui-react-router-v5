import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Route, Switch, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import MachingLearing from './pages/MachineLearing/MachingLearing';
import Storage from './pages/Storage/Storage';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  const [title, setTitle] = useState(null);
  let location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/authentication' exact component={Authentication} />
        <Route path='/database' exact component={Database} />
        <Route path='/functions' exact component={Functions} />
        <Route path='/hosting' exact component={Hosting} />
        <Route path='/machine-learning' exact component={MachingLearing} />
        <Route path='/storages' exact component={Storage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Grid>
  );
}

export default App;
