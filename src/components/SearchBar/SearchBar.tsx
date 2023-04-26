import React, { Component } from "react";
import { FormPorp, FormState } from "../interfaces/interfaces";
class SearchBar extends Component<FormPorp, FormState> {
  state = {
    inputValue: "",
  };

  onInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  onSubmitSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.props.onSubmitForm(inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className='SearchBar'>
        <form id='form' onSubmit={this.onSubmitSearchForm} className='SearchForm'>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>
          <input
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            name='inputValue'
            value={inputValue}
            id='input'
            onChange={this.onInputValue}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
