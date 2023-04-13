import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: "",
      hasEmailError: false,
      content: "",
      hasContentError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = <span>emailを入力してください</span>;
    }

    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = <span>お問い合わせ内容を入力してください</span>;
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <span className="message">送信完了しました</span>;
    } else {
      contactForm = (
        <form onSubmit={this.handleSubmit}>
          <p>メールアドレス（必須）</p>
          <input value={this.state.email} onChange={this.handleEmailChange} />
          {emailErrorText}
          <p>お問い合わせ（必須）</p>
          <textarea
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          {contentErrorText}
          <input type="submit" value="送信" />
        </form>
      );
    }

    return <div className="container">{contactForm}</div>;
  }
}

export default ContactForm;
