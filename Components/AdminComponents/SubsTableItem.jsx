import React from 'react'

const SubsTableItem = ({ email, mongoId, date, handleDelete }) => {
    const emailDate = new Date(date);
    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {email ? email : "No Email Provided"}
            </th>
            <td className='px-6 py-4 hidden sm:block'>
                {emailDate.toDateString()}
            </td>
            <td className='px-10 py-4' >
                <span className='cursor-pointer hover:text-red-900 hover:bg-slate-200  hover:rounded-full hover' onClick={() => handleDelete(mongoId)}>X</span>
            </td>
        </tr>
    )
}

export default SubsTableItem