import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/index"
import { getDetails } from "../api";


function Home() {
    const [currentPage, setCurrentPage] = useState(0);

    const dispatch = useDispatch();
    const { magaze } = bindActionCreators(actionCreators, dispatch);
    const account = useSelector((state) => state.account);


    function goToNextPage() {
        setCurrentPage((page) => page + 1);

    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    useEffect(() => {
        getDetails(currentPage).then(function (response) {
            magaze(response.data.hits)
        })
    }, [currentPage])

    return (
        <div>
            <table>
                <tr>
                    <th>pubName</th>
                    <th>AgeRat</th>
                    <th>magName</th>
                    <th>Con</th>
                </tr>
                {account.map((item, index) =>
                    <tr key={index}>
                        <td>{item.pubName}</td>
                        <td>{item.AgeRat}</td>
                        <td>{item.magName}</td>
                        <td>{item.Con}</td>
                    </tr>
                )}
            </table><br />
            <div>
                <button style={{ float: 'left', marginLeft: 10 }}
                    onClick={(e) => goToPreviousPage(e)}
                >Prev</button>
                <span>you are currently viewing Page {currentPage + 1}  </span>
                <button style={{ float: 'Right', marginRight: 10 }}
                    onClick={(e) => goToNextPage(e)}
                >Next</button>
            </div>

        </div>
    )
}

export default Home
