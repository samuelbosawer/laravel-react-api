import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Sacode extends Component
{
    state ={
        nama: '',
        topik: '',
        tanggal: '',
        kategori: '',
        error_list: [],
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    saveSacode = async (e) =>{
        e.preventDefault();
        // console.log(this.state);
        const res = await axios.post('http://127.0.0.1:8000/api/add-sacode',this.state);
        if(res.data.status === 200)
        {
            this.setState({
                nama: '',
                topik: '',
                tanggal: '',
                kategori: '',
            })
            this.setState({
                error_list:'',
            });
            alert('Data Berhasil ditambahkan');
        }
        else
        {
           this.setState({
               error_list: res.data.validate_err,
           });

        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Tambah Data Narasumber
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Kembali</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                            <form onSubmit={this.saveSacode}>
                                    <div className='form-group mb-3'>
                                        <label>Nama Narasumber</label>
                                        <input className='form-control' type="text" name="nama" onChange={this.handleInput} value={this.state.nama}  />
                                        <span className='text-danger'>{this.state.error_list.nama}</span>
                                    </div>  
                                    <div className='form-group mb-3'>
                                        <label>Topik</label>
                                        <input className='form-control' type="text" name="topik" onChange={this.handleInput} value={this.state.topik} />
                                        <span className='text-danger text-small'>{this.state.error_list.topik}</span>
                                    </div>  
                                    <div className='form-group mb-3'>
                                        <label>Tanggal</label>
                                        <input className='form-control' type="date" name="tanggal" onChange={this.handleInput} value={this.state.tanggal}/>
                                        <span className='text-danger text-small'>{this.state.error_list.tanggal}</span>
                                    </div>  
                                <div className="mb-3">
                                    <label>Kategori</label>
                                    <select className="form-control" name="kategori"  onChange={this.handleInput} value={this.state.kategori}>
                                        <option   value="">-- Pilih --- </option>
                                        <option   value="Mobile App">Mobile App</option>
                                        <option value="Web">Web</option>
                                        <option value="Desktop">Desktop</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                    </select>
                                        <span className='text-danger text-small'>{this.state.error_list.kategori}</span>
                                </div>
                                <div className='form-group mb-3'>
                                     <button type='submit' className='btn btn-primary'> Simpan</button>
                                    </div> 
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sacode;