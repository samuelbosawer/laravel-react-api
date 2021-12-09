import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sacode extends Component
{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Sacode Data
                                    <Link to={'add-sacode'} className="btn btn-primary btn-sm float-end">Tambah Data</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sacode;