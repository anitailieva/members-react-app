import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [],
            loading: false
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://api.randomuser.med/=nat=US&results=12')
    }
    render() {
        const { members } = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>
                {members.map(
                    (data, i) =>
                        <Member key={i}
                                onClick={email => console.log(email)}
                                {...data} />
                )}
            </div>
        )
    }
}

export default MemberList