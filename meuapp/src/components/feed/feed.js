import React, {Component} from "react";

class Feed extends Component{


    render(){
        return(
            <div key={this.props.id}>
               <h3>{this.props.username}</h3>
               <h4>{this.props.curtida > 1 ? this.props.curtida + ' curtidas': this.props.curtida + ' curtida'}
               {this.props.comentario > 1 ? this.props.comentario + ' comentarios': this.props.comentario + ' comentario'}
               </h4>
                
            </div>
        )
    }
}
export default Feed;