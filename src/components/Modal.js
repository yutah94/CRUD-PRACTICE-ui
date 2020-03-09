import React, { Component } from 'react';
import '../StyleSheets/Modal.css';

export class Modal extends Component {
    render() {
        if(this.props.show){
            return null;
        }
        return (
            <div>
                <div className="modal-main"> {this.props.children}</div>
                    <div>
                                <button
                                    onClick={e => {
                                    this.props.onClose(e);
                                    }}
                                >
                                    Close
                                </button>
                    </div>
            </div>
        ) 
    }
}

export default Modal;