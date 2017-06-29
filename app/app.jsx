import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';


const Component = () => {
    const codeString = `\
    import React from 'react'
    import ReactDOM from 'react-dom'
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import { docco } from 'react-syntax-highlighter/dist/styles';


    const Component = () => {
        const codeString = '(num) => num + 1';
            return (
                <SyntaxHighlighter language='javascript' style={docco}>
                   {codeString}
                </SyntaxHighlighter> 
    )
    }


    ReactDOM.render(
        <div>
            <h1>Boilerplate React app + webpack + babel configs</h1>
            <Component/>
         </div>
                    ,
        document.getElementById('app')
    )
    `
    return (
        <SyntaxHighlighter language='javascript' showLineNumbers='true' style={docco}>
            {codeString}
        </SyntaxHighlighter> 
    )
}


ReactDOM.render(
    <div>
        <h1>Boilerplate React app + webpack + babel configs</h1>
        <Component/>
    </div>
    ,
    document.getElementById('app')
) 

