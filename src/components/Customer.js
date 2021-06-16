import React from 'react'

//React의 Component형태로 class 정의 상속받아서
class Customer extends React.Component {
    //React의 component는 라이브러리이자 클래스
    //render는 항상 수행되어서, Component가 그려지는 내용이 여기 담김
    render() {
        return (
            <div>
                <CustomerProfile
                    id = {this.props.id}
                    image = {this.props.image}
                    name = {this.props.name}
                />
                <CustomerInfo
                    birthday = {this.props.birthday}
                    gender = {this.props.gender}
                    job = {this.props.job}
                />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt = "profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;