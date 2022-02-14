import React from 'react';

import { Issues } from '../../services/issues';
import './style.scss';

const Issue = ({ id, title, description, taskKey, projectAbbr }) => {
  const handleDeleteIssue = async () => {
    const issuesService = new Issues();

    await issuesService.delete(id)
  };

  return (
    <div>
      <div className='issue__header'>
        <div className='issue__breadcrumbs'>
          <div className='issue__type'>
            <svg width='16px' height='16px' viewBox='0 0 16 16'>
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g id='bug'>
                  <g id='Bug' transform='translate(1.000000, 1.000000)'>
                    <rect
                      id='Rectangle-36'
                      fill='#E5493A'
                      x='0'
                      y='0'
                      width='14'
                      height='14'
                      rx='2'
                    />
                    <path
                      d='M10,7 C10,8.657 8.657,10 7,10 C5.343,10 4,8.657 4,7 C4,5.343 5.343,4 7,4 C8.657,4 10,5.343 10,7'
                      id='Fill-2'
                      fill='#FFFFFF'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className='issue__project-id'>
            {projectAbbr}-{taskKey}
          </div>
        </div>
        <div className='issue__actions'>
          <span onClick={handleDeleteIssue} className='issue__delete'>Удалить</span>
        </div>
      </div>
      <div className='issue__content'>
        <h3 className='issue__title'>{title}</h3>
        <div className='issue__description-label'>Описание</div>
        <p className='issue__description'>{description}</p>
      </div>
    </div>
  );
};

export default Issue;
