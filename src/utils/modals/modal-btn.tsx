
export default function ModalBTN({ setShowModal, children, id }: any) {
    return (
        <div className="text-center flex justify-center mt-2">
            <button
                style={{ background: "#101111" }}
                id={id}
                onClick={setShowModal}
                type="button"
                className="text-white px-2 py-1 w-fit rounded-lg"
            >{children}</button>
        </div>
    )
}