import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { Unique } from '../../../functions/common'
import Table from '../components/Table'
import TBody from '../components/TBody'
import TD from '../components/TD'
import TH from '../components/TH'
import THead from '../components/THead'
import TR from '../components/TR'
export default function BasicTable(props) {
    const columns = useMemo(() => props.columns, [])
    const data = props.data
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data })
    // return (
    //     <div className='w-full'>
    //         <table className="w-full table-auto bg" {...getTableProps()}>
    //             <thead>
    //                 {
    //                     headerGroups.map(headerGroup => (
    //                         <tr {...headerGroup.getHeaderGroupProps()}>
    //                             {
    //                                 headerGroup.headers.map(column => (
    //                                     <th {...column.getHeaderProps()}>
    //                                         {column.render('Header')}
    //                                     </th>
    //                                 ))
    //                             }
    //                         </tr>
    //                     ))
    //                 }
    //             </thead>
    //             <tbody {...getTableBodyProps()}>
    //                 {
    //                     rows.map(row => {
    //                         prepareRow(row)
    //                         return (
    //                             <tr {...row.getRowProps()}>
    //                                 {
    //                                     row.cells.map(cell => {
    //                                         return (
    //                                             <td {...cell.getCellProps()}>
    //                                                 {
    //                                                     cell.render('Cell')
    //                                                 }
    //                                             </td>
    //                                         )

    //                                     })
    //                                 }
    //                             </tr>
    //                         )
    //                     })
    //                 }

    //             </tbody>
    //         </table>
    //     </div>
    // )

    return (
        <Table tableProps={getTableProps()} className="rounded w-full">
            <THead key={Unique()} className="text-gray-600">
                {
                    headerGroups.map((headerGroup) => (
                        <TR key={Unique()} rowProps={headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <TH key={Unique()} headerProps={column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </TH>
                                ))
                            }
                        </TR>
                    ))
                }
            </THead>
            <TBody bodyProps={getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <TR key={Unique()} rowProps={row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <TD key={Unique()} cellProps={cell.getCellProps()}>
                                                {
                                                    cell.render('Cell')
                                                }
                                            </TD>
                                        )

                                    })
                                }
                            </TR>
                        )
                    })
                }
            </TBody>
        </Table>
    )


}
