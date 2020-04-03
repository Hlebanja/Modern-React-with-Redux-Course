import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    //"uncontrolled" synthax
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* we do not put a set of parentheses when we 
                        pass a callback function to an event hangler like onChange. */}
                        {/* "uncontrolled" synthax: onChange={this.onInputChange} */}
                        <input type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;