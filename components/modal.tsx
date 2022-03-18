import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  title: string
  onClose: () => void
}

export const Modal: React.FC<Props> = ({ title, children, onClose }) => {
  const modalsRootRef = React.useRef(document.getElementById('modals-root'))
  const elRef = React.useRef(document.createElement('div'))

  React.useEffect(() => {
    const modalsRootEl = modalsRootRef.current
    const el = elRef.current

    modalsRootEl?.appendChild(el)

    return () => {
      modalsRootEl?.removeChild(el)
    }
  }, [])

  React.useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keyup', listener)

    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onClose])

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <div
        className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        className="relative w-4/5 max-w-2xl rounded-md bg-white p-5"
      >
        <p id="modalDescription" className="sr-only">
          This is a dialog window which overlays the main content of the page.
          Pressing Escape key or the Close Modal button at the top of the modal
          will close the modal and bring you back to where you were on the page.
        </p>

        <header className="relative mb-3 px-8">
          <h3 id="modalTitle" className="text-center text-2xl">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-1/2 right-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-0 text-center"
          >
            <span className="sr-only">Close modal</span>
            <span aria-hidden="true">X</span>
          </button>
        </header>

        <div className="pt-2 text-center">{children}</div>
      </aside>
    </div>,
    elRef.current
  )
}
