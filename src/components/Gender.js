import React from 'react';
import Female from './icons/Female';
import Male from './icons/Male';
import Other from './icons/Other';
import './Gender.scss';

const Gender = ({ inputRef }) => {
  return (
    <div>
      <div className='gender__identify mb-4'>
        <h4>gender</h4>
        <div className='row'>
          <div className='col-4'>
            <div className='card gender__box '>
              <div className='card-body d-flex flex-column justify-content-center align-items-center p-4'>
                <Male />
                <div className='form-check pt-1'>
                  <input
                    {...inputRef('gender')}
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    value='male'
                    id='male'
                  />
                  <label className='form-check-label card-text' htmlFor='male'>
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card gender__box'>
              <div className='card-body d-flex flex-column justify-content-center align-items-center p-4'>
                <Female />
                <div className='form-check pt-1'>
                  <input
                    {...inputRef('gender')}
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    value='female'
                    id='female'
                  />
                  <label
                    className='form-check-label card-text'
                    htmlFor='female'
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className='card gender__box '>
              <div className='card-body d-flex flex-column justify-content-center align-items-center p-4'>
                <Other />
                <div className='form-check pt-1'>
                  <input
                    {...inputRef('gender')}
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    value='other'
                    id='other'
                  />
                  <label className='form-check-label card-text' htmlFor='other'>
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
