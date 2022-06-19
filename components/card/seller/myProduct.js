/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../search/search';
import { getDetailMyProduct } from '../../../redux/actions/storeProfile';

export default function cardMyorder(params) {
  const [showNav, setFormShowNav] = useState(0);
  const dispatch = useDispatch();

  const myProduct = useSelector((state) => {
    return state.myProduct;
  });

  const setCurrentShow = index => {
    setFormShowNav(index);
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        border: '3px solid #F6F6F6'
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#F6F6F6',
        border: '2px solid #F6F6F6',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const columns = [
    {
      name: 'Product name',
      selector: row => row.product_name,
    },
    {
      name: 'Price',
      selector: row => row.price,
      // style: { marginLeft: '300px' }
    },
    {
      name: 'Stock',
      selector: row => row.stock,
    },
  ];

  // integrasi

  let data = [];
  if (myProduct.data) {
    myProduct.data.map((item) => (
      data.push(item.product)
    ));
  }
  useEffect(() => {
    dispatch(getDetailMyProduct());
  }, [dispatch]);

  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <h5 className="text-black relative mt-10 ml-10 text-lg font-bold">{params.name}</h5>
      <div className="w-full px-10 pt-2">
        <ul className="flex w-full text-gray text-lg">
          <li className="focus:text-primary  mr-7 sm:mr-7 md:mr-14 lg:mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(0)}>All items</button>
          </li>
          <li className="focus:text-primary  mr-7 sm:mr-7 md:mr-14 lg:mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(1)}>Sould out</button>
          </li>
          <li className="focus:text-primary  mr-7 sm:mr-7 md:mr-14 lg:mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <button onClick={() => setCurrentShow(2)}>Archived</button>
          </li>
        </ul>
        <div className="mt-8">
          <Search />
        </div>
        {showNav === 0 ? (
          <div className="flex justify-center pt-4 items-center mb-10">
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
          <div className="flex justify-center pt-4 items-center mb-10">
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
          <div className="flex justify-center pt-4 items-center mb-10">
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
  );
}
