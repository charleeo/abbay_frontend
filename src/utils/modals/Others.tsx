export const OtherModal = ({ title, children, showModal, closeModal }: any) => {

    return (
        <>
            <div aria-hidden={!showModal} className={`${showModal ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed  flex top-8  z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full `}>
                <div className="relative p-4 sm:w-9/12 w-11/12 h-full max-w-2xl w max-h-full pt-8">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white shadow-2xl rounded-lg  dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                                onClick={closeModal}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5 space-y-4">
                            {children}

                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}