import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const HomeContainer = styled.main`
	width: 75%;
	margin: auto;

	@media screen and (max-width: 1024px) {
		width: 85%;
	}
	@media screen and (max-width: 400px) {
		width: 93%;
	}
`;

const MessageContainer = styled.div`
	background: radial-gradient(circle, rgba(255, 255, 255, 0) 17%, rgba(0, 0, 0, 0.5192051820728291) 100%),
		url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80')
			no-repeat center/cover;

	border-radius: 1rem;
	margin: 2rem 0;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1rem;
	box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 34px -30px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h2`
	font-size: 2rem;
	color: #fff;
	@media screen and (max-width: 400px) {
		width: 50%;

		&.mobile-title {
			line-height: 2.5rem;
		}
	}
`;

const Button = styled.button`
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	border: 3px solid #fff;
	border-radius: 0.3rem;
	background: none;
	padding: 0.8rem 1.3rem;
	margin: 0.2rem 0.3rem;
	cursor: pointer;
	transition: 0.1s all ease-in-out;

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;

const ButtonContainer = styled.div`
	z-index: 2;
	@media screen and (max-width: 400px) {
		width: 100%;

		${Button}:nth-child(2) {
			width: 70%;
		}
	}
`;

const Section = styled.section`
	height: 100%;
	display: flex;
	margin: 2rem auto;
	justify-content: space-between;

	@media screen and (max-width: 400px) {
		flex-direction: column;
	}
`;

const JoinALifeGroup = styled.div`
	background: #151515;
	border-radius: 0.5rem;
	height: 23rem;
	width: 60%;
	display: flex;
	align-items: center;
	@media screen and (max-width: 400px) {
		width: 100%;
		height: 23rem;
		margin-bottom: 1rem;
	}
`;

const RightContainer = styled.div`
	width: 35%;
	height: inherit;
	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

const Courses = styled.div`
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	margin-bottom: 0.5rem;
	padding: 1rem;
`;

const FollowUs = styled.div`
	border-radius: 0.5rem;
	background: #fff;
	box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	padding: 1rem;
`;

const Para = styled.p`
	font-size: 0.9rem;
	color: #797979;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	padding: 0.8rem;
	border-bottom: 1.2px solid #a4a4a4;
`;

function Home() {
	return (
		<>
			<HomeContainer>
				<MessageContainer>
					<Title className="mobile-title">Graces Justifies</Title>
					<ButtonContainer>
						<Button style={{ background: '#FFD900', border: '3px solid #FFD900', color: '#000' }}>
							Watch Sermon
						</Button>
						<Button>Other Sermons</Button>
					</ButtonContainer>
				</MessageContainer>

				<Section>
					<JoinALifeGroup>
						<Title style={{ width: '40%', marginLeft: '2rem' }}>
							Join a <span style={{ color: '#FFD900' }}>LifeGroup</span>
						</Title>
					</JoinALifeGroup>
					<RightContainer>
						<Courses>
							<div style={{ paddingBottom: '.3rem', display: 'flex', flexDirection: 'column' }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<i style={{ fontSize: '1.2rem', marginRight: '.4rem' }} className="fas fa-book"></i>
									<h2>Courses</h2>
								</div>
								<Para>
									Learn more about God's word and be empowered to fulfill what He has called you to
									do!
								</Para>
								<Button
									style={{ background: '#FFD900', margin: '.2rem auto', width: '90%', color: '#000' }}
								>
									Sign Up
								</Button>
							</div>
						</Courses>
						<FollowUs>
							<Div>
								<h2>Follow Us</h2>
							</Div>
							<ul>
								<Div>
									<i
										style={{ fontSize: '1.2rem', marginRight: '.5rem' }}
										className="fab fa-youtube"
									></i>
									<h3>YouTube</h3>
								</Div>
								<Div>
									<i
										style={{ fontSize: '1.3rem', marginRight: '.5rem' }}
										className="fab fa-instagram"
									></i>
									<h3>Instagram</h3>
								</Div>
								<Div>
									<i
										style={{ fontSize: '1.2rem', marginRight: '.5rem' }}
										className="fab fa-facebook-f"
									></i>
									<h3>Facebook</h3>
								</Div>
							</ul>
						</FollowUs>
					</RightContainer>
				</Section>
			</HomeContainer>
		</>
	);
}

export default Home;
