import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Editsacode extends Component
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

    async componentDidMount(){
        const id_sc =this.props.match.params.id;
        const res = await axios.get(`http://127.0.0.1:8000/api/edit-sacode/${id_sc}`);
        if(res.data.status === 200)
        {
            this.setState({
                nama: res.data.sacode.nama,
                topik:  res.data.sacode.topik,
                tanggal:  res.data.sacode.tanggal,
                kategori:  res.data.sacode.kategori,
            })
        }
    }

    updateSacode = async (e) =>{
        e.preventDefault();
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = 'Mengubah';
        const id_sc =this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/update-sacode/${id_sc}`, this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = 'Ubah';
            alert('Data Berhasil diubah');

            
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ubah Data Narasumber
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Kembali</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                            <form onSubmit={this.updateSacode}>
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
                                        <option>-- Pilih --- </option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Web">Web</option>
                                        <option value="Desktop">Desktop</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                    </select>
                                </div>
                                <div className='form-group mb-3'>
                                     <button type='submit' id='updatebtn' className='btn btn-primary'> Ubah</button>
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

export default Editsacode;