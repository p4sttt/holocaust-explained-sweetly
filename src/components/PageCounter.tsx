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
    <p className='absolute left-8 bottom-8'>
      {currentPage} / {pagesCount}
    </p>
  );
};
