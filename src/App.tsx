import { useAnimationControls } from 'framer-motion';
import { useState } from 'react';

import { Cursor, PageCounter, Paragraph } from '@/components';
import { text } from '@/utils/constants';

function App() {
  const [paragraphIndex, setParagraphIndex] = useState<number>(0);
  const paragraphControls = useAnimationControls();
  const cursorControls = useAnimationControls();

  const nextParagraph = () => {
    if (paragraphIndex != text.length - 1) {
      setParagraphIndex((currentIndex) => currentIndex + 1);
      paragraphControls.set('hidden');
      paragraphControls.start('visible');
    }
  };

  const prevParagraph = () => {
    if (paragraphIndex != 0) {
      setParagraphIndex((currentIndex) => currentIndex - 1);
      paragraphControls.set('hidden');
      paragraphControls.start('visible');
    }
  };

  const setHoverCursor = () => {
    cursorControls.start('hover');
  };

  const setDefaultCursor = () => {
    cursorControls.start('default');
  };

  const setDraggbleCursor = () => {
    cursorControls.start('draggeble');
  };

  return (
    <div className='grid-main w-screen h-screen overflow-hidden'>
      <button
        className='h-full from-pink-200 bg-gradient-to-r cursor-none'
        onClick={prevParagraph}
        onMouseEnter={setHoverCursor}
        onMouseLeave={setDefaultCursor}
      />
      <Paragraph
        paragraph={text[paragraphIndex]}
        controls={paragraphControls}
        onDragStart={setDraggbleCursor}
        onDragEnd={setDefaultCursor}
      />
      <button
        className='h-full from-pink-200 bg-gradient-to-l cursor-none'
        onClick={nextParagraph}
        onMouseEnter={setHoverCursor}
        onMouseLeave={setDefaultCursor}
      />
      <PageCounter currentPage={paragraphIndex + 1} pagesCount={text.length} />
      <Cursor controls={cursorControls} />
    </div>
  );
}

export default App;
