import dynamic from 'next/dynamic';

// تعطيل SSR للمكون الذي قد يعتمد على document أو window
const NotfounPage = dynamic(() => import('@/components/NotfoundPage/NotfoundPage'), { ssr: false });

const Notfound = () => {
  return (
    <>
      <NotfounPage />
    </>
  );
};

export default Notfound;
