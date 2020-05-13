import React from 'react';

class SearchBar extends React.Component{
    state = {termo : ''};
    onChangeInput = (event) =>{
        this.setState({termo: event.target.value});
        console.log(this.state.termo);
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.termo);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label htmlFor="pesquisa">Pesquise aqui</label>
                        <input
                            type="text" 
                            name="pesquisa" 
                            value={this.state.termo}
                            onChange={this.onChangeInput}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;