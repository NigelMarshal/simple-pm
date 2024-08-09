import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonText }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,

    document.getElementById("modal-root")
  );
});

export default Modal;
