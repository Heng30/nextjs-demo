'use client';

import React from 'react';

interface BtnProps {
    text: string,
    className?: string,
    code?: string,
}

function runCode(code?: string) {
    if (code) {
        let executeCode = new Function(code);
        executeCode();
    }
}

export default function ExecuteBtn(props: BtnProps) {
    return (
        <button className={props.className} onClick={() => runCode(props.code)}>
            {props.text}
        </button>
    );
};
