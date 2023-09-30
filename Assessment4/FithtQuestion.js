//5. Explain various hooks in functional component (at least 5)

//1
const [count, setCount] = useState(0);
/*useState allows functional components to have local component-level state. It returns an array with 
two elements: the current state value and a function that lets you update it.*/


//2
useEffect(() => {
    // Perform side effects here
  }, [dependencies]);
/* useEffect is used to manage side effects in functional components. It allows you to perform 
side effects (like data fetching, subscriptions, or manually changing the DOM) 
after the component has rendered or when certain dependencies change.*/


//3
const contextValue = useContext(MyContext);
/*useContext allows functional components to subscribe to context changes. Context provides a way 
to pass data through the component tree without having to pass props down manually at every level.*/


//4
const [state, dispatch] = useReducer(reducer, initialState);
/*useReducer is usually preferable to useState when you have complex state logic that involves 
multiple sub-values or when the next state depends on the previous one. */


//5
const myRef = useRef(initialValue);
/*useRef creates a mutable object that holds a .current property and persists across renders. 
It's often used to hold references to DOM elements or to store mutable values that won't cause 
a re-render when they change.*/
