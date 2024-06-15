import React from 'react';

const ProgressBar = ({ start, end }) => {
  // Рассчитываем процентное значение прогресса
  const progress = ((start / end) * 100).toFixed(2);

  // Стиль для контейнера прогресс-бара
  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
  };

  // Стиль для прогресс-бара
  const barStyle = {
    width: `${progress}%`,
    height: '30px',
    textAlign: 'right',
    lineHeight: '30px',
    color: 'white',
    paddingRight: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle} className='flex flex-col gap-4'>
      <div className='flex flex-row justify-between w-full'> <div className='flex bg-gray-200 p-2 px-4 rounded-full'>{start}</div>
      <div className='flex bg-gray-200 p-2 px-4 rounded-full'>{end}</div>
      </div>

      <div className='rounded-full overflow-hidden  bg-gray-200'>
          <div style={barStyle} className='rounded-full overflow-hidden bg-sky-400'>
          </div>
      </div>
     
    </div>
  );
};

export default ProgressBar;
