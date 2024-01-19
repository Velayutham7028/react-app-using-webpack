
// const sayHelloTimes=(times)=> new Array(times).fill(1).map((a,i)=>`Hello:${i}`);
// const element=document.createElement('h2')
// element.innerHTML=sayHelloTimes(10).join('<br/>')
// document.body.append(element).

import React from 'react'
import {createRoot} from 'react-dom/client'
import Welcome from './components/welcome';

const root=document.getElementById('root');

createRoot(root).render(<Welcome/>)

