// Source: https://github.com/ryanseddon/react-frame-component/
// Didn't use it as a package because I modified a few stuff


import React from 'react';

let doc;
let win;
if (typeof document !== 'undefined') {
    doc = document;
}
if (typeof window !== 'undefined') {
    win = window;
}

export const FrameContext = React.createContext({ document: doc, window: win });

export const {
    Provider: FrameContextProvider,
    Consumer: FrameContextConsumer
} = FrameContext;
