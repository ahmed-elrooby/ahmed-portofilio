"use client"; // تأكد من أنها في أعلى الملف

import dynamic from "next/dynamic";

// تحميل المكون NotFoundPage بشكل ديناميكي وتعطيل SSR
const NotFoundPage = dynamic(() => import('@/components/NotfoundPage/NotFoundPage'), { ssr: false });

const Notfound = () => {
  return (
    <>
      <NotFoundPage />
    </>
  );
};

export default Notfound;
