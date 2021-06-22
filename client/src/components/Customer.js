import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


//React의 Component형태로 class 정의 상속받아서
class Customer extends React.Component {
    //React의 component는 라이브러리이자 클래스
    //render는 항상 수행되어서, Component가 그려지는 내용이 여기 담김
    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.id}
                </TableCell>
                <TableCell>
                    <img src={this.props.image} alt="profile" />
                </TableCell>
                <TableCell>
                    {this.props.name}
                </TableCell>
                <TableCell>
                    {this.props.birthday}
                </TableCell>
                <TableCell>
                    {this.props.gender}
                </TableCell>
                <TableCell>
                    {this.props.job}
                </TableCell>
            </TableRow>
        )
    }
}

// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt = "profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

export default Customer;