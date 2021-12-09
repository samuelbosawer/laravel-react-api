import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sacode extends Component
{
    state ={
        nama: '',
        topik: '',
        tanggal: '',
        kategori: '',
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
            console.log(res.data.message);
            this.setState({
                nama: '',
                topik: '',
                tanggal: '',
                kategori: '',
            })
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
                                    </div>  
                                    <div className='form-group mb-3'>
                                        <label>Topik</label>
                                        <input className='form-control' type="text" name="topik" onChange={this.handleInput} value={this.state.topik} />
                                    </div>  
                                    <div className='form-group mb-3'>
                                        <label>Tanggal</label>
                                        <input className='form-control' type="date" name="tanggal" onChange={this.handleInput} value={this.state.tanggal}/>
                                    </div>  
                                <div className="mb-3">
                                    <label>Kategori</label>
                                    <select className="form-control" name="kategori"  onChange={this.handleInput} value={this.state.kategori}>
                                        <option  selected value="">-- Pilih --- </option>
                                        <option  selected value="Mobile App">Mobile App</option>
                                        <option value="Web">Web</option>
                                        <option value="Desktop">Desktop</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                    </select>
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