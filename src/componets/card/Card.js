import React, { useState } from 'react';
import './Card.css';

export default function Card() {

  // const [count, setCount] = React.useState(0);
  const [nunber, numberChange] = useState(),
        [name, nameChange] = useState('name'),
        [month, monthChange] = useState(),
        [day, dayChange] = useState(0),
        [ccv, ccvChange] = useState(0);
  
  
  
  // console.log(nunber);

  return (
      // {/* <p>Вы кликнули {} раз</p>
      // <button onClick={() => setCount(nunber)}>
      //   Нажми на меня
      // </button> */}
    <div className="row">
      <div className="small-6 small-offset-1 columns">
        <div className="callout credit">
            <div className="row">
              <div className="small-6 columns">
                <h1 className="credit__bank">My Bank</h1>
              </div>
              <div className="small-6 columns">
                <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                  <p className="credit__card-number">{nunber}</p>
                  <span className="credit__ccv">{ccv}</span>
              </div>
              <div className="small-9 columns">
                <label>Card Holder
                  <p className="credit__name">{name}</p>
                </label>
              </div>
              <div className="small-3 columns">
                <label>Expires
                  <p className="credit__date">{month} / {day}</p>
                </label>
              </div>
            </div>

          </div>
        </div>
      <div className="small-5 columns end">
          <div className="callout margin-top50">
            <label>NAME
              <input
                  type="text"
                  maxLength="16"
                  onChange={ e => nameChange(e.target.value)}
              />
            </label>
            <label>NUMBER
              <input
                  type="text"
                  maxLength="16"
                  onChange={ e => numberChange(e.target.value)}
              />
            </label>
            <div className="row">
              <label className="column">EXPIRATION DATE</label>
              <div className="small-4 columns">
                <input
                    type="number"
                    maxLength="16"
                    onChange={ e => monthChange(e.target.value)}
                />
              </div>
              <div className="small-4 columns end">
                <input
                    type="number"
                    maxLength="16"
                    onChange={ e => dayChange(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="small-4 column">
                <label>CCV
                  <input
                      type="number"
                      maxLength="16"
                      onChange={ e => ccvChange(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
