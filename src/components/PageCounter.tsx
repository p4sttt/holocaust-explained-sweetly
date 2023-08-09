import { FC } from 'react';

interface PageCounterProps {
  pagesCount: number;
  currentPage: number;
}

export const PageCounter: FC<PageCounterProps> = ({
  currentPage,
  pagesCount,
}) => {
  return (
    <p className='absolute bottom-8 left-8'>
      {currentPage} / {pagesCount}
    </p>
  );
};
