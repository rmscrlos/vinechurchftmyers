import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// connect from react-redux - allows us to connect store to component
import { connect } from 'react-redux';

// action creator
import { toggle } from '../actions/index';

const NavContainer = styled.nav`
	height: 13vh;
	background: #fff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);

	@media screen and (max-width: 1024px) {
		height: 10vh;
		justify-content: space-between;
		padding: 0 4rem;
		position: relative;
		z-index: 4;
	}

	@media screen and (max-width: 400px) {
		justify-content: space-between;
		padding: 0 1rem;
	}
`;

const Ul = styled.ul`
	height: inherit;
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	width: 35%;

	@media screen and (max-width: 1024px) {
		background: #ffff;
		height: 100%;
		width: 35%;
		flex-direction: column;
		justify-content: start;
		align-items: flex-start;
		position: fixed;
		top: 8.5rem;
		right: -1000px;
		box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);

		&.is-active {
			-webkit-transition: all 0.5s ease-in-out;
			-moz-transition: all 0.5s ease-in-out;
			-o-transition: all 0.5s ease-in-out;
			transition: all 0.5s ease-in-out;
			right: 0;
		}
	}
	@media screen and (max-width: 780px) {
		top: 6.3rem;

		&.is-active {
			width: 40%;
			right: 0;
		}
	}

	@media screen and (max-width: 400px) {
		top: 5rem;

		&.is-active {
			width: 100%;
			right: 0;
			box-shadow: none;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
		}
	}
`;

const NavItems = styled.li`
	padding: 0.4rem 0.6rem;
	border-radius: 10rem;
	transition: all 0.1s ease-in-out;
	&:hover {
		background: #ffd900;
		border-radius: 4px;
	}

	@media screen and (max-width: 1024px) {
		border-left: 2px solid #ffd900;
		border-radius: 0;
	}
`;

const Links = styled(Link)`
	color: #000;
	@media screen and (max-width: 1024px) {
		margin: 0 auto;
		padding: 1rem;
		border-radius: 0;
		width: 95%;
		border-bottom: 1px solid #bfbfbf;
	}
`;

const SocialMedia = styled.div`
	display: flex;
	width: 4%;
	justify-content: space-between;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const Bar = styled.span`
	display: block;
	position: absolute;
	height: 3px;
	width: 100%;
	background: #000;
	border-radius: 9px;
	opacity: 1;
	left: 0;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.25s ease-in-out;
	-moz-transition: 0.25s ease-in-out;
	-o-transition: 0.25s ease-in-out;
	transition: 0.25s ease-in-out;

	@media screen and (max-width: 400px) {
		width: 80%;
		left: 0.22rem;
	}
`;

const NavbarToggle = styled.div`
	display: none;

	@media screen and (max-width: 1024px) {
		display: block;

		width: 40px;
		height: 35px;
		position: relative;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;

		${Bar}:nth-child(1) {
			top: 0px;
		}
		${Bar}:nth-child(2) {
			top: 14px;
		}
		${Bar}:nth-child(3) {
			top: 28px;
		}

		&.is-active ${Bar}:nth-child(1) {
			top: 18px;
			-webkit-transform: rotate(135deg);
			-moz-transform: rotate(135deg);
			-o-transform: rotate(135deg);
			transform: rotate(135deg);
		}

		&.is-active ${Bar}:nth-child(2) {
			opacity: 0;
			left: -60px;
		}

		&.is-active ${Bar}:nth-child(3) {
			top: 18px;
			-webkit-transform: rotate(-135deg);
			-moz-transform: rotate(-135deg);
			-o-transform: rotate(-135deg);
			transform: rotate(-135deg);
		}
	}

	@media screen and (max-width: 400px) {
		${Bar}:nth-child(1) {
			top: 0px;
		}
		${Bar}:nth-child(2) {
			top: 12px;
		}
		${Bar}:nth-child(3) {
			top: 24px;
		}

		&.is-active ${Bar}:nth-child(1) {
			top: 14px;
			-webkit-transform: rotate(135deg);
			-moz-transform: rotate(135deg);
			-o-transform: rotate(135deg);
			transform: rotate(135deg);
		}

		&.is-active ${Bar}:nth-child(2) {
			opacity: 0;
			left: -60px;
		}

		&.is-active ${Bar}:nth-child(3) {
			top: 14px;
			-webkit-transform: rotate(-135deg);
			-moz-transform: rotate(-135deg);
			-o-transform: rotate(-135deg);
			transform: rotate(-135deg);
		}
	}
`;

const Logo = styled.h1`
	text-transform: uppercase;

	@media screen and (max-width: 1024px) {
		transition: 0.5s ease-in-out;
		font-size: 1.8rem;
	}

	@media screen and (max-width: 400px) {
		font-size: 1.2rem;
	}
`;

function Navbar({ navToggle, toggle }) {
	return (
		<NavContainer>
			<Logo>Vine Church</Logo>
			<Ul className={`${navToggle ? 'is-active' : ''}`}>
				<Links to="/" onClick={() => toggle(navToggle)}>
					<NavItems>Home</NavItems>
				</Links>
				<Links to="/about" onClick={() => toggle(navToggle)}>
					<NavItems>About</NavItems>
				</Links>
				<Links to="/sermons" onClick={() => toggle(navToggle)}>
					<NavItems>Sermons</NavItems>
				</Links>
				<Links to="/giving" onClick={() => toggle(navToggle)}>
					<NavItems>Giving</NavItems>
				</Links>
				<Links to="/enjoy" onClick={() => toggle(navToggle)}>
					<NavItems>Enjoy</NavItems>
				</Links>
			</Ul>
			<SocialMedia>
				<i style={{ fontSize: '1.3rem' }} className="fab fa-instagram"></i>
				<i style={{ fontSize: '1.2rem' }} className="fab fa-facebook-f"></i>
			</SocialMedia>
			<NavbarToggle className={`${navToggle ? 'is-active' : ''}`} onClick={() => toggle(navToggle)}>
				<Bar />
				<Bar />
				<Bar />
			</NavbarToggle>
		</NavContainer>
	);
}

const mapStateToProps = state => {
	return {
		navToggle: state.navToggle
	};
};

const mapDispatchToProps = { toggle };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
