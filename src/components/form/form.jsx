import "./form.css"

const FormComponent = () => {



    return (
        <form className="py-4 lg:flex md:flex flex-col gap-8" >
            <div className="lg:flex md:flex gap-12  ">
                <input className="p-2 w-full my-4 lg:m-0 md:m-0  flex-1 bg-transparent border border-bg-white* text-white placeholder-white" type="text" placeholder="Your Name" />
                <input className="p-2 w-full  my-4 lg:m-0 md:m-0 flex-1 bg-transparent placeholder-white border border-bg-white* text-white" type="text" placeholder="Your Email" />
            </div>
            <div className=" lg:flex md:flex gap-12 ">


                <input
                    className="p-2 my-4 lg:m-0 md:m-0  w-full flex-1 bg-transparent border border-bg-white* text-white placeholder-white"
                    type="date"
                    placeholder="Reservation Date"
                />
                <div className="relative">

                    <span className="number-wrapper">

                        <input
                            className="flex-1 my-4 lg:m-0 md:m-0 w-full  p-2 bg-transparent placeholder-white border border-bg-white* text-white " type="number" min={0} placeholder="Total People" />
                        <div className="number-arrows">

                        </div>
                    </span>

                </div>


            </div>

            <div>
                <textarea class="border my-4 lg:m-0 md:m-0   bg-transparent placeholder-white p-2 w-full h-32 resize-none" placeholder="Message"></textarea>

            </div>
            <div className="my-4 lg:m-0 md:m-0 ">
                <button className="text-black text-sm uppercase px-6 py-2 font-bold bg-tableyellow">
                    BOOK NOW
                </button>

            </div>

        </form>
    )
}

export default FormComponent;