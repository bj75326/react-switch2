//Test.js

import React, {Component} from 'react';
import Switch from './Switch.js';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switch_status_01: false,
            switch_status_02: true
        };
    }

    toggle(ident){
        if(this.state.hasOwnProperty(ident)){
            const toggledValue = !this.state[ident];
            this.setState({[ident]: toggledValue});
        }
    }

    render() {
        return (
            <div className="page">
                <div className="subtitle">
                    <div className="page-back"></div>
                    <div className="page-title">React-Switch</div>
                    <div className="extension"></div>
                    <div className="desc">
                        <p>此例请用移动端查看</p>
                    </div>
                </div>
                <div className="viewport">
                    <h5 className="bin-cell-desc">基本用法，状态切换触发事件</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_01}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_01} onChange={this.toggle.bind(this)} ident={"switch_status_01"}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_02}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_02} onChange={this.toggle.bind(this)} ident={"switch_status_02"}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;