import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import styled from 'styled-components';
import disableScroll from 'disable-scroll';

// connect from react-redux - allows us to connect store to component
import { connect } from 'react-redux';

// action creator
import { toggle } from './actions/index';

const Overlay = styled.div`
	display: none;

	&.is-active {
		display: block;
		background: rgba(41, 41, 41, 0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 3;
		cursor: pointer;
		-webkit-transition: 0.8s ease-in-out;
		-moz-transition: 0.8s ease-in-out;
		-o-transition: 0.8s ease-in-out;
		transition: 0.8s ease-in-out;
	}
`;

function App({ navToggle, toggle }) {
	return (
		<div className="App">
			{navToggle ? disableScroll.on() : disableScroll.off()}
			<Overlay className={`${navToggle ? 'is-active' : ''}`} onClick={() => toggle(navToggle)} />

			<Navbar />

			<Switch>
				<Route exact path="/enjoy" />
				<Route exact path="/giving" />
				<Route exact path="/sermons" />
				<Route exact path="/about" />
				<Route path="/" component={Home} />
			</Switch>

			<Footer />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		navToggle: state.navToggle
	};
};

const mapDispatchToProps = { toggle };

export default connect(mapStateToProps, mapDispatchToProps)(App);
