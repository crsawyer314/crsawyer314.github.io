import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Js1Markdown from './../assets/js1-1.md';
import remarkGfm from 'remark-gfm';

class Js1 extends Component {
    constructor(props) {
        super(props);

        this.state = {markdown: ''};
    }
    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(Js1Markdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
      }

    render() {
        const { markdown } = this.state;
        return (
            <div>
            <div id="main">
						<div class="inner">

							{/* <!-- Header --> */}
							<header id="header">
								<a href="index.html" class="logo"><strong>Catherine Sawyer</strong></a>
								<ul class="icons">
									<li><a href="https://www.linkedin.com/in/catherine-sawyer/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
									<li><a href="https://github.com/crsawyer314" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</header>

							{/* <!-- Content --> */}
								<section>
									<ReactMarkdown children={markdown}  remarkPlugins={[remarkGfm]} components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            // style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />

								</section>

						</div>
					</div>
            </div>);
        }
}
Js1.propTypes = {
   
}

Js1.defaultProps = {
   
}

export default Js1;