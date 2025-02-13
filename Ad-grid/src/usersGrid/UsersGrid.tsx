
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import {AgGridReact} from 'ag-grid-react'
import {useEffect, useState} from "react";
import {UserInterface} from "./user.interface";
import {ColDef} from 'ag-grid-community'

const UsersGrid = ()=>{
    const [rowData, setRowData] = useState<UserInterface[]>([])
    const [colDefs, setColDefs] = useState<ColDef<UserInterface>[]>([
        {field: 'id'},
        {field: 'name'},
        {field: 'company'},
        {field: 'mobile'},
    ])

    useEffect(()=>{
        fetch('http://localhost:3004/users')
            .then((res)=> res.json())
            .then((rowData) => setRowData(rowData))


    },[])

    return (
        <div className={"ag-theme-quartz"} style={{height:500}} >
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    )
}
export default UsersGrid;