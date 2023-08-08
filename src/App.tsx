import { useAnimationControls } from 'framer-motion';
import { useState } from 'react';

import { Cursor, PageCounter, Paragraph } from '@/components';
import { text } from '@/utils/constants';

function App() {
  const [paragraphIndex, setParagraphIndex] = useState<number>(0);
  const controls = useAnimationControls();

  const nextParagraph = () => {
    if (paragraphIndex != text.length - 1) {
      setParagraphIndex((currentIndex) => currentIndex + 1);
      controls.set('hidden');
      controls.start('visible');
    }
  };

  const prevParagraph = () => {
    if (paragraphIndex != 0) {
      setParagraphIndex((currentIndex) => currentIndex - 1);
      controls.set('hidden');
      controls.start('visible');
    }
  };

  return (
    <div className='grid-main w-screen h-screen overflow-hidden'>
      <button
        className='h-full from-pink-200 bg-gradient-to-r'
        onClick={prevParagraph}
      />
      <Paragraph paragraph={text[paragraphIndex]} controls={controls} />
      <button
        className='h-full from-pink-200 bg-gradient-to-l'
        onClick={nextParagraph}
      />
      <PageCounter currentPage={paragraphIndex + 1} pagesCount={text.length} />
      <Cursor />
    </div>
  );
}

export default App;
