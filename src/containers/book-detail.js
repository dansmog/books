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
                    <div>
                        <h1 style={{"fontSize": "24px"}}>{this.props.book.title}</h1>
                        <span style={{"fontSize": "18px"}}>Published By:{this.props.book.Publisher}</span>
                    </div>
                    

                    <div style={{"marginTop": "50px"}}>
                        <h5><b>By:</b> {this.props.book.author}</h5>
                        <h6>Release: {this.props.book.ReleaseDate}</h6>
                        <h6>Pages: {this.props.book.Pages}</h6>
                    </div>

                    <div>
                        <img src={this.props.book.image} alt="ebook-cover" className="img-responsive"/>
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