import { useState } from "react";
import "./form.css"

const FormComponent = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        totalPeople: '',
        message: '',
    });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Show the popup after submitting the form
        setIsPopupVisible(true);


    };

    // Close the popup
    const closePopup = () => {
        setFormData({
            name: '',
            email: '',
            date: '',
            totalPeople: '',
            message: '',
        });
        setIsPopupVisible(false);
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className="py-4 lg:flex md:flex flex-col gap-8" >
                <div className="lg:flex md:flex gap-12  ">

                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-2 w-full my-4 lg:m-0 md:m-0  flex-1 bg-transparent border border-bg-white* text-white placeholder-white"
                        type="text"
                        placeholder="Your Name *" />


                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 w-full  my-4 lg:m-0 md:m-0 flex-1 bg-transparent placeholder-white border border-bg-white* text-white"
                        type="text"
                        placeholder="Your Email" />

                </div>
                <div className=" lg:flex md:flex gap-12 ">


                    <input
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder={formData.date ? '' : 'Reservation Date'}
                        min={new Date().toISOString().split('T')[0]}
                        className={`${formData.date ? 'dateShow' : 'dateHide'} p-2 my-4 lg:m-0 md:m-0  w-full flex-1 bg-transparent border border-bg-white* text-white placeholder-white`}
                        type="date"

                    />

                    <div className="relative">

                        <span className="number-wrapper">

                            <input
                                name="totalPeople"
                                value={formData.totalPeople}
                                onChange={handleChange}
                                className="flex-1 my-4 lg:m-0 md:m-0 w-full  p-2 bg-transparent placeholder-white border border-bg-white text-white " type="number" min={0} placeholder="Total People" />
                            <div className="number-arrows">

                            </div>
                        </span>

                    </div>


                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}

                        onChange={handleChange}
                        class="border my-4 lg:m-0 md:m-0 text-white bg-transparent placeholder-white p-2 w-full h-32 resize-none" placeholder="Message"></textarea>

                </div>
                <div className="my-4 lg:m-0 md:m-0 ">
                    <button className="text-black text-sm uppercase px-6 py-2 font-bold bg-tableyellow">
                        BOOK NOW
                    </button>

                </div>

            </form>

            {/* Popup for "Table Booked" confirmation */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p>{formData.name}</p>
                        <p>{formData.email}</p>
                        <p>{formData.date}</p>
                        <p>{formData.totalPeople}</p>
                        <p>{formData.message}</p>
                        <h2 className="text-xl font-semibold text-green-600 mb-4">Thank you for Booking!</h2>

                        <button
                            onClick={closePopup}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default FormComponent;