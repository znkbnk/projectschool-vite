// ReactInterviewCorrectCodeData.js
const ReactInterviewCorrectCodeData = [
  {
    slug: "which-code-snippet-correctly-defines-a-react-functional-component",
    question:
      "Which code snippet correctly defines a React functional component?",

    options: [
      {
        code: `
          function MyComponent() {
            return <h1>Hello</h1>; 
        }`,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = () => {
            return <h1>Hello</h1>; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.Component {
            render() { return <h1>Hello</h1>; } 
        }`,
        isCorrect: false,
      },
      {
        code: `
          function MyComponent() {
            return <h1>Hello</h1>;
        }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-usestate-to-define-a-state-variable-in-a-functional-component",
    question:
      "Which code snippet correctly uses `useState` to define a state variable in a functional component?",

    options: [
      {
        code: `
          const count = useState(0);`,
        isCorrect: false,
      },
      {
        code: `
          const [count, setCount] = state(0);`,
        isCorrect: false,
      },
      {
        code: `
          const count = 0;
          const setCount = (value) => { 
            count = value; 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const [count, setCount] = useState(0);`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-passes-a-prop-from-a-parent-to-a-child-component-in-react",
    question:
      "Which code snippet correctly passes a prop from a parent to a child component in React?",

    options: [
      {
        code: `
          const count = useState(0);`,
        isCorrect: false,
      },
      {
        code: `
          const [count, setCount] = state(0);`,
        isCorrect: false,
      },
      {
        code: `
          const count = 0;
          const setCount = (value) => { 
            count = value; 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const [count, setCount] = useState(0);`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-useeffect-hook-in-a-functional-component",
    question:
      "Which code snippet correctly uses the `useEffect` hook in a functional component?",

    options: [
      {
        code: `
          useEffect(() => {
            document.title = 'Hello'; 
          });`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            document.title = 'Hello'; 
          }, 0);`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            document.title = 'Hello'; 
          }, []);`,
        isCorrect: true,
      },
      {
        code: `
          useEffect(() => { 
            document.title = 'Hello'; 
          }, null);`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-an-event-in-react",
    question: "Which code snippet correctly handles an event in React?",

    options: [
      {
        code: `
        <button onClick='handleClick'>Click me</button>`,
        isCorrect: false,
      },
      {
        code: `
        <button onClick={() => handleClick()}>Click me</button>`,
        isCorrect: false,
      },
      {
        code: `
        <button handleClick='Click me'></button>`,
        isCorrect: false,
      },
      {
        code: `
        <button onClick={handleClick}>Click me</button>`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-updates-the-state-of-a-react-functional-component-based-on-the-previous-state",
    question:
      "Which code snippet correctly updates the state of a React functional component based on the previous state?",

    options: [
      {
        code: `
        setCount(prevCount => prevCount + 1);`,
        isCorrect: true,
      },
      {
        code: `
        setCount(prevCount => prevCount++;);`,
        isCorrect: false,
      },
      {
        code: `
        setCount(count + 1);`,
        isCorrect: false,
      },
      {
        code: `
        setCount(count => count + 1);`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-defines-a-memoized-component-using-react-memo",
    question:
      "Which code snippet correctly defines a memoized component using `React.memo`?",

    options: [
      {
        code: `
        const MemoizedComponent = memo(MyComponent);`,
        isCorrect: false,
      },
      {
        code: `
        const MemoizedComponent = React.memo(MyComponent);`,
        isCorrect: true,
      },
      {
        code: `
        const MemoizedComponent = React.memo(MyComponent, []);`,
        isCorrect: false,
      },
      {
        code: `
        const MemoizedComponent = MyComponent.memo();`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-a-form-submission-in-react",
    question:
      "Which code snippet correctly handles a form submission in React?",

    options: [
      {
        code: `
          const handleSubmit = (event) => {
            event.preventDefault; 
            console.log('Form submitted'); 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const handleSubmit = (event) => {
            event.prevent();
            console.log('Form submitted'); 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const handleSubmit = (event) => {
            event.preventDefault(); 
            console.log('Form submitted'); 
          };`,
        isCorrect: true,
      },
      {
        code: `
          const handleSubmit = (event) => {
            console.log('Form submitted'); 
          };`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-usereducer-to-manage-state-in-react",
    question:
      "Which code snippet correctly uses `useReducer` to manage state in React?",

    options: [
      {
        code: `
        const [state, dispatch] = useReducer(initialState, reducer);`,
        isCorrect: false,
      },
      {
        code: `
        const [state, dispatch] = useReducer(reducer);`,
        isCorrect: false,
      },
      {
        code: `
        const [state, dispatch] = useReducer(state, dispatch);`,
        isCorrect: false,
      },
      {
        code: `
        const [state, dispatch] = useReducer(reducer, initialState);`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-custom-hook-in-react",
    question: "Which code snippet correctly implements a custom hook in React?",

    options: [
      {
        code: `
          function useCustomHook() { 
            return useState(0); 
        }`,
        isCorrect: false,
      },
      {
        code: `
          const useCustomHook = () => { 
            const [state, setState] = useState(0); 
            return [state, setState]; 
        };`,
        isCorrect: false,
      },
      {
        code: `
          function useCustomHook() { 
            const [state, setState] = useState(0); 
            return [state, setState]; 
        }`,
        isCorrect: true,
      },
      {
        code: `
          const useCustomHook = () => { 
            return useState(0); 
        };`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-context-provider-in-react",
    question:
      "Which code snippet correctly implements a context provider in React?",

    options: [
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
              return <MyContext.Provider>
                  {children}
              </MyContext.Provider>; 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = createContext(); 
          const MyProvider = ({ children }) => { 
              return <MyContext.Provider value={value} />; 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
             return <Provider value={value}>
                {children}
             </Provider>; 
          };`,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
             return <MyContext.Provider value={value}>
                {children}
             </MyContext.Provider>; 
            };`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-react-router-to-navigate-between-two-routes",
    question:
      "Which code snippet correctly implements React Router to navigate between two routes?",

    options: [
      {
        code: `
          <BrowserRouter>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
          </BrowserRouter>`,
        isCorrect: true,
      },
      {
        code: `
          <Router>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
          </Router>`,
        isCorrect: false,
      },
      {
        code: `
          <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </BrowserRouter>`,
        isCorrect: false,
      },
      {
        code: `
          <BrowserRouter>
            <Home path='/' />
            <About path='/about' />
          </BrowserRouter>`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-react-lazy-to-dynamically-import-a-component",
    question:
      "Which code snippet correctly uses `React.lazy` to dynamically import a component?",

    options: [
      {
        code: `
        const MyComponent = lazy(() => import('./MyComponent'));`,
        isCorrect: false,
      },
      {
        code: `
        const MyComponent = React.lazy(() => import('./MyComponent'));`,
        isCorrect: true,
      },
      {
        code: `
        const MyComponent = React.lazy(import('./MyComponent'));`,
        isCorrect: false,
      },
      {
        code: `
        const MyComponent = () => {
           import('./MyComponent'); 
};`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-prevents-a-component-from-re-rendering-when-the-props-dont-change",
    question:
      "Which code snippet correctly prevents a component from re-rendering when the props don't change?",

    options: [
      {
        code: `
          const MyComponent = memo(({ name }) => {
            return <div>{name}</div>; 
          }`,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo((props) => {
            return <div>{props.name}</div>; 
          }`,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(({ name }) => {
            return <div>{name}</div>; 
          }`,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = React.memo(function(props) {
            return <div>{props.name}</div>; 
          }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-uselayouteffect-to-update-the-dom-after-rendering",
    question:
      "Which code snippet correctly uses `useLayoutEffect` to update the DOM after rendering?",

    options: [
      {
        code: `
          useLayoutEffect(() => {
            document.getElementById('my-element').style.color = 'red'; 
          });`,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => {
            document.getElementById('my-element').style.color = 'red'; 
          }, [myState]);`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
            document.getElementById('my-element').style.color = 'red'; 
          }, []);`,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => {
            document.getElementById('my-element').style.color = 'red'; 
          }, []);`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-custom-hook-to-fetch-data-from-an-api",
    question:
      "Which code snippet correctly implements a custom hook to fetch data from an API?",

    options: [
      {
        code: `
          function useFetch(url) {
            const data = useState(null);
            useEffect(() => {
              fetch(url)
                .then((res) => res.json())
                .then(data[1]);
            }, [url]);
            return data[0];
          }`,
        isCorrect: false,
      },
      {
        code: `
          function useFetch(url) {
            const data = useState(null);
            return fetch(url)
              .then(res => res.json());
          }`,
        isCorrect: false,
      },
      {
        code: `
          function useFetch(url) {
            const [data, setData] = useState(null);
            useEffect(() => {
              fetch(url)
                .then(res => res.json())
                .then(setData);
            }, [url]);
            return data;
          }`,
        isCorrect: true,
      },
      {
        code: `
          function useFetch(url) {
            useEffect(() => {
              fetch(url)
                .then(res => res.json())
                .then(data => data);
            }, [url]);
          }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-error-boundaries-in-react",
    question:
      "Which code snippet correctly implements error boundaries in React?",

    options: [
      {
        code: `
          class ErrorBoundary extends React.Component { 
            constructor(props) { 
              super(props); 
              this.state = { hasError: false }; 
            } 
            static getDerivedStateFromError(error) { 
              return { hasError: true }; 
            } 
            componentDidCatch(error, info) { 
              console.log(error, info); 
            } 
            render() { 
              return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; 
            } 
          }`,
        isCorrect: true,
      },
      {
        code: `
          class ErrorBoundary extends React.Component { 
            constructor(props) { 
              super(props); 
              this.state = { hasError: false }; 
            } 
            static getSnapshotBeforeUpdate(prevProps, prevState) { 
              return null; 
            } 
            componentDidCatch(error, info) { 
              console.log(error, info); 
            } 
            render() { 
              return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; 
            } 
          }`,
        isCorrect: false,
      },
      {
        code: `
          function ErrorBoundary({ children }) { 
            const [hasError, setHasError] = useState(false); 
            try { 
              return children; 
            } catch (error) { 
              setHasError(true); 
            } 
            return hasError ? <h1>Something went wrong.</h1> : null; 
          }`,
        isCorrect: false,
      },
      {
        code: `
          class ErrorBoundary extends React.Component { 
            constructor(props) { 
              super(props); 
              this.state = { hasError: true }; 
            } 
            static getDerivedStateFromError(error) { 
              return { hasError: false }; 
            } 
            componentDidCatch(error, info) { 
              console.log(error, info); 
            } 
            render() { 
              return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; 
            } 
          }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-defines-a-higher-order-component-hoc-that-adds-a-loading-prop-to-the-wrapped-component",
    question:
      "Which code snippet correctly defines a higher-order component (HOC) that adds a 'loading' prop to the wrapped component?",

    options: [
      {
        code: `
          function withLoading(WrappedComponent) { 
            return function({ isLoading, ...props }) { 
              return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />; 
            }; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          function withLoading(WrappedComponent) { 
            return function(props) { 
              return props.isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />; 
            }; 
        }`,
        isCorrect: true,
      },
      {
        code: `
          function withLoading(WrappedComponent) { 
            return (props) => { 
              return props.isLoading && <div>Loading...</div>; 
            }; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          function withLoading(WrappedComponent) { 
            return function(props) { 
              return <WrappedComponent {...props} />; 
            }; 
        }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-the-usereducer-hook-to-manage-state-in-a-react-component",
    question:
      "Which code snippet correctly implements the `useReducer` hook to manage state in a React component?",

    options: [
      {
        code: `
          function counterReducer(state, action) { 
            switch(action) { 
              case 'increment': 
                return { count: state.count + 1 }; 
              default: 
                return state; 
            } 
          } 
          const [state, dispatch] = useReducer(counterReducer, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          function counterReducer(state, action) { 
            if(action === 'increment') { 
              return { count: state.count + 1 }; 
            } 
            return state; 
          } 
          const [state, dispatch] = useReducer(counterReducer, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useReducer(
            counterReducer,
            { count: 0 },
            { increment: () => dispatch({ type: "increment" }) }
          );
        `,
        isCorrect: false,
      },
      {
        code: `
          function counterReducer(state, action) { 
            switch(action.type) { 
              case 'increment': 
                return { count: state.count + 1 }; 
              default: 
                return state; 
            } 
          } 
          const [state, dispatch] = useReducer(counterReducer, { count: 0 });
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-the-useeffect-hook-to-run-an-effect-when-a-component-mounts-and-unmounts",
    question:
      "Which code snippet correctly implements the `useEffect` hook to run an effect when a component mounts and unmounts?",

    options: [
      {
        code: `
          useEffect(() => { 
            console.log('Component mounted'); 
          }, []); 
          return () => { 
            console.log('Component unmounted'); 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component mounted'); 
            return () => { 
              console.log('Component unmounted'); 
          }, []);`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component mounted'); 
            return () => { 
              console.log('Component unmounted'); 
            }; 
          }, []);`,
        isCorrect: true,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component mounted'); 
            return () => { 
              console.log('Component unmounted'); 
            }; 
          }, [dependency]);`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reacts-forwardref-to-pass-a-ref-to-a-child-component",
    question:
      "Which code snippet correctly uses React's `forwardRef` to pass a ref to a child component?",

    options: [
      {
        code: `
          const MyComponent = (props, ref) => { 
            return <div ref={ref}>Hello</div>; 
          }; 
          MyComponent = React.forwardRef(MyComponent);
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            return <div ref={ref}>Hello</div>; 
          });
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = (props) => { 
            return <div ref={props.ref}>Hello</div>; 
          }; 
          MyComponent = React.forwardRef(MyComponent);
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props) => { 
            return <div ref={props.ref}>Hello</div>; 
          });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-code-splitting-using-reacts-react-lazy-and-suspense",
    question:
      "Which code snippet correctly implements code splitting using React's `React.lazy` and `Suspense`?",

    options: [
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent')); 
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        `,
        isCorrect: true,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent')); 
          <LazyComponent />
        `,
        isCorrect: false,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent')); 
          <Suspense fallback={null}>
            <LazyComponent />
          </Suspense>
        `,
        isCorrect: false,
      },
      {
        code: `
          const LazyComponent = import('./LazyComponent'); 
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reacts-usecontext-hook-to-access-a-context-value",
    question:
      "Which code snippet correctly uses React's `useContext` hook to access a context value?",

    options: [
      {
        code: `
        const value = useContext(MyContext.Provider);`,
        isCorrect: false,
      },
      {
        code: `
        const value = useContext(MyContext.Consumer);`,
        isCorrect: false,
      },
      {
        code: `
        const value = useContext(MyContext);`,
        isCorrect: true,
      },
      {
        code: `
        const value = MyContext.useContext();`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-optimizes-a-functional-component-to-prevent-unnecessary-re-renders-using-react-memo",
    question:
      "Which code snippet correctly optimizes a functional component to prevent unnecessary re-renders using `React.memo`?",

    options: [
      {
        code: `
          const MyComponent = React.memo(function MyComponent() {
             return <div>Hello</div>; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(() => {
             return <div>{props.name}</div>; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(function MyComponent(props) {
             return <div>{props.name}</div>; 
          }, 
          (prev, next) => true);`,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(function MyComponent(props) {
             return <div>{props.name}</div>; 
        })`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-context-provider-in-react",
    question:
      "Which code snippet correctly implements a context provider in React?",

    options: [
      {
        code: `
          const MyContext = React.createContext();
           const MyProvider = ({ children }) => {
             const value = 'Hello'; 
             return <MyContext value={value}>
                {children}
             </MyContext>; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext();
           const MyProvider = ({ children }) => {
             const value = 'Hello';
              return <MyContext.Provider value={value}>
                  {children}
              </MyContext.Provider>; 
        }`,
        isCorrect: true,
      },
      {
        code: `
          const MyProvider = ({ children }) => {
             const value = 'Hello';
              return <MyContext.Provider>
                  {children}
              </MyContext.Provider>; 
        }`,
        isCorrect: false,
      },
      {
        code: `
          const MyProvider = ({ children }) => {
             const value = 'Hello';
              return <MyContext.Provider value={value}>
                  Hello
              </MyContext.Provider>; 
        }`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-useeffect-hook-to-run-a-side-effect-only-on-component-mount",
    question:
      "Which code snippet correctly uses the `useEffect` hook to run a side effect only on component mount?",

    options: [
      {
        code: `
          useEffect(() => { console.log('Component mounted'); 
        });`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { console.log('Component mounted'); 
        }, [dependencies]);`,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { console.log('Component mounted'); 
        }, []);`,
        isCorrect: true,
      },
      {
        code: `
          useEffect(() => { console.log('Component mounted'); 
        }, null);`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-creates-a-custom-hook-to-track-the-window-size",
    question:
      "Which code snippet correctly creates a custom hook to track the window size?",

    options: [
      {
        code: `
          function useWindowSize() { 
            const size = useState({ 
              width: window.innerWidth, 
              height: window.innerHeight 
            }); 
            return size; 
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          function useWindowSize() { 
            const [size, setSize] = useState({ 
              width: window.innerWidth, 
              height: window.innerHeight 
            }); 
            
            useEffect(() => { 
              const handleResize = () => { 
                setSize({ 
                  width: window.innerWidth, 
                  height: window.innerHeight 
                }); 
              }; 
              
              window.addEventListener('resize', handleResize); 
              return () => window.removeEventListener('resize', handleResize); 
            }, []); 
            
            return size; 
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          function useWindowSize() { 
            const [size, setSize] = useState({ 
              width: window.innerWidth, 
              height: window.innerHeight 
            }); 
            return size; 
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          function useWindowSize() { 
            const size = useState(window.innerWidth); 
            return size; 
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-usereducer-hook-to-manage-state-in-a-component",
    question:
      "Which code snippet correctly uses the `useReducer` hook to manage state in a component?",

    options: [
      {
        code: `
          const [state, setState] = useReducer(reducer, initialState);
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useReducer(reducer, initialState);
        `,
        isCorrect: true,
      },
      {
        code: `
          const [state, dispatch] = useState(reducer, initialState);
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useReducer(reducer, state);
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-higher-order-component-hoc-to-wrap-a-given-component-and-add-a-loading-state",
    question:
      "Which code snippet correctly implements a higher-order component (HOC) to wrap a given component and add a loading state?",

    options: [
      {
        code: `
          function withLoading(Component) {
            return function LoadingHOC(props) {
              const [loading, setLoading] = useState(true);
              useEffect(() => {
                const timer = setTimeout(() => {
                  setLoading(false);
                }, 2000);
                return () => clearTimeout(timer);
              }, []);
              return loading ? <div>Loading...</div> : <Component {...props} />;
            };
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          function withLoading(Component) {
            return function LoadingHOC(props) {
              const loading = useState(true);
              return loading ? <div>Loading...</div> : <Component {...props} />;
            };
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          function withLoading(Component) {
            return function LoadingHOC(props) {
              const [loading, setLoading] = useState(false);
              return loading ? <div>Loading...</div> : <Component {...props} />;
            };
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          function withLoading(Component) {
            return function LoadingHOC(props) {
              const loading = true;
              return loading ? <div>Loading...</div> : <Component {...props} />;
            };
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-uselayouteffect-hook-to-perform-a-dom-operation-after-the-component-has-rendered",
    question:
      "Which code snippet correctly uses the `useLayoutEffect` hook to perform a DOM operation after the component has rendered?",

    options: [
      {
        code: `
          useLayoutEffect(() => {
            console.log('DOM updated');
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
            console.log('DOM updated');
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
            console.log('DOM updated');
          }, [dependencies]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => {
            console.log('DOM updated');
          }, []);
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-reactpurecomponent-to-optimize-rendering-in-a-class-component",
    question:
      "Which code snippet correctly implements `React.PureComponent` to optimize rendering in a class component?",

    options: [
      {
        code: `
          class MyComponent extends React.PureComponent {
            render() {
              return <div>{this.props.value}</div>;
            }
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          class MyComponent extends React.Component {
            shouldComponentUpdate(nextProps) {
              return nextProps.value !== this.props.value;
            }
            render() {
              return <div>{this.props.value}</div>;
            }
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.Component {
            render() {
              return <div>{this.props.value}</div>;
            }
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.PureComponent {
            shouldComponentUpdate(nextProps) {
              return nextProps.value !== this.props.value;
            }
            render() {
              return <div>{this.props.value}</div>;
            }
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-server-side-rendering-ssr-with-react-and-reactdom",
    question:
      "Which code snippet correctly implements server-side rendering (SSR) with React and ReactDOM?",

    options: [
      {
        code: `
          import ReactDOM from 'react-dom';
          const html = ReactDOM.renderToString(<App />);
        `,
        isCorrect: false,
      },
      {
        code: `
          import ReactDOM from 'react-dom/server';
          const html = ReactDOM.renderToString(<App />);
        `,
        isCorrect: false,
      },
      {
        code: `
          import ReactDOMServer from 'react-dom';
          const html = ReactDOMServer.renderToString(<App />);
        `,
        isCorrect: false,
      },
      {
        code: `
          import ReactDOMServer from 'react-dom/server';
          const html = ReactDOMServer.renderToString(<App />);
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-reactsuspense-for-error-boundary-handling-in-react",
    question:
      "Which code snippet correctly uses the `React.Suspense` for error boundary handling in React?",

    options: [
      {
        code: `
          import { Suspense } from 'react';
          <Suspense fallback={<div>Loading...</div>} error={<div>Error occurred</div>}>
            <MyComponent />
          </Suspense>
        `,
        isCorrect: false,
      },
      {
        code: `
          import { Suspense, ErrorBoundary } from 'react';
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <MyComponent />
            </Suspense>
          </ErrorBoundary>
        `,
        isCorrect: false,
      },
      {
        code: `
          import { Suspense } from 'react';
          <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
          </Suspense>
        `,
        isCorrect: true,
      },
      {
        code: `
          import { Suspense } from 'react';
          <Suspense fallback={<div>Loading...</div>} catch={<div>Error occurred</div>}>
            <MyComponent />
          </Suspense>
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-usecallback-hook-to-prevent-unnecessary-re-renders-when-passing-a-function-as-a-prop",
    question:
      "Which code snippet correctly uses the `useCallback` hook to prevent unnecessary re-renders when passing a function as a prop?",

    options: [
      {
        code: `
          const memoizedFunction = useCallback(() => {
             console.log('Action'); 
          }, [dependencies]);
        `,
        isCorrect: false,
      },
      {
        code: `
          const memoizedFunction = useMemo(() => {
             console.log('Action'); 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          const memoizedFunction = useCallback(() => {
             console.log('Action'); 
          }, []);
        `,
        isCorrect: true,
      },
      {
        code: `
          const memoizedFunction = useCallback(console.log('Action'), []);
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-the-rendering-of-lists-with-keys-in-react",
    question:
      "Which code snippet correctly handles the rendering of lists with keys in React?",

    options: [
      {
        code: `
          const listItems = items.map((item, index) => 
            <li key={index}>{item.name}</li>
        );
        `,
        isCorrect: false,
      },
      {
        code: `
          const listItems = items.map(item => 
            <li key={item.id}>{item.name}</li>
          );
        `,
        isCorrect: true,
      },
      {
        code: `
          const listItems = items.map(item => 
            <li>{item.name}</li>
          );
        `,
        isCorrect: false,
      },
      {
        code: `
          const listItems = items.map((item, index) => 
            <div key={item.id}>{item.name}</div>
        );
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-react-context-to-share-a-theme-value-across-components",
    question:
      "Which code snippet correctly implements React Context to share a theme value across components?",

    options: [
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const theme = useState('light');
            return <ThemeContext.Provider value={{ theme }}>
                {children}
            </ThemeContext.Provider>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            return <ThemeContext.Provider value={{ theme: 'light' }}>
                {children}
            </ThemeContext.Provider>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = 'light';
            return <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState('light');
            return <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>;
          };
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-code-splitting-with-react-lazy-and-suspense",
    question:
      "Which code snippet correctly implements code-splitting with `React.lazy` and `Suspense`?",

    options: [
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          <Suspense fallback={<div>Loading...</div>}>
            {<LazyComponent />}
          </Suspense>
        `,
        isCorrect: false,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        `,
        isCorrect: true,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          <Suspense fallback={<div>Loading...</div>}>
            {<LazyComponent />}
          </Suspense>
        `,
        isCorrect: false,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          <Suspense>
            <div>Loading...</div>
            <LazyComponent />
          </Suspense>
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-useeffect-to-run-a-side-effect-after-every-render",
    question:
      "Which code snippet correctly uses `useEffect` to run a side effect after every render?",

    options: [
      {
        code: `
          useEffect(() => { 
            console.log('Component rendered'); 
          }, [dependencies]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component rendered'); 
          }, {});
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component rendered'); 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            console.log('Component rendered'); 
          });
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-an-uncontrolled-component-in-react",
    question:
      "Which code snippet correctly implements an uncontrolled component in React?",

    options: [
      {
        code: `
          const inputRef = useRef(); 
          <input ref={inputRef} />;
        `,
        isCorrect: true,
      },
      {
        code: `
          const [value, setValue] = useState(''); 
          <input value={value} onChange={(e) => setValue(e.target.value)} />;
        `,
        isCorrect: false,
      },
      {
        code: `
          const inputRef = useRef(); 
          <input value={inputRef.current.value} />;
        `,
        isCorrect: false,
      },
      {
        code: `
          const [value, setValue] = useState(''); 
          <input ref={inputRef} onChange={(e) => setValue(e.target.value)} />;
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reactmemo-to-prevent-unnecessary-re-renders-in-a-functional-component",
    question:
      "Which code snippet correctly uses `React.memo` to prevent unnecessary re-renders in a functional component?",

    options: [
      {
        code: `
          const MyComponent = React.memo((props) => 
            <div>{props.value}</div>
          );
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(({ value }) => 
            <div>{value}</div>
        );
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = React.memo(({ value }) => {
             return <div>{value}</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = ({ value }) => 
            <div>{value}</div>;
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-context-with-usereducer",
    question: "Which code snippet correctly handles context with `useReducer`?",

    options: [
      {
        code: `
          const reducer = (state, action) => {
            switch (action) {
              case 'increment':
                return { count: state.count + 1 };
              default:
                return state;
            }
          };
          const [state, dispatch] = useReducer(reducer, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          const reducer = (state, action) => {
            switch (action) {
              case 'increment':
                return { count: state.count + 1 };
            }
            default:
              return state;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useContext(reducer, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          const reducer = (state, action) => {
            switch (action.type) {
              case 'increment':
                return { count: state.count + 1 };
              default:
                return state;
            }
          };
          const [state, dispatch] = useReducer(reducer, { count: 0 });
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reactforwardref-to-pass-refs-to-a-child-component",
    question:
      "Which code snippet correctly uses `React.forwardRef` to pass refs to a child component?",

    options: [
      {
        code: `
        const MyComponent = React.forwardRef((props) => 
          <div ref={ref}>{props.children}</div>
        );`,
        isCorrect: false,
      },
      {
        code: `
        const MyComponent = React.forwardRef((ref, props) => 
          <div ref={ref}>{props.children}</div>
        );`,
        isCorrect: false,
      },
      {
        code: `
        const MyComponent = React.forwardRef((props, ref) => 
          <div ref={ref}>{props.children}</div>
        );`,
        isCorrect: true,
      },
      {
        code: `
        const MyComponent = React.forwardRef((props, ref) => 
          <div>{props.children}</div>
        );`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-state-initialization-with-usereducer-and-actions",
    question:
      "Which code snippet correctly handles state initialization with `useReducer` and actions?",

    options: [
      {
        code: `
        const initialState = { count: 0 }; 
        const reducer = (state, action) => { 
          switch (action.type) { 
            case 'increment': 
              return { count: state.count + 1 }; 
            default: 
              return state; 
          } 
        }; 
        const [state, dispatch] = useReducer(reducer, initialState);`,
        isCorrect: true,
      },
      {
        code: `
        const initialState = { count: 0 }; 
        const reducer = (state, action) => { 
          switch (action.type) { 
            case 'increment': 
              return { count: state.count + 1 }; 
          } 
        }; 
        const [state, dispatch] = useReducer(reducer, initialState);`,
        isCorrect: false,
      },
      {
        code: `
        const reducer = (state, action) => { 
          switch (action.type) { 
            case 'increment': 
              return { count: state.count + 1 }; 
          } 
        }; 
        const [state, dispatch] = useReducer(reducer, { count: 0 });`,
        isCorrect: false,
      },
      {
        code: `
        const initialState = { count: 0 }; 
        const [state, dispatch] = useReducer(reducer, initialState);`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reactlazy-to-load-a-component-dynamically-and-handle-errors",
    question:
      "Which code snippet correctly uses `React.lazy` to load a component dynamically and handle errors?",

    options: [
      {
        code: `
        const LazyComponent = React.lazy(() => import('./LazyComponent')); 
        const MyComponent = () => (
          <Suspense>
            <div>Loading...</div>
            <LazyComponent />
          </Suspense>
        );`,
        isCorrect: false,
      },
      {
        code: `
        const LazyComponent = React.lazy(() => import('./LazyComponent')); 
        const MyComponent = () => (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        );`,
        isCorrect: false,
      },
      {
        code: `
        const LazyComponent = React.lazy(() => import('./LazyComponent')); 
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>`,
        isCorrect: false,
      },
      {
        code: `
        const LazyComponent = React.lazy(() => import('./LazyComponent')); 
        const MyComponent = () => (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        );`,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-updates-state-asynchronously-with-setstate-in-a-react-class-component",
    question:
      "Which code snippet correctly updates state asynchronously with `setState` in a React class component?",

    options: [
      {
        code: `this.setState({ count: this.state.count + 1 });`,
        isCorrect: false,
      },
      {
        code: `this.setState((prevState) => ({ count: prevState.count + 1 }));`,
        isCorrect: true,
      },
      {
        code: `this.setState((prevState) => this.state.count + 1);`,
        isCorrect: false,
      },
      {
        code: `this.setState({ count: prevState.count + 1 });`,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-context-with-usecontext-and-a-custom-hook",
    question:
      "Which code snippet correctly handles context with `useContext` and a custom hook?",

    options: [
      {
        code: `
          const useTheme = () => { 
            const theme = useContext(ThemeContext); 
            return theme; 
          }; 
          const ThemedComponent = () => { 
            return <div>{useTheme()}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const useTheme = () => useContext(ThemeContext); 
          const ThemedComponent = () => { 
            const theme = useTheme(); 
            return <div>{theme}</div>; 
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          const useTheme = () => ThemeContext; 
          const ThemedComponent = () => { 
            return <div>{useTheme()}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const useTheme = () => useContext(ThemeContext); 
          const ThemedComponent = () => { 
            const theme = useTheme(); 
            return <span>{theme}</span>; 
          };
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-useref-to-store-a-previous-value-of-a-prop",
    question:
      "Which code snippet correctly uses `useRef` to store a previous value of a prop?",

    options: [
      {
        code: `
          const prevValueRef = useRef(); 
          useEffect(() => { 
            prevValueRef.current = value; 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          const prevValueRef = useRef(value); 
          useEffect(() => { 
            prevValueRef.current = value; 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          const prevValueRef = useRef(); 
          useEffect(() => { 
            prevValueRef.current = value; 
          }, [value]);
        `,
        isCorrect: true,
      },
      {
        code: `
          const prevValueRef = useRef(value); 
          useEffect(() => { 
            prevValueRef.current = value; 
          }, [value]);
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-event-delegation-in-react",
    question: "Which code snippet correctly handles event delegation in React?",

    options: [
      {
        code: `
          const handleClick = (event) => { 
            if (event.target.matches('.item')) { 
              console.log('Item clicked'); 
            } 
          }; 
          <div><div className='item'>Item 1</div></div>
        `,
        isCorrect: false,
      },
      {
        code: `
          const handleClick = (event) => { 
            if (event.target.matches('.item')) { 
              alert('Item clicked'); 
            } 
          }; 
          <div onClick={handleClick}><div className='item'>Item 1</div></div>
        `,
        isCorrect: false,
      },
      {
        code: `
          const handleClick = (event) => { 
            console.log('Item clicked'); 
          }; 
          <div><div className='item' onClick={handleClick}>Item 1</div></div>
        `,
        isCorrect: false,
      },
      {
        code: `
          const handleClick = (event) => { 
            if (event.target.matches('.item')) { 
              console.log('Item clicked'); 
            } 
          }; 
          <div onClick={handleClick}><div className='item'>Item 1</div></div>
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-useimperativehandle-to-expose-a-custom-function-to-a-parent-component",
    question:
      "Which code snippet correctly uses `useImperativeHandle` to expose a custom function to a parent component?",

    options: [
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            useImperativeHandle(ref, () => ({ 
              customFunction: () => { 
                console.log('Custom function called'); 
              } 
            })); 
            return <div>Component</div>; 
          });
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            useImperativeHandle(ref, () => { 
              customFunction: () => { 
                console.log('Custom function called'); 
              } 
            }); 
            return <div>Component</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            useImperativeHandle(ref, { 
              customFunction: () => { 
                console.log('Custom function called'); 
              } 
            }); 
            return <div>Component</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            useImperativeHandle(ref, () => console.log('Custom function called')); 
            return <div>Component</div>; 
          });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-react-routers-usenavigate-hook-to-redirect-after-a-form-submission",
    question:
      "Which code snippet correctly implements React Router's `useNavigate` hook to redirect after a form submission?",

    options: [
      {
        code: `
          const navigate = useNavigate(); 
          const handleSubmit = (e) => { 
            e.preventDefault(); 
            navigate('/success'); 
          }; 
          <form onSubmit={handleSubmit}>...</form>
        `,
        isCorrect: false,
      },
      {
        code: `
          const navigate = useNavigate(); 
          const handleSubmit = () => { 
            navigate('/success'); 
          }; 
          <form onSubmit={handleSubmit}>...</form>
        `,
        isCorrect: true,
      },
      {
        code: `
          const navigate = useNavigate(); 
          const handleSubmit = () => { 
            e.preventDefault(); 
            navigate('/success'); 
          }; 
          <form onSubmit={handleSubmit}>...</form>
        `,
        isCorrect: false,
      },
      {
        code: `
          const navigate = useNavigate(); 
          const handleSubmit = () => { 
            return navigate('/success'); 
          }; 
          <form onSubmit={handleSubmit}>...</form>
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-a-useeffect-hook-to-handle-dynamic-cleanup-when-a-component-is-unmounted-and-optimizes-rendering-performance-using-usememo",
    question:
      "Which code snippet correctly implements a `useEffect` hook to handle dynamic cleanup when a component is unmounted, and optimizes rendering performance using `useMemo`?",

    options: [
      {
        code: `
          const MyComponent = () => {
            const [count, setCount] = useState(0);
  
            useEffect(() => {
              const handleResize = () => {
                console.log('Window resized');
              };
              window.addEventListener('resize', handleResize);
  
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
  
            const memoizedValue = useMemo(() => count * 2, [count]);
  
            return (
              <div>
                <p>Count: {count}</p>
                <p>Memoized Value: {memoizedValue}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = () => {
            const [count, setCount] = useState(0);
  
            useEffect(() => {
              const handleResize = () => {
                console.log('Window resized');
              };
              window.addEventListener('resize', handleResize);
              return () => {};
            }, []);
  
            const memoizedValue = useMemo(() => count * 2, [count]);
  
            return (
              <div>
                <p>Count: {count}</p>
                <p>Memoized Value: {memoizedValue}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          };
        `,
        isCorrect: false,
      },
    ],
  },

  {
    slug: "which-code-snippet-correctly-implements-reacts-useimperativehandle-hook-to-expose-a-custom-method-to-a-parent-component",
    question:
      "Which code snippet correctly implements React's `useImperativeHandle` hook to expose a custom method to a parent component?",

    options: [
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => {
            const localInputRef = useRef(null);
            useImperativeHandle(ref, () => ({
              reset: () => {
                localInputRef.current.value = '';
              }
            }));
            return <input ref={localInputRef} />;
          });
          const Parent = () => {
            const childRef = useRef(null);
            return (
              <>
                <MyComponent ref={childRef} />
                <button onClick={() => childRef.current.reset()}>Reset Input</button>
              </>
            );
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => {
            const localInputRef = useRef(null);
            useImperativeHandle(ref, () => ({
              focus: () => {
                localInputRef.current.focus();
              }
            }));
            return <input ref={localInputRef} />;
          });
          const Parent = () => {
            const childRef = useRef(null);
            return (
              <>
                <MyComponent ref={childRef} />
                <button onClick={() => childRef.current.focus()}>Focus Input</button>
              </>
            );
          }
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-optimizes-re-renders-in-a-component-using-reactmemo-with-a-custom-comparison-function",
    question:
      "Which code snippet correctly optimizes re-renders in a component using `React.memo` with a custom comparison function?",

    options: [
      {
        code: `
          const MyComponent = React.memo(({ value }) => {
            console.log('Rendered');
            return <div>{value}</div>;
          }, (prevProps, nextProps) => prevProps.value === nextProps.value);
          function Parent() {
            const [value, setValue] = useState(0);
            return (
              <div>
                <MyComponent value={value} />
                <button onClick={() => setValue(value + 1)}>Increment</button>
              </div>
            );
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = React.memo(({ value }) => {
            console.log('Rendered');
            return <div>{value}</div>;
          }, (prevProps, nextProps) => {
            return nextProps.value !== prevProps.value;
          });
          function Parent() {
            const [value, setValue] = useState(0);
            return (
              <div>
                <MyComponent value={value} />
                <button onClick={() => setValue(value + 1)}>Increment</button>
              </div>
            );
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-an-advanced-custom-hook-for-handling-a-form-with-validation-in-react",
    question:
      "Which code snippet correctly implements an advanced custom hook for handling a form with validation in React?",

    options: [
      {
        code: `
          function useForm(initialState, validate) {
            const [values, setValues] = useState(initialState);
            const [errors, setErrors] = useState({});
            const handleChange = (e) => {
              setValues({
                ...values,
                [e.target.name]: e.target.value
              });
            };
            const handleSubmit = (e) => {
              e.preventDefault();
              const validationErrors = validate(values);
              if (Object.keys(validationErrors).length === 0) {
                console.log('Form submitted', values);
              } else {
                setErrors(validationErrors);
              }
            };
            return {
              values,
              errors,
              handleChange,
              handleSubmit
            };
          }
          function validate(values) {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            }
            return errors;
          }
          const Form = () => {
            const { values, errors, handleChange, handleSubmit } = useForm({ email: '' }, validate);
            return (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>
              </form>
            );
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          function useForm(initialState) {
            const [values, setValues] = useState(initialState);
            const handleChange = (e) => {
              setValues({
                ...values,
                [e.target.name]: e.target.value
              });
            };
            const handleSubmit = (e) => {
              e.preventDefault();
              console.log('Form submitted', values);
            };
            return {
              values,
              handleChange,
              handleSubmit
            };
          }
          const Form = () => {
            const { values, handleChange, handleSubmit } = useForm({ email: '' });
            return (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            );
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-performance-optimization-using-reactlazy-with-suspense-for-large-components",
    question:
      "Which code snippet correctly handles performance optimization using `React.lazy` with `Suspense` for large components?",

    options: [
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          function App() {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
              </Suspense>
            );
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          function App() {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
              </Suspense>
            );
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          const LazyComponent = React.lazy(() => import('./LazyComponent'));
          function App() {
            return (
              <div>
                <LazyComponent />
              </div>
            );
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          function App() {
            return (
              <Suspense fallback={<div>Loading...</div>}>
                <div>Lazy Loaded Component</div>
              </Suspense>
            );
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-reactforwardref-to-pass-a-ref-to-a-child-component",
    question:
      "Which code snippet correctly uses `React.forwardRef` to pass a ref to a child component?",

    options: [
      {
        code: `
          const MyComponent = React.forwardRef((ref, props) => { 
            return <div ref={ref}>{props.children}</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => { 
            return <div ref={ref}>{props.children}</div>; 
          });
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = React.forwardRef((props) => { 
            return <div>{props.children}</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((ref) => { 
            return <div ref={ref}></div>; 
          });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-usereducer-with-an-action-object-to-manage-state-in-a-react-function-component",
    question:
      "Which code snippet correctly implements `useReducer` with an action object to manage state in a React function component?",

    options: [
      {
        code: `
          const [state, dispatch] = useReducer((state, action) => { 
            if(action === 'increment') return { count: state.count + 1 }; 
            return state; 
          }, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useReducer((state, action) => { 
            if(action.type === 'increment') return { count: state.count + 1 }; 
            return state; 
          }, { count: 0 });
        `,
        isCorrect: false,
      },
      {
        code: `
          const [state, dispatch] = useReducer((state, action) => { 
            switch(action.type) { 
              case 'increment': return { count: state.count + 1 }; 
              case 'decrement': return { count: state.count - 1 }; 
              default: return state; 
            } 
          }, { count: 0 });
        `,
        isCorrect: true,
      },
      {
        code: `
          const [state, dispatch] = useReducer((state) => { 
            return { count: state.count + 1 }; 
          }, { count: 0 });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-uselayouteffect-instead-of-useeffect-to-ensure-layout-changes-are-applied-before-the-dom-is-painted",
    question:
      "Which code snippet correctly uses `useLayoutEffect` instead of `useEffect` to ensure layout changes are applied before the DOM is painted?",

    options: [
      {
        code: `
          useEffect(() => { 
            // DOM updates here 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => { 
            // DOM updates here 
          }, []);
        `,
        isCorrect: true,
      },
      {
        code: `
          useLayoutEffect(() => { 
            setState(true); 
          }, [state]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => { 
            // DOM updates here 
          }, [state]);
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-handles-async-data-fetching-in-react-with-proper-error-handling-using-useeffect",
    question:
      "Which code snippet correctly handles async data fetching in React with proper error handling using `useEffect`?",

    options: [
      {
        code: `
          useEffect(() => { 
            fetch(url)
              .then(response => response.json())
              .then(data => setData(data));
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            const fetchData = async () => { 
              const response = await fetch(url); 
              const data = await response.json(); 
              setData(data); 
            }; 
            fetchData();
          }, [url]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            const fetchData = async () => { 
              const response = fetch(url); 
              const data = await response.json(); 
              setData(data); 
            }; 
            fetchData();
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => { 
            const fetchData = async () => { 
              try { 
                const response = await fetch(url); 
                const data = await response.json(); 
                setData(data); 
              } catch (error) { 
                setError(error); 
              } 
            }; 
            fetchData();
          }, []);
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-implements-context-in-react-to-manage-a-global-state-with-a-provider-and-consumer",
    question:
      "Which code snippet correctly implements context in React to manage a global state with a provider and consumer?",

    options: [
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
            const [state, setState] = useState(0); 
            return <MyContext.Provider value={{ state, setState }}>
               {children}
            </MyContext.Provider>; 
          }; 
          const MyConsumer = () => { 
            const { state, setState } = useContext(MyContext); 
            return <div>{state}</div>; 
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
            const [state, setState] = useState(0); 
            return <MyContext.Provider value={state}>
                {children}
            </MyContext.Provider>; 
          }; 
          const MyConsumer = () => { 
            const state = useContext(MyContext); 
            return <div>{state}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
            return <MyContext.Provider value={{}}>
                 {children}
              </MyContext.Provider>; 
          }; 
          const MyConsumer = () => { 
            const { state } = useContext(MyContext); 
            return <div>{state}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext(); 
          const MyProvider = ({ children }) => { 
            const [state, setState] = useState(0); 
            return <MyContext.Provider value={setState}>
               {children}
            </MyContext.Provider>; 
          }; 
          const MyConsumer = () => { 
            const setState = useContext(MyContext); 
            return <div>{setState}</div>; 
          };
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-uses-the-reactpurecomponent-to-optimize-performance-by-preventing-unnecessary-re-renders",
    question:
      "Which code snippet correctly uses the `React.PureComponent` to optimize performance by preventing unnecessary re-renders?",

    options: [
      {
        code: `
          class MyComponent extends React.Component { 
            shouldComponentUpdate(nextProps) { 
              return nextProps.value !== this.props.value; 
            } 
            render() { 
              return <div>{this.props.value}</div>; 
            } 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.PureComponent { 
            render() { 
              return <div>{this.props.value}</div>; 
            } 
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          class MyComponent extends React.PureComponent { 
            shouldComponentUpdate(nextProps) { 
              return nextProps.value !== this.props.value; 
            } 
            render() { 
              return <div>{this.props.value}</div>; 
            } 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.memo(({ value }) => { 
            return <div>{value}</div>; 
          });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-correct-usage-of-usereducer-to-manage-complex-state-logic-within-a-functional-component",
    question:
      "Which code snippet demonstrates correct usage of `useReducer` to manage complex state logic within a functional component?",

    options: [
      {
        code: `
          const initialState = { count: 0 }; 
          const reducer = (state, action) => { 
            return { count: state.count + action.value }; 
          }; 
          const MyComponent = () => { 
            const [state, dispatch] = useReducer(reducer, initialState); 
            return <div>{state.count}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const reducer = (state, action) => { 
            return { count: state.count + action }; 
          }; 
          const MyComponent = () => { 
            const [state, dispatch] = useReducer(reducer, 0); 
            return <div>{state}</div>; 
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const initialState = { count: 0 }; 
          const reducer = (state, action) => { 
            switch (action.type) { 
              case 'increment': return { count: state.count + 1 }; 
              case 'decrement': return { count: state.count - 1 }; 
              default: return state; 
            } 
          }; 
          const MyComponent = () => { 
            const [state, dispatch] = useReducer(reducer, initialState); 
            return <div>{state.count}</div>; 
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = () => { 
            const [state, setState] = useReducer(reducer, initialState); 
            return <div>{state.count}</div>; 
          };
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-correctly-demonstrates-how-to-implement-getderivedstatefromprops-to-update-state-based-on-prop-changes",
    question:
      "Which code snippet correctly demonstrates how to implement `getDerivedStateFromProps` to update state based on prop changes?",

    options: [
      {
        code: `
          class MyComponent extends React.Component { 
            static getDerivedStateFromProps(nextProps, nextState) { 
              return { value: nextProps.value }; 
            } 
            render() { 
              return <div>{this.state.value}</div>; 
            } 
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.Component { 
            static getDerivedStateFromProps(nextProps, nextState) { 
              if (nextProps.value === this.state.value) { 
                return null; 
              } 
              return { value: nextProps.value }; 
            } 
            render() { 
              return <div>{this.state.value}</div>; 
            } 
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class MyComponent extends React.Component { 
            static getDerivedStateFromProps(nextProps, nextState) { 
              if (nextProps.value !== nextState.value) { 
                return { value: nextProps.value }; 
              } 
              return null; 
            } 
            render() { 
              return <div>{this.state.value}</div>; 
            } 
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          class MyComponent extends React.Component { 
            static getDerivedStateFromProps(nextProps) { 
              return { value: nextProps.value }; 
            } 
            render() { 
              return <div>{this.state.value}</div>; 
            } 
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-how-to-use-uselayouteffect-to-synchronously-update-the-dom-after-all-dom-mutations",
    question:
      "Which code snippet demonstrates how to use `useLayoutEffect` to synchronously update the DOM after all DOM mutations?",

    options: [
      {
        code: `
          useEffect(() => {
             document.getElementById('myElement').style.color = 'red'; 
          }, [dependency]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => {
             document.getElementById('myElement').style.color = 'red'; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
             document.getElementById('myElement').style.color = 'red'; 
          }, []);
        `,
        isCorrect: false,
      },
      {
        code: `
          useLayoutEffect(() => {
             document.getElementById('myElement').style.color = 'red'; 
          }, [dependency]);
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-the-correct-usage-of-forwardref-to-forward-a-ref-to-a-child-component",
    question:
      "Which code snippet demonstrates the correct usage of `forwardRef` to forward a ref to a child component?",

    options: [
      {
        code: `
          const MyComponent = React.forwardRef((props, ref) => {
             return <div ref={ref}>{props.children}</div>; 
          });
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyComponent = (props, ref) => {
             return <div ref={ref}>{props.children}</div>; 
          }; 
          const ForwardedComponent = React.forwardRef(MyComponent);
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = React.forwardRef((ref) => {
             return <div ref={ref}>Hello</div>; 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyComponent = (props) => {
             return <div ref={props.innerRef}>{props.children}</div>; 
          };
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-the-correct-usage-of-useeffect-with-an-empty-dependency-array-to-simulate-componentdidmount",
    question:
      "Which code snippet demonstrates the correct usage of `useEffect` with an empty dependency array to simulate `componentDidMount`?",

    options: [
      {
        code: `
          useEffect(() => {
             console.log('Mounted'); }, []);
        `,
        isCorrect: true,
      },
      {
        code: `
          useEffect(() => {
             console.log('Mounted'); 
          });
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
             console.log('Mounted'); 
          }, [value]);
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
             return () => {
               console.log('Unmounted'); 
             }; 
          }, []);
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-the-correct-way-to-handle-an-error-boundary-in-react",
    question:
      "Which code snippet demonstrates the correct way to handle an error boundary in React?",

    options: [
      {
        code: `
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
            componentDidCatch(error, info) {
              console.log(error, info);
            }
            render() {
              if (this.state.hasError) {
                return <div>Something went wrong</div>;
              }
              return this.props.children;
            }
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
            static getDerivedStateFromError(error) {
              return { hasError: true };
            }
            render() {
              return this.props.children;
            }
          }
        `,
        isCorrect: false,
      },
      {
        code: `
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
            static getDerivedStateFromError(error) {
              return { hasError: true };
            }
            componentDidCatch(error, info) {
              console.log(error, info);
            }
            render() {
              if (this.state.hasError) {
                return <div>Something went wrong</div>;
              }
              return this.props.children;
            }
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
            static getDerivedStateFromError(error) {
              return { hasError: true };
            }
            render() {
              if (this.state.hasError) {
                return <div>Something went wrong</div>;
              }
              return null;
            }
          }
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-correct-usage-of-usecontext-with-dynamic-context-values-that-change-across-the-app",
    question:
      "Which code snippet demonstrates correct usage of `useContext` with dynamic context values that change across the app?",

    options: [
      {
        code: `
          const MyContext = React.createContext();
          const MyComponent = () => {
            const contextValue = useContext(MyContext);
            return <div>{contextValue}</div>;
          };
          const App = () => {
            return <MyContext.Provider value={'initial'}>
                <MyComponent />
            </MyContext.Provider>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext();
          const MyComponent = () => {
            const contextValue = useContext(MyContext);
            return <div>{contextValue}</div>;
          };
          const App = () => {
            const [value, setValue] = useState('initial');
            return <MyContext.Provider value={value}>
                <MyComponent />
            </MyContext.Provider>;
          };
        `,
        isCorrect: true,
      },
      {
        code: `
          const MyContext = React.createContext();
          const MyComponent = () => {
            const contextValue = useContext(MyContext);
            return <div>{contextValue}</div>;
          };
          const App = () => {
            return <MyContext.Provider value={'initial'}>
                <MyComponent />
            </MyContext.Provider>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const MyContext = React.createContext();
          const MyComponent = () => {
            const contextValue = useContext(MyContext);
            return <div>{contextValue}</div>;
          };
          const App = () => {
            const value = 'initial';
            return <MyContext.Provider value={value}>
                <MyComponent />
            </MyContext.Provider>;
          };
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "which-code-snippet-demonstrates-correct-usage-of-react-createcontext-and-usecontext-to-handle-theming-across-an-app",
    question:
      "Which code snippet demonstrates correct usage of `React.createContext` and `useContext` to handle theming across an app?",

    options: [
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState('light');
            return <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>;
          };
          const MyComponent = () => {
            const theme = useContext(ThemeContext);
            return <div className={theme}>Theme: {theme}</div>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState('light');
            return <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>;
          };
          const MyComponent = () => {
            const { theme } = useContext(ThemeContext);
            return <div>Theme: {theme}</div>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState('light');
            return <ThemeContext.Provider value={setTheme}>
                {children}
            </ThemeContext.Provider>;
          };
          const MyComponent = () => {
            const { theme } = useContext(ThemeContext);
            return <div>{theme}</div>;
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const ThemeContext = React.createContext();
          const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState('light');
            return <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>;
          };
          const MyComponent = () => {
            const { theme } = useContext(ThemeContext);
            return <div className={theme}>Theme: {theme}</div>;
          };
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-update-a-nested-state-object-in-react",
    question: "How would you update a nested state object in React?",

    options: [
      {
        code: `
              const [state, setState] = useState({ user: { name: 'John' } });
              const updateName = (newName) => {
                setState({ user: { name: newName } });
              };
            `,
        isCorrect: false,
      },
      {
        code: `
              const [state, setState] = useState({ user: { name: 'John' } });
              const updateName = (newName) => {
                setState(prevState => ({ ...prevState, user: { ...prevState.user, name: newName } }));
              };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "what-is-the-correct-way-to-bind-an-event-handler-in-a-class-component",
    question:
      "What is the correct way to bind an event handler in a class component?",

    options: [
      {
        code: `
              class MyComponent extends React.Component {
                constructor() {
                  super();
                  this.handleClick = this.handleClick.bind(this);
                }
                handleClick() {
                  console.log('Clicked');
                }
                render() {
                  return <button onClick={this.handleClick}>Click me</button>;
                }
              }
            `,
        isCorrect: true,
      },
      {
        code: `
              class MyComponent extends React.Component {
                handleClick() {
                  console.log('Clicked');
                }
                render() {
                  return <button onClick={this.handleClick}>Click me</button>;
                }
              }
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-pass-a-dynamic-key-to-an-object-in-react",
    question: "How do you pass a dynamic key to an object in React?",

    options: [
      {
        code: `
              const obj = {};
              obj[key] = 'John';
            `,
        isCorrect: false,
      },
      {
        code: `
              const [key, setKey] = useState('name');
              const obj = { [key]: 'John' };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-do-you-handle-multiple-form-inputs-in-react-using-one-state",
    question:
      "How do you handle multiple form inputs in React using one state?",

    options: [
      {
        code: `
              const [form, setForm] = useState({ name: '', email: '' });
              const handleChange = (e) => {
                const { name, value } = e.target;
                setForm(prev => ({ ...prev, [name]: value }));
              };
            `,
        isCorrect: true,
      },
      {
        code: `
              const [name, setName] = useState('');
              const [email, setEmail] = useState('');
              const handleChange = (e) => {
                if (e.target.name === 'name') setName(e.target.value);
                else setEmail(e.target.value);
              };
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-conditionally-render-a-component-based-on-state",
    question: "How do you conditionally render a component based on state?",

    options: [
      {
        code: `
              const [isVisible, setIsVisible] = useState(false);
              return isVisible && <div>Visible</div>;
            `,
        isCorrect: false,
      },
      {
        code: `
              const [isVisible, setIsVisible] = useState(false);
              return isVisible ? <div>Visible</div> : null;
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-do-you-update-state-based-on-previous-state-in-react",
    question: "How do you update state based on previous state in React?",

    options: [
      {
        code: `
              const [count, setCount] = useState(0);
              const increment = () => setCount(prevCount => prevCount + 1);
            `,
        isCorrect: true,
      },
      {
        code: `
              const [count, setCount] = useState(0);
              const increment = () => setCount(count + 1);
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-fetch-data-on-component-mount-using-reacts-hooks",
    question: "How do you fetch data on component mount using React's hooks?",

    options: [
      {
        code: `
              const MyComponent = () => {
                const [data, setData] = useState([]);
                useEffect(() => {
                  fetch('/api/data')
                    .then(res => res.json())
                    .then(data => setData(data));
                });
                return <div>{data.length}</div>;
              };
            `,
        isCorrect: false,
      },
      {
        code: `
              import { useEffect, useState } from 'react';
              const MyComponent = () => {
                const [data, setData] = useState([]);
                useEffect(() => {
                  fetch('/api/data')
                    .then(res => res.json())
                    .then(data => setData(data));
                }, []);
                return <div>{data.length}</div>;
              };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-create-a-controlled-input-field-in-react",
    question: "How would you create a controlled input field in React?",

    options: [
      {
        code: `
              const [inputValue, setInputValue] = useState('');
              const handleChange = (e) => setInputValue(e.target.value);
              return <input value={inputValue} onChange={handleChange} />;
            `,
        isCorrect: true,
      },
      {
        code: `
              const handleChange = (e) => inputValue = e.target.value;
              return <input value={inputValue} onChange={handleChange} />;
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-dynamically-set-an-objects-key-in-react",
    question: "How do you dynamically set an object's key in React?",

    options: [
      { code: `const obj = { key: 'value' };`, isCorrect: false },
      { code: `const obj = { key: value };`, isCorrect: false },
      { code: `const obj = { [key]: 'value' };`, isCorrect: true },

      { code: `const obj = { "key": value };`, isCorrect: false },
    ],
  },
  {
    slug: "how-would-you-use-the-useeffect-hook-to-run-code-on-component-mount",
    question:
      "How would you use the useEffect hook to run code on component mount?",
    options: [
      {
        code: `
              useEffect(() => {
                console.log('Component mounted');
              });
            `,
        isCorrect: false,
      },
      {
        code: `
              useEffect(() => {
                console.log('Component mounted');
              }, []);
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-do-you-conditionally-render-components-in-react-based-on-state",
    question:
      "How do you conditionally render components in React based on state?",

    options: [
      {
        code: `
              const [isVisible, setIsVisible] = useState(false);
              return isVisible && <div>Visible</div>;
            `,
        isCorrect: false,
      },
      {
        code: `
              const [isVisible, setIsVisible] = useState(false);
              return isVisible ? <div>Visible</div> : <div>Hidden</div>;
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-safely-update-a-nested-object-in-state-in-react",
    question: "How would you safely update a nested object in state in React?",

    options: [
      {
        code: `
              const [state, setState] = useState({ user: { name: 'John', age: 30 } });
              const updateName = () => {
                setState(prevState => ({
                  ...prevState,
                  user: { ...prevState.user, name: 'Jane' }
                }));
              };
            `,
        isCorrect: true,
      },
      {
        code: `
              const [state, setState] = useState({ user: { name: 'John', age: 30 } });
              const updateName = () => {
                setState({ user: { name: 'Jane' } });
              };
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-create-a-new-object-by-copying-properties-from-multiple-objects-in-react",
    question:
      "How do you create a new object by copying properties from multiple objects in React?",

    options: [
      {
        code: `
              const obj1 = { name: 'John' };
              const obj2 = { age: 30 };
              const newObj = obj1 + obj2;
            `,
        isCorrect: false,
      },
      {
        code: `
              const obj1 = { name: 'John' };
              const obj2 = { age: 30 };
              const newObj = { ...obj1, ...obj2 };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-handle-a-dynamic-key-in-an-object-for-state-updates-in-react",
    question:
      "How would you handle a dynamic key in an object for state updates in React?",

    options: [
      {
        code: `
              const [state, setState] = useState({ name: 'John' });
              const updateState = (key, value) => {
                setState(prevState => ({ name: value }));
              };
            `,
        isCorrect: false,
      },
      {
        code: `
              const [state, setState] = useState({ name: 'John' });
              const updateState = (key, value) => {
                setState(prevState => ({ ...prevState, [key]: value }));
              };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-delete-a-key-from-an-object-in-react-state-without-muting-it",
    question:
      "How would you delete a key from an object in React state without mutating it?",

    options: [
      {
        code: `
              const [state, setState] = useState({ name: 'John', age: 30 });
              const deleteKey = () => {
                const { age, ...newState } = state;
                setState(newState);
              };
            `,
        isCorrect: true,
      },
      {
        code: `
              const [state, setState] = useState({ name: 'John', age: 30 });
              const deleteKey = () => {
                delete state.age;
                setState(state);
              };
            `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-would-you-merge-two-objects-but-ensure-that-a-property-from-the-second-object-overrides-the-first-object-in-react",
    question:
      "How would you merge two objects, but ensure that a property from the second object overrides the first object in React?",

    options: [
      {
        code: `
              const obj1 = { name: 'John', age: 30 };
              const obj2 = { age: 25 };
              const mergedObj = { obj1, obj2 };
            `,
        isCorrect: false,
      },
      {
        code: `
              const obj1 = { name: 'John', age: 30 };
              const obj2 = { age: 25 };
              const mergedObj = { ...obj1, ...obj2 };
            `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-do-you-access-a-deeply-nested-property-in-an-object-array-in-react-ensuring-it-s-safe-and-doesn-t-throw-errors-if-any-level-is-undefined",
    question:
      "How do you access a deeply nested property in an object array in React, ensuring it's safe and doesn't throw errors if any level is undefined?",

    options: [
      {
        code: `
          const data = [{ user: { name: 'John', address: { city: 'NYC' } } }];
          const city = data[0].user.address.city;
        `,
        isCorrect: false,
      },
      {
        code: `
          const data = [{ user: { name: 'John', address: { city: 'NYC' } } }];
          const city = data[0]?.user?.address?.city;
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-iterate-over-an-array-of-objects-and-update-a-specific-property-in-each-object-using-react",
    question:
      "How would you iterate over an array of objects and update a specific property in each object using React?",

    options: [
      {
        code: `
        const data = [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ];
        const updatedData = data.map((item) =>
          item.id === 1 ? { ...item, name: "Johnny" } : item
        );
        
        `,
        isCorrect: true,
      },
      {
        code: `
        const data = [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ];
        const updatedData = data.forEach((item) =>
          item.id === 1 ? { ...item, name: "Johnny" } : item
        );
        
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-would-you-access-the-last-item-in-a-nested-array-of-objects-in-react",
    question:
      "How would you access the last item in a nested array of objects in React?",

    options: [
      {
        code: `
        const data = [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ];
        const lastItem = data[data.length];
        
        `,
        isCorrect: false,
      },
      {
        code: `
        const data = [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ];
        const lastItem = data[data.length - 1];
        
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-handle-concurrent-fetch-requests-to-multiple-apis-in-react-and-display-the-results-once-all-requests-are-completed",
    question:
      "How would you handle concurrent fetch requests to multiple APIs in React and display the results once all requests are completed?",

    options: [
      {
        code: `
          async function fetchData() {
            const response1 = fetch('/api/data1');
            const response2 = fetch('/api/data2');
            const [data1, data2] = await Promise.all([response1, response2]);
            const data1Json = await data1.json();
            const data2Json = await data2.json();
            setData([data1Json, data2Json]);
          }
        `,
        isCorrect: true,
      },
      {
        code: `
          const response1 = fetch('/api/data1');
          const response2 = fetch('/api/data2');
          Promise.all([response1, response2]).then(([data1, data2]) => {
            setData([data1, data2]);
          });
        `,
        isCorrect: false,
      },
    ],
  },
  {
    slug: "how-do-you-make-a-fetch-request-inside-a-react-functional-component-that-gets-triggered-only-once-avoiding-infinite-re-renders",
    question:
      "How do you make a fetch request inside a React functional component that gets triggered only once, avoiding infinite re-renders?",

    options: [
      {
        code: `
          useEffect(() => {
            fetch('/api/data')
              .then(response => response.json())
              .then(data => setData(data));
          }, [data]);  // Incorrect, causes re-fetching on data change
        `,
        isCorrect: false,
      },
      {
        code: `
          useEffect(() => {
            const fetchData = async () => {
              const response = await fetch('/api/data');
              const data = await response.json();
              setData(data);
            };
            fetchData();
          }, []);  // Empty dependency array to run only once
        `,
        isCorrect: true,
      },
    ],
  },
  {
    slug: "how-would-you-handle-errors-when-fetching-data-from-an-api-in-react-and-display-an-error-message-if-the-request-fails",
    question:
      "How would you handle errors when fetching data from an API in React, and display an error message if the request fails?",

    options: [
      {
        code: `
          const fetchData = async () => {
            const response = await fetch('/api/data');
            const data = await response.json();
            setData(data);
          };
        `,
        isCorrect: false,
      },
      {
        code: `
          const fetchData = async () => {
            try {
              const response = await fetch('/api/data');
              if (!response.ok) throw new Error('Network response was not ok');
              const data = await response.json();
              setData(data);
            } catch (error) {
              setError(error.message);
            }
          };
        `,
        isCorrect: true,
      },
    ],
  },
];

export default ReactInterviewCorrectCodeData;
