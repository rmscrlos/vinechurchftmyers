import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Top = styled.div`
	background: #151515;
	padding: 2.5rem 0;
`;

const Item = styled.div`
	color: #fff;
	font-size: 0.8rem;
	width: 25%;

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

const Ul = styled.ul`
	display: flex;
	justify-content: space-around;

	${Item}:nth-child(1) {
		margin-left: 4rem;
	}

	${Item}:nth-child(2) {
		align-self: center;
	}

	${Item}:nth-child(3) {
		align-self: center;
		text-align: center;
	}

	@media screen and (max-width: 400px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${Item}:nth-child(1) {
			margin: 0 0 2rem 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		${Item}:nth-child(2) {
			margin: 0 0 2rem 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		${Item}:nth-child(3) {
			margin: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

const BottomBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: rgb(238, 238, 238);
	font-size: 0.6rem;
	padding: 0.9rem 0;
	background: #0e0e0e;
`;

function Footer() {
	return (
		<Container>
			<Top>
				<Ul>
					<Item>
						<h3 style={{ color: '#FFD900', marginBottom: '.6rem' }}>When & Where</h3>
						<h5>Hours</h5>
						<p>Sunday - 9:30AM - 11:00AM (EST)</p>
						<p>Sunday - 11:15AM - 12:30PM (EST)</p>
						<h5>Address</h5>
						<p>9250 College Parkway, Ft. Myers, FL 33919</p>
					</Item>
					<Item>
						<h3 style={{ color: '#FFD900', marginBottom: '.6rem' }}>Contact Us</h3>
						<p>adm@vinefortmyers.com</p>
					</Item>
					<Item>
						<h3 style={{ color: '#FFD900', marginBottom: '.6rem' }}>Follow us</h3>
						<div>
							<i style={{ fontSize: '1.2rem' }} className="fab fa-youtube"></i>
							<i style={{ fontSize: '1.3rem', margin: '0 2rem' }} className="fab fa-instagram"></i>
							<i style={{ fontSize: '1.2rem' }} className="fab fa-facebook-f"></i>
						</div>
					</Item>
				</Ul>
			</Top>
			<BottomBar>Vine Church Fort Myers 2021</BottomBar>
		</Container>
	);
}

export default Footer;
