// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// root.render(<App />);
import * as React from 'react';
import * as ReactDOM from 'react-dom'; // Không cần import từ 'react-dom/client' trong React 17
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement); // Sử dụng ReactDOM.render thay vì createRoot
