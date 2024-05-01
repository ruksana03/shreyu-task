import { Button } from "react-bootstrap";
import Table from "../../../../components/Table";
import { useState } from "react";
import user1 from "../../../../assets/images/users/avatar-1.jpg"
import user2 from "../../../../assets/images/users/avatar-2.jpg"
import user3 from "../../../../assets/images/users/avatar-3.jpg"
import user4 from "../../../../assets/images/users/avatar-4.jpg"
import user5 from "../../../../assets/images/users/avatar-5.jpg"
import user6 from "../../../../assets/images/users/avatar-6.jpg"
import user7 from "../../../../assets/images/users/avatar-7.jpg"
import ShiftAndScheduleForm from "./ShiftAndScheduleForm";
import AddShiftModal from "./AddShiftModal";
import EditShiftModal from "./EditShiftModal";
import { Link } from "react-router-dom";



const ShiftAndSchedule = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const onCloseModal = () => setShowAddEditEvent(false);
    const onOpenModal = () => setShowAddEditEvent(true);

    const [showEditEventModal, setShowEditEventModal] = useState(false);
    const [isEditableEditModal, setIsEditableEditModal] = useState(false);
    const onEditCloseModal = () => setShowEditEventModal(false);
    const onEditOpenModal = () => setShowEditEventModal(true);

    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    const editEvent = () => {
        setIsEditableEditModal(false);
        onEditOpenModal();
    };

    // Sample data
    const timeData = [
        {
            image: user1,
            fri21: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            sat22: '',
            sun23: '',
            mon24: '',
            tue25: '',
            wed26: ''
        },
        {
            image: user2,
            fri21: '',
            sat22: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            sun23: '',
            mon24: '',
            tue25: '',
            wed26: ''
        },
        {
            image: user3,
            fri21: '',
            sat22: '',
            sun23: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            mon24: '',
            tue25: '',
            wed26: ''
        },
        {
            image: user4,
            fri21: '',
            sat22: '',
            sun23: '',
            mon24: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            tue25: '',
            wed26: ''
        },
        {
            image: user5,
            fri21: '',
            sat22: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            sun23: '',
            mon24: '',
            tue25: '',
            wed26: ''
        },
        {
            image: user6,
            fri21: '',
            sat22: '',
            sun23: '',
            mon24: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            tue25: '',
            wed26: ''
        },
        {
            image: user7,
            fri21: {
                time: '6:30 am - 9:30 pm (14 hrs 15 mins)',
                designation: 'Web Designer - SMARTHR'
            },
            sat22: '',
            sun23: '',
            mon24: '',
            tue25: '',
            wed26: ''
        },
    ];

    // Columns configuration for the table
    const columns = [
        {
            Header: "Scheduled Shift",
            accessor: "name",
            Cell: ({ row }) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={row.original.image} alt="User" style={{ width: 50, borderRadius: '50%', marginRight: 10 }} />
                    <span>{row.original.name}</span>
                </div>
            )
        },
        {
            Header: "Fri 21",
            accessor: "fri21",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }}></i></div>
            )
        },
        {
            Header: "Sat 22",
            accessor: "sat22",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }} ></i></div>
            )
        },
        {
            Header: "Sun 23",
            accessor: "sun23",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }}></i></div>
            )
        },
        {
            Header: "Mon 24",
            accessor: "mon24",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }}></i></div>
            )
        },
        {
            Header: "Tue 25",
            accessor: "tue25",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }}></i></div>
            )
        },
        {
            Header: "Wed 26",
            accessor: "wed26",
            sort: false,
            Cell: ({ cell }) => cell.value ? (
                <div onClick={() => editEvent(cell.value)} style={{ cursor: 'pointer', border: '2px dashed  green', padding: '6px' }}>
                    <span>{cell.value.time}</span>
                    <br />
                    <span>{cell.value.designation}</span>
                </div>
            ) : (
                <div onClick={createNewEvent} style={{ cursor: 'pointer' }}><i class="bi bi-plus-lg" style={{ border: '1px dashed  #A6A8A9', padding: '6px' }}></i></div>
            )
        },
    ];

    // Size per page list for pagination
    const sizePerPageList = [
        { text: "5", value: 5 },
        { text: "10", value: 10 },
        { text: "20", value: 20 },
        { text: "All", value: timeData.length }
    ];



    return (
        <div>
            <div className="flex justify-between mb-6 " style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="text-2xl font-bold"> Daily Scheduling</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Employees / Shift Scheduling</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        Assign Shifts
                    </Button>
                    <Link to={'/employee/Shift-List'}>
                        <Button
                            variant="primary"
                            className="mt-2 me-1"
                            id="btn-new-event"
                        // onClick={createNewEvent}
                        >
                            Shifts
                        </Button>
                    </Link>
                </div>
            </div>

            <div>
                <ShiftAndScheduleForm />
            </div>

            {showAddEditEvent && (
                <AddShiftModal
                    isOpen={showAddEditEvent}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                //   eventData={eventData}
                //   onUpdateEvent={onUpdateEvent}
                //   onRemoveEvent={onRemoveEvent}
                //   onAddEvent={onAddEvent}
                />
            )}

            {
                showEditEventModal && (
                    <EditShiftModal
                        isOpen={showEditEventModal}
                        onClose={onEditCloseModal}
                        isEditable={isEditableEditModal} />
                )
            }

            <Table
                columns={columns}
                data={timeData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
            />
        </div>
    );
};

export default ShiftAndSchedule;