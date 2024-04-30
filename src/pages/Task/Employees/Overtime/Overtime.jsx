import { Button, Card, Dropdown } from "react-bootstrap";
import user1 from "../../../../assets/images/users/avatar-1.jpg"
// import user2 from "../../../../assets/images/users/avatar-2.jpg"
// import user3 from "../../../../assets/images/users/avatar-3.jpg"
// import user4 from "../../../../assets/images/users/avatar-4.jpg"
// import user5 from "../../../../assets/images/users/avatar-5.jpg"
// import user6 from "../../../../assets/images/users/avatar-6.jpg"
// import user7 from "../../../../assets/images/users/avatar-7.jpg"
// import user8 from "../../../../assets/images/users/avatar-8.jpg"
// import user9 from "../../../../assets/images/users/avatar-9.jpg"
import user10 from "../../../../assets/images/users/avatar-10.jpg"
import { useState } from "react";
import Table from "../../../../components/Table";
import OverTimeModal from "./OverTimeModal";

const Overtime = () => {
    const [showAddEditEvent, setShowAddEditEvent] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const onCloseModal = () => setShowAddEditEvent(false);
    const onOpenModal = () => setShowAddEditEvent(true);

    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    // Sample data
    const designationData = [
        {
            id: 1,
            image: user1,
            name: 'John Doe Web Designer',
            date: '1 Jan 2023',
            otHours: '20',
            otType: 'Normal day OT 1.5x',

            description: 'Lorem ipsum dolor .',
            status: 'New',
            approvedBy: {
                photo: user10,
                userName: 'Richard Miles'
            }
        },
    ];

    // Columns configuration for the table
    const columns = [
        {
            Header: "Name",
            accessor: "name",
            Cell: ({ row }) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={row.original.image} alt="User" style={{ width: 50, borderRadius: '50%', marginRight: 10 }} />
                    <span>{row.original.name}</span>
                </div>
            )
        },
        {
            Header: "OT Date ",
            accessor: "date",
            sort: true,
        },
        {
            Header: "OT Hours",
            accessor: "otHours",
            sort: true,
        },
        {
            Header: "OT Type ",
            accessor: "otType",
            sort: true,
        },
        {
            Header: "Description ",
            accessor: "description",
            sort: true,
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ value }) => (
                <div style={{ display: "flex", alignItems: "center", border: '1px solid #A8A8A8', borderRadius: '12px', paddingLeft: '10px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#9368E9", marginRight: 5, border: '1px solid #9368E9' }} />
                    <span>{value}</span>
                </div>
            )
        },
        {
            Header: "Approved By",
            accessor: "approvedBy",
            Cell: ({ value }) => (
                <div>
                    <img src={value.photo} alt="Approver" style={{ width: 30, borderRadius: '50%', marginRight: 5 }} />
                    {value.userName}
                </div>
            )
        },

        {
            Header: "Action",
            accessor: "",
            sort: false,
            Cell: () => (

                <Dropdown >
                    <Dropdown.Toggle
                        as="a"
                        className="cursor-pointer text-muted text-center arrow-none"
                    >
                        <i className="uil uil-ellipsis-v fs-14"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-edit-alt me-2"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger">
                            <i className="uil uil-trash me-2"></i>Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            )
        }
    ];

    // Size per page list for pagination
    const sizePerPageList = [
        { text: "5", value: 5 },
        { text: "10", value: 10 },
        { text: "20", value: 20 },
        { text: "All", value: designationData.length }
    ];

    return (
        <div>
            <div className="flex justify-between mb-6 " style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="text-2xl font-bold"> Overtime</h1>
                    <p className="mt-1 font-bold text-[#4D5154] ">Dashboard / Overtime</p>
                </div>
                <div>
                    <Button
                        variant="primary"
                        className="mt-2 me-1"
                        id="btn-new-event"
                        onClick={createNewEvent}
                    >
                        <i className="bi bi-plus-lg"></i>
                        Add Overtime
                    </Button>
                </div>
            </div>

            {showAddEditEvent && (
                <OverTimeModal
                    isOpen={showAddEditEvent}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                //   eventData={eventData}
                //   onUpdateEvent={onUpdateEvent}
                //   onRemoveEvent={onRemoveEvent}
                //   onAddEvent={onAddEvent}
                />
            )}

            <div style={{display:'flex', justifyContent:'space-between', gap:'4px'}}>
                <Card>
                    <div className="card-pricing p-2" style={{width:'380px', textAlign:'center'}} >
                        <h4>Overtime Employee</h4>
                        <h3>12 <span className="fs-14">this month</span></h3>
                    </div>
                </Card>
                <Card>
                    <div className="card-pricing p-2" style={{width:'380px', textAlign:'center'}} >
                        <h4>Overtime Hours</h4>
                        <h3>118 <span className="fs-14">this month</span></h3>
                    </div>
                </Card>
                <Card>
                    <div className="card-pricing p-2" style={{width:'380px', textAlign:'center'}}>
                        <h4>Pending Request</h4>
                        <h3>23</h3>
                    </div>
                </Card>
                <Card>
                    <div className="card-pricing p-2" style={{width:'380px', textAlign:'center'}}>
                        <h4>Rejected</h4>
                        <h3>5</h3>
                    </div>
                </Card>


            </div>

            <Table
                columns={columns}
                data={designationData}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
            />
        </div>
    );
};

export default Overtime;