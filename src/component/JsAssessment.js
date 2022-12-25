import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';

class JsAssessment extends Component {
    constructor(props) {
        super(props);

        this.state = {markdown: ''};
    }
    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(this.props.mdFile).then(res => res.text()).then(text => this.setState({ markdown: text }));
      }

    render() {
        const { markdown } = this.state;
        return (
            <div>
            <div id="main">
						<div className="inner">

							{/* <!-- Header --> */}
							<header id="header">
								<a href="index.html" className="logo"><strong>Catherine Sawyer</strong></a>
								<ul className="icons">
									<li><a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
									<li><a href="https://github.com/crsawyer314" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								</ul>
							</header>

							{/* <!-- Content --> */}
								<section>
                  
										<button><a href={this.props.prev}>Prev - {this.props.prevTitle}</a></button>
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

<br></br>
										<button><a href={this.props.prev}>Prev - {this.props.prevTitle}</a></button>
								</section>

						</div>
					</div>
            </div>);
        }
}
JsAssessment.propTypes = {
  markdown: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,
  prevTitle: PropTypes.string.isRequired,
}

JsAssessment.defaultProps = {
  markdown: `# My Markdown File

  This is an example markdown file.`,
}

export default JsAssessment;