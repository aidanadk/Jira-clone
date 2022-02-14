import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Issues } from '../../services/issues';
import { ButtonPrimary } from '../Button/Button';
import './style.scss';

const CreateIssue = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postNewIssue(event);
  };

  const postNewIssue = async (event) => {
    const issuesService = new Issues();
    const uniqId = uuid();

    const { title, description } = event.target.elements;

    await issuesService.create({
      id: uniqId,
      title: title.value,
      description: description.value,
    });

    await issuesService.updateColumns('column1', uniqId);
  };

  return (
    <div className='create-issue'>
      <h4 className='create-issue__title'>Создать задачу</h4>
      <form onSubmit={handleSubmit}>
        <input name='title' type='text' placeholder='Введите заголовок задачу' />
        <textarea name='description' placeholder='Введите описание задачи'></textarea>
        <ButtonPrimary>Создать</ButtonPrimary>
      </form>
    </div>
  );
};

export default CreateIssue;
