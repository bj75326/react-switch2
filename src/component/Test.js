//Test.js

import React, {Component} from 'react';
import Switch from './Switch.js';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            switch_status_01: {checked: false, disabled: false},
            switch_status_02: {checked: true, disabled: false},
            switch_status_03: {checked: false, disabled: false},
            switch_status_04: {checked: true, disabled: false},
            switch_status_05: {checked: false, disabled: false},
            switch_status_06: {checked: true, disabled: false},
            switch_status_07: {checked: false, disabled: false},
            switch_status_08: {checked: true, disabled: false},
            switch_status_09: {checked: false, disabled: true}
        };
    }

    toggle(ident){
        if(this.state.hasOwnProperty(ident)){
            const toggledValue = !this.state[ident].checked;
            const disabled = this.state[ident].disabled;
            this.setState({[ident]: {checked: toggledValue, disabled: disabled}});
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
                    <h5 className="bin-cell-desc">基本用法</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_01.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_01.checked} onChange={this.toggle.bind(this)} ident={"switch_status_01"}/>
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
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_02.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_02.checked} onChange={this.toggle.bind(this)} ident={"switch_status_02"}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                    <h5 className="bin-cell-desc">设置大小</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_03.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_03.checked} onChange={this.toggle.bind(this)} ident={"switch_status_03"} size={"large"}/>
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
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_04.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_04.checked} onChange={this.toggle.bind(this)} ident={"switch_status_04"} size={"large"}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                    <h5 className="bin-cell-desc">设置文字</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_05.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_05.checked} onChange={this.toggle.bind(this)} ident={"switch_status_05"} checkedChild={"开"} unCheckChild={"关"}/>
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
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_06.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_06.checked} onChange={this.toggle.bind(this)} ident={"switch_status_06"} checkedChild={"ON"} unCheckChild={"OFF"} size={"large"}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                    <h5 className="bin-cell-desc">设置图标(Font Awesome)</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_07.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_07.checked} onChange={this.toggle.bind(this)} ident={"switch_status_07"} icon={true}/>
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
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_08.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_08.checked} onChange={this.toggle.bind(this)} ident={"switch_status_08"} icon={true}/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                    <h5 className="bin-cell-desc">设置禁用</h5>
                    <div className="bin-cell-wrapper">
                        <a className="bin-cell">
                            <div className="bin-cell-left">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                            <div className="bin-cell-content">
                                <div className="bin-cell-title">
                                    <span className="bin-cell-text">{'开关状态: ' + this.state.switch_status_09.checked}</span>
                                </div>
                                <div className="bin-cell-value">
                                    <Switch checked={this.state.switch_status_09.checked} onChange={this.toggle.bind(this)} ident={"switch_status_09"} disabled="true"/>
                                </div>
                            </div>
                            <div className="bin-cell-right">
                                <div className="bin-cell-btnGroup"></div>
                            </div>
                        </a>
                    </div>
                    <div className="bin-placeholder"></div>
                </div>
            </div>
        );
    }
}

export default Test;