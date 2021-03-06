import React from 'react';
import $ from 'jquery';
import SearchBox
  from './SearchBox.jsx';
import DashHeader
  from '../DashHeader.jsx';
import {
  InputField, SideMenu,
  Form, Copyright, DashboardContent
} from '../../../commonViews';
/**
 * SearchWiki Page
 * Enables a user search wikipedia
 *
 * @class SearchWiki
 *
 * @extends {React.Component}
 */
class SearchWiki extends React.Component {
  /**
   * Creates an instance of SearchWiki.
   *
   * @memberof SearchWiki
   */
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * handleChange()
   * This method changes component state based on
   * occuring onChange events
   *
   * @param {event} event - change event
   *
   * @return {void}
   */
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  /**
   * handleSearch()
   *
   * This method is called when a user
   * hits the search button
   *
   * @returns {jsx} jsx for search result
   *
   * @param {any} event
   *
   * @memberof SearchWiki
   */
  handleSearch(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=
        ${this.state.searchTerm}&format=json&callback=?`,
      dataType: 'json',
      cache: false,
      success: (data) => {
        const searchTitle = data[0];
        const resultTitle = data[1];
        const resultBody = data[2];
        let content = `<div><h5>${searchTitle}</h5><br>`;
        if (data[2].length < 3) {
          content += `<p><em>${resultTitle}</em><br>${resultBody}</p></div>`;
          $('.search-result').html(content);
        } else {
          for (let i = 1; i < 10; i += 1) {
            content += `<p><em>${resultTitle[i]}</em><br>
            ${resultBody[i]}</p><br>`;
          }
          content += '</div>';
          $('.search-result').html(content);
        }
      },
      error: () => {
        $('.search-result').html('An error was encountered, try again soon!');
      }
    });
  }
  /**
   * @returns {jsx} jsx for search component
   *
   * @memberof SearchWiki
   */
  render() {
    const toggleOff = 'fa fa-toggle-off side-icon';
    return (
      <div>
        <DashHeader active="search-wiki" />
        <main className="dashboard-ui">
          <div className="row">
            <aside className="col s12 m3 l2 hide-on-small-and-down">
              <SideMenu active="search-wiki" toggle={toggleOff} />
            </aside>
            <section className="col s12 m9 l10">
              <DashboardContent
                wrapperClass="dashboard-content dashboard-search"
                iconClass="fa fa-wikipedia-w"
                title="Search Wikipedia"
                subtitle="Search wikipepdia right from your dashboard"
              >
                <Form id="search-form">
                  <fieldset className="search-term">
                    <SearchBox
                      searchContext="search-wiki"
                      searchTerm={this.state.searchTerm}
                      handleChange={this.handleChange}
                      handleSearch={this.handleSearch}
                    />
                  </fieldset>
                </Form>
                <section className="search-result" />
              </DashboardContent>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default SearchWiki;
