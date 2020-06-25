import React from 'react';
import {render} from 'react-dom';
import movieDB from '../../server/db';

import App from './components/App';

render(<App movie={ 1 } movies={ movieDB } />, document.getElementById('container'));

module.hot.accept();