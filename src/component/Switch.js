//Switch.js

import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.css';

let noop = ()=>{};
let isTouched = false;
let startX, startY;
let timestamp;
let switchDistanceX, switchDistanceY;

class Switch extends Component{

    constructor(props){
        super(props);
        let checked = false;
        if('checked' in this.props){
            checked = !!this.props.checked;
        }else{
            checked = !!this.props.defaultChecked;
        }
        this.state = {checked};
    }

    static defaultProps = {
        prefixCls: 'bin-switch',
        className: '',
        defaultChecked: false,
        onChange: noop,
        checkedChild: null,
        unCheckedChild: null,
        ident: '',
        size: ''
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        checkedChild: PropTypes.any,
        unCheckedChild: PropTypes.any,
        ident: PropTypes.required,
        size: PropTypes.string
    };

    componentWillReceiveProps(nextProps){
        console.log('in componentWillReceiveProps');
        if('checked' in nextProps){
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('in shouldComponentUpdate');
        if(nextProps.checked === this.props.checked && nextState.checked === this.state.checked){
            return false;
        }
        return true;
    }

    handleClick(){
        this.props.onChange(this.props.ident);
        //this.setState({checked: !this.state.checked});
    }

    handleTouchStart(e){
        if(!isTouched){
            isTouched = true;
            console.log(e);
            e.preventDefault();
            let touch = e.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;
            timestamp = +new Date();
        }
    }

    handleTouchMove(e){
        if(isTouched){
            let touch = e.touches[0];
            let deltaX = touch.pageX - startX;
            let deltaY = touch.pageY - startY;
            let deltaTime = +new Date() - timestamp;

            if(deltaX >= 30 && !this.state.checked && deltaTime >= 300){
                this.setState({checked: true});
            }

            if(deltaX <= -30 && this.state.checked && deltaTime >= 300){
                this.setState({checked: false});
            }

            switchDistanceX = deltaX;
            switchDistanceY = deltaY;
        }
    }

    handleTouchEnd(){
        if(isTouched){
            isTouched = false;
            let deltaTime = +new Date() - timestamp;
            if(deltaTime < 300){
                if((Math.abs(switchDistanceX) > Math.abs(switchDistanceY)) && switchDistanceX > 0 && !this.state.checked){
                    this.props.onChange(this.props.ident);
                }else if((Math.abs(switchDistanceX) > Math.abs(switchDistanceY)) && switchDistanceX < 0 && this.state.checked){
                    this.props.onChange(this.props.ident);
                }
            }else{
                if(this.props.checked !== this.state.checked){
                    this.props.onChange(this.props.ident);
                }
            }
            startX = 0;
            startY = 0;
            timestamp = 0;
            switchDistanceX = 0;
            switchDistanceY = 0;
        }
    }

    render(){
        const {className, prefixCls, disabled, size} = this.props;
        const large = size === 'large' ? true : false;

        const checked = this.state.checked;
        const switchClassName = classnames({
            [styles[className]] : !!className,
            [styles[prefixCls]] : true,
            [styles[`${prefixCls}-checked`]] : checked,
            [styles[`${prefixCls}-disabled`]] : disabled,
            [styles[`${prefixCls}-large`]] : large
        });
        return (
            <span className={switchClassName} onClick={this.handleClick.bind(this)}
                onTouchStart={this.handleTouchStart.bind(this)}
                onTouchMove={this.handleTouchMove.bind(this)}
                onTouchEnd={this.handleTouchEnd.bind(this)}
            >
                <span className={styles[`${prefixCls}-inner`]}></span>
            </span>
        );
    }
}


export default Switch;
