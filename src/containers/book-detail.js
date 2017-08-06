import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book){
          return ( 
           <div className="panel panel-default">
                <div className="panel-body">
                    <h1>Book Detail</h1>

                    <div>
                        <h6>No Books selected Yet!</h6>
                    </div>

                </div>
            </div> 
          )
        }
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <h1>Book Detail</h1>

                    <div>
                        <h6>Details for:</h6>
                        <p>{this.props.book.title}</p>
                    </div>

                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);