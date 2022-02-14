import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useNavigate, useLocation } from 'react-router-dom';

import Issue from '../Issue/Issue';
import Modal from '../Modal/Modal';
import './style.scss';

const Card = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, index, id, projectName, taskKey } = props;
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (bool) => {
    setShowModal(bool);
    navigate('/');
  };

  const handleClick = () => {
    setShowModal(true);
    navigate(`/?project-name=${getProjectNameAbbr()}&task-key=${taskKey}`);
  };

  const getProjectNameAbbr = () => {
    const arrayOfWords = projectName.split(' ');
    const abbr = arrayOfWords.map((word) => word[0]).join('');

    return abbr;
  };

  useEffect(() => {
    if (location.search.includes(getProjectNameAbbr()) && 
        location.search.includes(taskKey)) {
      setShowModal(true);
    }
  }, []);

  return (
    <div>
      {showModal && (
        <Modal close={handleCloseModal}>
          <Issue {...props} projectAbbr={getProjectNameAbbr()} />
        </Modal>
      )}
      <Draggable draggableId={id} index={index}>
        {(provide) => (
          <div
            onClick={handleClick}
            ref={provide.innerRef}
            {...provide.dragHandleProps}
            {...provide.draggableProps}
            className='card'>
            <h5 className='card__title'>{title}</h5>
            <div className='card__details'>
              <div className='card__row'>
                <div className='card__type'>
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
                <div className='card__priority'>
                  <img src='https://i.imgur.com/qVaZWPW.png' />
                </div>
              </div>
              <div className='card__row'>
                <div className='card-key'>
                  {getProjectNameAbbr()}-{taskKey}
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
