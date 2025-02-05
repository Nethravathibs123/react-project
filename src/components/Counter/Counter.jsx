import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 100, 200, ${count / 100})`,
  });

  return (
    <animated.div style={backgroundAnimation}>
      <Box p={4}>
        <h1>Counter: {count}</h1>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;