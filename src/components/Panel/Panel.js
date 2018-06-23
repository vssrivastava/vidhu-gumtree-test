import React, { Component } from 'react';

import TitleBar from '../TitleBar/TitleBar';
import ItemInformation from '../ItemInformation/ItemInformation';
import NavBar from '../NavBar/NavBar';

import './Panel.css';

/**
 * Main Panel component
 */
class Panel extends Component {
  initialState = {
    selected: 0,
    collapsed: false
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.loadContent = this.loadContent.bind(this);
    this.loadPrev = this.loadPrev.bind(this);
    this.loadNext = this.loadNext.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  /**
   * Load the content from the content JSON data by setting the index of the content array in state
   * @param {Number} index 
   */
  loadContent(index) {
    this.setState({
      selected: index
    });
  }
  /**
   * Load previous content on click of previous nav item
   * @param {Number} index 
   */
  loadPrev(index) {
    if (index !== 0) {
      this.loadContent(index-1);
    }
  }
  /**
   * Load next content on click of next nav item
   * @param {Number} index 
   */
  loadNext(index) {
    if (index !== this.props.data.content.length -1) {
      this.loadContent(index+1);
    }
  }
  /**
   * Toggle (Expand/Collapse) the main panel on click 
   */
  togglePanel() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const selected = this.state.selected;
    const collapsed = this.state.collapsed;
    const content = this.props.data.content;
    return (
      <div className={`panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <TitleBar title={this.props.data.title} collapsed={collapsed} action={this.togglePanel} />
        <div className='info-section'>
          <ItemInformation content={content[selected]} />
          <NavBar
            collapsed={collapsed}
            prev={selected > 0 ? content[selected-1].title : null}
            prevAction={() => this.loadPrev(selected)}
            next={selected < content.length-1 ? content[selected+1].title : null}
            nextAction={() => this.loadNext(selected)}
          />
        </div>
      </div>
    );
  }
}

export default Panel;
