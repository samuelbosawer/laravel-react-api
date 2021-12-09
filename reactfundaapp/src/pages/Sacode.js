import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sacode extends Component
{
    state ={
        sacodes : [],
        loading : true,
    }

    async componentDidMount()
    {
        const res = await axios.get('http://127.0.0.1:8000/api/sacode');
        if(res.data.status === 200)
        {
            this.setState({
                sacodes: res.data.sacodes,
                loading: false,
            })
        }
    }

    render(){
        var sacode_HTMLTABLE = "";
        if(this.state.loading)
        {
            sacode_HTMLTABLE = <tr> <td colSpan="6"> <h3>Loading ....</h3> </td> </tr>
        }else{
            sacode_HTMLTABLE =  this.state.sacodes.map((item)=>{
                return(
                    <tr key={item.id} >
                        <td>{item.nama}</td>
                        <td>{item.topik}</td>
                        <td>{item.tanggal}</td>
                        <td>{item.kategori}</td>
                        <td>
                            <Link to={'edit-sacode/${item.id}'} className='btn btn-success btn-sm ml-3'> Ubah</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger mr-3">Hapus</button>
                        </td>
                    </tr>
                )
            })
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Sacode Data
                                    <Link to={'add-sacode'} className="btn btn-primary btn-sm float-end">Tambah Data</Link>
                                </h4>
                                <div className='card body'>
                                    <table className='table table-bordered table-striped'>
                                        <thead>
                                            <tr>
                                                <th>Nama Narasumber</th>
                                                <th>Topik</th>
                                                <th>Tanggal</th>
                                                <th>Kategori</th>
                                                <th colSpan="2">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sacode_HTMLTABLE}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sacode;