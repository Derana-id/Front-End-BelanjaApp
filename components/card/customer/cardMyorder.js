/* eslint-disable prefer-const */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../search/search';
import { getMyOrder } from '../../../redux/actions/userProfile';

export default function cardMyorder() {
  const [showNav, setFormShowNav] = useState(0);

  const setCurrentShow = index => {
    setFormShowNav(index);
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        border: '2px solid #F6F6F6'
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#F6F6F6',
        border: '2px solid #F6F6F6'
      }
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px'
      }
    }
  };

  const columns = [
    {
      name: 'Invoice',
      selector: row => row.invoice
    },
    {
      name: 'Total price',
      selector: row => row.total
    },
    {
      name: 'Date',
      selector: row => row.date
    },
    {
      name: 'Status',
      selector: row => row.status === 0 ? 'New' : row.status === 1 ? 'Packed' : row.status === 2 ? 'Sent' : row.status === 3 ? 'Completed' : 'Cancel order'
    },
  ];

  // integrasi
  const dispatch = useDispatch();

  // const data = [
  //   {
  //     id: 1,
  //     invoice: 'ABC1243',
  //     total: '10.000',
  //     date: '11/05/1997',
  //     status: 'success'
  //   },
  // ];

  const myOrder = useSelector(state => {
    return state.listTransactionBuyer;
  });

  // console.log(myOrder);

  let data = [];
  if (myOrder.data.length > 0) {
    myOrder.data.map(item => data.push(item.transaction));
  }

  // console.log(myOrder);

  useEffect(() => {
    dispatch(getMyOrder());
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <h5 className="text-black relative mt-10 ml-10 text-lg font-bold">My Order</h5>
      <div className="px-10 pt-2">
        <ul className="flex w-full justify-between text-gray text-lg nav nav-tabs flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(0)}>New</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(1)}>Packed</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(2)}>Sent</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(3)}>Completed</button>
          </li>
          <li className="focus:text-primary border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(4)}>Cancel order</button>
          </li>
        </ul>
        <div className="mt-8">
          <Search />
        </div>
        <div className="flex justify-start min-h-[200px] p-4">
          {showNav === 0 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <DataTable
                className="bg-gray"
                columns={columns}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                data={data}
                customStyles={customStyles}
              />
            </div>
          ) : showNav === 1 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <DataTable
                className="bg-gray"
                columns={columns}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                // data={data2}
                customStyles={customStyles}
              />
            </div>
          ) : showNav === 2 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <DataTable
                className="bg-gray"
                columns={columns}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                data={data}
                customStyles={customStyles}
              />
            </div>
          ) : showNav === 3 ? (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <DataTable
                className="bg-gray"
                columns={columns}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                data={data}
                customStyles={customStyles}
              />
            </div>
          ) : (
            <div className="flex w-full border rounded min-h-[120px] relative">
              <DataTable
                className="bg-gray"
                columns={columns}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                data={data}
                customStyles={customStyles}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
