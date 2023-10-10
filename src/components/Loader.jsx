import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='loader' key={progress}></span>
    </Html>
  );
};

export default Loader;
