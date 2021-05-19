import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllUsers} from "../_actions";
import Pagination from "../_helpers/pagination";
import Loader from '../_helpers/loader'

class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        };
    }
    componentDidMount() {
        this.props.getAllUsers();
    }

    dateConversion = (date) => {
        return date ? new Date(date).toLocaleString() : '';
    }

    getTableBody = (allUsers) => {
      if(allUsers.length === 0) return false;
      return allUsers.map((item,i) => {
          const {users, logInTime, logOutTime, ipAddress} = item
          return <tr key={i}>
              <td>{users.firstName} {users.lastName}</td>
              <td>{users.role}</td>
              <td>{users.username}</td>
              <td>{this.dateConversion(logInTime)}</td>
              <td>{this.dateConversion(logOutTime)}</td>
              <td>{ipAddress}</td>
          </tr>
      })
    }

    changePageNumber = (pageNumber) => {
        this.setState({currentPage: pageNumber});
    }

    render() {

        const {currentPage} = this.state;
        let {allUsers, loading} = this.props.allUsers;
        console.log(loading)
        const usersPerPage = 4;
        const indexOfLastAudit = currentPage * usersPerPage;
        const indexOfFirstAudit = indexOfLastAudit - usersPerPage;
        let displayRecord = [];
        let totalUsers = [];
        if (allUsers) {
            totalUsers = allUsers.length;
            displayRecord = allUsers.slice(indexOfFirstAudit, indexOfLastAudit);
        }

        return (
            <div>
                {loading && <Loader />}
                {!loading && allUsers.length > 0 &&
                <div className="panel panel-default">
                    <div className="panel-heading">All Users</div>
                    <div className="panel-body">
                        {/*{audits.loading && <em>Loading users...</em>}*/}
                        {/*{audits.error && (*/}
                        {/*    <span className="text-danger">ERROR: {audits.error}</span>*/}
                        {/*)}*/}
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>User Name</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>Ip</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {this.getTableBody(displayRecord)}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            itemsPerPage={usersPerPage}
                            totalRecords={totalUsers}
                            currentPage = {this.changePageNumber}
                        />
                    </div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {allUsers} = state
    return {allUsers}
};

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers())
});

const connectedAuditPage = connect(mapStateToProps, mapDispatchToProps)(AllUsers);
export {connectedAuditPage as AllUsers};
