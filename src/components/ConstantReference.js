import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './TypeDefReference.module.scss';

const ConstantReference = ({ constant }) => {
    const { name, value } = constant

    const isConstantArray = Array.isArray(value)
    console.log(isConstantArray)
    
    const lines = (!isConstantArray) ? 
                    Object.getOwnPropertyNames(value).map(key=>{
                        return `${key}: ${JSON.stringify(value[key])}`
                    }) : value.map(el => JSON.stringify(el)); 
   

    return (
        <div className = {styles.container}>
            <div className = {styles.name}>{name}</div>
            <div>{isConstantArray ? '[': '{'}</div>
                <div className= {styles.propertyContainer}>
                {lines.map((line,i)=> {
                    return <Markdown 
                        key={i}
                        source={line}
                    />
                })
                }
                </div>
            <div>{isConstantArray ? '}': ']'}</div>
        </div>
    )
}

//render differently based on whether it's an array or object

export default ConstantReference