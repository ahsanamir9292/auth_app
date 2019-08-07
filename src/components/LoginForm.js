import {Text} from 'react-native'
import React ,{Component} from 'react';
import{Button, Card, CardSection, Input,Spinner} from './common';
import axios from 'axios';








class LoginForm extends Component {
	state = { email: '', password:'', loading: false};
	login = () =>{
		const {email,password} = this.state;
		this.setState({loading: true});
		axios.post('https://reactyulitest.herokuapp.com/apis/users/register.json', { user: {
			    email: email,
			    password: password
			  }})
			  .then(function (response) {
			  	 alert(response.data.status);
			  	 alert('abcxc')
			  	 self.setState({loading: false});
			  })
			  .catch(function (error) {
			    console.log(error);
 				 });
		
		// fetch('https://reactyulitest.herokuapp.com/apis/users/register.json',{
		// 	method:'post',
		// 	header:{
		// 		'Accept':'application/json',
		// 		'Content-type': 'application/json'
		// 		},
		// 		body:JSON.stringify({"user":{
		// 			email: email,
		// 			password: password
		// 		}})
		// 	})
		// .then((responseJson)=>{
		// 	alert(responseJson.response);
		// })
		// .catch((error)=>{
		// 	console.error(error);
		// });
		}

		renderButton() {
			if(this.state.loading) {
				return <Spinner size="small" />;
			}

			return (
					<Button 
					onPress={this.login.bind(this)}>
						Log in
					</Button>
				);
		}
	
	render(){
		return (
			<Card>
				<CardSection>
				<Input
				placeholder="user@gmail.com"
				label="Email"
				value={this.state.email}
				onChangeText={email => this.setState({email})}
				 />
				</CardSection>

				<CardSection>
				<Input
				secureTextEntry
				placeholder="password"
				label="Password"
				value={this.state.password}
				onChangeText={password => this.setState({password})}
				 />
				</CardSection>

				<Text style={styles.errorTextStyle}>
				
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
				);
	}
}

const styles = {
	errorTextStyle:{
		fontSize: 20,
		alignSelf: 'center',
		color:'red'
	}
}

export default LoginForm;