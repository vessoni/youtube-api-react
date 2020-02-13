import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { withRouter } from 'react-router';

import { Form,
  SubmitButton,
  BannerForm, 
  MainHeader,
} from './styles'

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  }

  componentDidMount(){
    const { searchTerm } = this.props;

    //this.setState({searchTerm: searchTerm });
  }

  handleChange = (event) => {
     this.setState({ searchTerm: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm) {
      this.props.history.push(`/search/${searchTerm}`);
    } else {
      this.props.history.push(`/`);
    }
    
  }

  render(){

    const { searchTerm } = this.state;
    return(

      <MainHeader>
     
            <BannerForm>
      <Form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Seach Video"
          value={searchTerm}
          onChange={this.handleChange}
        />

        <SubmitButton>
          <FaSearch color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </BannerForm>

    </MainHeader>


    )
  }
}

export default withRouter(SearchBar);