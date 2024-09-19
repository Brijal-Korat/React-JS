import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Users extends Component {
    constructor(props) {
        super();

        this.state = {
            studRecord: props.data
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {
                        this.state.studRecord.map((val, i) => {
                            return (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">GRID: {val.grid}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Name: {val.name}</h6>
                                            <p className="card-text">
                                                <strong>Email:</strong> {val.email} <br />
                                                <strong>Password:</strong> {val.password} <br />
                                                <strong>City:</strong> {val.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            // <div>
            //     {
            //         this.state.studRecord.map((val, i) => {
            //             return (
            //                 <div>
            //                     <h2>GRID :- {val.grid}</h2>
            //                     <h2>NAME :- {val.name}</h2>
            //                     <h2>EMAIL :- {val.email}</h2>
            //                     <h2>PASSWORD :- {val.pasword}</h2>
            //                     <h2>CITY :- {val.city}</h2>
            //                     <br />
            //                     <br />
            //                     <br />
            //                 </div>
            //             )
            //         })
            //     }
            // </div>
        )
    }
}
export default Users;