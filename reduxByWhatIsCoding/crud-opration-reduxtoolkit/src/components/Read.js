import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();
    const { user, loading, searchData } = useSelector((state) => state.app);
    //or.. const allData = useSelector((state) => state.app);
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [radioData, setRadioData] = useState("");

    useEffect(() => {
        dispatch(showUser());
    }, []);

    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <div>
            {showPopup && (
                <CustomModal
                    id={id}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                />
            )}
            <h1>All Data</h1>
            <input
                className='form-check-input'
                name='gender'
                checked={radioData === ""}
                type='radio'
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label className='form-check-label'>All</label>

            <input
                className='form-check-input'
                name='gender'
                value='Male'
                checked={radioData === "Male"}
                type='radio'
                onChange={(e) => setRadioData(e.target.value)}


            />
            <label className='form-check-label'>Male</label>

            <input
                className='form-check-input'
                name='gender'
                value='Female'
                checked={radioData === "Female"}
                type='radio'
                onChange={(e) => setRadioData(e.target.value)}

            />
            <label className='form-check-label'>Female</label>
            <div>
                {user &&
                    user
                        .filter((ele) => {
                            if (searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name
                                    .toLowerCase()
                                    .includes(searchData.toLowerCase());
                            }
                        })
                        .filter((ele) => {
                            if (radioData === "Male") {
                                return ele.gender === radioData;
                            } else if (radioData === "Female") {
                                return ele.gender === radioData;
                            } else {
                                return ele;
                            }
                        })
                        .map((ele) => (
                            <div key={ele.id} className='card w-50 mx-auto'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Name:{ele.name}</h5>
                                    <h6 className='card-subtitle mb-2 text-muted'>
                                        Email:{ele.email}
                                    </h6>
                                    <h6 className='card-subtitle mb-2 text-muted'>
                                        Age: {ele.age}
                                    </h6>
                                    <h6 className='card-subtitle mb-2 text-muted'>
                                        Gender:{ele.gender}
                                    </h6>
                                    <button
                                        href='#'
                                        className='card-link'
                                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                                    >
                                        View
                                    </button>
                                    <Link to={`/edit/${ele.id}`} className='card-link'>
                                        Edit
                                    </Link>
                                    <Link
                                        onClick={() => dispatch(deleteUser(ele.id))}
                                        className='card-link'
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default Read;
