import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './redux/actions/index';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const dataList = useSelector(state => state.list)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const dispatch = useDispatch()
  const pluS = (index) => {
    dispatch(plus(index));
  }
  const minuS = (index) => {
    dispatch(minus(index));
  }
  useEffect(()=>{
    let totalCount=0, totalPrice=0;
    dataList.forEach((item)=>{
      totalCount += item?.count
      totalPrice += item?.count * item?.price
    })
    setTotalPrice(totalPrice)
    setTotalCount(totalCount)
  }, [totalPrice, totalCount, dataList])
  return (
    <div className="App">
      <div className='items'>
        <div className='total'>Total Count : {totalCount}</div>
        <div className='total'>Total Price : ${totalPrice}</div>
      {
        dataList?.map((item, index)=>{
          return(
            <div className='item' key={'item'+index}>
              <div className='left'>
                <div className='title'>Title : {item?.title}</div>
                <div className='description'>Description : {item?.description}</div>
                <div className='price'>Price : ${item?.price}</div>
                <div className='count'>Count : {item?.count}</div>
              </div>
              <div className='right'>
                <button onClick={()=>pluS(index)}>+</button>
                <button onClick={()=>minuS(index)}>-</button>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
