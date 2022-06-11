import React from 'react';
import DataTable from 'react-data-table-component';
import Search from '../../search/search';

export default function cardMyorder(params) {
  const columns = [
    {
      name: 'Product name',
      selector: row => row.product,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Stock',
      selector: row => row.stock,
    },
  ];

  const data = [
    {
      id: 1,
      product: 'Beetlejuice',
      price: '10.000',
      stock: '100'
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded w-3/4 h-auto mt-[120px] mx-12">
      <h5 className="text-black relative mt-10 ml-10 text-lg font-bold">{params.name}</h5>
      <div className="px-10 pt-2">
        <ul className="flex w-full text-gray text-lg">
          <li className="focus:text-primary  mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">All items</a>
          </li>
          <li className="focus:text-primary  mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Sould out</a>
          </li>
          <li className="focus:text-primary  mr-14 border-b-2 border-white border-solid hover:border-b-primary hover:border-b-2">
            <a href="#">Archived</a>
          </li>
        </ul>
        <div className="mt-8">
          <Search />
        </div>
        <div className="flex justify-center pt-4 items-center mb-10">
          {/* <table className='w-full h-14 border rounded border-[#D4D4D4]'>
                        <tr className='h-12'>
                            <th className='border-1 rounded text-left bg-[#F6F6F6]'>Product name</th>
                            <th className='border-1 rounded text-left bg-[#F6F6F6]'>Price</th>
                            <th className='border-1 rounded text-left bg-[#F6F6F6]'>Stock</th>
                        </tr>
                        <tr className=''>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                    </table> */}
          <DataTable
            className="bg-gray"
            columns={columns}
            fixedHeader
            fixedHeaderScrollHeight="300px"
            data={data}
          />

          {/* <div className="w-2/5 h-2/5">
                        <Image src={caricatur} />
                    </div> */}
        </div>
      </div>
    </div>
  );
}
