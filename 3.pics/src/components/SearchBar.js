import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'search here' };
    //"uncontrolled" synthax
    // onInputChange(event) {
    //     console.log(event.target.value);
    // } 
    // "uncontrolled" synthax: onChange={this.onInputChange}

    onFormSubmit(event) {
         // console.log(this.state.term);
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* we do not put a set of parentheses when we 
                        pass a callback function to an event hangler like onChange. */}

                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;